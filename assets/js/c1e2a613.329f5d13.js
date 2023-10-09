"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[700],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),f=i,u=g["".concat(l,".").concat(f)]||g[f]||m[f]||r;return t?o.createElement(u,a(a({ref:n},c),{},{components:t})):o.createElement(u,a({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(7462),i=(t(7294),t(3905));const r={sidebar_position:6,title:"Workflows communication",description:"Two workflows play ping pong"},a=void 0,s={unversionedId:"tutorials/workflow-comm-tutorial",id:"tutorials/workflow-comm-tutorial",title:"Workflows communication",description:"Two workflows play ping pong",source:"@site/docs/tutorials/workflow-comm-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/workflow-comm-tutorial",permalink:"/operon-docs/tutorials/workflow-comm-tutorial",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Workflows communication",description:"Two workflows play ping pong"},sidebar:"tutorialSidebar",previous:{title:"Asynchronous workflows",permalink:"/operon-docs/tutorials/async-workflow-tutorial"},next:{title:"Third party calls",permalink:"/operon-docs/tutorials/third-party-tutorial"}},l={},p=[{value:"Final code",id:"final-code",level:2}],c={toc:p},g="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Workflows can communicate with each other. Specifically, using ",(0,i.kt)("a",{parentName:"p",href:"../api-reference/contexts#workflowcontext"},"WorkflowContext"),", you can send a generic message to a destination workflow using its UUID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"send<T extends NonNullable<any>>(destinationUUID: string, message: T, topic?: string | null): Promise<void>;\n")),(0,i.kt)("p",null,"Likewise, from a ",(0,i.kt)("a",{parentName:"p",href:"../api-reference/contexts#workflowcontext"},"WorkflowContext"),", you can receive a message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"recv<T extends NonNullable<any>>(topic?: string | null, timeoutSeconds?: number): Promise<T | null>\n")),(0,i.kt)("p",null,"Note that send and receive can be filtered by topics."),(0,i.kt)("p",null,"Let's build an Operon application that, upon receiving a network request, starts two workflows exchanging message with each other."),(0,i.kt)("p",null,"First, we will write the HTTP handler:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'  @GetApi("/pingpong")\n  static async pingPongEndpoint(ctx: HandlerContext) {\n    const pongHandle = await ctx.invoke(PingPong).pong();\n    const pongUUID = pongHandle.getWorkflowUUID();\n\n    const pinghandle = await ctx.invoke(PingPong).ping(pongUUID);\n    const pingUUID = pinghandle.getWorkflowUUID();\n\n    await new Promise((r) => setTimeout(r, 50));\n\n    await ctx.send(pongUUID, "stop", "stopTopic");\n    return await ctx.send(pingUUID, "stop", "stopTopic");\n  }\n')),(0,i.kt)("p",null,"The handler first invokes a workflow named ",(0,i.kt)("inlineCode",{parentName:"p"},"pong")," and uses its handler to retrieve its UUID.\nIt then invokes a second workflow named ",(0,i.kt)("inlineCode",{parentName:"p"},"ping"),", passing it ",(0,i.kt)("inlineCode",{parentName:"p"},"pong"),"'s UUID as parameter.\nIt then goes on to sleep for 50ms, then sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," message to ",(0,i.kt)("inlineCode",{parentName:"p"},"ping")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pong")," on a topic named ",(0,i.kt)("inlineCode",{parentName:"p"},"stopTopic"),"."),(0,i.kt)("p",null,"Let's look at ",(0,i.kt)("inlineCode",{parentName:"p"},"ping"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'  @OperonWorkflow()\n  static async ping(wfCtxt: WorkflowContext, pongUUID: string) {\n    let running: boolean = true;\n    wfCtxt.recv("stopTopic").then((m) => {\n      if (m) {\n        wfCtxt.info("[PING] received stop notification");\n        running = false;\n      }\n    });\n\n    const message: Message = {\n      senderUUID: wfCtxt.workflowUUID,\n      message: "ping",\n    };\n    await wfCtxt.send(pongUUID, message);\n    while (running) {\n      const m = (await wfCtxt.recv<string>()) as Message;\n      if (m) {\n        wfCtxt.info(`[PING] received ${m.message}`);\n        await wfCtxt.send(pongUUID, message);\n      }\n    }\n  }\n')),(0,i.kt)("p",null,"First, the workflow starts listening on the ",(0,i.kt)("inlineCode",{parentName:"p"},"stopTopic"),".\nOnce this promise is resolved, it will flip a boolean flag named ",(0,i.kt)("inlineCode",{parentName:"p"},"running")," to know when to exit.\nThen, it sets a message with its UUID and sends the first message to ",(0,i.kt)("inlineCode",{parentName:"p"},"pong"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Message")," is user-defined, in this case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface MessengingProtocol {\n  senderUUID: string;\n  message: string;\n}\ntype Message = MessengingProtocol | null;\n")),(0,i.kt)("p",null,"The main loop of the workflow waits for a response from ",(0,i.kt)("inlineCode",{parentName:"p"},"pong"),", logs it, then sends back a ping message."),(0,i.kt)("p",null,"Note the following with respect to sending and receiving workflow messages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"send")," and receive are asynchronous. You can chose to block on them, or register a callback through ",(0,i.kt)("inlineCode",{parentName:"li"},".then"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recv")," can return a ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," value. This is because the message value itself could be ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},"You can specify the type to use for deserializing the message. In this example, ",(0,i.kt)("inlineCode",{parentName:"li"},"Message"),"."),(0,i.kt)("li",{parentName:"ul"},"Topics are optional. You can use them for specific purposes as demonstrated in this example.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pong")," is similar, with the exception it uses the UUID received in the message to determine who to send a pong:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'  @OperonWorkflow()\n  static async pong(wfCtxt: WorkflowContext) {\n    let running: boolean = true;\n    wfCtxt.recv("stopTopic").then((m) => {\n      if (m) {\n        wfCtxt.info("[PONG] received stop notification");\n        running = false;\n      }\n    });\n\n    while (running) {\n      const m = await wfCtxt.recv<Message>();\n      if (m) {\n        wfCtxt.info(`[PONG] received ${m.message}`);\n        m.message = "pong";\n        await wfCtxt.send(m.senderUUID, m);\n      }\n    }\n  }\n')),(0,i.kt)("h2",{id:"final-code"},"Final code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  HandlerContext,\n  GetApi,\n  OperonWorkflow,\n  WorkflowContext,\n} from "@dbos-inc/operon";\n\ninterface MessengingProtocol {\n  senderUUID: string;\n  message: string;\n}\ntype Message = MessengingProtocol | null;\n\nexport class PingPong {\n  @OperonWorkflow()\n  static async pong(wfCtxt: WorkflowContext) {\n    let running: boolean = true;\n    wfCtxt.recv("stopTopic").then((m) => {\n      if (m) {\n        wfCtxt.info("[PONG] received stop notification");\n        running = false;\n      }\n    });\n\n    while (running) {\n      const m = await wfCtxt.recv<Message>();\n      if (m) {\n        wfCtxt.info(`[PONG] received ${m.message}`);\n        m.message = "pong";\n        await wfCtxt.send(m.senderUUID, m);\n      }\n    }\n  }\n\n  @OperonWorkflow()\n  static async ping(wfCtxt: WorkflowContext, pongUUID: string) {\n    let running: boolean = true;\n    wfCtxt.recv("stopTopic").then((m) => {\n      if (m) {\n        wfCtxt.info("[PING] received stop notification");\n        running = false;\n      }\n    });\n\n    const message: Message = {\n      senderUUID: wfCtxt.workflowUUID,\n      message: "ping",\n    };\n    await wfCtxt.send(pongUUID, message);\n    while (running) {\n      const m = await wfCtxt.recv<Message>();\n      if (m) {\n        wfCtxt.info(`[PING] received ${m.message}`);\n        await wfCtxt.send(pongUUID, message);\n      }\n    }\n  }\n\n  @GetApi("/pingpong")\n  static async pingPongEndpoint(ctx: HandlerContext) {\n    const pongHandle = await ctx.invoke(PingPong).pong();\n    const pongUUID = pongHandle.getWorkflowUUID();\n\n    const pinghandle = await ctx.invoke(PingPong).ping(pongUUID);\n    const pingUUID = pinghandle.getWorkflowUUID();\n\n    await new Promise((r) => setTimeout(r, 50));\n\n    await ctx.send(pingUUID, "stop", "stopTopic");\n    return await ctx.send(pongUUID, "stop", "stopTopic");\n  }\n}\n')))}m.isMDXComponent=!0}}]);