"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,d=p["".concat(s,".").concat(f)]||p[f]||w[f]||a;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>w,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,title:"Asynchronous workflows",description:"Wait for a workflow to complete"},l=void 0,i={unversionedId:"tutorials/t4-async-workflows",id:"tutorials/t4-async-workflows",title:"Asynchronous workflows",description:"Wait for a workflow to complete",source:"@site/docs/tutorials/t4-async-workflows.mdx",sourceDirName:"tutorials",slug:"/tutorials/t4-async-workflows",permalink:"/operon-docs/tutorials/t4-async-workflows",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Asynchronous workflows",description:"Wait for a workflow to complete"},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/operon-docs/tutorials/t3-hello-workflow"},next:{title:"Workflows communication",permalink:"/operon-docs/tutorials/t5-ping-pong"}},s={},c=[{value:"Full code",id:"full-code",level:2}],u={toc:c},p="wrapper";function w(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Operon workflows are asynchronous by nature. Invoking a workflow returns a ",(0,r.kt)("a",{parentName:"p",href:"../api-reference/workflow-handles"},"Workflow Handle")," which you can use to inquire on a workflow status."),(0,r.kt)("p",null,"Let's assume our hello workflow became suddenly slow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"@OperonWorkflow()\nstatic async helloWorkflow(wfCtxt: WorkflowContext, name: string) {\n  await sleep(1000);\n  return await wfCtxt.invoke(Hello).helloTxn(name);\n}\n")),(0,r.kt)("p",null,"Our HTTP handler, knowing about this, can use the handle to determine whether the workflow is completed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"@GetApi('/greeting/:name')\nstatic async greetingEndpoint(ctx: HandlerContext, name: string) {\n  const wfHandle = await ctx.invoke(Hello).helloWorkflow(name);\n  let wfStatus = await wfHandle.getStatus();\n  while (wfStatus && wfStatus.status !== StatusString.SUCCESS) {\n      ctx.log(\"Waiting for workflow to complete...\");\n      await sleep(100);\n      wfStatus = await wfHandle.getStatus();\n  }\n  ctx.log(`Workflow completed with status ${wfStatus?.status}!`);\n  return wfHandle.getResult();\n}\n")),(0,r.kt)("p",null,"Note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We can use ",(0,r.kt)("inlineCode",{parentName:"li"},"getStatus()")," on a handle to retrieve a ",(0,r.kt)("inlineCode",{parentName:"li"},"WorkflowStatus")," object. This object owns a ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," field which can take values ",(0,r.kt)("inlineCode",{parentName:"li"},"PENDING"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ERROR")),(0,r.kt)("li",{parentName:"ul"},"if the workflow does not exist, ",(0,r.kt)("inlineCode",{parentName:"li"},"getStatus()")," will return ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", so you should check whether it is defined before using it"),(0,r.kt)("li",{parentName:"ul"},"We use Operon baked-in logger through the workflow context (",(0,r.kt)("inlineCode",{parentName:"li"},"ctx.log()"),")")),(0,r.kt)("h2",{id:"full-code"},"Full code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\xa0HandlerContext, GetApi, OperonTransaction, OperonWorkflow, WorkflowContext, TransactionContext, StatusString } from '@dbos-inc/operon'\n\nexport const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));\n\nexport class Hello {\n  @OperonTransaction()\n  static async helloTxn(txnCtxt: TransactionContext, name: string) {\n    const greeting = `Hello, ${name}!`\n    const { rows } = await txnCtxt.pgClient.query<{ greeting_id: number }>(\"INSERT INTO OperonHello(greeting) VALUES ($1) RETURNING greeting_id\", [greeting])\n    return `Greeting ${rows[0].greeting_id}: ${greeting}`;\n  }\n\n  @OperonWorkflow()\n  static async helloWorkflow(wfCtxt: WorkflowContext, name: string) {\n    await sleep(1000);\n    return await wfCtxt.invoke(Hello).helloTxn(name);\n  }\n\n  @GetApi('/greeting/:name')\n  static async greetingEndpoint(ctx: HandlerContext, name: string) {\n    const wfHandle = await ctx.invoke(Hello).helloWorkflow(name);\n    let wfStatus = await wfHandle.getStatus();\n    while (wfStatus && wfStatus.status !== StatusString.SUCCESS) {\n        ctx.log(\"Waiting for workflow to complete...\");\n        await sleep(100);\n        wfStatus = await wfHandle.getStatus();\n    }\n    ctx.log(`Workflow completed with status ${wfStatus?.status}!`);\n    return wfHandle.getResult();\n  }\n}\n")))}w.isMDXComponent=!0}}]);