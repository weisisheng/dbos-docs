"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[743],{9222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(5893),i=t(1151);const a={sidebar_position:7,title:"Logging and Tracing",description:"Learn to use logging and tracing in DBOS"},o=void 0,s={id:"tutorials/logging",title:"Logging and Tracing",description:"Learn to use logging and tracing in DBOS",source:"@site/docs/tutorials/logging.md",sourceDirName:"tutorials",slug:"/tutorials/logging",permalink:"/tutorials/logging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Logging and Tracing",description:"Learn to use logging and tracing in DBOS"},sidebar:"tutorialSidebar",previous:{title:"Workflow Communication",permalink:"/tutorials/workflow-communication-tutorial"},next:{title:"Testing and Debugging",permalink:"/tutorials/testing-tutorial"}},c={},l=[{value:"Logging",id:"logging",level:2},{value:"Usage",id:"usage",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Tracing",id:"tracing",level:2},{value:"Configuring OTLP exporters",id:"configuring-otlp-exporters",level:3}];function g(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this section we will learn to use DBOS's built-in logging and tracing systems."}),"\n",(0,r.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(n.p,{children:["The DBOS runtime comes with a global logger you can access through any operation's ",(0,r.jsx)(n.a,{href:"/api-reference/contexts",children:"context"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"@GetApi('/greeting/:name')\nstatic async greetingEndpoint(ctx: HandlerContext, @ArgSource(ArgSources.URL) name: string) {\n    ctx.logger.info(\"Logging from the greeting handler\");\n    return `Greeting, ${name}`;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The logger supports ",(0,r.jsx)(n.code,{children:"info()"}),", ",(0,r.jsx)(n.code,{children:"debug()"}),", ",(0,r.jsx)(n.code,{children:"warn()"})," and ",(0,r.jsx)(n.code,{children:"error()"}),".\nAll except ",(0,r.jsx)(n.code,{children:"error()"})," accept a ",(0,r.jsx)(n.code,{children:"string"})," argument and print it as-is. If the argument is not of type string, DBOS SDK will attempt to ",(0,r.jsx)(n.code,{children:"JSON.stringify"})," the input.\n",(0,r.jsx)(n.code,{children:"error()"})," accepts an argument of any type, wraps it in a Javascript ",(0,r.jsx)(n.code,{children:"Error"})," object (if it isn't an ",(0,r.jsx)(n.code,{children:"Error"})," already), and prints it with its stack trace."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"@GetApi('/greeting/:name')\nstatic async greetingEndpoint(ctx: HandlerContext, @ArgSource(ArgSources.URL) name: string) {\n    const err = new Error(\"an error!\");\n    ctx.logger.error(err);\n    return `Greeting, ${name}`;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"../api-reference/configuration",children:"configuration file"}),", you can configure the logging level, silence the logger, and request to add context metadata to log entries:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"...\ntelemetry:\n  logs:\n    logLevel: 'info' # info (default) | debug | warn | emerg | alert | crit | error\n    addContextMetadata: 'true' #\xa0true (default) | false\n    silent: 'false' # false (default) | true\n"})}),"\n",(0,r.jsx)(n.p,{children:"Context metadata includes the workflow identity UUID and the name of the user running the workflow."}),"\n",(0,r.jsx)(n.p,{children:"You can also configure the logging level as a CLI argument to the runtime:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx dbos-sdk start --loglevel debug\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tracing",children:"Tracing"}),"\n",(0,r.jsxs)(n.p,{children:["DBOS workflows natively produce ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/",children:"OpenTelemetry"}),"-compatible traces.\nWhen a request arrives at a handler, the runtime looks up any ",(0,r.jsx)(n.a,{href:"https://www.w3.org/TR/trace-context/#trace-context-http-headers-format",children:"W3C-compatible trace context"})," in the HTTP headers.\nIf found, it uses this context to create a new child ",(0,r.jsx)(n.a,{href:"https://opentelemetry.io/docs/concepts/signals/traces/#spans",children:(0,r.jsx)(n.code,{children:"Span"})})," and continue the trace, otherwise it starts a new trace. Each operation creates a new child ",(0,r.jsx)(n.code,{children:"Span"})," for the current trace.\nFinally, DBOS will inject the trace context in the HTTP headers of the response returned by the handler."]}),"\n",(0,r.jsxs)(n.p,{children:["Each operation's ",(0,r.jsx)(n.code,{children:"Span"})," is available through its Context.\nHere is an example accessing the ",(0,r.jsx)(n.code,{children:"Span"})," to set custom trace attributes and events:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'@GetApi(\'/greeting/:name\')\nstatic async greetingEndpoint(ctx: HandlerContext, @ArgSource(ArgSources.URL) name: string) {\n  ctx.span.setAttributes({\n    key1: "value1",\n    key2: "value2",\n  });\n\n  ctx.span.addEvent("Greeting event", { attribute: "value" });\n\n  return `Greeting, ${name}`;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Under the hood, ",(0,r.jsx)(n.code,{children:"ctx.span"})," is implemented by the ",(0,r.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-sdk-trace-base",children:"OpenTelemetry NodeJS SDK"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"configuring-otlp-exporters",children:"Configuring OTLP exporters"}),"\n",(0,r.jsx)(n.p,{children:"You can configure OTLP endpoints for logs and traces:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"...\ntelemetry:\n  OTLPExporter:\n    tracesEndpoint: 'http://localhost:4318/v1/traces'\n    logsEndpoint: 'http://localhost:4318/v1/logs'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Try it out with a local ",(0,r.jsx)(n.a,{href:"https://jaegertracing.io/",children:"Jaeger"})," instance!"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(7294);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);