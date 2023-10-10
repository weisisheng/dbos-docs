"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),w=r,m=u["".concat(s,".").concat(w)]||u[w]||f[w]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=w;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},7785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,title:"Workflows",description:"Compose transactions within a workflow"},l=void 0,i={unversionedId:"tutorials/workflow-tutorial",id:"tutorials/workflow-tutorial",title:"Workflows",description:"Compose transactions within a workflow",source:"@site/docs/tutorials/workflow-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/workflow-tutorial",permalink:"/operon-docs/tutorials/workflow-tutorial",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Workflows",description:"Compose transactions within a workflow"},sidebar:"tutorialSidebar",previous:{title:"Communicators",permalink:"/operon-docs/tutorials/communicator-tutorial"},next:{title:"Asynchronous workflows",permalink:"/operon-docs/tutorials/async-workflow-tutorial"}},s={},c=[{value:"Full code",id:"full-code",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An operon workflow composes transactions in a single unit of work with Oncce-And-Only-Once-Execution guarantees.\nYou can register a new workflow by annotating a function with the ",(0,r.kt)("a",{parentName:"p",href:"../api-reference/decorators#operonworkflow"},(0,r.kt)("inlineCode",{parentName:"a"},"@OperonWorkflow()")," decorator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"  @OperonWorkflow()\n  static async helloWorkflow(wfCtxt: WorkflowContext, name: string) {\n    return await wfCtxt.invoke(Hello).helloTxn(name);\n  }\n")),(0,r.kt)("p",null,"The first argument of the workflow is a ",(0,r.kt)("a",{parentName:"p",href:"../api-reference/contexts#workflowcontext"},(0,r.kt)("inlineCode",{parentName:"a"},"WorkflowContext")),". We can use this context to invoke transactions, here ",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),", using ",(0,r.kt)("inlineCode",{parentName:"p"},"wfCtxt.invoke(Hello).helloTxn(name)")),(0,r.kt)("p",null,"We also modify the HTTP handler to invoke the workflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"  @GetApi('/greeting/:name')\n  static async greetingEndpoint(ctx: HandlerContext, name: string) {\n    return await ctx.invoke(Hello).helloWorkflow(name).then(x => x.getResult());\n  }\n")),(0,r.kt)("p",null,"Note the return value of an Operon workflow is a promise to a ",(0,r.kt)("a",{parentName:"p",href:"../api-reference/workflow-handles"},"workflow handle"),".\nThe handle exposes a ",(0,r.kt)("inlineCode",{parentName:"p"},"getResult()")," method you can use to get your workflow's final result."),(0,r.kt)("h2",{id:"full-code"},"Full code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { HandlerContext, GetApi, OperonTransaction, OperonWorkflow, WorkflowContext, TransactionContext } from '@dbos-inc/operon'\n\nexport class Hello {\n  @OperonTransaction()\n  static async helloTxn(txnCtxt: TransactionContext, name: string) {\n    const greeting = `Hello, ${name}!`\n    const { rows } = await txnCtxt.pgClient.query<{ greeting_id: number }>(\"INSERT INTO OperonHello(greeting) VALUES ($1) RETURNING greeting_id\", [greeting])\n    return `Greeting ${rows[0].greeting_id}: ${greeting}`;\n  }\n\n  @OperonWorkflow()\n  static async helloWorkflow(wfCtxt: WorkflowContext, name: string) {\n    return wfCtxt.invoke(Hello).helloTxn(name);\n  }\n\n  @GetApi('/greeting/:name')\n  static async greetingEndpoint(ctx: HandlerContext, name: string) {\n    return await ctx.invoke(Hello).helloWorkflow(name).then(x => x.getResult());\n  }\n}\n")))}f.isMDXComponent=!0}}]);