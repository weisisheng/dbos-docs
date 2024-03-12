"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[3202],{1690:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=a(5893),t=a(1151);const i={sidebar_position:2,title:"DBOS Cloud Quickstart"},s="DBOS Cloud Quickstart",r={id:"getting-started/quickstart-cloud",title:"DBOS Cloud Quickstart",description:"Here's how to deploy a DBOS application to the cloud in a few minutes!",source:"@site/docs/getting-started/quickstart-cloud.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-cloud",permalink:"/getting-started/quickstart-cloud",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"DBOS Cloud Quickstart"},sidebar:"tutorialSidebar",previous:{title:"DBOS SDK Quickstart",permalink:"/getting-started/quickstart"},next:{title:"Programming Quickstart",permalink:"/getting-started/quickstart-programming"}},d={},c=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"Registration",id:"registration",level:3},{value:"Provisioning a Database Instance",id:"provisioning-a-database-instance",level:3},{value:"Registering and Deploying an Application",id:"registering-and-deploying-an-application",level:3},{value:"Going Back to Square One",id:"going-back-to-square-one",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"dbos-cloud-quickstart",children:"DBOS Cloud Quickstart"}),"\n",(0,o.jsx)(n.p,{children:"Here's how to deploy a DBOS application to the cloud in a few minutes!"}),"\n",(0,o.jsx)(n.h3,{id:"preliminaries",children:"Preliminaries"}),"\n",(0,o.jsxs)(n.p,{children:["We assume you've already completed the ",(0,o.jsx)(n.a,{href:"/getting-started/quickstart",children:"quickstart"}),".\nBefore starting this tutorial, instantiate a new DBOS application and ",(0,o.jsx)(n.code,{children:"cd"})," into it by running the following commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx -y @dbos-inc/dbos-sdk@latest init -n <app-name>\ncd <app-name>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command creates a new DBOS application with your chosen application name in the ",(0,o.jsx)(n.code,{children:"<app-name>"})," directory.\nApplication names should be between 3 and 30 characters and must contain only lowercase letters and numbers, dashes (",(0,o.jsx)(n.code,{children:"-"}),"), and underscores (",(0,o.jsx)(n.code,{children:"_"}),")."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The DBOS Cloud CLI uses the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@dbos-inc/dbos-cloud",children:(0,o.jsx)(n.code,{children:"dbos-cloud"})})," npm package.\nTo install the latest version, run ",(0,o.jsx)(n.code,{children:"npm install @dbos-inc/dbos-cloud@latest"})," in your package root.\nFor a complete reference, see ",(0,o.jsx)(n.a,{href:"/api-reference/cloud-cli",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"registration",children:"Registration"}),"\n",(0,o.jsx)(n.p,{children:"Let's start by creating a DBOS Cloud account.\nFrom your DBOS application directory, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npx dbos-cloud register -u <username>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["User names should be between 3 and 30 characters and must contain only lowercase letters, numbers, and underscores (",(0,o.jsx)(n.code,{children:"_"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["When you run the command, it will ask you for some information, then redirect you to a secure login portal.\nOpen the login portal in your browser and click ",(0,o.jsx)(n.code,{children:"Confirm"}),", then create a new account (or log in to your account if you've already created one through our ",(0,o.jsx)(n.a,{href:"https://dbos.dev",children:"website"}),").\nAfter you're done, go back to the terminal.\nIf everything's working, the command should succeed and print ",(0,o.jsx)(n.code,{children:"<username> successfully registered!"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["When you log in to DBOS Cloud from an application, a token with your login information is stored in the ",(0,o.jsx)(n.code,{children:".dbos/"})," directory in your application package root."]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If you register with an email and password, you also need to verify your email through a link we email you."})}),"\n",(0,o.jsx)(n.h3,{id:"provisioning-a-database-instance",children:"Provisioning a Database Instance"}),"\n",(0,o.jsxs)(n.p,{children:["Next, let's provision a Postgres database instance your applications can connect to!\nYou should choose a database instance name, username and password.\nBoth the database instance name and username must be between 3 and 30 characters and contain only lowercase letters and numbers, dashes (",(0,o.jsx)(n.code,{children:"-"}),"), and underscores (",(0,o.jsx)(n.code,{children:"_"}),").\nThe database password must contain 8 or more characters.\nRun this command and choose your database password when prompted (it should take ~5 minutes to provision):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npx dbos-cloud db provision <database-instance-name> -U <database-username>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If successful, the command should print ",(0,o.jsx)(n.code,{children:"Database successfully provisioned!"}),".\nFor more information on cloud database management, check out ",(0,o.jsx)(n.a,{href:"/cloud-tutorials/database-management",children:"our guide"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["The Postgres database instance you just provisioned is a physical server that can host multiple independent databases for different applications.\nYou can define which database your application uses through the ",(0,o.jsx)(n.code,{children:"app_db_name"})," field in its ",(0,o.jsx)(n.a,{href:"/api-reference/configuration#database",children:(0,o.jsx)(n.code,{children:"dbos-config.yaml"})}),".\nDBOS Cloud automatically creates your application database and applies your schema migrations when you deploy an application."]}),(0,o.jsx)(n.p,{children:'In this documentation, we use "database instance" or "database server" to refer to the physical server and "database" to refer to the application database.'})]}),"\n",(0,o.jsx)(n.h3,{id:"registering-and-deploying-an-application",children:"Registering and Deploying an Application"}),"\n",(0,o.jsx)(n.p,{children:"Now, we're ready to register and deploy your application to DBOS Cloud!\nFirst, register your application by running this command, using your database instance name from the last step:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npx dbos-cloud app register -d <database-instance-name>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If successful, the command should print ",(0,o.jsx)(n.code,{children:"Successfully registered <app-name>!"})]}),"\n",(0,o.jsx)(n.p,{children:"Now, deploy your application to run it in the cloud!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npx dbos-cloud app deploy\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If successful, the command will print ",(0,o.jsx)(n.code,{children:"Successfully deployed <app-name>! Access your application at <URL>"}),"\nThe URL should look like ",(0,o.jsx)(n.code,{children:"https://<username>-<app-name>.cloud.dbos.dev/"}),"\nYour application is now live at that URL!\nIf you ever forget the URL, you can retrieve it (and some other information) by running ",(0,o.jsx)(n.code,{children:"npx dbos-cloud app status"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To see that your app is working, visit ",(0,o.jsx)(n.code,{children:"<URL>/greeting/dbos"})," in your browser.\nFor example, if your username is ",(0,o.jsx)(n.code,{children:"mike"})," and your app name is ",(0,o.jsx)(n.code,{children:"hello"}),", visit ",(0,o.jsx)(n.code,{children:"https://mike-hello.cloud.dbos.dev/greeting/dbos"}),".\nJust like in the ",(0,o.jsx)(n.a,{href:"/getting-started/quickstart",children:"quickstart"}),", you should get this message: ",(0,o.jsx)(n.code,{children:"Hello, dbos! You have been greeted 1 times."})," Each time you refresh the page, the counter should go up by one!"]}),"\n",(0,o.jsx)(n.p,{children:"Congratulations, you've successfully deployed your first application to DBOS Cloud!"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You don't have to worry about changing database server connection parameters like ",(0,o.jsx)(n.code,{children:"hostname"})," or ",(0,o.jsx)(n.code,{children:"password"})," in ",(0,o.jsx)(n.a,{href:"/api-reference/configuration",children:(0,o.jsx)(n.code,{children:"dbos-config.yaml"})})," to deploy an application to the cloud\u2014DBOS automatically applies the connection information of your cloud database instance."]})}),"\n",(0,o.jsx)(n.h3,{id:"going-back-to-square-one",children:"Going Back to Square One"}),"\n",(0,o.jsx)(n.p,{children:"To stop and delete your application, you can run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npx dbos-cloud app delete <app-name>\n"})}),"\n",(0,o.jsx)(n.p,{children:"After deleting your app, if you'd like to erase your database instance, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npx dbos-cloud db destroy <database-name>\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Take care\u2014this will irreversibly delete all data in the database instance."})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var o=a(7294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);