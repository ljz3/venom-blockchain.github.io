"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[524],{4137:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=l(a),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return a?r.createElement(m,s(s({ref:t},h),{},{components:a})):r.createElement(m,s({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(7462),n=(a(7294),a(4137));const i={sidebar_position:2,sidebar_label:"Architecture",slug:"/learn/architecture"},s="Architecture",o={unversionedId:"start/learn/architecture",id:"start/learn/architecture",title:"Architecture",description:"The Venom platform's architecture is built as a heterogeneous multi-blockchain system with dynamic sharding capabilities.",source:"@site/docs/start/learn/architecture.md",sourceDirName:"start/learn",slug:"/learn/architecture",permalink:"/learn/architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Architecture",slug:"/learn/architecture"},sidebar:"docsSidebar",previous:{title:"Tokens and Assets",permalink:"/learn/tokens-and-assets"},next:{title:"Accounts",permalink:"/learn/accounts"}},c={},l=[{value:"Components",id:"components",level:2},{value:"Masterchain",id:"masterchain",level:3},{value:"Workchains",id:"workchains",level:3},{value:"Shardchain",id:"shardchain",level:3},{value:"Dynamic sharding",id:"dynamic-sharding",level:2},{value:"Split event",id:"split-event",level:3},{value:"Merge event",id:"merge-event",level:3}],h={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The Venom platform's architecture is built as a heterogeneous multi-blockchain system with dynamic sharding capabilities."),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("h3",{id:"masterchain"},"Masterchain"),(0,n.kt)("p",null,"The masterchain is a layer-0 blockchain, which is responsible for coordinating all the protocol entities such as the workchains and shardchains. The masterchain state stores the network configuration, information about a set of validators, their stakes, and election rounds. Blocks of the masterchain contain the shards configuration and the latest block hashes of the corresponding shardchains. Blocks of the masterchain are produced by the global validators set."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecrture",src:a(5003).Z,width:"4750",height:"3368"})),(0,n.kt)("h3",{id:"workchains"},"Workchains"),(0,n.kt)("p",null,"A workchain is a specialized layer-1 blockchain that is secured by the global validators set."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Venom supports up to 2^32 workchains")),(0,n.kt)("p",null,"Based on masterchain security, a workchain may have its own state transition function, virtual machine, cryptographic primitives, transaction or block structures and native cryptocurrencies."),(0,n.kt)("p",null,"In this respect, the Venom Blockchain is heterogeneous. For example, one of the workchains can implement the NFT gaming network while another could be created as a DeFi hub based on EVM. Each workchain runs within the Venom environment and is secured by its consensus of masterchain validators."),(0,n.kt)("h3",{id:"shardchain"},"Shardchain"),(0,n.kt)("p",null,"Shardchains can be thought of as separate processing units, each with its own private memory space for executing computations."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Each workchain can be further divided into up to 2^60 shardchains")),(0,n.kt)("p",null,'In this context, "memory space" refers to the range of addresses where smart contracts are stored on the blockchain. Each shardchain is assigned a specific range of contract addresses and is responsible for executing transactions only for those contracts within that range.'),(0,n.kt)("p",null,"This improves network performance by allowing computations to be done simultaneously among groups of validators."),(0,n.kt)("h2",{id:"dynamic-sharding"},"Dynamic sharding"),(0,n.kt)("p",null,"Initially, the Venom network has only one shardchain, which covers all smart contract addresses of the workchain. Validators from the global validators set produce blocks for this shardchain."),(0,n.kt)("h3",{id:"split-event"},"Split event"),(0,n.kt)("p",null,'When the volume of transactions increases (if the shardchain blocks have been at least 90% full for 64 consecutive blocks), validators will produce a block with a "want split" flag. This flag alerts the global set of validators to select subsets of validators to handle a specific range of addresses within the shardchain. These subsets are rotated and are predetermined, so that each validator knows which shards they will be responsible for validating.'),(0,n.kt)("p",null,"A shardchain is always divided into two shardchains, each gets a binary prefix in its address."),(0,n.kt)("p",null,"Validator groups produce blocks for a shardchain approximately simultaneously, after which it takes about a second for the masterchain block to be released, which includes the hashes of the shardchain blocks. The shardchain block included in the masterchain block is considered to be finalized and the system relies on its immutability. A masterchain block containing references to blocks of all shardchains represents the system's overall state and can be used as an indicator of updating the state of the blockchain."),(0,n.kt)("h3",{id:"merge-event"},"Merge event"),(0,n.kt)("p",null,'When the volume of transactions decreases (if for 64 consecutive blocks, the combined size of the two blocks of sibling shardchains does not exceed 60% of the maximum block size), validators will produce a block with a "want merge" flag. This flag instructs the subset of validators to become validators for the merged shardchain. They include a "merge commit" flag in the headers of their shardchain blocks and stop creating new blocks in separate shardchains.'))}d.isMDXComponent=!0},5003:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/architecture-65c37547caa3c2a2751eb2307cf585c3.jpeg"}}]);