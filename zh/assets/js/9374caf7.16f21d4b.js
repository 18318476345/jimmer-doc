"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1755],{56778:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const l={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(96540),l=t(18215),a=t(44319),s=t(56347),i=t(94280),o=t(73024),c=t(58417),u=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:t,groupId:l}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,u.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),j=(()=>{const e=c??m;return b({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(46916);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==r&&(c(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function _(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function N(e){const n=(0,x.A)();return(0,v.jsx)(_,{...e,children:d(e.children)},String(n))}},2519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"showcase/where/dynamic-join","title":"4.4 \u52a8\u6001\u8868\u8fde\u63a5","description":"\u7528\u6cd5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-join.mdx","sourceDirName":"showcase/where","slug":"/showcase/where/dynamic-join","permalink":"/jimmer-doc/zh/docs/showcase/where/dynamic-join","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-join.mdx","tags":[],"version":"current","lastUpdatedAt":1714914925000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"4.4 \u52a8\u6001\u8868\u8fde\u63a5"},"sidebar":"tutorialSidebar","previous":{"title":"4.3 \u5173\u8054id","permalink":"/jimmer-doc/zh/docs/showcase/where/associated-id"},"next":{"title":"4.5 \u9690\u5f0f\u5b50\u67e5\u8be2","permalink":"/jimmer-doc/zh/docs/showcase/where/implicit-subquery"}}');var l=t(74848),a=t(28453),s=t(37244),i=t(56778);const o={sidebar_position:4,title:"4.4 \u52a8\u6001\u8868\u8fde\u63a5"},c=void 0,u={},d=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5404\u79cd\u60c5\u51b5",id:"\u5404\u79cd\u60c5\u51b5",level:2},{value:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548",id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548",level:3},{value:"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548",id:"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548",level:3},{value:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548",id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548",level:3},{value:"IsNull\u548c\u5916\u8fde\u63a5",id:"isnull\u548c\u5916\u8fde\u63a5",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,l.jsxs)(s.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"@Nullable String storeName = ...\u7565...;\n@Nullable String storeWebsite = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.store().name().eqIf(storeName)) \u2776\n    .where(table.store().website().eqIf(storeWebsite)) \u2777\n    .select(table)\n    .execute();\n"})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val storeName: String? = ...\u7565...\nval storeWebsite: String? = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(table.store.name `eq?` storeName) \u2776\n        where(table.store.website `eq?` storeWebsite) \u2777\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u4e2d, Java\u7684",(0,l.jsx)(n.code,{children:"table.store()"}),"\u548cKotlin\u7684",(0,l.jsx)(n.code,{children:"table.store"}),"\u8868\u793a\u901a\u8fc7\u591a\u5bf9\u4e00\u5173\u8054",(0,l.jsx)(n.code,{children:"Book.store"}),"\u5185\u8fde\u63a5",(0,l.jsx)(n.code,{children:"Book"}),"\u6240\u5b9a\u4e49\u7684\u8868\u548c",(0,l.jsx)(n.code,{children:"BookStore"}),"\u6240\u5b9a\u4e49\u7684\u8868\u3002"]}),(0,l.jsx)(n.p,{children:"\u5373\uff0c\u8868\u793a\u5982\u4e0bSQL\u903b\u8f91"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"from BOOK b\ninner join BOOK_STORE s on b.STORE_ID = s.ID\n"})}),(0,l.jsxs)(n.p,{children:["\u4e8b\u5b9e\u4e0a\uff0c\u5047\u5982\u5b9e\u4f53\u6a21\u578b\u66f4\u52a0\u4e30\u5bcc\uff0c\u53ef\u4ee5\u4e66\u5199\u66f4\u957f\u7684\u8def\u5f84\uff0c\u6bd4\u5982",(0,l.jsx)(n.code,{children:"table.store().city().province()"}),"\u3002"]}),(0,l.jsx)(n.p,{children:"\u8fd9\u91cc\uff0c\u4ec5\u4ec5\u505a\u5165\u95e8\u793a\u8303\u548c\u5feb\u901f\u9884\u89c8\uff0c\u6ca1\u5fc5\u8981\u6784\u5efa\u66f4\u4e30\u5bcc\u7684\u5b9e\u4f53\u6a21\u578b\u4ee5\u6f14\u793a\u66f4\u957f\u7684\u8def\u5f84\uff0c\u6700\u77ed\u8868\u94fe\u8fde\u63a5\u8def\u5f84table.store()\u8db3\u591f\u3002"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u5404\u79cd\u60c5\u51b5",children:"\u5404\u79cd\u60c5\u51b5"}),"\n",(0,l.jsx)(n.h3,{id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548",children:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c",(0,l.jsx)(n.code,{children:"storeName"}),"\u548c",(0,l.jsx)(n.code,{children:"storeWebsite"}),"\u90fd\u4e3anull\uff0c\u4f1a\u5bfc\u81f4\u2776\u548c\u2777\u4e24\u5904\u521b\u5efa\u7684\u52a8\u6001\u8868\u8fde\u63a5\u672a\u88ab\u4f7f\u7528\uff0c\u672a\u88ab\u4f7f\u7528\u7684\u8868\u8fde\u63a5\u4f1a\u88ab\u81ea\u52a8\u5ffd\u7565\uff0c\u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55\u771f\u5b9e\u7684SQL\u8fde\u63a5\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u65f6\uff0c\u751f\u6210\u5982\u4e0bSQL:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548",children:"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06",(0,l.jsx)(n.code,{children:"storeName"}),"\u6307\u5b9a\u4e3a\u975enull\uff0c\u800c",(0,l.jsx)(n.code,{children:"storeWebsite"}),"\u4ecd\u7136\u4e3anull\uff0c\u2776\u5904\u7684\u52a8\u6001\u8868\u8fde\u63a5\u751f\u6548\uff0c\u800c\u2777\u7684\u52a8\u6001\u8868\u8fde\u63a5\u88ab\u5ffd\u7565\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u65f6\uff0c\u751f\u6210\u5982\u4e0bSQL:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\ninner join BOOK_STORE tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\nwhere\n    tb_2_.NAME = ? /* MANNING */\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548",children:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c",(0,l.jsx)(n.code,{children:"storeName"}),"\u548c",(0,l.jsx)(n.code,{children:"storeWebsite"}),"\u90fd\u88ab\u6307\u5b9a\u4e3a\u975enull\uff0c\u4f1a\u5bfc\u81f4\u2776\u548c\u2777\u4e24\u5904\u521b\u5efa\u7684\u52a8\u6001\u8868\u8fde\u63a5\u90fd\u751f\u6548\u3002"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Jimmer\u80fd\u81ea\u52a8\u5408\u5e76\u51b2\u7a81\u7684\u8fde\u63a5\uff0c\u4e24\u4e2a\u8fde\u63a5\u4f1a\u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\uff0c\u6700\u7ec8\uff0c\u53ea\u6709\u4e00\u4e2aSQL\u8fde\u63a5\u88ab\u6e32\u67d3"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\ninner join BOOK_STORE tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\nwhere\n        tb_2_.NAME = ? /* MANNING */\n    and\n        tb_2_.WEBSITE = ? /* https://www.manning.com */\n"})}),"\n",(0,l.jsx)(n.h2,{id:"isnull\u548c\u5916\u8fde\u63a5",children:"IsNull\u548c\u5916\u8fde\u63a5"}),"\n",(0,l.jsxs)(n.p,{children:["\u7c7b\u4f3cJava\u4e2d",(0,l.jsx)(n.code,{children:"table.store()"}),"\u6216Kotlin",(0,l.jsx)(n.code,{children:"table.store"}),"\u8fd9\u6837\u7684\u8fde\u63a5\u8def\u5f84\uff0c\u4f1a\u88ab\u6e32\u67d3\u6210SQL\u7684\u5185\u8fde\u63a5\uff0c\u800c\u975e\u5916\u8fde\u63a5\uff0c\u8fd9\u662f\u56e0\u4e3a"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"\u5185\u8fde\u63a5\u6bd4\u5916\u8fde\u63a5\u62e5\u6709\u66f4\u597d\u7684\u6027\u80fd\uff01"})}),"\n",(0,l.jsxs)(n.admonition,{type:"caution",children:[(0,l.jsxs)(n.p,{children:["\u4e3a\u6b64\uff0cJimmer\u4e0d\u60dc\u901a\u8fc7\u5f02\u5e38\u8ba9\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5185\u8fde\u63a5\u800c\u5f97\u5230\u7684\u8868\u5bf9\u8c61\u4e0d\u652f\u6301",(0,l.jsx)(n.code,{children:"isNull"}),"\u3002"]}),(0,l.jsxs)(n.p,{children:["\u5982\u679c\u8981\u5bf9\u5173\u8054\u5bf9\u8c61\u65bd\u52a0",(0,l.jsx)(n.code,{children:"isNull"}),"\uff0c\u5fc5\u987b\u660e\u786e\u91c7\u7528\u5916\u8fde\u63a5\u64cd\u4f5c\uff0c\u4f8b\u5982"]})]}),"\n",(0,l.jsxs)(s.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parent(JoinType.LEFT).isNull())\n    .select(table)\n    .execute();\n"})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.`parent?`.isNull())\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["Java\u4ee3\u7801\u4e2d\u7684",(0,l.jsx)(n.code,{children:".parent(JoinType.LEFT)"}),"\u548cKotlin\u4ee3\u7801\u4e2d\u7684",(0,l.jsx)(n.code,{children:".parent?"}),"\u8868\u793a\u5de6\u8fde\u63a5\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u5b9e\uff0c\u8fd9\u79cd\u6848\u4f8b\u66f4\u9002\u5408",(0,l.jsx)(n.a,{href:"./associated-id",children:"\u4e0a\u4e00\u6587"}),"\u4e2d\u7684\u5173\u8054id\u6761\u4ef6"]}),"\n",(0,l.jsxs)(s.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parentId().isNull())\n    .select(table)\n    .execute();\n"})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.parentId.isNull())\n        select(table)\n    }\n    .execute()\n"})})})]})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);