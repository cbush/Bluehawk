"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[580],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8294:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"IParser",title:"Interface: IParser",sidebar_label:"IParser",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/IParser",id:"api/interfaces/IParser",isDocsHomePage:!1,title:"Interface: IParser",description:"Properties",source:"@site/docs/api/interfaces/IParser.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IParser",permalink:"/Bluehawk/api/interfaces/IParser",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IParser",title:"Interface: IParser",sidebar_label:"IParser",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"EmphasizeSourceAttributes",permalink:"/Bluehawk/api/interfaces/EmphasizeSourceAttributes"},next:{title:"IVisitor",permalink:"/Bluehawk/api/interfaces/IVisitor"}},c=[{value:"Properties",id:"properties",children:[{value:"languageSpecification",id:"languagespecification",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"parse",id:"parse",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"languagespecification"},"languageSpecification"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"languageSpecification"),": ",(0,i.kt)("a",{parentName:"p",href:"LanguageSpecification"},(0,i.kt)("inlineCode",{parentName:"a"},"LanguageSpecification"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cbush/Bluehawk/blob/0ab0d3b/src/bluehawk/parser/makeParser.ts#L15"},"src/bluehawk/parser/makeParser.ts:15")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"parse"},"parse"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"parse"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"source"),"): ",(0,i.kt)("a",{parentName:"p",href:"ParseResult"},(0,i.kt)("inlineCode",{parentName:"a"},"ParseResult"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../classes/Document"},(0,i.kt)("inlineCode",{parentName:"a"},"Document")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"ParseResult"},(0,i.kt)("inlineCode",{parentName:"a"},"ParseResult"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cbush/Bluehawk/blob/0ab0d3b/src/bluehawk/parser/makeParser.ts#L16"},"src/bluehawk/parser/makeParser.ts:16")))}d.isMDXComponent=!0}}]);