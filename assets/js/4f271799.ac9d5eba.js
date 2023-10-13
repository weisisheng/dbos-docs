"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,title:"Operon Configuration"},i=void 0,l={unversionedId:"api-reference/configuration",id:"api-reference/configuration",title:"Operon Configuration",description:"The configuration file informs the Operon runtime how to run an application.",source:"@site/docs/api-reference/configuration.md",sourceDirName:"api-reference",slug:"/api-reference/configuration",permalink:"/api-reference/configuration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Operon Configuration"},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/category/api-reference"},next:{title:"Operon CLI",permalink:"/api-reference/cli"}},p={},s=[{value:"Database",id:"database",level:3},{value:"Telemetry",id:"telemetry",level:3},{value:"Logs",id:"logs",level:4},{value:"Traces",id:"traces",level:4},{value:"localRuntimeConfig",id:"localruntimeconfig",level:3},{value:"application",id:"application",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The configuration file informs the Operon runtime how to run an application.\nBy default it is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"operon-config.yaml")," in the project root directory, but this is configurable through the ",(0,r.kt)("a",{parentName:"p",href:"./cli"},"CLI"),"."),(0,r.kt)("p",null,"Operon config files are YAML files.\nValues can be provided as strings or from environment variables using the syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"key: ${VALUE}"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"The database configuration is used to set up the connection to the database.\nOperon currently only supports Postgres-compatible databases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hostname"),": The hostname or IP address of the application database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"port"),": The database port."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),": The username with which to connect to the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),": The password with which to connect to the database.  We strongly recommend storing this in an environment variable as shown below, instead of plain text.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"connectionTimeoutMillis"),": The database connection timeout."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"user_database"),": The name of the application database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"system_database"),": The name of a database to which Operon can write system data.  Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"operon_systemdb"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ssl_ca"),": If using SSL/TLS to securely connect to a database, path to an SSL root certificate file.  Equivalent to the ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/libpq-ssl.html"},(0,r.kt)("inlineCode",{parentName:"a"},"sslrootcert"))," connection parameter in ",(0,r.kt)("inlineCode",{parentName:"li"},"psql"),".  Defaults to not using SSL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"user_dbclient"),": Specify which client to use to connect to the application database. Must be one of ",(0,r.kt)("inlineCode",{parentName:"li"},"knex"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"prisma"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"typeorm"),".  Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"knex"),".  The client specified here is the one used in ",(0,r.kt)("a",{parentName:"li",href:".."},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionContext")),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"database:\n  hostname: 'localhost'\n  port: 5432\n  username: 'postgres'\n  password: ${PGPASSWORD}\n  user_database: 'hello'\n  system_database: 'hello_systemdb'\n  connectionTimeoutMillis: 3000\n  user_dbclient: 'knex'\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"telemetry"},"Telemetry"),(0,r.kt)("p",null,"You can use the configuration file to tune the behavior of Operon logging and tracing facilities.\nNote all this options are optional and will, if not specified, use the default values indicated in the example bellow."),(0,r.kt)("h4",{id:"logs"},"Logs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"loglevel"),": A filter on what logs should be printed to the standard output."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"addContextMetadata"),": Enables the addition of contextual information, such as workflow UUID, to each log entries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent"),": Silences the logger such that nothing is printed to the standard output.")),(0,r.kt)("h4",{id:"traces"},"Traces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enable"),": Whether or not to export traces in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-proto/blob/main/docs/specification.md"},"OTLP format"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"endpoint"),": The FQDN of a ",(0,r.kt)("a",{parentName:"li",href:"https://Jaegertracing.io"},"Jaeger")," endpoint.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"telemetry:\n  logs:\n    loglevel: info (default) | debug | warn | emerg | alert | crit | error\n    addContextMetadata: true (default) | false\n    silent: false (default) | true\n  traces:\n    enable: true (default) | false\n    endpoint: http://localhost:4318/v1/traces (default)\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localruntimeconfig"},"localRuntimeConfig"),(0,r.kt)("p",null,"This configuration is used to specify runtime parameters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"port"),": The port from which to serve the application. If the port is also specified on the command line by ",(0,r.kt)("a",{parentName:"li",href:"./cli#npx-operon-start"},(0,r.kt)("inlineCode",{parentName:"a"},"npx operon start")),", use that port instead.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"localRuntimeConfig:\n  port: 6000\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"application"},"application"),(0,r.kt)("p",null,"The application configuration is used to define custom properties as key-value pairs.\nThese can be retrieved from any ",(0,r.kt)("a",{parentName:"p",href:"./contexts"},"context")," via the ",(0,r.kt)("a",{parentName:"p",href:".."},(0,r.kt)("inlineCode",{parentName:"a"},"getConfig"))," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"application:\n    PAYMENTS_SERVICE: 'http://stripe.com/payment'\n")))}m.isMDXComponent=!0}}]);