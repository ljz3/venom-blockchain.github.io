"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[7218],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const l={sidebar_position:1,sidebar_label:"The Ledger",slug:"/general/wallet/the-ledger"},o="The Ledger",i={unversionedId:"start/general/wallet/the-ledger/the-ledger",id:"start/general/wallet/the-ledger/the-ledger",title:"The Ledger",description:"Setting up Venom Wallet accounts with a Ledger device.",source:"@site/docs/start/general/wallet/the-ledger/the-ledger.md",sourceDirName:"start/general/wallet/the-ledger",slug:"/general/wallet/the-ledger",permalink:"/general/wallet/the-ledger",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"The Ledger",slug:"/general/wallet/the-ledger"},sidebar:"docsSidebar",previous:{title:"Manage seeds and accounts",permalink:"/general/wallet/manage-seeds-and-accounts"},next:{title:"Installing Everscale on Ledger Live",permalink:"/general/wallet/installing-ledger-app"}},s={},c=[{value:"Setting up Venom Wallet accounts with a Ledger device.",id:"setting-up-venom-wallet-accounts-with-a-ledger-device",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-ledger"},"The Ledger"),(0,a.kt)("h2",{id:"setting-up-venom-wallet-accounts-with-a-ledger-device"},"Setting up Venom Wallet accounts with a Ledger device."),(0,a.kt)("admonition",{title:"info",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To start using the Venom Wallet with Ledger device you shoud have the Everscale app installed on it. See, how to install Everscale here.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Here is a guide to follow to set up the Venom Wallet Account using Ledger device:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prepare your Ledger device")," with the installed Eversacle App. You can find the instructions on Installing Everscale via Ledger Live ",(0,a.kt)("a",{parentName:"li",href:"/general/wallet/installing-ledger-app"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do not forget to")," have Ledger Live software ",(0,a.kt)("strong",{parentName:"li"},"closed")," at all times while performing the following steps.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you have just installed Venom Wallet and it has no connected seed phrases:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Launch Venom Wallet."),(0,a.kt)("li",{parentName:"ol"},"Choose Sign in with Ledger."),(0,a.kt)("li",{parentName:"ol"},"Follow the instructions starting with ",(0,a.kt)("strong",{parentName:"li"},"Step 6")," in the following guide.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you have launched Venom Wallet before and have connected seed phrases:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Venom Wallet extension."),(0,a.kt)("li",{parentName:"ol"},"Go to Profile Icon."),(0,a.kt)("li",{parentName:"ol"},"Press Manage Seed button."),(0,a.kt)("li",{parentName:"ol"},"In the Manage Seed Phrases window click \u201cAdd New\u201d."),(0,a.kt)("li",{parentName:"ol"},"In the Add Seed Phrase window in the dropdown list choose \u201cConnect Ledger\u201d and press Next."),(0,a.kt)("li",{parentName:"ol"},"Connect your Ledger to computer."),(0,a.kt)("li",{parentName:"ol"},"Enter the pin code to unlock it."),(0,a.kt)("li",{parentName:"ol"},"Navigate to the Everscale section on your Ledger dashboard to access the wallet."),(0,a.kt)("li",{parentName:"ol"},"Click Connect."),(0,a.kt)("li",{parentName:"ol"},"You will be prompted to approve the connection to a Ledger device in a pop-out window."),(0,a.kt)("li",{parentName:"ol"},"Select as many keys as you need. By default only the first key is selected, but you may add more."),(0,a.kt)("li",{parentName:"ol"},"You will receive a message \u201cCongratulations! Your account is activated!\u201d"),(0,a.kt)("li",{parentName:"ol"},"Click OK to close the window.")),(0,a.kt)("admonition",{title:"info",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All accounts which were selected in the Ledger will be named Ledger 1, Ledger 2 and so on by default.")),(0,a.kt)("p",null,"The Ledger device has been connected."))}p.isMDXComponent=!0}}]);