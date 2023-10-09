"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[f]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:8,title:"Workflow events",description:"Learn how to send events from workflows and receive them from handlers"},l=void 0,s={unversionedId:"tutorials/client-workflow-interactions-tutorial",id:"tutorials/client-workflow-interactions-tutorial",title:"Workflow events",description:"Learn how to send events from workflows and receive them from handlers",source:"@site/docs/tutorials/client-workflow-interactions-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/client-workflow-interactions-tutorial",permalink:"/operon-docs/tutorials/client-workflow-interactions-tutorial",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Workflow events",description:"Learn how to send events from workflows and receive them from handlers"},sidebar:"tutorialSidebar",previous:{title:"Third party calls",permalink:"/operon-docs/tutorials/third-party-tutorial"},next:{title:"API Reference",permalink:"/operon-docs/category/api-reference"}},i={},c=[{value:"Final code",id:"final-code",level:2}],p={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A common use case for workflows is to notify their callers after some event of interest happened.\nUsing a ",(0,r.kt)("a",{parentName:"p",href:"../api-reference/contexts#workflowcontext"},"WorkflowContext"),", you can program events with ",(0,r.kt)("inlineCode",{parentName:"p"},"setEvent")," and check on them from a handler with ",(0,r.kt)("inlineCode",{parentName:"p"},"getEvent"),"."),(0,r.kt)("p",null,"Consider a workflow that runs in two steps and wants to notify its caller about their completion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'@OperonWorkflow()\nstatic async stepsWorkflow(ctxt: WorkflowContext) {\n  // Do some work...\n  await ctxt.setEvent("step1", "completed");\n  // Do some more work...\n  return ctxt.setEvent("step2", "completed");\n}\n')),(0,r.kt)("p",null,"The workflow calls ",(0,r.kt)("inlineCode",{parentName:"p"},"setEvent")," with a unique event key and an associated message of generic type."),(0,r.kt)("p",null,"The caller, in this example an HTTP handler, can call ",(0,r.kt)("inlineCode",{parentName:"p"},"getEvent")," with the workflow UUID and an event key to declare an action."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'  @GetApi("/events")\n  static async eventListener(ctx: HandlerContext) {\n    let completed = false;\n    const wfUUID = (await ctx.invoke(Events).stepsWorkflow()).getWorkflowUUID();\n\n    ctx.getEvent(wfUUID, "step1").then((event) => {\n      ctx.log(`step1 status: ${event}`);\n    });\n\n    ctx.getEvent(wfUUID, "step2").then((event) => {\n      ctx.log(`step2 status: ${event}`);\n      completed = true;\n    });\n\n    while (!completed) {\n        await new Promise((resolve) => setTimeout(resolve, 10));\n    }\n  }\n')),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  OperonWorkflow,\n  WorkflowContext,\n  GetApi,\n  HandlerContext,\n} from "@dbos-inc/operon";\n\nexport class Events {\n  @OperonWorkflow()\n  static async stepsWorkflow(ctxt: WorkflowContext) {\n    // Do some work...\n    await ctxt.setEvent("step1", "completed");\n    // Do some more work...\n    return ctxt.setEvent("step2", "completed");\n  }\n\n  @GetApi("/events")\n  static async eventListener(ctx: HandlerContext) {\n    let completed = false;\n    const wfUUID = (await ctx.invoke(Events).stepsWorkflow()).getWorkflowUUID();\n\n    ctx.getEvent(wfUUID, "step1").then((event) => {\n      ctx.log(`step1 status: ${event}`);\n    });\n\n    ctx.getEvent(wfUUID, "step2").then((event) => {\n      ctx.log(`step2 status: ${event}`);\n      completed = true;\n    });\n\n    while (!completed) {\n        await new Promise((resolve) => setTimeout(resolve, 10));\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);