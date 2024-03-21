"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[3602],{8330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(5893),i=t(1151);const o={sidebar_position:3,title:"DBOS Contexts",description:"API reference for DBOS contexts"},s=void 0,c={id:"api-reference/contexts",title:"DBOS Contexts",description:"API reference for DBOS contexts",source:"@site/docs/api-reference/contexts.md",sourceDirName:"api-reference",slug:"/api-reference/contexts",permalink:"/api-reference/contexts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"DBOS Contexts",description:"API reference for DBOS contexts"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/api-reference/configuration"},next:{title:"Decorators",permalink:"/api-reference/decorators"}},l={},d=[{value:"Background",id:"background",level:2},{value:"<code>DBOSContext</code>",id:"dboscontext",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>ctxt.request</code>",id:"ctxtrequest",level:4},{value:"<code>ctxt.workflowUUID</code>",id:"ctxtworkflowuuid",level:4},{value:"<code>ctxt.authenticatedUser</code>",id:"ctxtauthenticateduser",level:4},{value:"<code>ctxt.authenticatedRoles</code>",id:"ctxtauthenticatedroles",level:4},{value:"<code>ctxt.assumedRole</code>",id:"ctxtassumedrole",level:4},{value:"<code>ctxt.logger</code>",id:"ctxtlogger",level:4},{value:"<code>ctxt.getConfig(key, [defaultValue])</code>",id:"ctxtgetconfigkey-defaultvalue",level:4},{value:"<code>HandlerContext</code>",id:"handlercontext",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Methods",id:"methods-1",level:3},{value:"<code>handlerCtxt.koaContext</code>",id:"handlerctxtkoacontext",level:4},{value:"<code>handlerCtxt.invoke(targetClass, [workflowUUID])</code>",id:"handlerctxtinvoketargetclass-workflowuuid",level:4},{value:"<code>handlerCtxt.retrieveWorkflow(workflowUUID)</code>",id:"handlerctxtretrieveworkflowworkflowuuid",level:4},{value:"<code>handlerCtxt.send(destinationUUID, message, [topic, idempotencyKey])</code>",id:"handlerctxtsenddestinationuuid-message-topic-idempotencykey",level:4},{value:"<code>handlerCtxt.getEvent(workflowUUID, key, [timeoutSeconds])</code>",id:"handlerctxtgeteventworkflowuuid-key-timeoutseconds",level:4},{value:"<code>WorkflowContext</code>",id:"workflowcontext",level:2},{value:"Methods",id:"methods-2",level:3},{value:"<code>workflowCtxt.invoke(targetClass)</code>",id:"workflowctxtinvoketargetclass",level:4},{value:"<code>workflowCtxt.childWorkflow(wf, ...args)</code>",id:"workflowctxtchildworkflowwf-args",level:4},{value:"<code>workflowCtxt.send(destinationUUID, message, [topic])</code>",id:"workflowctxtsenddestinationuuid-message-topic",level:4},{value:"<code>workflowCtxt.recv([topic, timeoutSeconds])</code>",id:"workflowctxtrecvtopic-timeoutseconds",level:4},{value:"<code>workflowCtxt.setEvent(key, value)</code>",id:"workflowctxtseteventkey-value",level:4},{value:"<code>workflowCtxt.getEvent(workflowUUID, key, [timeoutSeconds])</code>",id:"workflowctxtgeteventworkflowuuid-key-timeoutseconds",level:4},{value:"<code>workflowCtxt.retrieveWorkflow(workflowUUID)</code>",id:"workflowctxtretrieveworkflowworkflowuuid",level:4},{value:"<code>workflowCtxt.sleep(durationSec)</code>",id:"workflowctxtsleepdurationsec",level:4},{value:"<code>TransactionContext&lt;T&gt;</code>",id:"transactioncontextt",level:2},{value:"Generic Type Parameter",id:"generic-type-parameter",level:3},{value:"Properties",id:"properties-2",level:3},{value:"<code>transactionCtxt.client</code>",id:"transactionctxtclient",level:4},{value:"<code>CommunicatorContext</code>",id:"communicatorcontext",level:2},{value:"Properties",id:"properties-3",level:4},{value:"<code>communicatorCtxt.retriesAllowed</code>",id:"communicatorctxtretriesallowed",level:4},{value:"<code>communicatorCtxt.maxAttempts</code>",id:"communicatorctxtmaxattempts",level:4},{value:"<code>InitContext</code>",id:"initcontext",level:2},{value:"Properties and Methods",id:"properties-and-methods",level:4},{value:"<code>InitContext.logger</code>",id:"initcontextlogger",level:4},{value:"<code>InitContext.createUserSchema</code>",id:"initcontextcreateuserschema",level:4},{value:"<code>InitContext.dropUserSchema</code>",id:"initcontextdropuserschema",level:4},{value:"<code>InitContext.queryUserDB</code>",id:"initcontextqueryuserdb",level:4},{value:"<code>InitContext.getConfig</code>",id:"initcontextgetconfig",level:4},{value:"<code>MiddlewareContext</code>",id:"middlewarecontext",level:2},{value:"Properties and Methods",id:"properties-and-methods-1",level:4},{value:"<code>MiddlewareContext.logger</code>",id:"middlewarecontextlogger",level:4},{value:"<code>MiddlewareContext.koaContext</code>",id:"middlewarecontextkoacontext",level:4},{value:"<code>MiddlewareContext.name</code>",id:"middlewarecontextname",level:4},{value:"<code>MiddlewareContext.requiredRole</code>",id:"middlewarecontextrequiredrole",level:4},{value:"<code>MiddlewareContext.getConfig</code>",id:"middlewarecontextgetconfig",level:4},{value:"<code>MiddlewareContext.query</code>",id:"middlewarecontextquery",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,r.jsxs)(n.p,{children:["DBOS automatically supplies a ",(0,r.jsx)(n.em,{children:"context"})," to each registered function.\nA function can use its context to call other DBOS functions, interact with the runtime or the database, and access the logger.\nEach DBOS function has a specific context:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Contexts used within DBOS functions inherit from ",(0,r.jsx)(n.a,{href:"#dboscontext",children:(0,r.jsx)(n.code,{children:"DBOSContext"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Handlers use ",(0,r.jsx)(n.a,{href:"#handlercontext",children:(0,r.jsx)(n.code,{children:"HandlerContext"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Workflows use ",(0,r.jsx)(n.a,{href:"#workflowcontext",children:(0,r.jsx)(n.code,{children:"WorkflowContext"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Transactions use ",(0,r.jsx)(n.a,{href:"#transactioncontextt",children:(0,r.jsx)(n.code,{children:"TransactionContext<T>"})})," with a specific database client type."]}),"\n",(0,r.jsxs)(n.li,{children:["Communicators use ",(0,r.jsx)(n.a,{href:"#communicatorcontext",children:(0,r.jsx)(n.code,{children:"CommunicatorContext"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Initialization functions use ",(0,r.jsx)(n.a,{href:"#initcontext",children:(0,r.jsx)(n.code,{children:"InitContext"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Middleware functions use ",(0,r.jsx)(n.a,{href:"#middlewarecontext",children:(0,r.jsx)(n.code,{children:"MiddlewareContext"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"dboscontext",children:(0,r.jsx)(n.code,{children:"DBOSContext"})}),"\n",(0,r.jsxs)(n.p,{children:["Many contexts inherit from ",(0,r.jsx)(n.code,{children:"DBOSContext"})," and share its properties and methods.   (",(0,r.jsx)(n.code,{children:"InitContext"})," and ",(0,r.jsx)(n.code,{children:"MiddlewareContext"})," are exceptions, as these are applied outside the context of DBOS functions.)"]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ctxtrequest",children:"request"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ctxtworkflowuuid",children:"workflowUUID"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ctxtauthenticateduser",children:"authenticatedUser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ctxtauthenticatedroles",children:"authenticatedRoles"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ctxtassumedrole",children:"assumedRole"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ctxtlogger",children:"logger"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ctxtgetconfigkey-defaultvalue",children:"getConfig(key, defaultValue)"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ctxtrequest",children:(0,r.jsx)(n.code,{children:"ctxt.request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly request: HTTPRequest\n"})}),"\n",(0,r.jsx)(n.p,{children:"An object with information about the originating HTTP request that triggered this function (directly or indirectly)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"interface HTTPRequest {\n  readonly headers?: IncomingHttpHeaders;  // A node's http.IncomingHttpHeaders object.\n  readonly rawHeaders?: string[];          // Raw headers.\n  readonly params?: unknown;               // Parsed path parameters from the URL.\n  readonly body?: unknown;                 // parsed HTTP body as an object.\n  readonly rawBody?: string;               // Unparsed raw HTTP body string.\n  readonly query?: ParsedUrlQuery;         // Parsed query string.\n  readonly querystring?: string;           // Unparsed raw query string.\n  readonly url?: string;                   // Request URL.\n  readonly ip?: string;                    // Request remote address.\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ctxtworkflowuuid",children:(0,r.jsx)(n.code,{children:"ctxt.workflowUUID"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly workflowUUID: string\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The current workflow's ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-tutorial#workflow-identity",children:"identity UUID"}),", a string uniquely identifying a workflow execution.\nIn a transaction or communicator, this field is set to the identity UUID of the calling workflow.\nIn a handler, this field is empty."]}),"\n",(0,r.jsx)(n.h4,{id:"ctxtauthenticateduser",children:(0,r.jsx)(n.code,{children:"ctxt.authenticatedUser"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly authenticatedUser: string\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The identity of the authenticated user who ran this function.\nAuthenticated users are set by ",(0,r.jsx)(n.a,{href:"../tutorials/authentication-authorization",children:"authentication middleware"})," and inherited through the calling chain."]}),"\n",(0,r.jsx)(n.h4,{id:"ctxtauthenticatedroles",children:(0,r.jsx)(n.code,{children:"ctxt.authenticatedRoles"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly authenticatedRoles: string[];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A list of roles the authenticated user has, if any.\nAuthenticated roles are set by ",(0,r.jsx)(n.a,{href:"../tutorials/authentication-authorization",children:"authentication middleware"})," and inherited through the calling chain."]}),"\n",(0,r.jsx)(n.h4,{id:"ctxtassumedrole",children:(0,r.jsx)(n.code,{children:"ctxt.assumedRole"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly assumedRole: string;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The role used to run this function.\nEmpty string if authorization is not required.\nDBOS's ",(0,r.jsx)(n.a,{href:"../tutorials/authentication-authorization#authorization-decorators",children:"authorization"})," sets the assumed role right before executing a function and this property is ",(0,r.jsx)(n.em,{children:"not"})," inherited through the calling chain."]}),"\n",(0,r.jsx)(n.h4,{id:"ctxtlogger",children:(0,r.jsx)(n.code,{children:"ctxt.logger"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly logger: DBOSLogger\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A reference to DBOS's logger.\nPlease see our ",(0,r.jsx)(n.a,{href:"/tutorials/logging",children:"logging tutorial"})," for more information."]}),"\n",(0,r.jsx)(n.h4,{id:"ctxtgetconfigkey-defaultvalue",children:(0,r.jsx)(n.code,{children:"ctxt.getConfig(key, [defaultValue])"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getConfig<T>(key: string): T | undefined;\ngetConfig<T>(key: string, defaultValue: T): T;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Retrieves an application property specified in the ",(0,r.jsx)(n.a,{href:"/api-reference/configuration#application",children:"application section of the configuration"}),".\nOptionally accepts a default value, returned when the key cannot be found in the configuration."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"handlercontext",children:(0,r.jsx)(n.code,{children:"HandlerContext"})}),"\n",(0,r.jsxs)(n.p,{children:["Handlers use ",(0,r.jsx)(n.code,{children:"HandlerContext"})," to invoke other functions, interact with active workflows, and interact directly with HTTP requests and responses."]}),"\n",(0,r.jsx)(n.h3,{id:"properties-1",children:"Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#handlerctxtkoacontext",children:"koaContext"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"methods-1",children:"Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#handlerctxtinvoketargetclass-workflowuuid",children:"invoke(targetClass, [workflowUUID])"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#handlerctxtretrieveworkflowworkflowuuid",children:"retrieveWorkflow(workflowUUID)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#handlerctxtsenddestinationuuid-message-topic-idempotencykey",children:"send(destinationUUID, message, [topic, idempotencyKey])"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#handlerctxtgeteventworkflowuuid-key-timeoutseconds",children:"getEvent(workflowUUID, key, [timeoutSeconds])"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"handlerctxtkoacontext",children:(0,r.jsx)(n.code,{children:"handlerCtxt.koaContext"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"koaContext: Koa.Context;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/koajs/koa/blob/master/docs/api/context.md",children:"Koa Context"})," of the current request, giving handlers access to the raw HTTP request and response."]}),"\n",(0,r.jsx)(n.h4,{id:"handlerctxtinvoketargetclass-workflowuuid",children:(0,r.jsx)(n.code,{children:"handlerCtxt.invoke(targetClass, [workflowUUID])"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"invoke<T>(targetClass: T, workflowUUID?: string): InvokeFuncs<T>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Used to invoke workflows, transactions, and communicators.\nThe syntax for invoking function ",(0,r.jsx)(n.code,{children:"foo"})," in class ",(0,r.jsx)(n.code,{children:"Bar"})," with argument ",(0,r.jsx)(n.code,{children:"baz"})," is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"handlerCtxt.invoke(Bar).foo(baz)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When calling transactions or communicators, ",(0,r.jsx)(n.code,{children:"invoke()"})," asynchronously returns the function's output.\nWhen calling workflows, ",(0,r.jsx)(n.code,{children:"invoke()"})," asynchronously returns a ",(0,r.jsx)(n.a,{href:"./workflow-handles",children:(0,r.jsx)(n.code,{children:"handle"})})," for the workflow."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that the DBOS runtime will supply the context to invoked functions.\nYou can optionally provide a UUID idempotency key to the invoked function.\nFor more information, see our ",(0,r.jsx)(n.a,{href:"/tutorials/idempotency-tutorial",children:"idempotency tutorial"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"handlerctxtretrieveworkflowworkflowuuid",children:(0,r.jsx)(n.code,{children:"handlerCtxt.retrieveWorkflow(workflowUUID)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"retrieveWorkflow<R>(workflowUUID: string): WorkflowHandle<R>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns a ",(0,r.jsx)(n.a,{href:"/api-reference/workflow-handles",children:"workflow handle"})," to the workflow with ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-tutorial#workflow-identity",children:"identity"})," ",(0,r.jsx)(n.code,{children:"workflowUUID"}),".\n",(0,r.jsx)(n.code,{children:"R"})," is the return type of the target workflow."]}),"\n",(0,r.jsx)(n.h4,{id:"handlerctxtsenddestinationuuid-message-topic-idempotencykey",children:(0,r.jsx)(n.code,{children:"handlerCtxt.send(destinationUUID, message, [topic, idempotencyKey])"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"send<T extends NonNullable<any>>(destinationUUID: string, message: T, topic?: string, idempotencyKey?: string): Promise<void>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sends a message to workflow ",(0,r.jsx)(n.code,{children:"destinationUUID"}),".\nMessages can optionally be associated with a topic.\nYou can provide an optional idempotency key to guarantee only a single message is sent even if ",(0,r.jsx)(n.code,{children:"send"})," is called more than once.\nFor more information, see our ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-communication-tutorial#messages-api",children:"messages API tutorial"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"handlerctxtgeteventworkflowuuid-key-timeoutseconds",children:(0,r.jsx)(n.code,{children:"handlerCtxt.getEvent(workflowUUID, key, [timeoutSeconds])"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getEvent<T extends NonNullable<any>>(workflowUUID: string, key: string, timeoutSeconds?: number): Promise<T | null>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Retrieves an event published by ",(0,r.jsx)(n.code,{children:"workflowUUID"})," for a given key using the ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-communication-tutorial#events-api",children:"events API"}),".\nAwaiting on the promise returned by ",(0,r.jsx)(n.code,{children:"getEvent()"})," waits for the workflow to publish the key, returning ",(0,r.jsx)(n.code,{children:"null"})," if the wait times out."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"workflowcontext",children:(0,r.jsx)(n.code,{children:"WorkflowContext"})}),"\n",(0,r.jsxs)(n.p,{children:["Workflows use ",(0,r.jsx)(n.code,{children:"WorkflowContext"})," to invoke other functions and interact with other workflows."]}),"\n",(0,r.jsx)(n.h3,{id:"methods-2",children:"Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtinvoketargetclass",children:"invoke(targetClass)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtchildworkflowwf-args",children:"childWorkflow(wf, ...args)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtsenddestinationuuid-message-topic",children:"send(destinationUUID, message, [topic])"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtrecvtopic-timeoutseconds",children:"recv([topic, timeoutSeconds])"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtseteventkey-value",children:"setEvent(key, value)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtgeteventworkflowuuid-key-timeoutseconds",children:"getEvent()"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtretrieveworkflowworkflowuuid",children:"retrieveWorkflow(workflowUUID)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#workflowctxtsleepdurationsec",children:"sleep(durationSec)"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtinvoketargetclass",children:(0,r.jsx)(n.code,{children:"workflowCtxt.invoke(targetClass)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"invoke<T>(targetClass: T, workflowUUID?: string): InvokeFuncs<T>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Invoke transactions and communicators.\nTo invoke other workflows, use ",(0,r.jsx)(n.a,{href:"#workflowctxtchildworkflowwf-args",children:(0,r.jsx)(n.code,{children:"childWorkflow"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The syntax for invoking function ",(0,r.jsx)(n.code,{children:"foo"})," in class ",(0,r.jsx)(n.code,{children:"Bar"})," with argument ",(0,r.jsx)(n.code,{children:"baz"})," is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"workflowCtxt.invoke(Bar).foo(baz)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that the DBOS runtime will supply a context to invoked functions."}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtchildworkflowwf-args",children:(0,r.jsx)(n.code,{children:"workflowCtxt.childWorkflow(wf, ...args)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"childWorkflow<T extends any[], R>(wf: Workflow<T, R>, ...args: T): Promise<WorkflowHandle<R>>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Invoke another workflow.\nThis returns a ",(0,r.jsx)(n.a,{href:"./workflow-handles",children:"workflow handle"})," for the new workflow."]}),"\n",(0,r.jsxs)(n.p,{children:["The syntax for invoking workflow ",(0,r.jsx)(n.code,{children:"foo"})," in class ",(0,r.jsx)(n.code,{children:"Bar"})," with argument ",(0,r.jsx)(n.code,{children:"baz"})," is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const workflowHandle = await ctxt.childWorkflow(Bar.foo, baz)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtsenddestinationuuid-message-topic",children:(0,r.jsx)(n.code,{children:"workflowCtxt.send(destinationUUID, message, [topic])"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"send<T extends NonNullable<any>>(destinationUUID: string, message: T, topic?: string): Promise<void>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sends a message to ",(0,r.jsx)(n.code,{children:"destinationUUID"}),".\nMessages can optionally be associated with a topic.\nFor more information, see our ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-communication-tutorial#messages-api",children:"messages API tutorial"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtrecvtopic-timeoutseconds",children:(0,r.jsx)(n.code,{children:"workflowCtxt.recv([topic, timeoutSeconds])"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"recv<T extends NonNullable<any>>(topic?: string, timeoutSeconds?: number): Promise<T | null>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Receive messages sent to the workflow, optionally for a particular topic.\nMessages are dequeued first-in, first-out, from a queue associated with the topic.\nCalls to ",(0,r.jsx)(n.code,{children:"recv()"})," wait for the next message in the queue, returning ",(0,r.jsx)(n.code,{children:"null"})," if the wait times out.\nIf no topic is specified, ",(0,r.jsx)(n.code,{children:"recv"})," can only access messages sent without a topic.\nFor more information, see our ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-communication-tutorial#messages-api",children:"messages API tutorial"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtseteventkey-value",children:(0,r.jsx)(n.code,{children:"workflowCtxt.setEvent(key, value)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"setEvent<T extends NonNullable<any>>(key: string, value: T): Promise<void>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Creates an immutable event named ",(0,r.jsx)(n.code,{children:"key"})," with value ",(0,r.jsx)(n.code,{children:"value"}),".\nWorkflows and HTTP handlers can read events by calling ",(0,r.jsx)(n.a,{href:"#handlerctxtgeteventworkflowuuid-key-timeoutseconds",children:(0,r.jsx)(n.code,{children:"getEvent"})})," with the workflow's UUID.\nEvents are immutable and attempting to emit an event twice from a given workflow instance will result in an error.\nFor more information, see our ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-communication-tutorial#events-api",children:"events API tutorial"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtgeteventworkflowuuid-key-timeoutseconds",children:(0,r.jsx)(n.code,{children:"workflowCtxt.getEvent(workflowUUID, key, [timeoutSeconds])"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getEvent<T extends NonNullable<any>>(workflowUUID: string, key: string, timeoutSeconds?: number): Promise<T | null>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Retrieves an event published by ",(0,r.jsx)(n.code,{children:"workflowUUID"})," for a given key using the ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-communication-tutorial#events-api",children:"events API"}),".\nAwaiting on the promise returned by ",(0,r.jsx)(n.code,{children:"getEvent()"})," waits for the workflow to publish the key, returning ",(0,r.jsx)(n.code,{children:"null"})," if the wait times out."]}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtretrieveworkflowworkflowuuid",children:(0,r.jsx)(n.code,{children:"workflowCtxt.retrieveWorkflow(workflowUUID)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"retrieveWorkflow<R>(workflowUUID: string): WorkflowHandle<R>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns a ",(0,r.jsx)(n.a,{href:"/api-reference/workflow-handles",children:"workflow handle"})," to the workflow with ",(0,r.jsx)(n.a,{href:"../tutorials/workflow-tutorial#workflow-identity",children:"identity"})," ",(0,r.jsx)(n.em,{children:"workflowUUID"}),".\n",(0,r.jsx)(n.code,{children:"R"})," is the return type of the target workflow."]}),"\n",(0,r.jsx)(n.h4,{id:"workflowctxtsleepdurationsec",children:(0,r.jsx)(n.code,{children:"workflowCtxt.sleep(durationSec)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"sleep(durationSec: number): Promise<void>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sleep for ",(0,r.jsx)(n.code,{children:"durationSec"})," seconds.\nThe wakeup time is set in the database when the function is first called, so if the workflow is re-executed, it will not oversleep."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"transactioncontextt",children:(0,r.jsx)(n.code,{children:"TransactionContext<T>"})}),"\n",(0,r.jsxs)(n.p,{children:["Transactions use ",(0,r.jsx)(n.code,{children:"TransactionContext"})," to interact with the database."]}),"\n",(0,r.jsx)(n.h3,{id:"generic-type-parameter",children:"Generic Type Parameter"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"TransactionContext"})," is typed generically based on the application database client in use.\nThe application database client is configurable in a project's ",(0,r.jsx)(n.a,{href:"./configuration",children:"configuration file"})," (",(0,r.jsx)(n.code,{children:"app_db_client"}),").\nDBOS currently supports the following clients:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://knexjs.org/guide/#typescript",children:"Knex"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { Knex } from "knex";\nstatic async exampleTransaction(ctxt: TransactionContext<Knex>, ...)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://orkhan.gitbook.io/typeorm/docs/entity-manager-api",children:"TypeORM"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { EntityManager } from "typeorm";\nstatic async exampleTransaction(ctxt: TransactionContext<EntityManager>, ...)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"properties-2",children:"Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#transactionctxtclient",children:"client"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"transactionctxtclient",children:(0,r.jsx)(n.code,{children:"transactionCtxt.client"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"client: T; // One of [Knex, EntityManager]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Provides access to the chosen application database client.\nA transaction function should only interact with the application database using this client."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"communicatorcontext",children:(0,r.jsx)(n.code,{children:"CommunicatorContext"})}),"\n",(0,r.jsxs)(n.p,{children:["Communicators use ",(0,r.jsx)(n.code,{children:"CommunicatorContext"})," to retrieve information on communicator configuration."]}),"\n",(0,r.jsx)(n.h4,{id:"properties-3",children:"Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#communicatorctxtretriesallowed",children:"retriesAllowed"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#communicatorctxtmaxattempts",children:"maxAttempts"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"communicatorctxtretriesallowed",children:(0,r.jsx)(n.code,{children:"communicatorCtxt.retriesAllowed"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly retriesAllowed: boolean;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Whether the communicator is automatically retried on failure.\nConfigurable through the ",(0,r.jsx)(n.a,{href:"./decorators#communicator",children:(0,r.jsx)(n.code,{children:"@Communicator"})})," decorator."]}),"\n",(0,r.jsx)(n.h4,{id:"communicatorctxtmaxattempts",children:(0,r.jsx)(n.code,{children:"communicatorCtxt.maxAttempts"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly maxAttempts: number;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Maximum number of retries for the communicator.\nConfigurable through the ",(0,r.jsx)(n.a,{href:"./decorators#communicator",children:(0,r.jsx)(n.code,{children:"@Communicator"})})," decorator."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"initcontext",children:(0,r.jsx)(n.code,{children:"InitContext"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api-reference/decorators#dbosinitializer",children:"Initialization functions"})," are provided with an ",(0,r.jsx)(n.code,{children:"InitContext"}),", which provides access to configuration information, database access, and a logging facility."]}),"\n",(0,r.jsx)(n.h4,{id:"properties-and-methods",children:"Properties and Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#initcontextlogger",children:"logger"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#initcontextcreateuserschema",children:"createUserSchema"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#initcontextdropuserschema",children:"dropUserSchema"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#initcontextqueryuserdb",children:"queryuserdb"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#initcontextgetconfig",children:"getconfig"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"initcontextlogger",children:(0,r.jsx)(n.code,{children:"InitContext.logger"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly logger: Logger;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"logger"})," is available to record any interesting successes, failures, or diagnostic information that occur during initialization."]}),"\n",(0,r.jsx)(n.h4,{id:"initcontextcreateuserschema",children:(0,r.jsx)(n.code,{children:"InitContext.createUserSchema"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"createUserSchema(): Promise<void>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Creates the user database schema.  This currently works in TypeORM only, as in this case the ",(0,r.jsx)(n.code,{children:"@Entity"})," decorations provide enough information for the schema and table DDL to be generated automatically."]}),"\n",(0,r.jsx)(n.h4,{id:"initcontextdropuserschema",children:(0,r.jsx)(n.code,{children:"InitContext.dropUserSchema"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"dropUserSchema(): Promise<void>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Drops the user database schema.  This currently works in TypeORM only, as in this case the ",(0,r.jsx)(n.code,{children:"@Entity"})," decorations provide enough information for the schema and table DDL to be generated automatically."]}),"\n",(0,r.jsx)(n.h4,{id:"initcontextqueryuserdb",children:(0,r.jsx)(n.code,{children:"InitContext.queryUserDB"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"queryUserDB<R>(sql: string, ...params: unknown[]): Promise<R[]>;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Accesses the user database directly with SQL.  This approach is to be used with caution, as using a string to represent SQL is not fully database independent and careless formation of the string can lead to SQL injection vulnerabilities."}),"\n",(0,r.jsx)(n.h4,{id:"initcontextgetconfig",children:(0,r.jsx)(n.code,{children:"InitContext.getConfig"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getConfig<T>(key: string, defaultValue?: T): T | undefined;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getConfig"})," retrieves configuration information (from .yaml config file / environment).  If ",(0,r.jsx)(n.code,{children:"key"})," is not present in the configuration, ",(0,r.jsx)(n.code,{children:"defaultValue"})," is returned."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"middlewarecontext",children:(0,r.jsx)(n.code,{children:"MiddlewareContext"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MiddlewareContext"})," is provided to functions that execute against a request before entry into handler, transaction, and workflow functions.  These middleware functions are generally executed before, or in the process of, user authentication, request validation, etc.  The context is intended to provide read-only database access, logging services, and configuration information."]}),"\n",(0,r.jsx)(n.h4,{id:"properties-and-methods-1",children:"Properties and Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middlewarecontextlogger",children:"logger"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middlewarecontextkoacontext",children:"koaContext"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middlewarecontextname",children:"name"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middlewarecontextrequiredrole",children:"requiredRole"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middlewarecontextgetconfig",children:"getConfig"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#middlewarecontextquery",children:"query"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"middlewarecontextlogger",children:(0,r.jsx)(n.code,{children:"MiddlewareContext.logger"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly logger: DBOSLogger;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"logger"})," is available to record any interesting successes, failures, or diagnostic information that occur during middleware processing."]}),"\n",(0,r.jsx)(n.h4,{id:"middlewarecontextkoacontext",children:(0,r.jsx)(n.code,{children:"MiddlewareContext.koaContext"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly koaContext: Koa.Context;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"koaContext"})," is the Koa context, which contains the inbound HTTP request associated with the middleware invocation."]}),"\n",(0,r.jsx)(n.h4,{id:"middlewarecontextname",children:(0,r.jsx)(n.code,{children:"MiddlewareContext.name"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly name: string;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"name"})," contains the name of the function (handler, transaction, workflow) to be invoked after successful middleware processing."]}),"\n",(0,r.jsx)(n.h4,{id:"middlewarecontextrequiredrole",children:(0,r.jsx)(n.code,{children:"MiddlewareContext.requiredRole"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly requiredRole: string[];\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"requiredRole"})," contains the list of roles required for the invoked operation.  Access to the function will granted if the user has any role on the list.  If the list is empty, it means there are no authorization requirements and may indicate that authentication is not required."]}),"\n",(0,r.jsx)(n.h4,{id:"middlewarecontextgetconfig",children:(0,r.jsx)(n.code,{children:"MiddlewareContext.getConfig"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getConfig<T>(key: string, deflt: T | undefined) : T | undefined\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getConfig"})," retrieves configuration information (from .yaml config file / environment).  If ",(0,r.jsx)(n.code,{children:"key"})," is not present in the configuration, ",(0,r.jsx)(n.code,{children:"defaultValue"})," is returned."]}),"\n",(0,r.jsx)(n.h4,{id:"middlewarecontextquery",children:(0,r.jsx)(n.code,{children:"MiddlewareContext.query"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"  query<C extends UserDatabaseClient, R, T extends unknown[]>(qry: (dbclient: C, ...args: T) => Promise<R>, ...args: T): Promise<R>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"query"})," function provides read access to the database.\nTo provide a scoped database connection and to ensure cleanup, the ",(0,r.jsx)(n.code,{children:"query"})," API works via a callback function.\nThe application is to pass in a ",(0,r.jsx)(n.code,{children:"qry"})," function that will be executed in a context with access to the database client ",(0,r.jsx)(n.code,{children:"dbclient"}),".\nThe provided ",(0,r.jsx)(n.code,{children:"dbClient"})," will either be a ",(0,r.jsx)(n.code,{children:"Knex"})," or TypeORM ",(0,r.jsx)(n.code,{children:"EntityManager"})," depending on the application's choice of SQL access library.\nThis callback function may take arguments, and return a value."]}),"\n",(0,r.jsx)(n.p,{children:"Example, for Knex:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'  const u = await ctx.query(\n    // The qry function that takes in a dbClient and a list of arguments (uname in this case)\n    (dbClient: Knex, uname: string) => {\n      return dbClient<UserTable>(userTableName).select("username").where({ username: uname })\n    },\n    userName // Input value for the uname argument\n  );\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(7294);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);