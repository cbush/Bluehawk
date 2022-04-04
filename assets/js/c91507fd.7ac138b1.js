"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[293],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=o(t),f=i,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var o=2;o<a;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},898:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],u={id:"PluginArgs",title:"Interface: PluginArgs",sidebar_label:"PluginArgs",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"api/interfaces/PluginArgs",id:"api/interfaces/PluginArgs",isDocsHomePage:!1,title:"Interface: PluginArgs",description:"The arguments passed from the CLI to a plugin's register() function.",source:"@site/docs/api/interfaces/PluginArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PluginArgs",permalink:"/Bluehawk/api/interfaces/PluginArgs",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PluginArgs",title:"Interface: PluginArgs",sidebar_label:"PluginArgs",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"PayloadQuery",permalink:"/Bluehawk/api/interfaces/PayloadQuery"},next:{title:"ProcessOptions",permalink:"/Bluehawk/api/interfaces/ProcessOptions"}},c=[{value:"Properties",id:"properties",children:[{value:"bluehawk",id:"bluehawk",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"bluehawkVersion",id:"bluehawkversion",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"yargs",id:"yargs",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"yargsVersion",id:"yargsversion",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The arguments passed from the CLI to a plugin's register() function."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"bluehawk"},"bluehawk"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bluehawk"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/Bluehawk"},(0,a.kt)("inlineCode",{parentName:"a"},"Bluehawk"))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../classes/Bluehawk"},"Bluehawk")," instance that a plugin can use to add Bluehawk commands,\nlanguages, and listeners."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cbush/Bluehawk/blob/0ab0d3b/src/bluehawk/Plugin.ts#L49"},"src/bluehawk/Plugin.ts:49")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bluehawkversion"},"bluehawkVersion"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bluehawkVersion"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The current semantic version string of Bluehawk."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cbush/Bluehawk/blob/0ab0d3b/src/bluehawk/Plugin.ts#L60"},"src/bluehawk/Plugin.ts:60")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"yargs"},"yargs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"yargs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Argv"),"<{}",">"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://yargs.js.org/"},"yargs")," instance that a plugin can modify to add\nCLI commands and options."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cbush/Bluehawk/blob/0ab0d3b/src/bluehawk/Plugin.ts#L55"},"src/bluehawk/Plugin.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"yargsversion"},"yargsVersion"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"yargsVersion"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The current semantic version string of Yargs."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/cbush/Bluehawk/blob/0ab0d3b/src/bluehawk/Plugin.ts#L65"},"src/bluehawk/Plugin.ts:65")))}d.isMDXComponent=!0}}]);