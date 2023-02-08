"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[7865],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(v,a(a({ref:t},s),{},{components:n})):o.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(4137));const i={displayed_sidebar:"buildSidebar",sidebar_position:0,sidebar_label:"Welcome"},a="Development Guides",l={unversionedId:"build/development-guides/readme",id:"build/development-guides/readme",title:"Development Guides",description:"Welcome to the Development Guides section. If you would like to learn development on the Venom blockchain you're in the right place.",source:"@site/docs/build/development-guides/readme.md",sourceDirName:"build/development-guides",slug:"/build/development-guides/",permalink:"/build/development-guides/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{displayed_sidebar:"buildSidebar",sidebar_position:0,sidebar_label:"Welcome"},sidebar:"buildSidebar",previous:{title:"Quick start developing on Venom testnet",permalink:"/build/quick-start-on-testnet"},next:{title:"Comparing of Ethereum vs Venom architectures",permalink:"/build/development-guides/comparing-of-ethereum-vs-venom-architectures"}},u={},p=[{value:"Set up the Venom environment and start with the guides",id:"set-up-the-venom-environment-and-start-with-the-guides",level:2},{value:"Setting Up The Venom Smart Contract Development Environment",id:"setting-up-the-venom-smart-contract-development-environment",level:3},{value:"How to create your own fungible TIP-3 token",id:"how-to-create-your-own-fungible-tip-3-token",level:3},{value:"How to create your own non-fungible TIP-4 token",id:"how-to-create-your-own-non-fungible-tip-4-token",level:3},{value:"Tools &amp; Resources",id:"tools--resources",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-guides"},"Development Guides"),(0,r.kt)("p",null,"Welcome to the Development Guides section. If you would like to learn development on the Venom blockchain you're in the right place."),(0,r.kt)("h2",{id:"set-up-the-venom-environment-and-start-with-the-guides"},"Set up the Venom environment and start with the guides"),(0,r.kt)("h3",{id:"setting-up-the-venom-smart-contract-development-environment"},(0,r.kt)("a",{parentName:"h3",href:"/build/development-guides/setting-up-the-venom-smart-contract-development-environment"},"Setting Up The Venom Smart Contract Development Environment")),(0,r.kt)("p",null,"How to set up the development environment with the necessary tools to improve your development experience."),(0,r.kt)("h3",{id:"how-to-create-your-own-fungible-tip-3-token"},(0,r.kt)("a",{parentName:"h3",href:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network"},"How to create your own fungible TIP-3 token")),(0,r.kt)("p",null,"Learn you possibilities of the Venom blockchain for ",(0,r.kt)("a",{parentName:"p",href:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/quick-start-developing-with-tip-3"},"fungible tokens implementation"),", create your own ",(0,r.kt)("a",{parentName:"p",href:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/simple-tokensale"},"tokensale contract"),", and improve your skills in Smart Contract development with the ",(0,r.kt)("a",{parentName:"p",href:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/venom-in-action/ways-of-code-enhancing"},"Ways of code enhancing")," article."),(0,r.kt)("h3",{id:"how-to-create-your-own-non-fungible-tip-4-token"},(0,r.kt)("a",{parentName:"h3",href:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network"},"How to create your own non-fungible TIP-4 token")),(0,r.kt)("p",null,"Learn ",(0,r.kt)("a",{parentName:"p",href:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/quick-start-developing-with-tip-4"},"how to create the NFT collection")," with ",(0,r.kt)("a",{parentName:"p",href:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/venom-in-action/simple-nft-auction"},"Simple Auction contracts"),"."),(0,r.kt)("h3",{id:"tools--resources"},(0,r.kt)("a",{parentName:"h3",href:"/build/tools-and-resources"},"Tools & Resources")),(0,r.kt)("p",null,"Check out the list of helpful ",(0,r.kt)("strong",{parentName:"p"},"tools")," to start on the Venom blockchain"))}c.isMDXComponent=!0}}]);