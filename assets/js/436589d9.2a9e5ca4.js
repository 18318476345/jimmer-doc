"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(a),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(83117),r=a(67294),o=a(34334),l=a(72389),s=a(67392),i=a(7094),u=a(12466);const c="tabList__CuJ",d="tabItem_LNqP";function b(e){var t;const{lazy:a,block:l,defaultValue:b,values:p,groupId:m,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===b?b:b??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[T,x]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:B}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==T&&g.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,a=O.indexOf(t),n=g[a].value;n!==T&&(B(t),x(n),null!=m&&w(m,String(n)))},N=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:N,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,l.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},51547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const s={sidebar_position:1,title:"5.1 Basic Usage"},i=void 0,u={unversionedId:"showcase/order-by/usage",id:"showcase/order-by/usage",title:"5.1 Basic Usage",description:"Multiple orderBy actions",source:"@site/docs/showcase/order-by/usage.mdx",sourceDirName:"showcase/order-by",slug:"/showcase/order-by/usage",permalink:"/jimmer-doc/docs/showcase/order-by/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/order-by/usage.mdx",tags:[],version:"current",lastUpdatedAt:1731277648,formattedLastUpdatedAt:"Nov 10, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"5.1 Basic Usage"},sidebar:"tutorialSidebar",previous:{title:"5. Sorting",permalink:"/jimmer-doc/docs/showcase/order-by/"},next:{title:"5.2 Dynamic Sorting",permalink:"/jimmer-doc/docs/showcase/order-by/dynamic"}},c={},d=[{value:"Multiple orderBy actions",id:"multiple-orderby-actions",level:2},{value:"orderBy with mutiple arguments",id:"orderby-with-mutiple-arguments",level:2},{value:"Sorting based on subqueries",id:"sorting-based-on-subqueries",level:2}],b={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"multiple-orderby-actions"},"Multiple orderBy actions"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .orderBy(table.name().asc())\n    // highlight-next-line\n    .orderBy(table.edition().desc())\n    .select(table)\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        orderBy(table.name.asc())\n        // highlight-next-line\n        orderBy(table.edition.desc())\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("h2",{id:"orderby-with-mutiple-arguments"},"orderBy with mutiple arguments"),(0,r.kt)("p",null,"There is another way to write the equivalent of the above code"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .orderBy(\n        table.name().asc(), \n        table.edition().desc()\n    )\n    .select(table)\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        orderBy(\n            table.name.asc(), \n            table.edition.desc()\n        )\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("p",null,"However, the previous way of writing is more conducive to the organization of the code structure, so the previous way of writing is more recommended."),(0,r.kt)("h2",{id:"sorting-based-on-subqueries"},"Sorting based on subqueries"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .orderBy(\n        sqlClient\n            .createSubQuery(author)\n            .where(author.books().eq(table))\n            .select(Expression.rowCount())\n            .desc()\n    )\n    .select(table)\n    .execute();\n"))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        orderBy(\n            subQuery(Author::class) {\n                where(table.books() eq parentTable)\n                select(rowCount())\n            }\n            .desc()\n        )\n        select(table)\n    }\n    .execute()\n")))))}p.isMDXComponent=!0}}]);