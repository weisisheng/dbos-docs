"use strict";(self.webpackChunkdbos_docs=self.webpackChunkdbos_docs||[]).push([[3482],{6323:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(5893),t=o(1151);const s={sidebar_position:18,title:"Integrating with Kafka",description:"Learn how to integrate DBOS and Kafka."},r=void 0,i={id:"tutorials/kafka-integration",title:"Integrating with Kafka",description:"Learn how to integrate DBOS and Kafka.",source:"@site/docs/tutorials/kafka-integration.md",sourceDirName:"tutorials",slug:"/tutorials/kafka-integration",permalink:"/tutorials/kafka-integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,title:"Integrating with Kafka",description:"Learn how to integrate DBOS and Kafka."},sidebar:"tutorialSidebar",previous:{title:"Using TypeORM",permalink:"/tutorials/using-typeorm"},next:{title:"Checkout Workflow Tutorial",permalink:"/tutorials/checkout-tutorial"}},c={},l=[];function f(e){const a={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"In this guide, you'll learn how to use DBOS transactions and workflows to process Kafka messages with exactly-once semantics."}),"\n",(0,n.jsxs)(a.p,{children:["First, install ",(0,n.jsx)(a.a,{href:"https://kafka.js.org/",children:"KafkaJS"})," in your application:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"npm install kafkajs\n"})}),"\n",(0,n.jsx)(a.p,{children:"Then, define your transaction or workflow. It must take in the Kafka topic, partition, and message as inputs:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { Workflow, WorkflowContext } from '@dbos-inc/dbos-sdk';\n\nclass KafkaExample{\n  @Workflow()\n  static async kafkaWorkflow(ctxt: WorkflowContext, topic: string, partition: number, message: KafkaMessage) {\n    ctxt.logger.info(`Message received: ${message.value?.toString()}`)\n  }\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Then, annotate your method with a ",(0,n.jsx)(a.a,{href:"/api-reference/decorators#kafka-consume",children:(0,n.jsx)(a.code,{children:"@KafkaConsume"})})," decorator specifiying which topic to consume from.\nAdditionally, annotate your class with a ",(0,n.jsx)(a.a,{href:"/api-reference/decorators#kafka",children:(0,n.jsx)(a.code,{children:"@Kafka"})})," decorator defining which brokers to connect to.\nDBOS invokes your method exactly-once for each message sent to the topic."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"import { KafkaConfig, KafkaMessage} from \"kafkajs\";\nimport { Workflow, WorkflowContext, Kafka, KafkaConsume } from '@dbos-inc/dbos-sdk';\n\nconst kafkaConfig: KafkaConfig = {\n    brokers: ['localhost:9092']\n}\n\n@Kafka(kafkaConfig)\nclass KafkaExample{\n\n  @KafkaConsume(\"example-topic\")\n  @Workflow()\n  static async kafkaWorkflow(ctxt: WorkflowContext, topic: string, partition: number, message: KafkaMessage) {\n    ctxt.logger.info(`Message received: ${message.value?.toString()}`)\n  }\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["If you need more control, you can pass detailed configurations to both the ",(0,n.jsx)(a.code,{children:"@Kafka"})," and ",(0,n.jsx)(a.code,{children:"@KafkaConsume"})," decorators.\nThe ",(0,n.jsx)(a.code,{children:"@Kafka"})," decorator takes in a ",(0,n.jsx)(a.a,{href:"https://kafka.js.org/docs/configuration",children:"KafkaJS configuration object"})," used to configure Kafka for all methods in its class.\nThe ",(0,n.jsx)(a.code,{children:"@KafkaConsume"})," decorator takes in a ",(0,n.jsx)(a.a,{href:"https://kafka.js.org/docs/consuming#options",children:"KafkaJS consumer configuration"})," as an optional second argument.\nFor example, you can specify a custom consumer group ID:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:'@KafkaConsume("example-topic", { groupId: "custom-group-id" })\n@Workflow()\nstatic async kafkaWorkflow(ctxt: WorkflowContext, topic: string, partition: number, message: KafkaMessage) {\n  ctxt.logger.info(`Message received: ${message.value?.toString()}`)\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Under the hood, DBOS constructs an ",(0,n.jsx)(a.a,{href:"./idempotency-tutorial",children:"idempotency key"})," for each Kafka message from its topic, partition, and offset and passes it into your workflow or transaction.\nThis combination is guaranteed to be unique for each Kafka cluster.\nThus, even if a message is delivered multiple times (e.g., due to transient network failures or application interruptions), your transaction or workflow processes it exactly once."]})]})}function d(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},1151:(e,a,o)=>{o.d(a,{Z:()=>i,a:()=>r});var n=o(7294);const t={},s=n.createContext(t);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);