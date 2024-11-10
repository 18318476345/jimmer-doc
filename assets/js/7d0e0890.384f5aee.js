"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(34334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),i=n(67294),r=n(34334),o=n(72389),l=n(67392),s=n(7094),p=n(12466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:c,groupId:h,className:k}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,i.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=f[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=j.indexOf(t),a=g[n].value;a!==w&&(O(t),T(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>j.push(e),onKeyDown:C,onFocus:x,onClick:x},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},95747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(83117),i=(n(67294),n(3905)),r=n(65488),o=n(85162);const l={sidebar_position:6,title:"Visibility"},s=void 0,p={unversionedId:"object/visibility",id:"object/visibility",title:"Visibility",description:"Previous documents have discussed in detail the dynamic and immutable properties of Jimmer entities. This introduces a new feature: visibility.",source:"@site/docs/object/visibility.mdx",sourceDirName:"object",slug:"/object/visibility",permalink:"/jimmer-doc/docs/object/visibility",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/visibility.mdx",tags:[],version:"current",lastUpdatedAt:1704100403,formattedLastUpdatedAt:"Jan 1, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Visibility"},sidebar:"tutorialSidebar",previous:{title:"MapStruct",permalink:"/jimmer-doc/docs/object/view/mapstruct"},next:{title:"Tool Methods",permalink:"/jimmer-doc/docs/object/tool"}},m={},d=[{value:"Entangled Properties",id:"entangled-properties",level:2},{value:"Object Fetchers and Entangled Properties",id:"object-fetchers-and-entangled-properties",level:2},{value:"Property Visibility",id:"property-visibility",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Previous documents have discussed in detail the ",(0,i.kt)("a",{parentName:"p",href:"./dynamic"},"dynamic")," and immutable properties of Jimmer entities. This introduces a new feature: visibility."),(0,i.kt)("h2",{id:"entangled-properties"},"Entangled Properties"),(0,i.kt)("p",null,"For Jimmer entities, although properties are mostly independent, in some cases multiple properties share private data and thus affect each other. We call this entanglement between properties."),(0,i.kt)("p",null,"These cases include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Java/Kotlin-based calculated properties ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"../mapping/advanced/calculated/formula#based-on-java-kotlin"},"review details"),")")),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Author {\n\n    String firstName();\n\n    String lastName();\n\n    // highlight-next-line\n    @Formula(dependencies = {"firstName", "lastName"})\n    default String fullName() {\n        return firstName() + \' \' + lastName();\n    }\n\n    ...Omit other properties...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    val firstName: String\n\n    val lastName: String\n\n    // highlight-next-line\n    @Formula(dependencies = ["firstName", "lastName"])\n    val fullName: String\n        get() = "$firstName $lastName"\n\n    ...Omit other properties...\n}\n')))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Author.fullName")," has no private data, it depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.firstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.lastName"),"."),(0,i.kt)("p",{parentName:"li"},"Although ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.fullName")," is defined as a calculated property, it can also be considered a view property from another perspective."),(0,i.kt)("p",{parentName:"li"},"If treating ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.firstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.lastName")," as original properties, then ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.fullName")," can be considered a view property based on them.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@IdView view properties ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"../mapping/advanced/view/id-view"},"review details"),")")),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...Omit other properties...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // View of associated object store\'s id  \n    Long storeId();\n\n    // View of ids of all objects in associated collection authors\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...Omit other properties...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Auhtor>\n\n    // highlight-next-line\n    @IdView // View of associated object store\'s id\n    val storeId: Long?\n\n    // View of ids of all objects in associated collection authors\n    // highlight-next-line\n    @IdView("authors")\n    val authorIds: List<Long>\n}\n')))),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Book.store")," is the original property, ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.storeId")," is the view property based on it")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," is the original property, ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authorIds")," is the view property based on it")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"@ManyToManyView view properties ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("a",{parentName:"em",href:"../mapping/advanced/view/many-to-many-view"},"review details"),")")),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Student.java"',title:'"Student.java"'},'@Entity\npublic interface Student {\n\n    // In step 1, already declared one-to-many association `learningLinks`\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"  \n    )\n    \n    List<Course> courses();\n\n    ...Omit other code...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Student.kt"',title:'"Student.kt"'},'@Entity\ninterface Student {\n\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // highlight-next-line\n    @ManyToManyView(\n        prop = "learningLinks",\n        deeperProp = "course"\n    )\n    val courses: List<Course>\n\n    ...Omit other code...\n}\n')))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Student.learningLinks")," is the original property, ",(0,i.kt)("inlineCode",{parentName:"p"},"Student.courses")," is the view property based on it."))),(0,i.kt)("p",null,"The commonality in the examples above is that there are original properties and view properties. "),(0,i.kt)("p",null,"The original properties have their own private data, while the view properties have none. The view properties just observe the values of the original properties from a different perspective."),(0,i.kt)("p",null,"From an internal implementation perspective, a view property actually shares private data with the original property. This means knowing one value necessarily reveals partial information about the other's value. Hence they can be metaphorically described as entangled properties."),(0,i.kt)("h2",{id:"object-fetchers-and-entangled-properties"},"Object Fetchers and Entangled Properties"),(0,i.kt)("p",null,"We introduced entangled properties, with original properties and view properties. The real data is held by the original properties, while the view properties only observe."),(0,i.kt)("p",null,"When using an ",(0,i.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"object fetcher")," to fetch a view property, the internal logic will translate it into fetching the original property, for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.fullName")," is translated internally into fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.firstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Author.lastName")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.storeId")," is translated internally into fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authorIds")," is translated internally into fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Student.courses")," is translated internally into fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"Student.learningLinks")))),(0,i.kt)("p",null,"Let's take ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authorIds")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," to demonstrate how object fetchers handle original properties and view properties differently:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fetch the original property"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authors(), // Associated objects with only id  \n    1L\n);\nSystem.out.println(book);\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authors() // Associated objects with only id\n    },\n    1L  \n)\nprintln(book)\n")))),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"authors()")," in the fetcher has no arguments, indicating it fetches a collection of author objects with only id properties. The result is ",(0,i.kt)("em",{parentName:"p"},"(manually formatted for readability)"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1, \n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50,\n    "authors":[\n        // highlight-next-line\n        { "id":2 },\n        // highlight-next-line \n        { "id":1 }  \n    ]\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fetch the view property"),(0,i.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Book book = sqlClient.findById(\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .authorIds(), // Associated ids, not objects\n    1L\n);\nSystem.out.println(book);\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = sqlClient.findById(\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        authorIds() // Associated ids, not objects\n    },\n    1L\n)\nprintln(book)\n")))),(0,i.kt)("p",{parentName:"li"},"This time the result is ",(0,i.kt)("em",{parentName:"p"},"(manually formatted for readability)"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":50, \n    "authorIds":[\n        // highlight-next-line\n        2, 1\n    ]\n}\n')))),(0,i.kt)("p",null,"Although the returned data is equivalent, the formats are completely different."),(0,i.kt)("p",null,"We said earlier that when an object fetcher fetches a view property, it translates internally into fetching the original property."),(0,i.kt)("p",null,"Since this is the case, the underlying logic should be exactly the same. Where does this difference come from?"),(0,i.kt)("h2",{id:"property-visibility"},"Property Visibility"),(0,i.kt)("p",null,"The question above is, with identical underlying logic, why do two queries with the same logic return data in different formats?"),(0,i.kt)("p",null,"Jimmer can control the visibility of each property, making it shown or hidden."),(0,i.kt)("p",null,"Unlike ",(0,i.kt)("a",{parentName:"p",href:"./dynamic"},"dynamic")," where a property can be loaded or unloaded, visibility is an orthogonal feature, completely unrelated to dynamism."),(0,i.kt)("p",null,"Visibility only affects ",(0,i.kt)("a",{parentName:"p",href:"./jackson"},"Jackson serialization")," of objects ",(0,i.kt)("em",{parentName:"p"},"(including their own ",(0,i.kt)("inlineCode",{parentName:"em"},"toString")," behavior)"),", deciding whether a property is serialized. Other than that, it does not impact any other behavior of the object."),(0,i.kt)("p",null,"So the previous examples can be easily explained:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First query: ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," is shown, ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authorIds")," is hidden")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Second query: ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," is hidden, ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authorIds")," is shown"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Only when both conditions below are met will a property participate in Jackson serialization"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Dynamism: the property is set"),(0,i.kt)("li",{parentName:"ul"},"Visibility: the property is shown")),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"./tool"},"tool methods")," for how to control visibility of Jimmer object properties yourself")))}c.isMDXComponent=!0}}]);