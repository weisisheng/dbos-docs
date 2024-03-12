"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[7608],{1564:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=i(5893),s=i(1151);const o={sidebar_position:1,title:"SDK CLI",description:"DBOS CLI reference"},t=void 0,d={id:"api-reference/cli",title:"SDK CLI",description:"DBOS CLI reference",source:"@site/docs/api-reference/cli.md",sourceDirName:"api-reference",slug:"/api-reference/cli",permalink:"/api-reference/cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SDK CLI",description:"DBOS CLI reference"},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/category/reference"},next:{title:"Cloud CLI",permalink:"/api-reference/cloud-cli"}},c={},l=[{value:"Commands",id:"commands",level:2},{value:"<code>npx dbos-sdk start</code>",id:"npx-dbos-sdk-start",level:3},{value:"<code>npx dbos-sdk init</code>",id:"npx-dbos-sdk-init",level:3},{value:"<code>npx dbos-sdk migrate</code>",id:"npx-dbos-sdk-migrate",level:3},{value:"<code>npx dbos-sdk rollback</code>",id:"npx-dbos-sdk-rollback",level:3},{value:"<code>npx dbos-sdk debug</code>",id:"npx-dbos-sdk-debug",level:3},{value:"<code>npx dbos-openapi generate</code>",id:"npx-dbos-openapi-generate",level:3}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The DBOS SDK CLI helps you run DBOS applications locally."}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"npx-dbos-sdk-start",children:(0,r.jsx)(n.code,{children:"npx dbos-sdk start"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description:"}),(0,r.jsx)(n.br,{}),"\n","This command launches the DBOS runtime and HTTP server to serve an application.\nIt registers all functions and serves all endpoints in classes exported from the specified entrypoint file (typically ",(0,r.jsx)(n.code,{children:"src/operations.ts"}),").\nParameters set from the command line take precedence over parameters set in the ",(0,r.jsx)(n.a,{href:"./configuration",children:"configuration file"}),".\nYou must compile your code (",(0,r.jsx)(n.code,{children:"npm run build"}),") before running this command."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-p, --port <port-number>"}),": The port on which to serve your functions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-l, --loglevel <log-level>"}),": The severity of log entries emitted. Can be one of ",(0,r.jsx)(n.code,{children:"debug"}),", ",(0,r.jsx)(n.code,{children:"info"}),", ",(0,r.jsx)(n.code,{children:"warn"}),", ",(0,r.jsx)(n.code,{children:"error"}),", ",(0,r.jsx)(n.code,{children:"emerg"}),", ",(0,r.jsx)(n.code,{children:"crit"}),", ",(0,r.jsx)(n.code,{children:"alert"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-c, --configfile <config-file>"}),": The path to a YAML ",(0,r.jsx)(n.a,{href:"./configuration",children:"configuration file"})," to use."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-e, --entrypoint <entrypoint-file>"}),": The path to an ",(0,r.jsx)(n.a,{href:"./configuration",children:"entrypoint file"})," to use."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"npx-dbos-sdk-init",children:(0,r.jsx)(n.code,{children:"npx dbos-sdk init"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description:"}),(0,r.jsx)(n.br,{}),"\n",'This command initializes a new DBOS application from a template into a target directory. By default, it instantiates the "Hello, Database!" application used in the ',(0,r.jsx)(n.a,{href:"../getting-started/quickstart",children:"quickstart"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-n, --appName <app-name>"}),": The name and directory to which to instantiate the application. Application names should be between 3 and 30 characters and must contain only lowercase letters and numbers, dashes (",(0,r.jsx)(n.code,{children:"-"}),"), and underscores (",(0,r.jsx)(n.code,{children:"_"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"npx-dbos-sdk-migrate",children:(0,r.jsx)(n.code,{children:"npx dbos-sdk migrate"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description:"}),"\nRun all migration commands specified in your ",(0,r.jsx)(n.a,{href:"./configuration",children:"configuration file"})," to apply your application's schema to the database."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"npx-dbos-sdk-rollback",children:(0,r.jsx)(n.code,{children:"npx dbos-sdk rollback"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description:"}),"\nRun all rollback commands specified in your ",(0,r.jsx)(n.a,{href:"./configuration",children:"configuration file"})," to roll back the last batch of schema migrations."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"npx-dbos-sdk-debug",children:(0,r.jsx)(n.code,{children:"npx dbos-sdk debug"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description:"}),"\nThis command launches the DBOS runtime in debug mode to replay a specified workflow.\nIt is similar to ",(0,r.jsx)(n.code,{children:"dbos-sdk start"}),", but instead of starting an HTTP server, it replays a single workflow and connects to a locally running DBOS ",(0,r.jsx)(n.a,{href:"/cloud-tutorials/timetravel-debugging#alternative-debug-mode-non-vscode",children:"time travel debug proxy"}),".\nYou must compile your code (",(0,r.jsx)(n.code,{children:"npm run build"}),") and start the debug proxy before running this command."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-u, --uuid <string>"}),": The workflow identity to replay."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-x, --proxy <string>"}),': The time travel debug proxy URL (default: "postgresql://localhost:2345").']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-l, --loglevel <log-level>"}),": The severity of log entries emitted. Can be one of ",(0,r.jsx)(n.code,{children:"debug"}),", ",(0,r.jsx)(n.code,{children:"info"}),", ",(0,r.jsx)(n.code,{children:"warn"}),", ",(0,r.jsx)(n.code,{children:"error"}),", ",(0,r.jsx)(n.code,{children:"emerg"}),", ",(0,r.jsx)(n.code,{children:"crit"}),", ",(0,r.jsx)(n.code,{children:"alert"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-c, --configfile <config-file>"}),": The path to a YAML ",(0,r.jsx)(n.a,{href:"./configuration",children:"configuration file"})," to use."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-e, --entrypoint <entrypoint-file>"}),": The path to an ",(0,r.jsx)(n.a,{href:"./configuration",children:"entrypoint file"})," to use."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"npx-dbos-openapi-generate",children:(0,r.jsx)(n.code,{children:"npx dbos-openapi generate"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description:"}),(0,r.jsx)(n.br,{}),"\n","This command generates an ",(0,r.jsx)(n.a,{href:"https://www.openapis.org/",children:"OpenAPI 3.0.x"})," definition file for a DBOS application.\nThe generated file is named ",(0,r.jsx)(n.code,{children:"openapi.yaml"})," and is saved to the same directory as the TypeScript entrypoint file.\nFor more information, please see the ",(0,r.jsx)(n.a,{href:"/tutorials/openapi-tutorial",children:"OpenAPI Tutorial"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<entrypoint>"}),": Path to the application's TypeScript entrypoint (typically ",(0,r.jsx)(n.code,{children:"src/operations.ts"}),")"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>t});var r=i(7294);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);