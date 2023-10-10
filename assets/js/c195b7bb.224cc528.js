"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[566],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4942:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:4},i="Core Concepts",s={unversionedId:"getting-started/coreconcepts",id:"getting-started/coreconcepts",title:"Core Concepts",description:"Operon is a simple easy to use serverless framework for developing transactional applications.",source:"@site/docs/getting-started/coreconcepts.md",sourceDirName:"getting-started",slug:"/getting-started/coreconcepts",permalink:"/operon-docs/getting-started/coreconcepts",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Programming Quickstart: Part 2",permalink:"/operon-docs/getting-started/quickstart-programming-2"},next:{title:"Tutorials",permalink:"/operon-docs/category/tutorials"}},c={},l=[{value:"Programming model",id:"programming-model",level:2},{value:"User code",id:"user-code",level:3},{value:"Operon runtime",id:"operon-runtime",level:3},{value:"Transactions",id:"transactions",level:2},{value:"Workflows",id:"workflows",level:2},{value:"Once and Only Once Execution",id:"once-and-only-once-execution",level:2},{value:"Contexts",id:"contexts",level:2},{value:"Communicators",id:"communicators",level:2},{value:"Decorators",id:"decorators",level:2},{value:"Why should you consider using operon as your programming model ?",id:"why-should-you-consider-using-operon-as-your-programming-model-",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("p",null,"Operon is a simple easy to use serverless framework for developing transactional applications.\nOperon applications are made up of transactions and workflows.\nOperon workflows group together a set of transactions and provide them with Once-and-Only-Once-Execution guarantees.\nThis means Operon workflows are guaranteed to run to completion and their composing transactions will be executed only once."),(0,r.kt)("h2",{id:"programming-model"},"Programming model"),(0,r.kt)("p",null,"An operon application is a set of transactions and workflows.\nUsers write functions.\nThe functions execute in a runtime provided by operon. Users do not have to code the entire server. Operon manages the lifecyle of the server and user code.\nThe functions are triggered by HTTP requests.\nDecorators are used to annotate the function to describe whether it is a transaction or workflow and what http request triggers the execution.\nThe separation of responsibility lets the developer focus on building business logic, while operon can focus on providing a reliable and scalable runtime."),(0,r.kt)("h3",{id:"user-code"},"User code"),(0,r.kt)("p",null,"Functions that a user writes that are annotated as Transactions or Workflows. "),(0,r.kt)("h3",{id:"operon-runtime"},"Operon runtime"),(0,r.kt)("p",null,"Operon runtime that executes the user functions. Provides reliable and scalable runtime with an embedded HTTP server, security, logging and other features."),(0,r.kt)("h2",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"Transactions are the smallest unit of work in an Operon workflow. A transaction is typically made of typescript code and database queries. Operon takes care of wrapping your queries inside a database transaction and handles rollback when they fail, so you can focus on your application logic."),(0,r.kt)("h2",{id:"workflows"},"Workflows"),(0,r.kt)("p",null,"Operon workflows provide an abstraction for composing transactions. Workflows can carry metadata, such as their callers' identity."),(0,r.kt)("h2",{id:"once-and-only-once-execution"},"Once and Only Once Execution"),(0,r.kt)("p",null,"Operon workflows use checkpointing to ensure each transaction in the workflow is executed only once.\nIf a workflow fails during execution, the caller can capture the failure, retry the workflow and expect execution to resume where it stopped.\nFor Operon's checkpointing to work, it needs to maintain two tables in your application database."),(0,r.kt)("h2",{id:"contexts"},"Contexts"),(0,r.kt)("p",null,"When writing Operon code, you use a ",(0,r.kt)("em",{parentName:"p"},"context")," object to invoke transactions. Context objects are your main interface to Operon in your application code. For example, you can query your database with ",(0,r.kt)("inlineCode",{parentName:"p"},"context.pgClient.query"),"."),(0,r.kt)("h2",{id:"communicators"},"Communicators"),(0,r.kt)("p",null,"Inside a workflow, you can use ",(0,r.kt)("em",{parentName:"p"},"communicators")," to call third party APIs. Like transactions, the output of communicators is checkpointed such that third party calls are sent only once."),(0,r.kt)("h2",{id:"decorators"},"Decorators"),(0,r.kt)("p",null,"Operon programming model revolves heavily around ",(0,r.kt)("em",{parentName:"p"},"decorators"),". Decorators are annotations declaring your workflows and configuring various aspects of their execution (for instance, setting the isolation level of a transaction.)"),(0,r.kt)("h2",{id:"why-should-you-consider-using-operon-as-your-programming-model-"},"Why should you consider using operon as your programming model ?"),(0,r.kt)("p",null,"It is easy to use.\nWrite only business logic as functions. No monoliths, no microservices, no servers.\nIt is fast, reliable and scalable.\nIt provides the hard to code one and only one transactional semantics.\nYour resposibility is limited to business logic. Operon runtime does the rest.\nHttpServer, Security, Logging, Telemetry and more provided for free.\nCloud deployment support coming soon."))}d.isMDXComponent=!0}}]);