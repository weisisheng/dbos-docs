"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[9216],{5554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var i=s(5893),o=s(1151);const d={sidebar_position:1,title:"Cloud CLI",description:"DBOS Cloud CLI reference"},a=void 0,t={id:"api-reference/cloud-cli",title:"Cloud CLI",description:"DBOS Cloud CLI reference",source:"@site/docs/api-reference/cloud-cli.md",sourceDirName:"api-reference",slug:"/api-reference/cloud-cli",permalink:"/api-reference/cloud-cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Cloud CLI",description:"DBOS Cloud CLI reference"},sidebar:"tutorialSidebar",previous:{title:"SDK CLI",permalink:"/api-reference/cli"},next:{title:"Configuration",permalink:"/api-reference/configuration"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"User Management Commands",id:"user-management-commands",level:2},{value:"<code>npx dbos-cloud register</code>",id:"npx-dbos-cloud-register",level:3},{value:"<code>npx dbos-cloud login</code>",id:"npx-dbos-cloud-login",level:3},{value:"<code>npx dbos-cloud logout</code>",id:"npx-dbos-cloud-logout",level:3},{value:"Database Instance Management Commands",id:"database-instance-management-commands",level:2},{value:"<code>npx dbos-cloud db provision</code>",id:"npx-dbos-cloud-db-provision",level:3},{value:"<code>npx dbos-cloud db list</code>",id:"npx-dbos-cloud-db-list",level:3},{value:"<code>npx dbos-cloud db status</code>",id:"npx-dbos-cloud-db-status",level:3},{value:"<code>npx dbos-cloud db destroy</code>",id:"npx-dbos-cloud-db-destroy",level:3},{value:"Application Management Commands",id:"application-management-commands",level:2},{value:"<code>npx dbos-cloud app register</code>",id:"npx-dbos-cloud-app-register",level:3},{value:"<code>npx dbos-cloud app deploy</code>",id:"npx-dbos-cloud-app-deploy",level:3},{value:"<code>npx dbos-cloud app delete</code>",id:"npx-dbos-cloud-app-delete",level:3},{value:"<code>npx dbos-cloud app list</code>",id:"npx-dbos-cloud-app-list",level:3},{value:"<code>npx dbos-cloud app status</code>",id:"npx-dbos-cloud-app-status",level:3},{value:"<code>npx dbos-cloud app logs</code>",id:"npx-dbos-cloud-app-logs",level:3}];function r(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The DBOS Cloud CLI helps you serverlessly run your applications on DBOS Cloud."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"To install the latest Cloud CLI version for your application, run the following command in your package root:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm install @dbos-inc/dbos-cloud@latest\n"})}),"\n",(0,i.jsx)(n.h2,{id:"user-management-commands",children:"User Management Commands"}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-register",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud register"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command creates and registers a new DBOS Cloud account.\nIt provides a URL to a secure login portal you can use to create an account from your browser."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-u, --username <string>"}),": Your DBOS Cloud username. Must contain only lowercase letters, numbers, and underscores (",(0,i.jsx)(n.code,{children:"_"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If you register with an email and password, you also need to verify your email through a link we email you."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-login",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud login"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command logs you in to your DBOS Cloud account.\nIt provides a URL to a secure login portal you can use to authenticate from your browser."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-logout",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud logout"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command logs you out of your DBOS Cloud account."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"database-instance-management-commands",children:"Database Instance Management Commands"}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-db-provision",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud db provision"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command provisions a Postgres database instance to which your applications can connect."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<database-instance-name>"}),": The name of the database instance to provision."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-a, --admin <string>"}),": The administrator username for this database instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-W, --password <string>"}),": The administrator password for this database instance."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-db-list",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud db list"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command lists all Postgres database instances provisioned by your account."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--json"}),": Emit JSON output"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Output:"}),"\nFor each provisioned Postgres database instance, emit:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PostgresInstanceName"}),": The name of this database instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HostName"}),": The hostname of this database instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Port"}),": The connection port for this database instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Status"}),": The current status of this database instance (available or unavailable)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AdminUsername"}),": The administrator username for this database instance."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-db-status",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud db status"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command retrieves the status of a Postgres database instance"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<database-instance-name>"}),": The name of the database instance whose status to retrieve."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--json"}),": Emit JSON output"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PostgresInstanceName"}),": The name of the database instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HostName"}),": The hostname of the database instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Port"}),": The connection port for the database instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Status"}),": The current status of the database instance (available or unavailable)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AdminUsername"}),": The administrator username for the database instance."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-db-destroy",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud db destroy"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command destroys a previously-provisioned Postgres database instance."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<database-instance-name>"}),": The name of the database instance whose status to retrieve."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"application-management-commands",children:"Application Management Commands"}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-app-register",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud app register"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command must be run from an application root directory.\nIt registers that application with DBOS Cloud."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-d, --database <string>"}),": The name of the Postgres database instance to which this application will connect."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-app-deploy",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud app deploy"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command must be run from an application root directory.\nIt deploys the application to DBOS Cloud and emits the URL at which the application is hosted, which is ",(0,i.jsx)(n.code,{children:"https://cloud.dbos.dev/apps/<username>/<application-name>"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-app-delete",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud app delete"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[application-name]"}),": The name of the application to delete."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nDelete an application from DBOS Cloud.\nIf run in an application root directory with no application name provided, delete the local application."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-app-list",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud app list"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nList all applications you have registered with DBOS Cloud."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--json"}),": Emit JSON output"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Output:"}),"\nFor each registered application, emit:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"}),": The name of this application"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ID"}),": The unique ID DBOS Cloud assigns to this application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PostgresInstanceName"}),": The Postgres database instance to which this application is connected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ApplicationDatabaseName"}),": The database on this instance on which this application stores data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Status"}),": The current status of this application (available or unavailable)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Version"}),": The currently deployed version of this application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AppURL"}),": The URL at which the application is hosted."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-app-status",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud app status"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[application-name]"}),": The name of the application to retrieve."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nRetrieve an application's status.\nIf run in an application root directory with no application name provided, retrieve the local application's status."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--json"}),": Emit JSON output"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"}),": The name of this application"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ID"}),": The unique ID DBOS Cloud assigns to this application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PostgresInstanceName"}),": The Postgres database instance to which this application is connected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ApplicationDatabaseName"}),": The database on this instance on which this application stores data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Status"}),": The current status of this application (available or unavailable)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Version"}),": The currently deployed version of this application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AppURL"}),": The URL at which the application is hosted."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"npx-dbos-cloud-app-logs",children:(0,i.jsx)(n.code,{children:"npx dbos-cloud app logs"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),"\nThis command must be run from an application root directory.\nIt retrieves that application's logs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-l, --last <integer>"}),": How far back to query, in seconds from current time. By default, retrieve all data."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>a});var i=s(7294);const o={},d=i.createContext(o);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);