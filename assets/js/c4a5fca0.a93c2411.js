"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[8835],{4137:(e,t,i)=>{i.d(t,{Zo:()=>o,kt:()=>s});var l=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function I(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},d=Object.keys(e);for(l=0;l<d.length;l++)i=d[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)i=d[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var Z=l.createContext({}),c=function(e){var t=l.useContext(Z),i=t;return e&&(i="function"==typeof e?e(t):I(I({},t),e)),i},o=function(e){var t=c(e.components);return l.createElement(Z.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,d=e.originalType,Z=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),m=c(i),s=n,W=m["".concat(Z,".").concat(s)]||m[s]||b[s]||d;return i?l.createElement(W,I(I({ref:t},o),{},{components:i})):l.createElement(W,I({ref:t},o))}));function s(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=i.length,I=new Array(d);I[0]=m;var a={};for(var Z in t)hasOwnProperty.call(t,Z)&&(a[Z]=t[Z]);a.originalType=e,a.mdxType="string"==typeof e?e:n,I[1]=a;for(var c=2;c<d;c++)I[c]=i[c];return l.createElement.apply(null,I)}return l.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5230:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>Z,contentTitle:()=>I,default:()=>b,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var l=i(7462),n=(i(7294),i(4137));const d={sidebar_position:0,sidebar_label:"Fungible tokens in Venom network"},I="Fungible tokens in Venom network",a={unversionedId:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",id:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",title:"Fungible tokens in Venom network",description:"Fungible token&x20;",source:"@site/docs/build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network.md",sourceDirName:"build/development-guides/how-to-create-your-own-fungible-tip-3-token",slug:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Fungible tokens in Venom network"},sidebar:"buildSidebar",previous:{title:"Setting Up The Venom Smart Contract Development Environment",permalink:"/build/development-guides/setting-up-the-venom-smart-contract-development-environment"},next:{title:"Quick start developing with TIP-3",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/quick-start-developing-with-tip-3"}},Z={},c=[{value:"Fungible token ",id:"fungible-token-",level:2},{value:"What is TIP-3?",id:"what-is-tip-3",level:3},{value:"Some words about differences with ERC20",id:"some-words-about-differences-with-erc20",level:3}],o={toc:c};function b(e){let{components:t,...d}=e;return(0,n.kt)("wrapper",(0,l.Z)({},o,d,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fungible-tokens-in-venom-network"},"Fungible tokens in Venom network"),(0,n.kt)("h2",{id:"fungible-token-"},"Fungible token"," "),(0,n.kt)("p",null,"First, let's make sure we've chosen the right type of token for our purposes. In this article, we will implement the fungible token type. This type of asset is divisible, non-unique, and interchangeable, i.e. one unit is equivalent to any other unit of this asset."," "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you need to implement a different one of the most popular token types is NFT (Non-fungible token), follow ",(0,n.kt)("a",{parentName:"p",href:"../how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network"},"this")," article")),(0,n.kt)("p",null,"Venom network uses the standard of fungible tokens ",(0,n.kt)("a",{parentName:"p",href:"/standards/TIP/TIP-3/core-description"},"TIP-3")),(0,n.kt)("h3",{id:"what-is-tip-3"},"What is TIP-3?"),(0,n.kt)("p",null,"Just as ERC-20 is the most popular standard in the Ethereum network, TIP-3 assumes the same role in the Venom network. TIP-3 was designed to match the distributed system design of the Venom network and is cost-effective for its fee-paying model."),(0,n.kt)("p",null,"TIP-3 provides the following functionalities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"transfer tokens from one account to another"),(0,n.kt)("li",{parentName:"ul"},"get the current token balance of an account"),(0,n.kt)("li",{parentName:"ul"},"get the total supply of the token available on the network"),(0,n.kt)("li",{parentName:"ul"},"mint and burn tokens")),(0,n.kt)("h3",{id:"some-words-about-differences-with-erc20"},"Some words about differences with ERC20"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ERC20 concept simple scheme",src:i(8726).Z,width:"495",height:"260"})),(0,n.kt)("p",null,"As you may know, the ERC20 contract's main value is balance mapping. So users just have records about their balances and work only with this contract. TIP-3 working flow is different because of the asynchronous nature of TVM. Each user has his own wallet and operates with it. Wallet operates with another wallet for transfers (see scheme)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TIP-3 concept simple scheme",src:i(2302).Z,width:"541",height:"401"})),(0,n.kt)("p",null,"Safety of ",(0,n.kt)("inlineCode",{parentName:"p"},"TokenWallet - TokenWallet")," interaction is provided by address calculation mechanics. Each contract in Venom Blockchain can store some contract code and can calculate an address by using some state variables. Next, this address can be compared with ",(0,n.kt)("inlineCode",{parentName:"p"},"msg.sender")," address. If it is the same - the call is safe and correct. We will look through this mechanic in detail ",(0,n.kt)("a",{parentName:"p",href:"/build/development-guides/developing-of-simple-voting-system/venom-in-action/voting-system-contracts"},"later"),"."))}b.isMDXComponent=!0},8726:(e,t,i)=>{i.d(t,{Z:()=>l});const l="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ5NXB4IiBoZWlnaHQ9IjI2MHB4IiB2aWV3Qm94PSItMC41IC0wLjUgNDk1IDI2MCIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O2FwcC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0xMi0yMVQxNDoyODozNi40NzdaJnF1b3Q7IGFnZW50PSZxdW90OzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIFNhZmFyaS81MzcuMzYmcXVvdDsgdmVyc2lvbj0mcXVvdDsyMC41LjMmcXVvdDsgZXRhZz0mcXVvdDt4Sl9yWHZQV0dYNjZQd3ZDNlpNNSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDs4RDhIbjhiZjBHSk10UktQR0pLayZxdW90OyZndDs3WmhOczlNZ0ZJWi9UV2Qwa3lGQTBuUjUrNkV1ZE1heEMzWEpEZHdFSmFGRHFHMzk5WjQwcFBrZzFlcXQ0OGJOdmVUbEsvQzhIRTQ2STZ2aStOcXdYZjVPYzZGbUdQSGpqS3huR0dNYXdkOWFPRFZDVE9hTmtCbkpHeW5zaEszOExweUluTHFYWEZTRGhsWnJaZVZ1S0thNkxFVnFCeG96UmgrR3paNjBHczY2WTVud2hHM0tsSzkrbE56bWpacmdlYWUvRVRMTDI1bkRlTkhVRkt4dDdGWlM1WXpyUTA4aW14bFpHYTF0VXlxT0s2SHF2V3YzcGVuMzZrcnQ1Y1dNS08wdEhYRFQ0UnRUZTdjMjkxNzIxQzdXNkgzSlJkMGV6Y2p5a0VzcnRqdVcxclVIb0F0YWJnc0ZUeUVVbjZSU0s2MjBPZmNsSVFwcG1EaDk2OFprZTZ0QnlnempFbDZ6MXh4dnlBSzgwZFd0cFFGK1VwZFFYK2w5dlhuTHlocjlWYlM5U2wzQ21FdTNER0dzT0Y3ZGl2Q3l3V0JNb1F0aHpRbWF0QjBBVXpCM3puVEdEQWxCZ1pNT0hXbTZJQUYyY3Q0RGpTUEhtVG1EWlpkWk9nWlFjQmlta1JDUGdPRGdQdmVvamMxMXBrdW1OcDI2N0JqVkVMbzJiN1hlT2ZHTHNQYmtqcElqNExqVldNVlIyays5OHVlNkhFVHVhWDNzVmExUDdrR3hSNkdXTFAyYW5hY2ZFV2xxdGVIQ2pHcUdBQUU3MnF6WEQvR2xwajFTWnovcGdVSFc4d2VFTitlV3pOaUgraWhEUmFwWVZjbTBsVjlKMWRwUmxMeHQ1Q1lIeGRXamkyM3EvUjJZQnF4bVVpZlJtMzFraEdKV2Zoc09OZVVFMS9XOWxqQmk1ejlNMGRCOE5Gb0VDWVdvRjBHRURLTmtPQ0lzTlJQV0RUS3kxK1d0Ym5JYzlZTEE1c09xRGh4b1c4Qit3djhWWURBc3RaNDFxNE1zRkR2djdBMlJZUlFCZkNNSXpsbnNZKy8wWG5oeFFQODhqTURTM0htZzZFNGhoSkJSL0tEdGxkV0xIamhDZnVnSUVmcWxZVDdBSWxpWndSWjJNOFo0YUJvSVdONkU0V0ppUWpLYWp5a3JUTW1zV05hSHVYcW1wU0xQVWdYYjdXU1p2V0NjRzFIQitPaXN4NnlvalpMWk13RzBCemZqS0g0SnhVY0d4a3BGNVhrTytOaWh0eWF2aEFtdk1DV3oyZ01wOEJTZ0wydmFFdTcxQjFkUlNNN1ZOVE1QTDhLcmZ2NUorTHI0K0NhdjBaOTZEUStkRmszNExKeTRvc2JZLytTR2lqMjRzSCt3VTljemgvRGU4ZUYrY2VCWmlINlZVWkE0b0dRVUVaQlBLcUZUdWNUelFjMDlVRXY5K0IrVGp5a0t4bkdiemlmeXZpUUtrdm5mUVpWNHFGWTVNMHIrUDFVMzRWcE1IS3EvQjJ2aHdmSW8rWmxuajhvUTRiL01vMmZUQ2ZBTk5IbzdQWlhQdE5yZGsrSW9IZ0Zza25VdkQ3NWhLQktOaHJwZlN0Mm1mWGY5c0I0ZDVMc213eU1yRVVvRWZiclhnY1dMQUk4L3JLbC9ZbW1jVEg5VzA5OVBXdUN4K3hXbEFkajlGRVUyUHdBPSZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9Im14LWdyYWRpZW50LTEwMTQxOC0xLTJlMzk0NS0xLXMtMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IHJnYigxNiwgMjAsIDI0KTsgc3RvcC1vcGFjaXR5OiAxOyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IHJnYig0NiwgNTcsIDY5KTsgc3RvcC1vcGFjaXR5OiAxOyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnPjxyZWN0IHg9Ii0wLjI1IiB5PSItMC41IiB3aWR0aD0iNDkzLjI1IiBoZWlnaHQ9IjI1OSIgZmlsbD0idXJsKCNteC1ncmFkaWVudC0xMDE0MTgtMS0yZTM5NDUtMS1zLTApIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDIxMS42MyAxMjkuMDEgTCAxODAuNTMgMTI5LjA0IFEgMTcwLjUzIDEyOS4wNSAxNjAuNTMgMTI5LjAxIEwgMTIzIDEyOC44NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDIxNi44OCAxMjkgTCAyMDkuODkgMTMyLjUxIEwgMjExLjYzIDEyOS4wMSBMIDIwOS44OCAxMjUuNTEgWiIgZmlsbD0iIzBlZGRhNiIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDIxOCAxMTkgTCAyMTggNzkgTCA0NjggNzkgTCA0NjggMTE5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwZWRkYTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMjE4IDExOSBMIDIxOCAxNzkgTCA0NjggMTc5IEwgNDY4IDExOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHBhdGggZD0iTSAyMTggMTE5IEwgNDY4IDExOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KXNjYWxlKDAuOTk5OTk5OTk5OTk5OTk5OSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDElIiBoZWlnaHQ9IjEwMSUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAyNDhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA5OXB4OyBtYXJnaW4tbGVmdDogMjE5cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICMwZWRkYTY7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigxNCwgMjIxLCAxNjYpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogbm9uZTsgZm9udC13ZWlnaHQ6IGJvbGQ7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkVSQzIwIFNtYXJ0IENvbnRyYWN0PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM0MyIgeT0iMTAzIiBmaWxsPSIjMGVkZGE2IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5FUkMyMCBTbWFydCBDb250cmFjdDwvdGV4dD48L3N3aXRjaD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KXNjYWxlKDAuOTk5OTk5OTk5OTk5OTk5OSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDElIiBoZWlnaHQ9IjEwMSUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAyMTNweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxNDRweDsgbWFyZ2luLWxlZnQ6IDI0NHB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMGVkZGE2OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMTQsIDIyMSwgMTY2KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPm1hcHBpbmcoYWRkcmVzcyA9Jmd0OyB1aW50MjU2KSBiYWxhbmNlczwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzNTEiIHk9IjE0OCIgZmlsbD0iIzBlZGRhNiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5tYXBwaW5nKGFkZHJlc3MgPSZndDsgdWludDI1NikgYmFsYW5jZXM8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjE5LjQzIiB5PSI2OSIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjI1IiByeD0iMy43NSIgcnk9IjMuNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBlZGRhNiIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpc2NhbGUoMC45OTk5OTk5OTk5OTk5OTk5KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMSUiIGhlaWdodD0iMTAxJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDgycHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogODJweDsgbWFyZ2luLWxlZnQ6IDIwcHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICMwZWRkYTY7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigxNCwgMjIxLCAxNjYpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogbm9uZTsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+QWxpY2U8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNjEiIHk9Ijg1IiBmaWxsPSIjMGVkZGE2IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFsaWNlPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxOC41IiB5PSIxMTYuNSIgd2lkdGg9Ijg1Ljg3IiBoZWlnaHQ9IjI1IiByeD0iMy43NSIgcnk9IjMuNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBlZGRhNiIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpc2NhbGUoMC45OTk5OTk5OTk5OTk5OTk5KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMSUiIGhlaWdodD0iMTAxJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDg0cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTI5cHg7IG1hcmdpbi1sZWZ0OiAxOXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMGVkZGE2OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMTQsIDIyMSwgMTY2KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkJvYjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MSIgeT0iMTMzIiBmaWxsPSIjMGVkZGE2IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJvYjwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMTguNSIgeT0iMTU5IiB3aWR0aD0iODUuODciIGhlaWdodD0iMjUiIHJ4PSIzLjc1IiByeT0iMy43NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSlzY2FsZSgwLjk5OTk5OTk5OTk5OTk5OTkpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAxJSIgaGVpZ2h0PSIxMDElIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogODRweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxNzJweDsgbWFyZ2luLWxlZnQ6IDE5cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICMwZWRkYTY7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigxNCwgMjIxLCAxNjYpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogbm9uZTsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+Q2hhcmxpZTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2MSIgeT0iMTc1IiBmaWxsPSIjMGVkZGE2IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNoYXJsaWU8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMTIzIDIzNCBMIDEyMyAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGVkZGE2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PHJlY3QgeD0iMTIuMjUiIHk9IjkiIHdpZHRoPSI0NjguMjUiIGhlaWdodD0iMjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzNDNlNGYiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5UZXh0IGlzIG5vdCBTVkcgLSBjYW5ub3QgZGlzcGxheTwvdGV4dD48L2E+PC9zd2l0Y2g+PC9zdmc+"},2302:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/tip3-31716d5e606d4f812edb7a7cd4e204b1.svg"}}]);