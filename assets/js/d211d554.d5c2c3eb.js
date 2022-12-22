"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[7315],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,p=m["".concat(c,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(4137));const r={sidebar_position:3,sidebar_label:"Sending tokens from the Multisignature Account",slug:"/general/wallet/sending-tokens-from-the-multisignature-account"},i="Sending tokens from the Multisignature Account and Approving by Tracking Accounts",s={unversionedId:"start/general/wallet/multisignature-account/sending-tokens-from-the-multisignature-account",id:"start/general/wallet/multisignature-account/sending-tokens-from-the-multisignature-account",title:"Sending tokens from the Multisignature Account and Approving by Tracking Accounts",description:"In order to send tokens from the Multisignature account, the majority of Custodians (i.e. 2 out of 3; but 2 out of 2) will have to sign the transaction.",source:"@site/docs/start/general/wallet/multisignature-account/sending-tokens-from-the-multisignature-account.md",sourceDirName:"start/general/wallet/multisignature-account",slug:"/general/wallet/sending-tokens-from-the-multisignature-account",permalink:"/general/wallet/sending-tokens-from-the-multisignature-account",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Sending tokens from the Multisignature Account",slug:"/general/wallet/sending-tokens-from-the-multisignature-account"},sidebar:"docsSidebar",previous:{title:"Creating Tracking Account",permalink:"/general/wallet/creating-tracking-account"},next:{title:"Manage seeds and accounts",permalink:"/general/wallet/manage-seeds-and-accounts"}},c={},l=[{value:"Instructions for the custodians, once the transaction has been initiated.",id:"instructions-for-the-custodians-once-the-transaction-has-been-initiated",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-tokens-from-the-multisignature-account-and-approving-by-tracking-accounts"},"Sending tokens from the Multisignature Account and Approving by Tracking Accounts"),(0,o.kt)("p",null,"In order to send tokens from the Multisignature account, the majority of Custodians (i.e. 2 out of 3; but 2 out of 2) will have to sign the transaction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For the initiator of the transaction:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the main screen of the Venom Wallet extension, open the preferred Multisignature account or Tracking account."),(0,o.kt)("li",{parentName:"ol"},"Select a command to \u201cSend\u201d."),(0,o.kt)("li",{parentName:"ol"},"At the top of the Send your funds screen select the token which you are going to Send. $VENOM token is selected by default."),(0,o.kt)("li",{parentName:"ol"},"In the Receiver Address field paste (or manually enter) the wallet address of the recipient."),(0,o.kt)("li",{parentName:"ol"},"In the Amount field enter the amount of tokens to be sent. This field can contain decimals.")),(0,o.kt)("admonition",{title:"info",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After all the data has been entered, the extension will calculate the gas fee and will indicate it in the Blockchain fee field. This field is dynamic and the estimated fee will be changing over time.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Enter the Wallet password and click Confirm transaction."),(0,o.kt)("li",{parentName:"ol"},"A link generated to follow the transaction on Venom scan will appear. The status and details on the transaction can be located by following the link.")),(0,o.kt)("h3",{id:"instructions-for-the-custodians-once-the-transaction-has-been-initiated"},"Instructions for the custodians, once the transaction has been initiated."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure that you are logged into the seed which has been added as a Custodian of the Multisignature account. You find the instructions on how to become the Custodian ",(0,o.kt)("a",{parentName:"li",href:"/general/wallet/creating-tracking-account"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"Scroll the Accounts to the connected Tracking account"),(0,o.kt)("li",{parentName:"ol"},"From the main screen go to the Transactions tab."),(0,o.kt)("li",{parentName:"ol"},"Locate the transaction with the \u201cWaiting for confirmation\u201d label that you are going to sign and click on it."),(0,o.kt)("li",{parentName:"ol"},"You can scroll down to see which address is the Initiator of the transaction, and how many Custodians are still pending. You can also find the essential data (such as date and time of transaction, expiration time, recipient address, transaction ID, amount and token being sent, number of signatures collected, and the status of the signature of each custodian)."),(0,o.kt)("li",{parentName:"ol"},"If you are in agreement with the pending transaction to proceed, press \u201cConfirm\u201d."),(0,o.kt)("li",{parentName:"ol"},"Enter your Venom Wallet password to confirm.")),(0,o.kt)("admonition",{title:"info",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The user can set up the number of the Custodians while creating the Multisignature Account.")))}d.isMDXComponent=!0}}]);