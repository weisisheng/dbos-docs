"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1,title:"Authentication and Authorization",description:"Use declarative security and middleware in Operon"},o="Authentication and Authorization",l={unversionedId:"tutorials/authentication-authorization",id:"tutorials/authentication-authorization",title:"Authentication and Authorization",description:"Use declarative security and middleware in Operon",source:"@site/docs/tutorials/authentication-authorization.md",sourceDirName:"tutorials",slug:"/tutorials/authentication-authorization",permalink:"/tutorials/authentication-authorization",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Authentication and Authorization",description:"Use declarative security and middleware in Operon"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/category/tutorials"},next:{title:"HTTP Serving",permalink:"/tutorials/http-serving-tutorial"}},s={},u=[{value:"Background Information",id:"background-information",level:2},{value:"Users And Roles",id:"users-and-roles",level:3},{value:"Declarative Security",id:"declarative-security",level:3},{value:"Authorization Decorators",id:"authorization-decorators",level:2},{value:"Authentication Middleware",id:"authentication-middleware",level:2},{value:"HTTP Registration",id:"http-registration",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Bank",id:"bank",level:3},{value:"Social",id:"social",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,n.kt)("p",null,"This section covers two aspects of declarative security in Operon: authentication and authorization."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#background-information"},"Background Information"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#users-and-roles"},"Users And Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#declarative-security"},"Declarative Security")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#authorization-decorators"},"Authorization Decorators")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#authentication-middleware"},"Authentication Middleware"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#http-registration"},"HTTP Registration")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#example-code"},"Example Code"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#bank"},"Bank")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#social"},"Social"))))),(0,n.kt)("h2",{id:"background-information"},"Background Information"),(0,n.kt)("p",null,"Operon APIs make it easy to add role-based security to a backend application, and to automatically make a map of functions and their required roles for security auditing purposes."),(0,n.kt)("h3",{id:"users-and-roles"},"Users And Roles"),(0,n.kt)("p",null,'In Operon, it is the job of a "middleware" to establish and authenticate the user associated with each inbound request.  The request should also be associated with the roles assigned to the user.  This authenticated user and roles are then passed around to each Operon function.'),(0,n.kt)("p",null,"Before entry to any Operon function, the list of roles assigned to the current user is compared to the list of roles required to execute the function.  If the user has any of the required roles, execution proceeds; if not, an error is returned."),(0,n.kt)("h3",{id:"declarative-security"},"Declarative Security"),(0,n.kt)("p",null,"Programmers writing Operon functions list out the default roles required to execute functions in a class, and list required roles for any class methods that are exceptions from the class-level defaults.  Operon, with help from the authentication middleware, does the work of enforcing the declared authorization policy."),(0,n.kt)("h2",{id:"authorization-decorators"},"Authorization Decorators"),(0,n.kt)("p",null,"A list of authorized roles is first provided at the class level with ",(0,n.kt)("a",{parentName:"p",href:"/api-reference/decorators#defaultrequiredrole"},(0,n.kt)("inlineCode",{parentName:"a"},"@DefaultRequiredRole")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"@DefaultRequiredRole(['user'])\nclass Operations\n{\n  // Most operations will be user-level\n}\n")),(0,n.kt)("p",null,"For exceptions, requiring more or less privilege than the default,  ",(0,n.kt)("a",{parentName:"p",href:"/api-reference/decorators#requiredrole"},(0,n.kt)("inlineCode",{parentName:"a"},"@RequiredRole"))," is specified at the method level"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"@DefaultRequiredRole(['user'])\nclass Operations\n{\n  // Most operations will be user-level\n\n  // Registering a new user doesn't require privilege\n  @RequiredRole([])\n  static async doRegister(ctx: OperonContext, firstName: string, lastName: string){}\n\n  // Deleting a user requires escalated privilege\n  @RequiredRole(['admin])\n  static async deleteOtherUser(ctx: OperonContext, otherUser: string){}\n}\n")),(0,n.kt)("h2",{id:"authentication-middleware"},"Authentication Middleware"),(0,n.kt)("p",null,"The procedural details of identifying the user associated with an inbound request and validating any credentials varies from application to application.  A username+password may need to be checked against a database, a token or certificate may need to be decrypted and validated, etc.  This information may also be received in different ways."),(0,n.kt)("p",null,"For these reasons, Operon allows user-specified middleware functions to extract authentication information from requests."),(0,n.kt)("h3",{id:"http-registration"},"HTTP Registration"),(0,n.kt)("p",null,"Operon can automatically register HTTP handlers based on endpoint decorators.  For this case, the ",(0,n.kt)("a",{parentName:"p",href:"/api-reference/decorators#authentication"},(0,n.kt)("inlineCode",{parentName:"a"},"@Authentication"))," class decorator is used to provide the middleware function to validate the HTTP request and extract the user and roles."),(0,n.kt)("h2",{id:"example-code"},"Example Code"),(0,n.kt)("p",null,"Each of the large Operon sample applications uses a different approach to authentication.  All of them use declarative role-based authorization."),(0,n.kt)("h3",{id:"bank"},"Bank"),(0,n.kt)("p",null,"In Bank, authentication is performed in the front end via an external service, and passed to the back end via JWT tokens and HTTP headers."),(0,n.kt)("h3",{id:"social"},"Social"),(0,n.kt)("p",null,"YKY Social uses its own backend database table to create and manage users."))}p.isMDXComponent=!0}}]);