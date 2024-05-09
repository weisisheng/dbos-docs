"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[6405],{30:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(5893),t=n(1151);const o={sidebar_position:1,title:"Cloud Database Management",description:"Learn how to manage DBOS Cloud database instances"},i=void 0,r={id:"cloud-tutorials/database-management",title:"Cloud Database Management",description:"Learn how to manage DBOS Cloud database instances",source:"@site/docs/cloud-tutorials/database-management.md",sourceDirName:"cloud-tutorials",slug:"/cloud-tutorials/database-management",permalink:"/cloud-tutorials/database-management",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Cloud Database Management",description:"Learn how to manage DBOS Cloud database instances"},sidebar:"tutorialSidebar",previous:{title:"Cloud Account Management",permalink:"/cloud-tutorials/account-management"},next:{title:"Cloud Application Management",permalink:"/cloud-tutorials/application-management"}},d={},c=[{value:"Provisioning Database Instances",id:"provisioning-database-instances",level:3},{value:"Database Schema Management",id:"database-schema-management",level:3},{value:"Database Recovery",id:"database-recovery",level:3},{value:"Destroying Database Instances",id:"destroying-database-instances",level:3}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"In this guide, you'll learn how to manage database instances in DBOS Cloud."}),"\n",(0,s.jsx)(a.h3,{id:"provisioning-database-instances",children:"Provisioning Database Instances"}),"\n",(0,s.jsx)(a.p,{children:"Before you can deploy an application to DBOS Cloud, you must provision a Postgres database instance for it.\nYou must choose a database instance name, username and password.\nBoth the database instance name and username must be 3 to 16 characters long and contain only lowercase letters, numbers and underscores.\nThe database password must contain 8 or more characters.\nRun this command and choose your database password when prompted:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud db provision <database-instance-name> -U <database-username>\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["A Postgres database instance can host multiple independent databases for different applications.\nYou can configure which database your application uses through the ",(0,s.jsx)(a.code,{children:"app_db_name"})," field in its ",(0,s.jsx)(a.a,{href:"/api-reference/configuration#database",children:(0,s.jsx)(a.code,{children:"dbos-config.yaml"})}),"."]})}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["If you forget your database password, you can always ",(0,s.jsx)(a.a,{href:"/api-reference/cloud-cli#npx-dbos-cloud-db-reset-password",children:"reset it"}),"."]})}),"\n",(0,s.jsx)(a.p,{children:"To see a list of all provisioned instances, run:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud db list\n"})}),"\n",(0,s.jsx)(a.p,{children:"To retrieve the status of a particular instance, run:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud db status <database-instance-name>\n"})}),"\n",(0,s.jsx)(a.h3,{id:"database-schema-management",children:"Database Schema Management"}),"\n",(0,s.jsxs)(a.p,{children:["To manage your applications' database schemas, you must define schema migrations.\nDBOS Cloud is compatible with any schema management tool as long as all its dependencies and assets are stored in your application directory.\nWe recommend using a Typescript-based migration tool like ",(0,s.jsx)(a.a,{href:"https://knexjs.org/guide/migrations.html",children:"Knex"})," or ",(0,s.jsx)(a.a,{href:"https://typeorm.io/migrations",children:"TypeORM"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["You configure your schema migrations in the ",(0,s.jsx)(a.code,{children:"migrate"})," and ",(0,s.jsx)(a.code,{children:"rollback"})," fields of your ",(0,s.jsx)(a.a,{href:"/api-reference/configuration",children:(0,s.jsx)(a.code,{children:"dbos-config.yaml"})}),".\nYou must supply a list of commands to run to migrate to your most recent schema version.\nFor example, if you are using ",(0,s.jsx)(a.a,{href:"https://knexjs.org/guide/migrations.html",children:"Knex"}),", you might use:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-yaml",children:"database:\n  # Other fields omitted\n  migrate: ['npx knex migrate:latest']\n  rollback: ['npx knex migrate:down']\n"})}),"\n",(0,s.jsxs)(a.p,{children:["To run your migrations locally, run ",(0,s.jsx)(a.code,{children:"npx dbos migrate"})," or ",(0,s.jsx)(a.code,{children:"npx dbos rollback"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["When you ",(0,s.jsx)(a.a,{href:"/cloud-tutorials/application-management#registering-and-deploying-applications",children:"deploy"})," an application to DBOS Cloud it runs ",(0,s.jsx)(a.code,{children:"npx dbos migrate"})," to apply all schema changes before starting your application or updating its code.\nWhen you ",(0,s.jsx)(a.a,{href:"/cloud-tutorials/application-management#rolling-back-application-databases",children:"roll back"})," an application on DBOS Cloud, it runs ",(0,s.jsx)(a.code,{children:"npx dbos rollback"})," to roll back schema changes before updating your application's code."]}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsx)(a.p,{children:"Be careful making breaking schema changes such as deleting or renaming a column\u2014they may break active workflows running on a previous application version."})}),"\n",(0,s.jsx)(a.h3,{id:"database-recovery",children:"Database Recovery"}),"\n",(0,s.jsxs)(a.p,{children:["DBOS Cloud can use ",(0,s.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/continuous-archiving.html",children:"PostgreSQL point-in-time-recovery"})," to restore your database to a previous state, for example to recover from data corruption or loss.\nFirst, run the ",(0,s.jsx)(a.a,{href:"/api-reference/cloud-cli#npx-dbos-cloud-db-restore",children:(0,s.jsx)(a.code,{children:"database restore"})})," to create a new database instance containing the state of your database instance at a previous point in time:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud db restore <database-name> -t <timestamp> -n <new-db-instance-name>\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The timestamp must be in ",(0,s.jsx)(a.a,{href:"https://datatracker.ietf.org/doc/html/rfc3339",children:"RFC3339"})," format and must be within the backup retention period of your database (24 hours for free-tier users)."]}),"\n",(0,s.jsxs)(a.p,{children:["After the database is restored, you can redeploy your applications to it with ",(0,s.jsx)(a.a,{href:"/api-reference/cloud-cli#npx-dbos-cloud-app-change-database-instance",children:(0,s.jsx)(a.code,{children:"app change-database-instance"})}),".\nFor each application connected to the original database instance, run:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud app change-database-instance --database <new-db-instance-name>\n"})}),"\n",(0,s.jsxs)(a.p,{children:["If you wish to restore your application to a previous version (such as the version that was running at the recovery timestamp), you can do this with the ",(0,s.jsx)(a.code,{children:"--previous-version"})," parameter:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud app change-database-instance --database <new-db-instance-name> --previous-version <version-id>\n"})}),"\n",(0,s.jsxs)(a.p,{children:["For more information on application version management, see ",(0,s.jsx)(a.a,{href:"/cloud-tutorials/application-management#managing-application-versions",children:"here"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Finally, destroy the original database instance:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud db destroy <original-database-instance-name>\n"})}),"\n",(0,s.jsx)(a.h3,{id:"destroying-database-instances",children:"Destroying Database Instances"}),"\n",(0,s.jsx)(a.p,{children:"To destroy a database instance, run:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"npx dbos-cloud db destroy <database-name>\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"warning",children:(0,s.jsx)(a.p,{children:"Take care\u2014this will irreversibly delete all data in the database instance."})})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>i});var s=n(7294);const t={},o=s.createContext(t);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);