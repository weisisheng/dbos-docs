"use strict";(self.webpackChunkoperon_docs=self.webpackChunkoperon_docs||[]).push([[664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:9,title:"Testing and Debugging",description:"Learn how to use the testing runtime for unit tests."},o=void 0,s={unversionedId:"tutorials/testing-tutorial",id:"tutorials/testing-tutorial",title:"Testing and Debugging",description:"Learn how to use the testing runtime for unit tests.",source:"@site/docs/tutorials/testing-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/testing-tutorial",permalink:"/tutorials/testing-tutorial",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Testing and Debugging",description:"Learn how to use the testing runtime for unit tests."},sidebar:"tutorialSidebar",previous:{title:"Logging and Tracing",permalink:"/tutorials/logging"},next:{title:"Using Prisma",permalink:"/tutorials/using-prisma"}},l={},p=[{value:"Creating Testing Runtime",id:"creating-testing-runtime",level:3},{value:"Testing Functions",id:"testing-functions",level:3},{value:"Testing HTTP Endpoints",id:"testing-http-endpoints",level:3},{value:"Cleaning Up",id:"cleaning-up",level:3},{value:"Run Tests",id:"run-tests",level:3},{value:"Further Reading",id:"further-reading",level:3}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide, you'll learn how to test your Operon applications."),(0,i.kt)("p",null,"Operon provides a ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/testing-runtime"},"testing runtime")," to make it easier to write unit tests for Operon applications.\nUsing the runtime, you can invoke and test your application's functions individually."),(0,i.kt)("p",null,"We'll show you how to write unit tests for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," class we introduced in ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/quickstart-programming-1"},"Programming Quickstart: Part 1"),".\nWe use ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," in this example, but the testing runtime works with any testing framework."),(0,i.kt)("h3",{id:"creating-testing-runtime"},"Creating Testing Runtime"),(0,i.kt)("p",null,"First, let's create an ",(0,i.kt)("inlineCode",{parentName:"p"},"OperonTestingRuntime")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"testRuntime = await createTestingRuntime([Hello]);\n")),(0,i.kt)("p",null,"This function takes in a list of classes you want to test. Here, we want to test the methods of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," class."),(0,i.kt)("p",null,"You can also optionally provide a path to an Operon ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/configuration"},"configuration file"),".\nIf no path is provided, the runtime loads a configuration file from the default location (",(0,i.kt)("inlineCode",{parentName:"p"},"operon-config.yaml")," in the package root)."),(0,i.kt)("h3",{id:"testing-functions"},"Testing Functions"),(0,i.kt)("p",null,"A testing runtime object can invoke workflows, transactions, and communicators using the ",(0,i.kt)("inlineCode",{parentName:"p"},"invoke")," method.\nThe syntax for invoking function ",(0,i.kt)("inlineCode",{parentName:"p"},"foo(ctxt, args)")," in class ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"testRuntime.invoke(Bar).foo(args)"),".\nYou don't need to supply the context to an invoked function","\u2014","the testing runtime does this for you.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const res = await testRuntime.invoke(Hello).helloTransaction("operon");\nexpect(res).toMatch("Hello, operon! You have been greeted");\n')),(0,i.kt)("p",null,"In this code, we invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"helloTransaction")," with the input string ",(0,i.kt)("inlineCode",{parentName:"p"},'"operon"'),", and verify its output is as expected."),(0,i.kt)("h3",{id:"testing-http-endpoints"},"Testing HTTP Endpoints"),(0,i.kt)("p",null,"The testing runtime provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"getHandlersCallback()")," function, which  returns a callback function for node's native ",(0,i.kt)("inlineCode",{parentName:"p"},"http/http2")," server. This allows you to test Operon handlers, for example, with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/supertest"},"supertest"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import request from "supertest";\n \nconst res = await request(testRuntime.getHandlersCallback()).get(\n  "/greeting/operon"\n);\nexpect(res.statusCode).toBe(200);\nexpect(res.text).toMatch("Hello, operon! You have been greeted");\n')),(0,i.kt)("p",null,"In this code, we send a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to our ",(0,i.kt)("inlineCode",{parentName:"p"},"/greeting/operon")," URL and verify its response."),(0,i.kt)("h3",{id:"cleaning-up"},"Cleaning Up"),(0,i.kt)("p",null,"Finally, after your tests, you can clean up the testing runtime and release its resources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"await testRuntime.destroy();\n")),(0,i.kt)("h3",{id:"run-tests"},"Run Tests"),(0,i.kt)("p",null,"Now let's run the tests!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run test\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You are responsible for setting and cleaning up database tables before and after tests.\nIn our example, we run Knex migrations as part of our testing script.")),(0,i.kt)("p",null,"You should see the test results similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," PASS  src/operations.test.ts\n  operations-test\n    \u2713 test-transaction (21 ms)\n    \u2713 test-endpoint (17 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       2 passed, 2 total\nSnapshots:   0 total\nTime:        1.247 s, estimated 2 s\n")),(0,i.kt)("h3",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"To learn the full testing runtime interface, please see ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/testing-runtime"},"our testing runtime references"),".\nYou can find the source code for this tutorial in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dbos-inc/operon/blob/main/examples/hello/src/operations.test.ts"},"operations.test.ts"),"."))}g.isMDXComponent=!0}}]);