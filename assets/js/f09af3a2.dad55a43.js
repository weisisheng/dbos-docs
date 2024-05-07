"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[6077],{9719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(5893),o=t(1151);const a={sidebar_position:3,title:"Time Travel Debugging",description:"Learn how to time travel debug DBOS Cloud applications"},r=void 0,s={id:"cloud-tutorials/timetravel-debugging",title:"Time Travel Debugging",description:"Learn how to time travel debug DBOS Cloud applications",source:"@site/docs/cloud-tutorials/timetravel-debugging.md",sourceDirName:"cloud-tutorials",slug:"/cloud-tutorials/timetravel-debugging",permalink:"/cloud-tutorials/timetravel-debugging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Time Travel Debugging",description:"Learn how to time travel debug DBOS Cloud applications"},sidebar:"tutorialSidebar",previous:{title:"Cloud Application Management",permalink:"/cloud-tutorials/application-management"},next:{title:"Interactive Time Travel",permalink:"/cloud-tutorials/interactive-timetravel"}},d={},l=[{value:"Time Travel with Visual Studio Code",id:"time-travel-with-visual-studio-code",level:2},{value:"Preliminaries",id:"preliminaries",level:3},{value:"Launching a Debug Session",id:"launching-a-debug-session",level:3},{value:"Debugging from a CodeLens",id:"debugging-from-a-codelens",level:4},{value:"Debugging from the Run and Debug View",id:"debugging-from-the-run-and-debug-view",level:4},{value:"Debugging from the Monitoring Dashboard",id:"debugging-from-the-monitoring-dashboard",level:4},{value:"Manually entering the Workflow ID to debug",id:"manually-entering-the-workflow-id-to-debug",level:4},{value:"Time Travel Database Queries",id:"time-travel-database-queries",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Time Travel with DBOS CLI (Non-VS Code Users)",id:"time-travel-with-dbos-cli-non-vs-code-users",level:2},{value:"Manual Setup",id:"manual-setup",level:3},{value:"Replay a Workflow",id:"replay-a-workflow",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this guide, you'll learn how to time travel debug your production applications deployed on DBOS Cloud."}),"\n",(0,i.jsx)(n.p,{children:'DBOS Cloud automatically records every step a DBOS application takes and every change it makes in the database.\nThe Time Travel Debugger uses this information to "rewind time" and project database state as it existed when a selected workflow originally ran.\nDevelopers can step through past executions and add print statements or database read queries to them and they\'ll return results as if they ran in the past!'}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"For Free Tier DBOS applications, time travel debug information is only kept for 3 days."})}),"\n",(0,i.jsx)(n.h2,{id:"time-travel-with-visual-studio-code",children:"Time Travel with Visual Studio Code"}),"\n",(0,i.jsx)(n.h3,{id:"preliminaries",children:"Preliminaries"}),"\n",(0,i.jsxs)(n.p,{children:["Before following the steps in this guide, make sure you've ",(0,i.jsx)(n.a,{href:"application-management",children:"deployed an application to DBOS Cloud"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Time travel debugging uses ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," and the\n",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbos-inc.dbos-ttdbg",children:"DBOS Time Travel Debugger Extension"}),".\nThe extension can be installed from the link above or by searching the\n",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/extension-marketplace",children:"Extension Marketplace"}),'\ninside VS Code for "DBOS"']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Installing the DBOS Time Travel Extension Screenshot",src:t(1950).Z+"",width:"1286",height:"686"})}),"\n",(0,i.jsx)(n.p,{children:"Once installed, the DBOS Time Travel Extension will automatically update as new releases are published to the VS Code Marketplace."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you're not a VS Code user, please see the section below on ",(0,i.jsx)(n.a,{href:"#time-travel-with-dbos-cli-non-vs-code-users",children:"Time Travel Debugging with the DBOS CLI"})," below."]})}),"\n",(0,i.jsx)(n.h3,{id:"launching-a-debug-session",children:"Launching a Debug Session"}),"\n",(0,i.jsxs)(n.p,{children:["The scaffold project generated by ",(0,i.jsx)(n.a,{href:"../getting-started/quickstart#project-initialization",children:(0,i.jsx)(n.code,{children:"npx @dbos-inc/create"})})," includes VS Code\nconfiguration files to time travel debug your DBOS application. The time travel debugger can be launched via VS Code's normal\n",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_run-and-debug-view",children:"Run and Debug View"})," or via a custom\n",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/blogs/2017/02/12/code-lens-roundup",children:"CodeLens"})," provided by the DBOS Time Travel Debugger Extension."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The scaffold project also includes local debugging configuration that can be used during initial development.\nTime Travel debugging is only supported for applications that have been deployed to DBOS cloud."})}),"\n",(0,i.jsx)(n.h4,{id:"debugging-from-a-codelens",children:"Debugging from a CodeLens"}),"\n",(0,i.jsxs)(n.p,{children:['When you open your DBOS application in VS Code, the  DBOS Time Travel Debugger extension inserts a "\u23f3 Time Travel Debug"\nCodeLens to every DBOS ',(0,i.jsx)(n.a,{href:"../tutorials/workflow-tutorial",children:"workflow"}),",\n",(0,i.jsx)(n.a,{href:"../tutorials/transaction-tutorial",children:"transaction"}),"\nand ",(0,i.jsx)(n.a,{href:"../tutorials/communicator-tutorial",children:"communicator"})," function in your DBOS application."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DBOS Time Travel CodeLens Screenshot",src:t(6785).Z+"",width:"2122",height:"410"})}),"\n",(0,i.jsx)(n.p,{children:"When you click on the Time Travel Debug CodeLens, you are provided with a list of recent executions of that function to debug."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DBOS Time Travel Workflow ID picker",src:t(5155).Z+"",width:"1812",height:"876"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In the upper right hand corner of the workflow picker, there are buttons to manually enter a workflow ID or to\nselect a workflow to debug via your ",(0,i.jsx)(n.a,{href:"./monitoring-dashboard",children:"monitoring Dashboard"}),".\nMore details on those options below."]})}),"\n",(0,i.jsxs)(n.p,{children:["After selecting a recent execution of your function, the DBOS Time Travel Debugger will launch the DBOS debug runtime\nand VS Code TypeScript debugger. This allows you to debug your DBOS application against the database as it existed\nat the time the selected workflow originally executed.\nOther than using time travel database state, the debugging experience for your DBOS application is just like debugging any other TypeScript application in VS Code.\nYou can ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_breakpoints",children:"set breakpoints"}),",\n",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_data-inspection",children:"inspect variables"})," and\n",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_debug-actions",children:"step through your code"})," as you would expect."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DBOS Time Travel Debugging",src:t(369).Z+"",width:"2890",height:"1524"})}),"\n",(0,i.jsx)(n.h4,{id:"debugging-from-the-run-and-debug-view",children:"Debugging from the Run and Debug View"}),"\n",(0,i.jsxs)(n.p,{children:["You can also debug your DBOS application via ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging",children:"VS Code's Start Debugging command"}),".\nThe extension includes ",(0,i.jsx)(n.a,{href:"http://localhost:3000/api-reference/time-travel-debugger#command-variables",children:"command variables"})," that can\nbe used in the launch configuration file."]}),"\n",(0,i.jsxs)(n.p,{children:["When debugging this way, the ",(0,i.jsx)(n.code,{children:"pick-workflow-id"})," command variable is used to select a recent execution of your cloud application to debug.\nThis is similar to the CodeLens experience described above, except that the list of workflow executions is not filtered to the executions\nof a single function."]}),"\n",(0,i.jsx)(n.h4,{id:"debugging-from-the-monitoring-dashboard",children:"Debugging from the Monitoring Dashboard"}),"\n",(0,i.jsxs)(n.p,{children:["You can launch the Time Travel Debugger directly from the ",(0,i.jsx)(n.a,{href:"./monitoring-dashboard#time-travel-debugging",children:"Monitoring Dashboard"}),'.\nClicking on the dashboard button in the workflow picker brings you directly to the Monitoring Dashboard. From there, you\ncan use the dashboard\'s filtering capabilities to find the workflow you want to time travel debug. Once you find the\ndesired workflow execution, click on the value in the workflow uuid column and select "Debug this Workflow" from the menu.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Debug this workflow menu",src:t(5219).Z+"",width:"950",height:"204"})}),"\n",(0,i.jsx)(n.h4,{id:"manually-entering-the-workflow-id-to-debug",children:"Manually entering the Workflow ID to debug"}),"\n",(0,i.jsx)(n.p,{children:"If you already know the workflow ID of the execution you want to debug, press the edit button in the workflow picker\nand you are provided a place to enter that workflow ID directly."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Debug this workflow menu",src:t(1643).Z+"",width:"1790",height:"252"})}),"\n",(0,i.jsx)(n.h3,{id:"time-travel-database-queries",children:"Time Travel Database Queries"}),"\n",(0,i.jsx)(n.p,{children:'DBOS Cloud automatically records every step a DBOS application takes and every change it makes in the database.\nThe Time Travel Debugger uses this information to "rewind time" and project database state as it existed when a selected workflow originally ran.\nDevelopers can step through past executions and add print statements or database read queries to them and they\'ll return results as if they ran in the past!'}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"When time travel debugging, you can freely add read queries to your application and observe their results when run against past database state, but do not add or modify database queries that write to the database such as insert/delete/update SQL statements; otherwise, the query results may be incorrect.\nDBOS will support such changes in the future."})}),"\n",(0,i.jsxs)(n.p,{children:["For example, here is an transaction function from the ",(0,i.jsx)(n.a,{href:"../tutorials/transaction-tutorial",children:"Transactions tutorial"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'export class Hello {\n  @Transaction()  // Run this function as a database transaction\n  static async helloTransaction(ctxt: TransactionContext<Knex>, user: string) {\n    // Retrieve and increment the number of times this user has been greeted.\n    const rows = await ctxt.client<dbos_hello>("dbos_hello")\n      .insert({ name: user, greet_count: 1 })\n      .onConflict("name") // If user is already present, increment greet_count.\n        .merge({ greet_count: ctxt.client.raw(\'dbos_hello.greet_count + 1\') })\n      .returning("greet_count");\n    const greet_count = rows[0].greet_count;\n    return `Hello, ${user}! You have been greeted ${greet_count} times.\\n`;\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"We can add queries to the function to retrieve past database states.\nFor example, the following code block adds queries to retrieve the user's greet count before and after it gets updated."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Don't forget to rebuild your DBOS application with ",(0,i.jsx)(n.code,{children:"npm run build"})," before running it in the debugger."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'export class Hello {\n\n  @Transaction()  // Run this function as a database transaction\n  static async helloTransaction(ctxt: TransactionContext<Knex>, user: string) {\n\n    const before = await ctxt.client<dbos_hello>("dbos_hello")\n        .select("greet_count")\n        .where("name", user)\n        .first();\n\n    // Retrieve and increment the number of times this user has been greeted.\n    const rows = await ctxt.client<dbos_hello>("dbos_hello")\n      .insert({ name: user, greet_count: 1 })\n      .onConflict("name") // If user is already present, increment greet_count.\n        .merge({ greet_count: ctxt.client.raw(\'dbos_hello.greet_count + 1\') })\n      .returning("greet_count");\n    const greet_count = rows[0].greet_count;\n\n    const after = await ctxt.client<dbos_hello>("dbos_hello")\n        .select("greet_count")\n        .where("name", user)\n        .first();\n\n    return `Hello, ${user}! You have been greeted ${greet_count} times.\\n`;\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When this updated code is run in the debugger, we can inspect the new ",(0,i.jsx)(n.code,{children:"before"})," and ",(0,i.jsx)(n.code,{children:"after"})," variables to see past database state."]}),"\n",(0,i.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.p,{children:"Currently, the time travel debugger supports stepping through any past workflows and most transactions, but has a few limitations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DBOS will compare debug function output to the function's originally recorded output.\nIf they do not match, the debug session will halt with an error."}),"\n",(0,i.jsx)(n.li,{children:"DBOS will allow you to step thru transaction functions that aborted when originally executed, but will always throw their recorded errors\nregardless of what the function returned during debugging. This allows consistent execution under the debugger for\ndatabase errors that were caused by non-deterministic factors (e.g., database lock contentions)."}),"\n",(0,i.jsx)(n.li,{children:"DBOS debugger exclusively uses recorded outputs for communicators without providing an opportunity to step through the code,\nbecause communicators may contain unexpected side effects.\nFor example, if a communicator sent an email to the user at run time, an email would not be sent out during debugging sessions."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,i.jsxs)(n.p,{children:["For more information, please read the ",(0,i.jsx)(n.a,{href:"../api-reference/time-travel-debugger",children:"debugger extension reference"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"time-travel-with-dbos-cli-non-vs-code-users",children:"Time Travel with DBOS CLI (Non-VS Code Users)"}),"\n",(0,i.jsx)(n.p,{children:"For non-VS Code users, you can run the time-travel debugger manually through the DBOS CLI."}),"\n",(0,i.jsx)(n.h3,{id:"manual-setup",children:"Manual Setup"}),"\n",(0,i.jsx)(n.p,{children:'The time travel debugger requires our debug proxy to transform database queries so that it can "travel" back in time.\nYou can download the pre-compiled debug proxy using the following link. Please choose the one based on your operating system and hardware platform:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dbos-releases.s3.us-east-2.amazonaws.com/debug-proxy/1.1.7/debug-proxy-macos-x64-1.1.7.zip",children:"Download for macOS (Intel Chip)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dbos-releases.s3.us-east-2.amazonaws.com/debug-proxy/1.1.7/debug-proxy-macos-arm64-1.1.7.zip",children:"Download for macOS (Apple Chip)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dbos-releases.s3.us-east-2.amazonaws.com/debug-proxy/1.1.7/debug-proxy-linux-x64-1.1.7.zip",children:"Download for Linux (x86_64)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dbos-releases.s3.us-east-2.amazonaws.com/debug-proxy/1.1.7/debug-proxy-linux-arm64-1.1.7.zip",children:"Download for Linux (arm)"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After downloading the file, unzip it and make the ",(0,i.jsx)(n.code,{children:"debug-proxy"})," file executable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd <Your Download Folder>/\nchmod +x debug-proxy\n./debug-proxy -db <app database name>_dbos_prov -host <app cloud database hostname>  -password <database password> -user <database username>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:['For macOS users, you may see a pop-up window: "\u201cdebug-proxy\u201d is an app downloaded from the Internet. Are you sure you want to open it?" Please click ',(0,i.jsx)(n.code,{children:"Open"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"replay-a-workflow",children:"Replay a Workflow"}),"\n",(0,i.jsx)(n.p,{children:"Open another terminal window, enter your application folder, compile your code, and replay a workflow using the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd <Your App Folder>/\nnpm run build\nnpx dbos debug -u <workflow UUID>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Every time you modify your code, you need to recompile it before running the ",(0,i.jsx)(n.code,{children:"dbos debug"})," command again."]})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the debug command, please see our ",(0,i.jsx)(n.a,{href:"/api-reference/cli#npx-dbos-debug",children:"references"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5219:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dash-debug-wf-31d52a95d661e7bd7c23eaf7fe314e44.png"},6785:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ttdbg-code-lens-315705fa566b37b0420fe327d22c6554.png"},369:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ttdbg-debugging-dd74bc4d38d69ba7bc479f1e5cf0ba7c.png"},1950:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ttdbg-ext-install-575f07f6c0cee80494d08515fdcde4ab.png"},1643:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ttdbg-wfid-manual-017ce1d507e4691fd0c1e9156c589c64.png"},5155:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ttdbg-wfid-quick-pick-e84f9aa28b9c988dae62b93d9c69863d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(7294);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);