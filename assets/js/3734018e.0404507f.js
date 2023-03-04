"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[8041],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=n(7294),o=n(4137),s=n(1610);function i(){const{veps:e}=(0,s.eZ)("veps-data-generator");return a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"VEP"),a.createElement("th",null,"Title"),a.createElement("th",null,"Author"),a.createElement("th",null,"Status"))),a.createElement("tbody",null,e.map((e=>a.createElement("tr",null,a.createElement("td",null,a.createElement("a",{href:`vep-${e.VEP}`},e.VEP)),a.createElement("td",null,e.title),a.createElement("td",null,e.author),a.createElement("td",null,e.status))))))}const l={sidebar_position:1,displayed_sidebar:"standardSidebar",title:"Venom Enhance Proposals"},d=void 0,c={unversionedId:"standards/VEP/readme",id:"standards/VEP/readme",title:"Venom Enhance Proposals",description:"In order to improve its offerings and provide a better user experience, Venom blockchain has drawn on Everscale Improvement Proposals (TIPs) to build features such as fungible and non-fungible tokens and interface definition. However, we have also introduced our own VEPs, which are designed to address the specific needs and preferences of Venom users.",source:"@site/docs/standards/VEP/readme.md",sourceDirName:"standards/VEP",slug:"/standards/VEP/",permalink:"/standards/VEP/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"standardSidebar",title:"Venom Enhance Proposals"},sidebar:"standardSidebar",next:{title:"VEP-1: VEP Purpose and Guidelines",permalink:"/standards/VEP/vep-1"}},u={},p=[{value:"Borrowed TIPs",id:"borrowed-tips",level:2},{value:"Fungible token",id:"fungible-token",level:3},{value:"Non-Fungible Token",id:"non-fungible-token",level:3},{value:"Standard Interface Detection",id:"standard-interface-detection",level:3},{value:"Venom Enhancement Proposals",id:"venom-enhancement-proposals",level:2}],m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to improve its offerings and provide a better user experience, Venom blockchain has drawn on Everscale Improvement Proposals (TIPs) to build features such as fungible and non-fungible tokens and interface definition. However, we have also introduced our own VEPs, which are designed to address the specific needs and preferences of Venom users."),(0,o.kt)("h2",{id:"borrowed-tips"},"Borrowed TIPs"),(0,o.kt)("h3",{id:"fungible-token"},(0,o.kt)("a",{parentName:"h3",href:"/standards/TIP/TIP-3/core-description"},"Fungible token")),(0,o.kt)("p",null,"Just as ERC-20 is the most popular standard in the Ethereum network, TIP-3 assumes the same role in the Venom network. TIP-3 was designed to match the distributed system design of the Venom network and is cost-effective for its fee-paying model."),(0,o.kt)("p",null,"TIP-3 provides the following functionalities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"transfer tokens from one account to another  "),(0,o.kt)("li",{parentName:"ul"},"get the current token balance of an account  "),(0,o.kt)("li",{parentName:"ul"},"get the total supply of the token available on the network  "),(0,o.kt)("li",{parentName:"ul"},"mint and burn tokens  ")),(0,o.kt)("h3",{id:"non-fungible-token"},(0,o.kt)("a",{parentName:"h3",href:"/standards/TIP/TIP-4/core-description"},"Non-Fungible Token")),(0,o.kt)("p",null,"The standard describes the second most popular type of token as NFT. Designed specifically for the architecture of the Venom network is built, the TIP-4 standard provides an optimal way to create, exchange, and trade non-fungible tokens."),(0,o.kt)("h3",{id:"standard-interface-detection"},(0,o.kt)("a",{parentName:"h3",href:"/standards/TIP/TIP-6/core-description"},"Standard Interface Detection")),(0,o.kt)("p",null,"Smart contracts in the Venom network can implement a wide variety of functionality - wallets, tokens, exchanges and so on. We need a standard way to determine the type of smart contract without relying on knowledge of its internal structure."),(0,o.kt)("h2",{id:"venom-enhancement-proposals"},"Venom Enhancement Proposals"),(0,o.kt)("p",null,"The Venom blockchain has an essential set of standards from launch, similar to the Ethereum Improvement Proposal (EIP) process. We also call on the community to contribute to maintaining the Venom standards."),(0,o.kt)(i,{mdxType:"VEPsTable"}))}f.isMDXComponent=!0}}]);