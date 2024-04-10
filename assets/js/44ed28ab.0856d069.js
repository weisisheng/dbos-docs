"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[5099],{5263:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=n(5893),s=n(1151);const a={sidebar_position:1,title:"HTTP Serving",description:"Learn how to serve HTTP requests"},o=void 0,i={id:"tutorials/http-serving-tutorial",title:"HTTP Serving",description:"Learn how to serve HTTP requests",source:"@site/docs/tutorials/http-serving-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/http-serving-tutorial",permalink:"/tutorials/http-serving-tutorial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"HTTP Serving",description:"Learn how to serve HTTP requests"},sidebar:"tutorialSidebar",previous:{title:"DBOS Transact Tutorials",permalink:"/category/dbos-transact-tutorials"},next:{title:"Transactions",permalink:"/tutorials/transaction-tutorial"}},c={},d=[{value:"Handlers",id:"handlers",level:3},{value:"Inputs and HTTP Requests",id:"inputs-and-http-requests",level:3},{value:"Outputs and HTTP Responses",id:"outputs-and-http-responses",level:3},{value:"Body Parser",id:"body-parser",level:3},{value:"CORS",id:"cors",level:3},{value:"Middleware",id:"middleware",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"In this guide, you'll learn how to make DBOS applications accessible through HTTP."}),"\n",(0,t.jsxs)(r.p,{children:["Any function can be made into an HTTP endpoint by annotating it with an ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#http-api-registration-decorators",children:"endpoint decorator"}),", causing DBOS to use that function to serve that endpoint.\nYou can apply an endpoint decorator either to a new function without any other decorators or to an existing function with an ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#transaction",children:(0,t.jsx)(r.code,{children:"@Transaction"})}),", ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#workflow",children:(0,t.jsx)(r.code,{children:"@Workflow"})}),", or ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#communicator",children:(0,t.jsx)(r.code,{children:"@Communicator"})})," decorator.\nIn the latter case, the order of the decorators doesn't matter.\nHere's an example of a new function with an endpoint decorator:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"@GetApi('/greeting/:name')\nstatic async greetingEndpoint(ctx: HandlerContext, @ArgSource(ArgSources.URL) name: string) {\n  return `Greeting, ${name}`;\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"Here's an example applying an endpoint decorator to an existing transaction:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"@PostApi('/clear/:user')\n@Transaction()\nstatic async clearTransaction(ctxt: TransactionContext<Knex>, @ArgSource(ArgSources.URL) user: string) {\n  await ctxt.client.raw(\"DELETE FROM dbos_hello WHERE NAME = ?\", [user]);\n  return `Cleared greet_count for ${user}!\\n`;\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["DBOS currently supports two endpoint decorators, ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#getapi",children:(0,t.jsx)(r.code,{children:"GetApi"})})," (HTTP ",(0,t.jsx)(r.code,{children:"GET"}),") and ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#postapi",children:(0,t.jsx)(r.code,{children:"PostApi"})})," (HTTP ",(0,t.jsx)(r.code,{children:"POST"}),").\nEach associates a function with an HTTP URL."]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["You might be wondering why we don't talk about setting up an HTTP server.\nIt's because DBOS is ",(0,t.jsx)(r.em,{children:"serverless"}),".\nWhen you run an locally app with ",(0,t.jsx)(r.code,{children:"npx dbos start"}),", we manage the HTTP server for you, using the endpoints and configuration you specify with decorators."]})}),"\n",(0,t.jsx)(r.h3,{id:"handlers",children:"Handlers"}),"\n",(0,t.jsxs)(r.p,{children:["A function annotated with an endpoint decorator but no other decorators is called a ",(0,t.jsx)(r.em,{children:"handler"})," and must take a ",(0,t.jsx)(r.a,{href:"../api-reference/contexts#handlercontext",children:(0,t.jsx)(r.code,{children:"HandlerContext"})})," as its first argument, like in the first example above.\nHandlers can ",(0,t.jsx)(r.a,{href:"../api-reference/contexts#handlerctxtinvoketargetclass-workflowuuid",children:"invoke"})," other functions and directly access HTTP requests and responses.\nHowever, DBOS makes no guarantees about handler execution: if a handler fails, it is not automatically retried.\nYou should use handlers when you need to access HTTP responses directly or when you are writing a lightweight task that does not need the strong guarantees of transactions and workflows."]}),"\n",(0,t.jsx)(r.h3,{id:"inputs-and-http-requests",children:"Inputs and HTTP Requests"}),"\n",(0,t.jsxs)(r.p,{children:["Any DBOS method invoked via HTTP request can access the raw request from its ",(0,t.jsx)(r.code,{children:"context.request"})," field."]}),"\n",(0,t.jsxs)(r.p,{children:["When a function has arguments other than its context (e.g., ",(0,t.jsx)(r.code,{children:"name: String"})," in the snippets above), DBOS automatically parses them from the HTTP request, and returns an error to the client if arguments were not provided."]}),"\n",(0,t.jsx)(r.p,{children:"Arguments are parsed from three places by default:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"For GET requests, from a URL query string parameter."}),"\n",(0,t.jsx)(r.li,{children:"For POST requests, from an HTTP body field."}),"\n",(0,t.jsx)(r.li,{children:"From a URL path parameter, if there are placeholders specified in the decorated URL."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["In all cases, the parameter name must match the function argument name (unless ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#argname",children:(0,t.jsx)(r.code,{children:"@ArgName"})})," is specified). In the first snippet above, ",(0,t.jsx)(r.code,{children:"/clear/:name"})," matches ",(0,t.jsx)(r.code,{children:"name: string"}),".\nDefault input parsing behavior can be configured using the ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#argsource",children:(0,t.jsx)(r.code,{children:"@ArgSource"})})," parameter decorator.\nFor example, in the ",(0,t.jsx)(r.code,{children:"greetingEndpoint"})," snippet above the ",(0,t.jsx)(r.code,{children:"@ArgSource(ArgSources.URL)"})," decorator configures the function to parse its ",(0,t.jsx)(r.code,{children:"user"})," argument from the endpoint URL's ",(0,t.jsx)(r.code,{children:":user"})," path parameter."]}),"\n",(0,t.jsxs)(r.p,{children:["By default, DBOS automatically validates parsed inputs, throwing an error if a function is missing required inputs or if the input received is of a different type than specified in the method signature.\nValidation can be turned off at the class level using ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#defaultargoptional",children:(0,t.jsx)(r.code,{children:"@DefaultArgOptional"})})," or controlled at the parameter level using ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#argrequired",children:(0,t.jsx)(r.code,{children:"@ArgRequired"})})," and ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#argoptional",children:(0,t.jsx)(r.code,{children:"@ArgOptional"})}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"outputs-and-http-responses",children:"Outputs and HTTP Responses"}),"\n",(0,t.jsxs)(r.p,{children:["By default, if a function invoked via HTTP request returns successfuly, its return value is sent in the HTTP response body with status code ",(0,t.jsx)(r.code,{children:"200"})," (or ",(0,t.jsx)(r.code,{children:"204"})," if nothing is returned).\nIf the function throws an exception, the error message is sent in the response body with a ",(0,t.jsx)(r.code,{children:"400"})," or ",(0,t.jsx)(r.code,{children:"500"})," status code.\nIf the error contains a ",(0,t.jsx)(r.code,{children:"status"})," field, the handler uses that status code instead."]}),"\n",(0,t.jsxs)(r.p,{children:["If you need custom HTTP response behavior, you can use a handler to access the HTTP response directly.\nDBOS uses ",(0,t.jsx)(r.a,{href:"https://koajs.com/",children:"Koa"})," for HTTP serving internally and the raw response can be accessed via the ",(0,t.jsx)(r.code,{children:".koaContext.response"})," field of ",(0,t.jsx)(r.a,{href:"../api-reference/contexts#handlercontext",children:(0,t.jsx)(r.code,{children:"HandlerContext"})}),", which provides a ",(0,t.jsx)(r.a,{href:"https://koajs.com/#response",children:"Koa response"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"body-parser",children:"Body Parser"}),"\n",(0,t.jsxs)(r.p,{children:["By default, DBOS uses ",(0,t.jsx)(r.a,{href:"https://github.com/koajs/bodyparser",children:(0,t.jsx)(r.code,{children:"@koa/bodyparser"})})," to support JSON in requests.  If this default behavior is not desired, the ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#koabodyparser",children:(0,t.jsx)(r.code,{children:"@KoaBodyParser"})})," decorator can be used."]}),"\n",(0,t.jsx)(r.h3,{id:"cors",children:"CORS"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"Cross-Origin Resource Sharing (CORS)"})," is an integral part of security in web browsers and similar clients, preventing unintended information sharing across origins/domains.\nBy default, DBOS uses ",(0,t.jsx)(r.a,{href:"https://github.com/koajs/cors",children:(0,t.jsx)(r.code,{children:"@koa/cors"})})," with a configuration that is extremely permissive of cross-origin requests."]}),"\n",(0,t.jsx)(r.p,{children:"If your DBOS application will be accessed from web browsers, some thought should be put into configuring CORS.  This can be adjusted in two main ways:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.a,{href:"../api-reference/configuration#http",children:(0,t.jsx)(r.code,{children:"dbos-config.yaml"})})," file"]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#koacors",children:(0,t.jsx)(r.code,{children:"@KoaCors"})})," class decorator"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"middleware",children:"Middleware"}),"\n",(0,t.jsxs)(r.p,{children:["DBOS supports running custom ",(0,t.jsx)(r.a,{href:"https://koajs.com/",children:"Koa"})," middleware for serving HTTP requests.\nMiddlewares are configured at the class level through the ",(0,t.jsx)(r.a,{href:"../api-reference/decorators#koamiddleware",children:(0,t.jsx)(r.code,{children:"@KoaMiddleware"})})," decorator.\nHere is an example of a simple middleware looking for an HTTP header:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'import { Middleware } from "koa";\n\nconst middleware: Middleware = async (ctx, next) => {\n  const contentType = ctx.request.headers["content-type"];\n  await next();\n};\n\n@KoaMiddleware(middleware)\nclass Hello {\n  ...\n}\n'})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var t=n(7294);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);