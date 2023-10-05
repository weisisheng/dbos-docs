"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[39],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Operon Quickstart",l={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Operon Quickstart",description:"Here's how to get an Operon application up and running in less than five minutes!",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/operon-docs/getting-started/quickstart",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/operon-docs/category/getting-started"},next:{title:"Core Concepts",permalink:"/operon-docs/getting-started/coreconcepts"}},s={},p=[{value:"System Requirements",id:"system-requirements",level:3},{value:"Automatic Installation",id:"automatic-installation",level:3},{value:"Getting Started",id:"getting-started",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operon-quickstart"},"Operon Quickstart"),(0,a.kt)("p",null,"Here's how to get an Operon application up and running in less than five minutes!"),(0,a.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en"},"Node.js 18 or later")),(0,a.kt)("li",{parentName:"ul"},"macOS, Windows (through WSL), and Linux are supported"),(0,a.kt)("li",{parentName:"ul"},"This tutorial requires ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"))),(0,a.kt)("h3",{id:"automatic-installation"},"Automatic Installation"),(0,a.kt)("p",null,"We recommend starting a new Operon app using ",(0,a.kt)("inlineCode",{parentName:"p"},"operon init"),", which sets up everything automatically for you.\nTo create a project, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx operon init -n <project name> # Note: Once Operon is released to npm, this will prompt you to install our CLI if it isn't already installed.\n")),(0,a.kt)("p",null,"This creates a folder with your project name and installs the required dependencies."),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"operon init")," instantiates a \"Hello, World!\" application.\nFirst, we'll show you how to get that up and running, then we'll show you how to build something more powerful."),(0,a.kt)("p",null,"Before you can launch your app, you need a database.\nOperon works with any Postgres database, but to make things easier, we've provided nifty scripts that start Postgres locally in a Docker container and set up some tables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./start_postgres_docker.sh\nexport PGPASSWORD=dbos\nnode init_database.js\n")),(0,a.kt)("p",null,"Next, build and run the app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpx operon start\n")),(0,a.kt)("p",null,"Finally, curl it to see that it's working:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," curl http://localhost:3000/greeting/operon\n")),(0,a.kt)("p",null,"Congratulations!  You just launched your first Operon application.\nKeep going into the next tutorial to see how to use Operon to easily build powerful, reliable application backends."))}d.isMDXComponent=!0}}]);