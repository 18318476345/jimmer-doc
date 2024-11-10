"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),r=n(67294),o=n(34334),i=n(72389),l=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:c,groupId:k,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,s.U)(),[T,w]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=k){const e=f[k];null!=e&&e!==T&&v.some((t=>t.value===e))&&w(e)}const S=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==T&&(I(t),w(a),null!=k&&N(k,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:C,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},34834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={sidebar_position:6,title:"JSON Converter"},s=void 0,p={unversionedId:"mapping/base/json-converter",id:"mapping/base/json-converter",title:"JSON Converter",description:"Although Jimmer entities are not POJOs, Jackson serialization can be supported by org.babyish.jimmmer.jackson.ImmutableModule.",source:"@site/docs/mapping/base/json-converter.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/json-converter",permalink:"/jimmer-doc/docs/mapping/base/json-converter",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/json-converter.mdx",tags:[],version:"current",lastUpdatedAt:1729456376,formattedLastUpdatedAt:"Oct 20, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"JSON Converter"},sidebar:"tutorialSidebar",previous:{title:"Real and Fake Foreign Keys",permalink:"/jimmer-doc/docs/mapping/base/foreignkey"},next:{title:"More Types",permalink:"/jimmer-doc/docs/mapping/base/more-type"}},u={},m=[{value:"1. Snowflake ID",id:"1-snowflake-id",level:2},{value:"Usage",id:"usage",level:3},{value:"Automatically Applied to IdView Properties",id:"automatically-applied-to-idview-properties",level:3},{value:"Automatically Applied to DTO",id:"automatically-applied-to-dto",level:3},{value:"2. Data Masking",id:"2-data-masking",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Support Input",id:"support-input",level:3}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Although Jimmer entities are not POJOs, Jackson serialization can be supported by ",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyish.jimmmer.jackson.ImmutableModule"),".  "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If using the Jimmer Spring Boot Starter, this ",(0,r.kt)("inlineCode",{parentName:"p"},"ImmutableModule")," will be automatically registered without user intervention.")),(0,r.kt)("p",null,"However, sometimes we need to customize the Jackson serialization behavior of certain properties. We give two examples here."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Snowflake ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Masking"))),(0,r.kt)("h2",{id:"1-snowflake-id"},"1. Snowflake ID"),(0,r.kt)("p",null,"Snowflake IDs lead to very large int64 values that unfortunately cannot be represented by JavaScript's number type. Therefore, we have no choice but to serialize such id properties as strings."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\n@public interface Book {\n\n    @Id \n    @GeneratedValue(generatorType = SnowflakeIdGenerator.class)\n    // highlight-next-line\n    @JsonConverter(LongToStringConverter.class) \n    long id();\n\n    String name();\n\n    ...Omit other properties...\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity \n@public interface Book {\n\n    @Id\n    @GeneratedValue(generatorType = SnowflakeIdGenerator.class) \n    // highlight-next-line\n    @JsonConverter(LongToStringConverter.class)\n    long id();\n\n    String name();\n\n    ...Omit other properties... \n}\n")))),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"SnowflakIdGenerator")," is a user-provided distributed snowflake ID generator implementation, which is not the focus of our discussion.   "),(0,r.kt)("p",null,"Here, we discuss the highlighted line:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.jackson.JsonConverter")," indicates custom Jackson serialization/deserialization behavior for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.id")," property.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.jackson.LongToStringConverter")," means serialize/deserialize the long value as a String."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"LongToStringConveter")," is a built-in Converter in Jimmer. Here we show its source code to quickly understand how to customize ",(0,r.kt)("inlineCode",{parentName:"p"},"Converter"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package org.babyfish.jimmer.jackson;\n\npublic class LongToStringConverter implements Converter<Long, String> { \n\n    // How to serialize\n    @Override \n    public String output(Long value) {\n        return Long.toString(value);\n    }\n\n    // How to deserialize \n    @Override\n    public Long input(String jsonValue) {\n        return Long.parseLong(jsonValue);\n    }\n}\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note:  "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jimmer annotations rather than Jackson annotations are used here, because:  This is not only an adjustment of the serialization framework Jackson, but also a useful adjustment of"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../client"},"Automatic client/server integration"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"DTO language"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No need to consider null values \u200b\u200binside Converter, null values \u200b\u200bwill never be passed as an argument to any Converter method.")))),(0,r.kt)("p",null,"Here, bypassing ORM, we demonstrate the effect by simulating data.  "),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setId(1546434604146774987L); \n    draft.setName("SQL in Action");  \n});\nSystem.out.println(book);\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    id = 1546434604146774987L  \n    name = "SQL in Action" \n}\nprintln(book) \n')))),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," of Jimmer entities is Jackson serialization, we can print directly and observe the results of Jackson serialization:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // highlight-next-line\n    "id": "1546434604146774987",\n    "name": "SQL in Action"\n}\n')),(0,r.kt)("p",null,"We can see that the serialized id is a string rather than a number, thus avoiding the problem that JavaScript clients cannot parse large numbers."),(0,r.kt)("h3",{id:"automatically-applied-to-idview-properties"},"Automatically Applied to IdView Properties"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"../advanced/view/id-view"},"@IdView properties")," is advanced mapping content that will be explained later. Readers can skip this section for now and come back later.  ")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    @ManyToMany(mappedBy = "authors") \n    List<Book> books();\n\n    @IdView("authors")\n    // highlight-next-line \n    List<Long> bookIds();\n\n    ...Omit other properties...  \n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity  \ninterface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    @IdView("authors")\n    // highlight-next-line\n    val bookIds: List<Long> \n\n    ...Omit other properties...\n}\n')))),(0,r.kt)("p",null,"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookIds")," property is not an ordinary ",(0,r.kt)("inlineCode",{parentName:"p"},"List <Long>")," collection, but the collection of ids of all associated ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," objects.   "),(0,r.kt)("p",null,"Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.id")," property has already been annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@JsonConverter"),", there is no need to specify any annotations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookIds")," property here to give it this capability.   "),(0,r.kt)("p",null,"Similarly, bypassing ORM, demonstrate the effect through simulated data."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Author author = Immutables.createAuthor(draft -> {\n    draft.setBookIds(\n        Arrays.asList(\n            1546434604146774987L,\n            1546434604146774988L\n        )\n    );  \n});\nSystem.out.println(book);\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = Book {\n    bookIds = listOf(\n        1546434604146774987L,\n        1546434604146774988L\n    )\n    \n}  \nprintln(book)\n")))),(0,r.kt)("p",null,"Since the toString of Jimmer entities is Jackson serialization, we can print directly and observe the results of Jackson serialization:   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "bookIds": [\n        // highlight-next-line \n        "1546434604146774987",  \n        // highlight-next-line\n        "1546434604146774988"\n    ]\n}  \n')),(0,r.kt)("p",null,"We can see that all elements of the serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"bookIds")," property are strings rather than numbers, thus avoiding the problem that JavaScript clients cannot parse large numbers.  "),(0,r.kt)("h3",{id:"automatically-applied-to-dto"},"Automatically Applied to DTO"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"DTO")," is advanced mapping content that will be explained later. Readers can skip this section for now and come back later.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto")," directory, create any file with the extension ",(0,r.kt)("inlineCode",{parentName:"p"},".dto")," and edit its code as follows  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto  \n\nBookView {\n    id  \n    name  \n}  \n")),(0,r.kt)("p",null,"After compiling the project, the generated Java/Kotlin type is:"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\npublic class BookView {\n\n    // highlight-next-line  \n    private String id;\n\n    private String name;  \n\n    ...Omit other properties...  \n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")  \nclass BookView(\n    // highlight-next-line\n    val id: String, \n    val name: String\n) {\n    ...Omit other properties... \n}\n')))),(0,r.kt)("p",null,"We can see that the type of the id property in the automatically generated DTO type is String instead of long.  "),(0,r.kt)("p",null,"Finally, we verify the conversion from entity to DTO object as follows  "),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setId(1546434604146774987L);    \n    draft.setName("SQL in Action");  \n}); \nSystem.out.println(new BookView(book));\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {  \n    id = 1546434604146774987L  \n    name = "SQL in Action"\n}  \nprintln(BookView(book))  \n')))),(0,r.kt)("p",null,"The output is as follows  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'BookView(\n    // highlight-next-line\n    id = "1546434604146774987",\n    name = "SQL in Action" \n)\n')),(0,r.kt)("h2",{id:"2-data-masking"},"2. Data Masking"),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"Assume the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity has a ",(0,r.kt)("inlineCode",{parentName:"p"},"phone")," property representing the user's phone number. We now perform data masking on this property."),(0,r.kt)("p",null,"For example, displaying the phone number as ",(0,r.kt)("inlineCode",{parentName:"p"},"135****6792"),".  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Data masking is not simply a page rendering feature. It must ensure that real data is not returned in the HTTP requests themselves.")),(0,r.kt)("p",null,"There is no built-in Converter available for this requirement. We need to customize the Converter as follows:   "),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class UserPhoneConverter implements Converter<String, String> {\n\n    @Override\n    public String output(String value) {\n        return value.substring(0, 3) + "****" + value.substring(7);  \n    }    \n} \n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class UserPhoneConverter : Converter<String, String> {\n\n    override fun output(value: String): String =  \n        "${value.substring(0,3)}****${value.substring(7)}"  \n}\n')))),(0,r.kt)("p",null,"Then modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity simply  "),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Entity \npublic interface User {\n\n    // highlight-next-line  \n    @JsonConverter(UserPhoneConverter.class)\n    String phone();\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity \ninterface User {\n\n    // highlight-next-line\n    @JsonConverter(UserPhoneConverter.class)\n    val phone: String  \n}\n")))),(0,r.kt)("h3",{id:"support-input"},"Support Input"),(0,r.kt)("p",null,"In the above example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPhoneConverter")," only overrides the ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," method without overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," method.   "),(0,r.kt)("p",null,"Because the default implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," method is to throw an ",(0,r.kt)("inlineCode",{parentName:"p"},"UnsupportedOperationException")," exception, deserialization is not supported.   "),(0,r.kt)("p",null,"However, in actual projects, ",(0,r.kt)("inlineCode",{parentName:"p"},"Input DTO")," can be generated based on entity objects to complete data entry. In this case, the client should enter the exact phone number. Therefore, we can override the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," method as follows.   "),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override  \npublic String input(String value) {\n    retur value;  \n}  \n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun input(value: String): String =  \n    value  \n")))))}c.isMDXComponent=!0}}]);