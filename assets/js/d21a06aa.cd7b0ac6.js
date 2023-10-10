"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[608],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4766:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2,title:"Operon Command line interface (CLI)"},a=void 0,c={unversionedId:"api-reference/cli",id:"api-reference/cli",title:"Operon Command line interface (CLI)",description:"The operon runtime with the application is started using the command line",source:"@site/docs/api-reference/cli.md",sourceDirName:"api-reference",slug:"/api-reference/cli",permalink:"/operon-docs/api-reference/cli",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Operon Command line interface (CLI)"},sidebar:"tutorialSidebar",previous:{title:"Operon Configuration",permalink:"/operon-docs/api-reference/configuration"},next:{title:"Decorator Reference",permalink:"/operon-docs/api-reference/decorators"}},p={},l=[],s={toc:l},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The operon runtime with the application is started using the command line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx operon start -p <port> -l <loglevel>\n")),(0,o.kt)("p",null,"-p or --port: The http port on which the runtime with listen for http requests"),(0,o.kt)("p",null,"-l or --loglevel: 'info','warn','error','debug'"))}f.isMDXComponent=!0}}]);