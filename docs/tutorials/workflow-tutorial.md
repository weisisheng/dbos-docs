---
sidebar_position: 4
title: Workflows
description: Learn how to make applications reliable using workflows.
---

In this guide, you'll learn how to make your applications reliable using workflows.

Workflows orchestrate the execution of other functions, like transactions and communicators.
Workflows are _reliable_: if their execution is interrupted for any reason (e.g., an executor is restarted or crashes), DBOS automatically resumes them from where they left off, running them to completion without re-executing any operation that already finished.
You can use workflows to coordinate multiple operations that must all complete for a program to be correct.
For example, in our [e-commerce demo](https://github.com/dbos-inc/dbos-demo-apps/tree/main/e-commerce), we use a workflow for payment processing.

Workflows must be annotated with the [`@Workflow`](../api-reference/decorators#workflow) decorator and must have a [`WorkflowContext`](../api-reference/contexts#workflowcontext) as their first argument.
Like for other functions, inputs and outputs must be serializable to JSON.
Additionally, workflows must be [deterministic](#determinism).

Here's an example workflow (from the [programming quickstart](../getting-started/quickstart-programming.md)) sending an email then recording it in the database.
By using a workflow, we guarantee that every email is recorded in the database, even if execution is interrupted.

```javascript
class Greetings {

  // Other function implementations

    @Workflow()
    @GetApi("/greeting/:friend")
    static async GreetingWorkflow(ctxt: WorkflowContext, friend: string) {
        const noteContent = `Thank you for being awesome, ${friend}!`;
        await ctxt.invoke(Greetings).SendGreetingEmail(friend, noteContent);
        await ctxt.invoke(Greetings).InsertGreeting(friend, noteContent);
        ctxt.logger.info(`Greeting sent to ${friend}!`);
        return noteContent;
    }

}
```

### Invoking Functions from Workflows

Workflows can invoke transactions and communicators using their [`ctxt.invoke()`](../api-reference/contexts#workflowctxtinvoke) method.
For example, this line from our above example invokes the transaction `InsertGreeting`:

```javascript
await ctxt.invoke(Greetings).InsertGreeting(friend, noteContent);
```

The syntax for invoking function `fn(args)` in class `Cls` is `ctxt.invoke(Cls).fn(args)`.

You can also invoke other workflows with the [`ctxt.invokeWorkflow()`](../api-reference/contexts#workflowctxtinvokeworkflow) method.
The syntax for invoking workflow `wf` in class `Cls` with argument `arg` is:

```typescript
const output = await ctxt.invokeWorkflow(Cls).wf(arg);
```

### Reliability Guarantees

Workflows provide the following reliability guaranteees.
These guarantees assume that the application and database may crash and go offline at any point in time, but are always restarted and return online.

1.  Workflows always run to completion.  If a DBOS process crashes while executing a workflow and is restarted, it resumes the workflow from where it left off.
2.  Transactions commit _exactly once_.  Once a workflow commits a transaction, it will never retry that transaction.
3.  Communicators are tried _at least once_ but are never re-executed after they successfully complete.  If a failure occurs inside a communicator, the communicator may be retried, but once a communicator has completed, it will never be re-executed.

### Determinism

A workflow implementation must be deterministic: if called multiple times with the same inputs, it should invoke the same transactions and communicators with the same inputs in the same order.
If you need to perform a non-deterministic operation like accessing the database, calling a third-party API, generating a random number, or getting the local time, you shouldn't do it directly in a workflow function.
Instead, you should do all database operations in [transactions](./transaction-tutorial) and all other non-deterministic operations in [communicators](./communicator-tutorial).
You can safely [invoke](../api-reference/contexts.md#workflowctxtinvoke) these methods from a workflow.

For example, **don't do this**:

```javascript
class Example {
    @Workflow()
    static async exampleWorkflow(ctxt: WorkflowContext) {
        // Don't make an HTTP request in a workflow function
        const body = await fetch("https://example.com").then(r => r.text()); 
        await ctxt.invoke(Example).exampleTransaction(body);
    }
}
```

Do this instead:

```javascript
class Example {
    @Communicator()
    static async fetchBody(ctxt: CommunicatorContext) {
      // Instead, make HTTP requests in communicators
      return await fetch("https://example.com").then(r => r.text());
    }

    @Workflow()
    static async exampleWorkflow(ctxt: WorkflowContext) {
        const body = await ctxt.invoke(Example).fetchBody();
        await ctxt.invoke(Example).exampleTransaction(body);
    }
}
```

### Workflow Identity

Every time you execute a workflow, that execution is assigned a unique identity, represented as a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
You can access this UUID through the `context.workflowUUID` field.
Workflow identities are important for communicating with workflows and developing interactive workflows.
For more information on workflow communication, see [our guide](./workflow-communication-tutorial.md).

### Asynchronous Workflows

Because workflows are often long-running, DBOS supports starting workflows asynchronously without waiting for them to complete.
When you start a workflow from a handler or another workflow with [`handlerCtxt.startWorkflow`](../api-reference/contexts.md#handlerctxtstartworkflow) or [`workflowCtxt.startWorkflow`](../api-reference/contexts.md#workflowctxtstartworkflow), the invocation returns a [workflow handle](../api-reference/workflow-handles):

```javascript
  @GetApi(...)
  static async exampleHandler(handlerCtxt: HandlerContext, ...) {
    const handle = await handlerCtxt.startWorkflow(Class).workflow(...);
  }
```

Calls to start a workflow resolve as soon as the handle is safely created; at this point the workflow is guaranteed to [run to completion](../tutorials/workflow-tutorial.md#reliability-guarantees).
This behavior is useful if you need to quickly acknowledge receipt of an event then process it asynchronously (for example, in a webhook).

You can also retrieve another workflow's handle using its identity:

```javascript
  @GetApi(...)
  static async exampleHandler(ctxt: HandlerContext, workflowIdentity: string, ...) {
    const handle = await ctxt.retrieveWorkflow(workflowIdentity);
  }
```

To wait for a workflow to complete and retrieve its result, await `handle.getResult()`:

```javascript
const handle = await ctxt.retrieveWorkflow(workflowIdentity)
const result = await handle.getResult();
```

For more information on workflow handles, see [their reference page](../api-reference/workflow-handles).

### Further Reading

To learn how to make workflows (or other functions) idempotent, see [our idempotency guide](./idempotency-tutorial).

To learn how to make workflows interactive (for example, to handle user input), see our [workflow communication guide](./workflow-communication-tutorial).
