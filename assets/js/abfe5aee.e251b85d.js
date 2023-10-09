"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=o,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},i="Programming Quickstart: Part 2",l={unversionedId:"getting-started/quickstart-programming-2",id:"getting-started/quickstart-programming-2",title:"Programming Quickstart: Part 2",description:"Now that we've written our first few functions, let's learn how to stitch them into powerful and reliable programs.",source:"@site/docs/getting-started/quickstart-programming-2.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-programming-2",permalink:"/operon-docs/getting-started/quickstart-programming-2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Programming Quickstart: Part 1",permalink:"/operon-docs/getting-started/quickstart-programming-1"},next:{title:"Core Concepts",permalink:"/operon-docs/getting-started/coreconcepts"}},s={},c=[],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"programming-quickstart-part-2"},"Programming Quickstart: Part 2"),(0,o.kt)("p",null,"Now that we've written our first few functions, let's learn how to stitch them into powerful and reliable programs.\nIf you've been following along, here's the code you should have so far (in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/userFunctions.ts"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { TransactionContext, OperonTransaction, GetApi, HandlerContext, PostApi } from '@dbos-inc/operon'\nimport { Knex } from 'knex';\n\ntype KnexTransactionContext = TransactionContext<Knex>;\n\ninterface operon_hello {\n  name: string;\n  greet_count: number;\n}\nexport class Hello {\n\n  @OperonTransaction()\n  static async helloTransaction(txnCtxt: KnexTransactionContext, name: string) {\n    // Increment greet_count.\n    await txnCtxt.client<operon_hello>(\"operon_hello\")\n      .insert({name: name, greet_count: 1})\n      .onConflict('name')\n      .merge({ greet_count: txnCtxt.client.raw('operon_hello.greet_count + 1') });\n    // Retrieve greet_count.\n    const greet_count = await txnCtxt.client<operon_hello>(\"operon_hello\")\n      .select(\"greet_count\")\n      .where({name:name})\n      .first()\n      .then(row => row?.greet_count);\n    return `Hello, ${name}! You have been greeted ${greet_count} times.\\n`;\n  }\n\n  @GetApi('/greeting/:name')\n  static async helloHandler(handlerCtxt: HandlerContext, name: string) {\n    return handlerCtxt.invoke(Hello).helloTransaction(name);\n  }\n\n  @PostApi('/clear/:name')\n  @OperonTransaction()\n  static async clearTransaction(txnCtxt: KnexTransactionContext, name: string) {\n    // Delete a users's entry.\n    await txnCtxt.client<operon_hello>(\"operon_hello\")\n      .where({name: name})\n      .delete()\n    return `Cleared greet_count for ${name}!\\n`\n  }\n}\n")),(0,o.kt)("p",null,"To make this more interesting, let's say that when we greet someone, we also want to send the greeting to a third party, like the ",(0,o.kt)("a",{parentName:"p",href:"https://postman-echo.com/"},"Postman Echo")," testing service.\nTo do this, let's write a new function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'  @OperonCommunicator()\n  static async postmanFunction(_commCtxt: CommunicatorContext, greeting: string) {\n    await axios.get("https://postman-echo.com/get", {\n      params: {\n        greeting: greeting\n      }\n    });\n    console.log(`Greeting sent to postman!`);\n  }\n')),(0,o.kt)("p",null,"This function forwards the greeting to the Postman Echo server.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"@OperonCommunicator")," decorator tells Operon that this function has external side-effects.\nCommunicators have useful built-in features such as configurable automatic retries.\nLearn more about communication with external services ",(0,o.kt)("a",{parentName:"p",href:".."},"here"),"."),(0,o.kt)("p",null,"Now, let's update our ",(0,o.kt)("inlineCode",{parentName:"p"},"greeting")," handler to call this new function with some error handling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  @GetApi('/greeting/:name')\n  static async helloHandler(handlerContext: HandlerContext, name: string) {\n    const greeting = await handlerContext.invoke(Hello).helloTransaction(name);\n    try {\n      await handlerContext.invoke(Hello).postmanFunction(greeting);\n      return greeting;\n    } catch (e) {\n      console.warn(\"Error sending request:\", e);\n      return `Greeting failed for ${name}\\n`\n    }\n  }\n")),(0,o.kt)("p",null,"Try it out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3000/greeting/operon\n")),(0,o.kt)("p",null,"Every time you send a request, the server should print that it was forwarded to Postman."),(0,o.kt)("p",null,"Now, let's say that we're concerned about the ",(0,o.kt)("em",{parentName:"p"},"reliability")," of our simple application.\nWe want to keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"greet_count")," in the database synchronized with the number of requests successfully sent to Postman.\nTo do this, let's write a rollback transaction that decrements ",(0,o.kt)("inlineCode",{parentName:"p"},"greet_count")," if the Postman request fails, then call it from our handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  @OperonTransaction()\n  static async rollbackHelloTransaction(txnCtxt: KnexTransactionContext, name: string) {\n    // Decrement greet_count.\n    await txnCtxt.client<operon_hello>(\"operon_hello\")\n      .where({ name: name })\n      .decrement('greet_count', 1);\n  }\n\n  @GetApi('/greeting/:name')\n  static async helloHandler(handlerContext: HandlerContext, name: string) {\n    const greeting = await handlerContext.invoke(Hello).helloTransaction(name);\n    try {\n      await handlerContext.invoke(Hello).postmanFunction(greeting);\n      return greeting;\n    } catch (e) {\n      console.warn(\"Error sending request:\", e);\n      await handlerContext.invoke(Hello).rollbackHelloTransaction(name);\n      return `Greeting failed for ${name}\\n`\n    }\n  }\n")),(0,o.kt)("p",null,"Now, we'll roll back the increment of ",(0,o.kt)("inlineCode",{parentName:"p"},"greet_count")," if our Postman request fails.\nHowever, we're still not completely reliable: if our server crashes midway through sending a request to Postman, the rollback code never executes and a spurious greeting is persisted to the database.\nLuckily, Operon solves this problem with ",(0,o.kt)("em",{parentName:"p"},"workflows"),", orchestration functions that are guaranteed to run to completion.\nHere's how we can use a workflow in our example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  @GetApi('/greeting/:name')\n  // highlight-next-line\n  @OperonWorkflow()\n  // highlight-next-line\n  static async helloWorkflow(wfCtxt: WorkflowContext, name: string) {\n    const greeting = await wfCtxt.invoke(Hello).helloTransaction(name);\n    try {\n      await wfCtxt.invoke(Hello).postmanFunction(greeting);\n      return greeting;\n    } catch (e) {\n      console.warn(\"Error sending request:\", e);\n      await wfCtxt.invoke(Hello).rollbackHelloTransaction(name);\n      return `Greeting failed for ${name}\\n`\n    }\n  }\n")),(0,o.kt)("p",null,"You can see that we've transformed the handler into a workflow by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"@OperonWorkflow")," decorator.\nIf a server executing a workflow fails and is restarted, Operon automatically resumes the workflow from where it left off, without re-executing any operation that already happened.\nUsing workflows, we've made our little application resilient to failures: it never records a greeting unless it completed successfully.\nYou can learn more about workflows and their guarantees ",(0,o.kt)("a",{parentName:"p",href:".."},"here"),"."),(0,o.kt)("p",null,"Here's our final code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { TransactionContext, OperonTransaction, GetApi, HandlerContext, PostApi, CommunicatorContext, OperonCommunicator, OperonWorkflow, WorkflowContext } from \'@dbos-inc/operon\'\nimport { Knex } from \'knex\';\nimport axios from \'axios\';\n\ntype KnexTransactionContext = TransactionContext<Knex>;\n\ninterface operon_hello {\n  name: string;\n  greet_count: number;\n}\n\nexport class Hello {\n\n  @OperonTransaction()\n  static async helloTransaction(txnCtxt: KnexTransactionContext, name: string) {\n    // Look up greet_count.\n    let greet_count = await txnCtxt.client<operon_hello>("operon_hello")\n      .select("greet_count")\n      .where({ name: name })\n      .first()\n      .then(row => row?.greet_count);\n    if (greet_count) {\n      // If greet_count is set, increment it.\n      greet_count++;\n      await txnCtxt.client<operon_hello>("operon_hello")\n        .where({ name: name })\n        .increment(\'greet_count\', 1);\n    } else {\n      // If greet_count is not set, set it to 1.\n      greet_count = 1;\n      await txnCtxt.client<operon_hello>("operon_hello")\n        .insert({ name: name, greet_count: 1 })\n    }\n    return `Hello, ${name}! You have been greeted ${greet_count} times.\\n`;\n  }\n\n  @OperonTransaction()\n  static async rollbackHelloTransaction(txnCtxt: KnexTransactionContext, name: string) {\n    // Decrement greet_count.\n    await txnCtxt.client<operon_hello>("operon_hello")\n      .where({ name: name })\n      .decrement(\'greet_count\', 1);\n  }\n\n  @OperonCommunicator()\n  static async postmanFunction(_commCtxt: CommunicatorContext, greeting: string) {\n    await axios.get("https://postman-echo.com/get", {\n      params: {\n        greeting: greeting\n      }\n    });\n    console.log(`Greeting sent to postman!`);\n  }\n\n  @GetApi(\'/greeting/:name\')\n  @OperonWorkflow()\n  static async helloWorkflow(wfCtxt: WorkflowContext, name: string) {\n    const greeting = await wfCtxt.invoke(Hello).helloTransaction(name);\n    try {\n      await wfCtxt.invoke(Hello).postmanFunction(greeting);\n      return greeting;\n    } catch (e) {\n      console.warn("Error sending request:", e);\n      await wfCtxt.invoke(Hello).rollbackHelloTransaction(name);\n      return `Greeting failed for ${name}\\n`\n    }\n  }\n\n  @PostApi(\'/clear/:name\')\n  @OperonTransaction()\n  static async clearTransaction(txnCtxt: KnexTransactionContext, name: string) {\n    // Delete greet_count for a user.\n    await txnCtxt.client<operon_hello>("operon_hello")\n      .where({ name: name })\n      .delete()\n    return `Cleared greet_count for ${name}!\\n`\n  }\n}\n')))}u.isMDXComponent=!0}}]);