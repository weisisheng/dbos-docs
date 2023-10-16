"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,h=g["".concat(l,".").concat(m)]||g[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2,title:"Programming Quickstart - Part 2"},i=void 0,s={unversionedId:"getting-started/quickstart-programming-2",id:"getting-started/quickstart-programming-2",title:"Programming Quickstart - Part 2",description:"Now that we've written our first few functions, let's learn how to stitch them into powerful and reliable programs.",source:"@site/docs/getting-started/quickstart-programming-2.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-programming-2",permalink:"/getting-started/quickstart-programming-2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Programming Quickstart - Part 2"},sidebar:"tutorialSidebar",previous:{title:"Programming Quickstart - Part 1",permalink:"/getting-started/quickstart-programming-1"},next:{title:"Tutorials",permalink:"/category/tutorials"}},l={},c=[{value:"Talking to Other Services",id:"talking-to-other-services",level:3},{value:"Making it Consistent",id:"making-it-consistent",level:3},{value:"Making it Reliable with Workflows",id:"making-it-reliable-with-workflows",level:3},{value:"Final Code",id:"final-code",level:3}],u={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we've written our first few functions, let's learn how to stitch them into powerful and reliable programs.\nIf you've been following along, here's the code you should have so far (in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/operations.ts"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { TransactionContext, OperonTransaction, GetApi, HandlerContext } from '@dbos-inc/operon'\nimport { Knex } from 'knex';\n\n// The schema of the database table used in this example.\nexport interface operon_hello {\n  name: string;\n  greet_count: number;\n}\n\nexport class Hello {\n\n  @GetApi('/greeting/:user') // Serve this function from the /greeting endpoint with 'user' as a path parameter\n  static async helloHandler(ctxt: HandlerContext, user: string) {\n    // Invoke helloTransaction to greet the user and track how many times they've been greeted.\n    return ctxt.invoke(Hello).helloTransaction(user);\n  }\n\n  @OperonTransaction()  // Declare this function to be a transaction.\n  static async helloTransaction(ctxt: TransactionContext<Knex>, user: string) {\n    // Retrieve and increment the number of times this user has been greeted.\n    const rows = await ctxt.client<operon_hello>(\"operon_hello\")\n      // Insert greet_count for this user.\n      .insert({ name: user, greet_count: 1 })\n      // If already present, increment it instead.\n      .onConflict(\"name\").merge({ greet_count: ctxt.client.raw('operon_hello.greet_count + 1') })\n      // Return the inserted or incremented value.\n      .returning(\"greet_count\");               \n    const greet_count = rows[0].greet_count;\n    return `Hello, ${user}! You have been greeted ${greet_count} times.\\n`;\n  }\n}\n\n")),(0,o.kt)("h3",{id:"talking-to-other-services"},"Talking to Other Services"),(0,o.kt)("p",null,"To make this more interesting, let's say that when we greet someone, we also want to send the greeting to a third party, like the ",(0,o.kt)("a",{parentName:"p",href:"https://postman-echo.com/"},"Postman Echo")," testing service.\nTo do this, let's write a new function that forwards the greeting to the Postman Echo server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { OperonCommunicator, CommunicatorContext } from '@dbos-inc/operon' // Add these to your imports\n\n@OperonCommunicator()\nstatic async greetPostman(ctxt: CommunicatorContext, greeting: string) {\n  await axios.get(\"https://postman-echo.com/get\", {\n    params: {\n      greeting: greeting\n    }\n  });\n  ctxt.logger.info(`Greeting sent to postman!`);\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@OperonCommunicator")," decorator registers this function so that Operon can manage its execution.\nCommunicators have useful built-in features such as configurable automatic retries.\nLearn more about communicators and communication with external services and APIs ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/communicator-tutorial"},"here"),"."),(0,o.kt)("p",null,"Now, let's update ",(0,o.kt)("inlineCode",{parentName:"p"},"helloHandler")," to call this new function with some error handling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"@GetApi('/greeting/:user')\nstatic async helloHandler(ctxt: HandlerContext, user: string) {\n  const greeting = await ctxt.invoke(Hello).helloTransaction(user);\n  try {\n    await ctxt.invoke(Hello).greetPostman(greeting);\n    return greeting;\n  } catch (e) {\n    ctxt.logger.error(e);\n    return `Greeting failed for ${user}\\n`\n  }\n}\n")),(0,o.kt)("p",null,"Try it out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:3000/greeting/operon\n")),(0,o.kt)("p",null,"Every time you send a request, the server should print that it was forwarded to Postman."),(0,o.kt)("h3",{id:"making-it-consistent"},"Making it Consistent"),(0,o.kt)("p",null,"Now, let's say that we're concerned about the ",(0,o.kt)("em",{parentName:"p"},"consistency")," of our simple application.\nWe want to keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"greet_count")," in the database synchronized with the number of requests successfully sent to Postman.\nTo do this, let's write a rollback transaction that decrements ",(0,o.kt)("inlineCode",{parentName:"p"},"greet_count")," if the Postman request fails, then call it from our handler.\nAfter adding this code, our app will roll back the increment of ",(0,o.kt)("inlineCode",{parentName:"p"},"greet_count")," if our Postman request fails."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"@OperonTransaction()\nstatic async rollbackHelloTransaction(ctxt: TransactionContext<Knex>, user: string) {\n  // Decrement greet_count.\n  await ctxt.client<operon_hello>(\"operon_hello\")\n    .where({ name: user })\n    .decrement('greet_count', 1);\n}\n\n@GetApi('/greeting/:user')\nstatic async helloHandler(ctxt: HandlerContext, user: string) {\n  const greeting = await ctxt.invoke(Hello).helloTransaction(user);\n  try {\n    await ctxt.invoke(Hello).greetPostman(greeting);\n    return greeting;\n  } catch (e) {\n    ctxt.logger.error(e);\n    await ctxt.invoke(Hello).rollbackHelloTransaction(user);\n    return `Greeting failed for ${user}\\n`\n  }\n}\n")),(0,o.kt)("h3",{id:"making-it-reliable-with-workflows"},"Making it Reliable with Workflows"),(0,o.kt)("p",null,"One issue with this solution is that it isn't reliable: if our server crashes midway through sending a request to Postman, the rollback code never executes and a spurious greeting is persisted to the database.\nLuckily, Operon solves this problem with ",(0,o.kt)("em",{parentName:"p"},"workflows"),", orchestration functions guaranteed to run to completion.\nHere's how we can use a workflow in our example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { OperonWorkflow, WorkflowContext } from '@dbos-inc/operon' // Add these to your imports\n\n@GetApi('/greeting/:user')\n// highlight-next-line\n@OperonWorkflow()\n// highlight-next-line\nstatic async helloWorkflow(ctxt: WorkflowContext, user: string) {\n  const greeting = await ctxt.invoke(Hello).helloTransaction(user);\n  try {\n    await ctxt.invoke(Hello).greetPostman(greeting);\n    return greeting;\n  } catch (e) {\n    ctxt.logger.error(e);\n    await ctxt.invoke(Hello).rollbackHelloTransaction(user);\n    return `Greeting failed for ${user}\\n`\n  }\n}\n")),(0,o.kt)("p",null,"You can see that we've transformed the handler into a workflow by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"@OperonWorkflow")," decorator.\nWhen a workflow is interrupted and has to be restarted, Operon automatically resumes it from where it left off without re-executing any registered operation (like a transaction or communicator function) that already happened.\nUsing workflows, we've made our little application resilient to failures: it never records a greeting unless it completed successfully.\nYou can learn more about workflows and their guarantees ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/workflow-tutorial"},"here"),"."),(0,o.kt)("h3",{id:"final-code"},"Final Code"),(0,o.kt)("p",null,"Here's our final code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { TransactionContext, OperonTransaction, GetApi, PostApi, CommunicatorContext, OperonCommunicator, OperonWorkflow, WorkflowContext } from '@dbos-inc/operon'\nimport { Knex } from 'knex';\nimport axios from 'axios';\n\ninterface operon_hello {\n  name: string;\n  greet_count: number;\n}\n\nexport class Hello {\n\n  @GetApi('/greeting/:user')\n  @OperonWorkflow()\n  static async helloWorkflow(ctxt: WorkflowContext, user: string) {\n    const greeting = await ctxt.invoke(Hello).helloTransaction(user);\n    try {\n      await ctxt.invoke(Hello).greetPostman(greeting);\n      return greeting;\n    } catch (e) {\n      ctxt.logger.error(e);\n      await ctxt.invoke(Hello).rollbackHelloTransaction(user);\n      return `Greeting failed for ${user}\\n`\n    }\n  }\n\n  @OperonTransaction()  // Declare this function to be a transaction.\n  static async helloTransaction(ctxt: TransactionContext<Knex>, user: string) {\n    // Retrieve and increment the number of times this user has been greeted.\n    const rows = await ctxt.client<operon_hello>(\"operon_hello\")\n      // Insert greet_count for this user.\n      .insert({ name: user, greet_count: 1 })\n      // If already present, increment it instead.\n      .onConflict(\"name\").merge({ greet_count: ctxt.client.raw('operon_hello.greet_count + 1') })\n      // Return the inserted or incremented value.\n      .returning(\"greet_count\");\n    const greet_count = rows[0].greet_count;\n    return `Hello, ${user}! You have been greeted ${greet_count} times.\\n`;\n  }\n\n  @OperonTransaction()\n  static async rollbackHelloTransaction(ctxt: TransactionContext<Knex>, user: string) {\n    // Decrement greet_count.\n    await ctxt.client<operon_hello>(\"operon_hello\")\n      .where({ name: user })\n      .decrement('greet_count', 1);\n  }\n\n  @OperonCommunicator()\n  static async greetPostman(ctxt: CommunicatorContext, greeting: string) {\n    await axios.get(\"https://postman-echo.com/get\", {\n      params: {\n        greeting: greeting\n      }\n    });\n    ctxt.logger.info(`Greeting sent to postman!`);\n  }\n\n  @PostApi('/clear/:user')\n  @OperonTransaction()\n  static async clearTransaction(ctxt: TransactionContext<Knex>, user: string) {\n    // Delete greet_count for a user.\n    await ctxt.client<operon_hello>(\"operon_hello\")\n      .where({ name: user })\n      .delete()\n    return `Cleared greet_count for ${user}!\\n`\n  }\n}\n\n")))}p.isMDXComponent=!0}}]);