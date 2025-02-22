---
sidebar_position: 2
description: Learn the core ideas underlying DBOS Transact
---

# DBOS Transact Core Concepts

DBOS Transact is a transactional serverless TypeScript framework that helps you develop stateful applications that work right by default.
Its two main principles are inspired by the [DBOS research project from Stanford and MIT](https://dbos-project.github.io/):

1. **Store all application state in the database.** By managing database connections and transactions, DBOS makes it easy for you to store all your app state in the database so it can be safe, consistent, and durable.  Under the hood, we use the database to manage the state of workflow execution as well as all [messages](../tutorials/workflow-communication-tutorial#messages-api) and [events](../tutorials/workflow-communication-tutorial#events-api).

2.  **Access state only through database transactions.** All database operations in DBOS are transactional, making it easy for you to leverage databases' strong safety guarantees and eliminating most race conditions.  Under the hood, we use transactions to guarantee your workflows [always run to completion](../tutorials/workflow-tutorial#reliability-guarantees), your operations [execute exactly-once](../tutorials/idempotency-tutorial), and your messages are delievered reliably.

### Programming Model
The DBOS programming model is serverless and inspired by [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control) principles.
You build your applications from Typescript functions, annotating them with [decorators](../api-reference/decorators) to declare their properties.
There are four basic types of functions:

- **[Transactions](../tutorials/transaction-tutorial)** run your core business logic transactionally in the database.
- **[Communicators](../tutorials/communicator-tutorial)** talk to external services and APIs, with built-in automatic retries.
- **[Workflows](../tutorials/workflow-tutorial)** reliably orchestrate other functions&#8212;if a workflow is ever interrupted for any reason (like a server crash), it always resumes from where it left off.
- **[Handlers](../tutorials/http-serving-tutorial)** serve HTTP requests.

When you launch an application, DBOS automatically wires these functions together for you, setting up an HTTP server for you endpoints and a database connection pool for your transactions.

### Reliable by Default

A critical component of DBOS's programming model is _reliability_, guaranteed by the database.
Your [transactions](../tutorials/transaction-tutorial.md) are always ACID.
Your [workflows](../tutorials/workflow-tutorial.md) always run to completion, even when interrupted by a server crash&#8212;when the server is restarted, they resume from where they left off and don't repeat any operation they previously completed.
Your [messages](../tutorials/workflow-communication-tutorial) come with guaranteed exactly-once delivery.
Our goal is to make your app work the way you think it should.
