"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7543],{53531:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>l});var a=t(74848),r=t(28453),i=t(11470),o=t(19365);const l=[];function s(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In Jimmer, all executable statements and instructions support two execution modes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Execute based on the JDBC connection specified by the user"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Executed by Jimmer automatically determining based on a JDBC connection"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Here, take ",(0,a.jsx)(n.code,{children:"Executable"})," (Java) or ",(0,a.jsx)(n.code,{children:"KExecutable"})," (Kotlin) interface as an example"]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Executable.java"',children:"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="KExecutable.kt" ',children:"package org.babyfish.jimmer.sql.kt\n\nimport java.sql.Connection  \n\ninterface KExecutable<R> {\n  fun execute(con: Connection? = null): R\n}\n"})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"execute(Connection)"}),": Execute on the JDBC connection specified by the user."]}),"\n",(0,a.jsx)(n.p,{children:"Take query as an example:"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute(con);\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute(con)\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"For this usage, no special configuration of SqlClient is required."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"execute()"})," or ",(0,a.jsx)(n.code,{children:"execute(null)"}),": Determined by Jimmer to execute on a JDBC connection."]}),"\n",(0,a.jsx)(n.p,{children:"Take query as an example:"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line  \n    .execute();\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute()\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["For this usage, ",(0,a.jsx)(n.code,{children:"ConnectionManager"})," must be configured for SqlClient. Otherwise it will cause exceptions."]}),(0,a.jsxs)(n.p,{children:["Undoubtedly, the 2nd approach is more in line with the requirements of business system development, so it is recommended. So it is strongly recommended to configure ",(0,a.jsx)(n.code,{children:"ConnectionManager"})," for SqlClient."]})]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},37921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"configuration/connection-manager","title":"Connection Manager","description":"Concept","source":"@site/docs/configuration/connection-manager.mdx","sourceDirName":"configuration","slug":"/configuration/connection-manager","permalink":"/jimmer-doc/docs/configuration/connection-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/configuration/connection-manager.mdx","tags":[],"version":"current","lastUpdatedAt":1731341376000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Connection Manager"},"sidebar":"tutorialSidebar","previous":{"title":"Dialect","permalink":"/jimmer-doc/docs/configuration/dialect"},"next":{"title":"Multiple DataSources","permalink":"/jimmer-doc/docs/configuration/multi-datasources"}}');var r=t(74848),i=t(28453),o=t(11470),l=t(19365),s=t(53531);const c={sidebar_position:2,title:"Connection Manager"},u=void 0,d={},h=[{value:"Concept",id:"concept",level:2},...s.RM,{value:"Simple ConnectionManager",id:"simple-connectionmanager",level:2},{value:"ConnectionManager managed by Spring transaction",id:"connectionmanager-managed-by-spring-transaction",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"simple-connectionmanager",children:"Simple ConnectionManager"}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"javax.sql.DataSource dataSource = ...;\n\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setConnectionManager(\n        ConnectionManager\n        // highlight-next-line\n        .simpleConnectionManager(dataSource)\n    )\n    .build(); \n"})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val dataSource: javax.sql.DataSource = ...\n\nval sqlClient = newKSqlClient {\n    setConnectionManager {\n        dataSource.connection.use {\n            // highlight-next-line\n            proceed(it)\n        }\n    }\n}\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"This way is only responsible for getting connections from DataSource and has no transaction management mechanism."}),(0,r.jsx)(n.p,{children:"However, transactions are very important in actual projects. Therefore, except for learning and trying, it is not recommended to use this approach in actual projects."})]}),"\n",(0,r.jsx)(n.h2,{id:"connectionmanager-managed-by-spring-transaction",children:"ConnectionManager managed by Spring transaction"}),"\n",(0,r.jsxs)(n.p,{children:["This topic has been discussed in detail in ",(0,r.jsx)(n.a,{href:"../spring/transaction",children:"Spring Section/Integrate Spring Transaction"}),". This article will not repeat the explanation."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Letting Jimmer be managed by Spring transaction is the recommended usage."})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(96540),r=t(18215),i=t(23104),o=t(56347),l=t(205),s=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);