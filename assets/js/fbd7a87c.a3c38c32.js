"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[39],{7660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>q,contentTitle:()=>I,default:()=>O,frontMatter:()=>N,metadata:()=>T,toc:()=>V});var s=n(5893),r=n(1151),a=n(7294),o=n(6905),i=n(2466),l=n(6550),c=n(469),u=n(1980),d=n(7392),h=n(12);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=g(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[l,u]=b({queryString:n,groupId:s}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,h.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,r]),tabValues:r}}var x=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=l[n].value;s!==r&&(u(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,o.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,s.jsx)(j,{...e,...t}),(0,s.jsx)(k,{...e,...t})]})}function w(e){const t=(0,x.Z)();return(0,s.jsx)(y,{...e,children:p(e.children)},String(t))}const S={tabItem:"tabItem_Ymn6"};function D(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(S.tabItem,r),hidden:n,children:t})}const N={sidebar_position:1},I="DBOS SDK Quickstart",T={id:"getting-started/quickstart",title:"DBOS SDK Quickstart",description:"Here's how to get a DBOS application up and running in less than five minutes!",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/getting-started/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"Programming Quickstart - Part 1",permalink:"/getting-started/quickstart-programming-1"}},q={},V=[{value:"System Requirements",id:"system-requirements",level:3},{value:"Project Initialization",id:"project-initialization",level:3},{value:"Getting Started",id:"getting-started",level:3}];function E(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dbos-sdk-quickstart",children:"DBOS SDK Quickstart"}),"\n",(0,s.jsx)(t.p,{children:"Here's how to get a DBOS application up and running in less than five minutes!"}),"\n",(0,s.jsx)(t.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,s.jsxs)(t.p,{children:["The DBOS SDK requires ",(0,s.jsx)(t.a,{href:"https://nodejs.org/en",children:"Node.js 20 or later"}),".  To install (assuming you don't already have Node.js installed), run the following commands in your terminal:"]}),"\n",(0,s.jsxs)(w,{groupId:"operating-systems",children:[(0,s.jsx)(D,{value:"mac",label:"macOS",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n\nnvm install 20\nnvm use 20\n'})})}),(0,s.jsx)(D,{value:"win",label:"Windows (WSL)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nsource ~/.bashrc\nnvm install 20\nnvm use 20\n"})})}),(0,s.jsx)(D,{value:"ubuntu",label:"Ubuntu",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nsource ~/.bashrc\nnvm install 20\nnvm use 20\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["This tutorial uses ",(0,s.jsx)(t.a,{href:"https://www.docker.com/",children:"Docker"})," to launch a Postgres database.  To install (assuming you don't already have Docker installed):"]}),"\n",(0,s.jsxs)(w,{groupId:"operating-systems",children:[(0,s.jsx)(D,{value:"mac",label:"macOS",children:(0,s.jsxs)(t.p,{children:["The easiest way to install Docker on MacOS is through ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"Docker Desktop"}),"."]})}),(0,s.jsx)(D,{value:"win",label:"Windows (WSL)",children:(0,s.jsxs)(t.p,{children:["The easiest way to install Docker on Windows is through ",(0,s.jsx)(t.a,{href:"https://docs.docker.com/desktop/install/windows-install/",children:"Docker Desktop"}),"."]})}),(0,s.jsx)(D,{value:"ubuntu",label:"Ubuntu",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'sudo install -m 0755 -d /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\nsudo chmod a+r /etc/apt/keyrings/docker.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install -yq docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\nsudo groupadd docker\nsudo usermod -aG docker $USER\n'})})})]}),"\n",(0,s.jsx)(t.p,{children:"After installing Docker, close and reopen your terminal to apply any changes. Then, verify Docker is working by running:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker run hello-world\n"})}),"\n",(0,s.jsx)(t.h3,{id:"project-initialization",children:"Project Initialization"}),"\n",(0,s.jsx)(t.p,{children:"To initialize a new DBOS application, run the following command, choosing a project name with no spaces or special characters:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx @dbos-inc/dbos-sdk init -n <project-name>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This creates a folder for your project, configures its layout, and installs required dependencies.\nIf successful, it should print ",(0,s.jsx)(t.code,{children:"Application initialized successfully!"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["By default, ",(0,s.jsx)(t.code,{children:"dbos-sdk init"})," instantiates a \"Hello, Database!\" application which greets users and tracks the count of greetings per user.\nFirst, we'll show you how to build and run it, then we'll show you how to extend it with more powerful features."]}),"\n",(0,s.jsx)(t.p,{children:"Before you can launch your app, you need a database.\nDBOS works with any Postgres database, but to make things easier, we've provided a nifty script that starts a Docker Postgres container and creates a database:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd <project-name>\nexport PGPASSWORD=dbos\n./start_postgres_docker.sh\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If successful, the script should print ",(0,s.jsx)(t.code,{children:"Database started successfully!"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Then, let's run a database migration to create some tables:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx dbos-sdk migrate\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If successful, the migration should print ",(0,s.jsx)(t.code,{children:"Migration successful!"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Next, build and run the app:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run build\nnpx dbos-sdk start\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To see that it's working, visit this URL in your browser: ",(0,s.jsx)(t.a,{href:"http://localhost:3000/greeting/dbos",children:"http://localhost:3000/greeting/dbos"}),".  You should get this message: ",(0,s.jsx)(t.code,{children:"Hello, dbos! You have been greeted 1 times."})," Each time you refresh the page, the counter should go up by one!"]}),"\n",(0,s.jsx)(t.p,{children:"Congratulations!  You just launched your first DBOS application.\nNext, we'll learn how to build a new application ourselves."})]})}function O(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(E,{...e})}):E(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(7294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);