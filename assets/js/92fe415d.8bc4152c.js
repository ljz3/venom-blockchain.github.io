"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[3486],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(7462),a=(n(7294),n(4137));const i={sidebar_position:1,sidebar_label:"Quick start developing with TIP-4",description:"This page helps you to instantly start developing with TIP-4 and deploy your NFT collection here and now. Read the next guides, if you want to go deeper."},l="Quick start developing with TIP-4",r={unversionedId:"build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/quick-start-developing-with-tip-4",id:"build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/quick-start-developing-with-tip-4",title:"Quick start developing with TIP-4",description:"This page helps you to instantly start developing with TIP-4 and deploy your NFT collection here and now. Read the next guides, if you want to go deeper.",source:"@site/docs/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/quick-start-developing-with-tip-4.md",sourceDirName:"build/development-guides/how-to-create-your-own-non-fungible-tip-4-token",slug:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/quick-start-developing-with-tip-4",permalink:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/quick-start-developing-with-tip-4",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Quick start developing with TIP-4",description:"This page helps you to instantly start developing with TIP-4 and deploy your NFT collection here and now. Read the next guides, if you want to go deeper."},sidebar:"buildSidebar",previous:{title:"Non-Fungible tokens in Venom network",permalink:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network"},next:{title:"Simple NFT auction",permalink:"/build/development-guides/how-to-create-your-own-non-fungible-tip-4-token/venom-in-action/simple-nft-auction"}},s={},c=[{value:"Source Code",id:"source-code",level:2},{value:"How to deploy your own NFT collection",id:"how-to-deploy-your-own-nft-collection",level:2},{value:"Initialize your NFT project",id:"initialize-your-nft-project",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Implement base contracts",id:"implement-base-contracts",level:3},{value:"Deploy action",id:"deploy-action",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start-developing-with-tip-4"},"Quick start developing with TIP-4"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"During the following of this guide's code-listings you can meet keywords like ",(0,a.kt)("inlineCode",{parentName:"p"},"pragma ever-solidity")," or keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"ever")," as a unit of the transfer value. It will be changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"venom")," soon. Follow the news and updates.")),(0,a.kt)("h2",{id:"source-code"},"Source Code"),(0,a.kt)("p",null,"You can inspect the source code of TIP-4 token implementation by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/itgoldio/everscale-tip"},"link"),"."),(0,a.kt)("h2",{id:"how-to-deploy-your-own-nft-collection"},"How to deploy your own NFT collection"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You need to have an installed Smart Contract Development Environment. If you haven't already, follow ",(0,a.kt)("a",{parentName:"p",href:"../setting-up-the-venom-smart-contract-development-environment"},"this tutorial"),".")),(0,a.kt)("h3",{id:"initialize-your-nft-project"},"Initialize your NFT project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift init --path my-first-nft\n> [INFO]  New Locklift project initialized in .\n> [INFO]  Installing required dependencies...\n> [INFO]  \n> added 181 packages, and audited 182 packages in 13s\n\n> 23 packages are looking for funding\n>   run `npm fund` for details\n\n> found 0 vulnerabilities\n\n> [INFO]  LockLift initialized in my-first-nft happy hacking!\n")),(0,a.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,a.kt)("p",null,"TIP-4 is accessible from npm. Let's install it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev @itgold/everscale-tip\n")),(0,a.kt)("h3",{id:"implement-base-contracts"},"Implement base contracts"),(0,a.kt)("p",null,"Next, you should implement two interfaces in two contracts. Firstly, let's deal with Nft contract. The only thing we should do for basics is implementing `TIP4_1Nft``"," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Nft.sol" lineNumbers="true"',title:'"Nft.sol"',lineNumbers:'"true"'},"pragma ever-solidity >= 0.61.2;\n\npragma AbiHeader expire;\npragma AbiHeader time;\npragma AbiHeader pubkey;\n\nimport '@itgold/everscale-tip/contracts/TIP4_1/TIP4_1Nft.sol';\n\ncontract Nft is TIP4_1Nft {\n\n    constructor(\n        address owner,\n        address sendGasTo,\n        uint128 remainOnNft\n    ) TIP4_1Nft(\n        owner,\n        sendGasTo,\n        remainOnNft\n    ) public {}\n\n}\n")),(0,a.kt)("p",null,"Now we should go for the Collection contract. We should implement ",(0,a.kt)("inlineCode",{parentName:"p"},"TIP4_1Collection")," and write some method for NFT deploying."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Collection.sol" lineNumbers="true"',title:'"Collection.sol"',lineNumbers:'"true"'},"pragma ever-solidity >= 0.61.2;\n\npragma AbiHeader expire;\npragma AbiHeader time;\npragma AbiHeader pubkey;\n\nimport '@itgold/everscale-tip/contracts/TIP4_1/TIP4_1Collection.sol';\nimport './Nft.sol';\n\ncontract Collection is TIP4_1Collection {\n\n    constructor(\n        TvmCell codeNft\n    ) TIP4_1Collection (\n        codeNft\n    ) public {\n        tvm.accept();\n    }\n\n    function mintNft() external virtual {\n        require(msg.value > 0.4 ever, 101);\n        tvm.rawReserve(0, 4);\n\n        uint256 id = uint256(_totalSupply);\n        _totalSupply++;\n\n        TvmCell codeNft = _buildNftCode(address(this));\n        TvmCell stateNft = tvm.buildStateInit({\n            contr: Nft,\n            varInit: {_id: id},\n            code: codeNft\n        });\n        new Nft{\n            stateInit: stateNft,\n            value: 0,\n            flag: 128\n        }(\n            msg.sender,\n            msg.sender,\n            0.3 ever\n        );     \n    }\n}\n")),(0,a.kt)("p",null,"The previous code uses only TIP-4.1 part of TIP-4. But it is kinda useless. To work with your NFT with full NFT experience you should implement ",(0,a.kt)("a",{parentName:"p",href:"/standards/TIP/TIP-4/2"},"TIP-4.2")," - standard, which helps you with NFT metadata storing. Also, you will need ",(0,a.kt)("a",{parentName:"p",href:"/standards/TIP/TIP-4/3"},"TIP-4.3")," - standard, which helps other dApps to find all your NFT with single query (GQL or JRPC). You should study the information about these standards by links. Implementation of 4.2 and 4.3 is pretty simple."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="Collection.sol" lineNumbers="true"',title:'"Collection.sol"',lineNumbers:'"true"'},"pragma ever-solidity >= 0.61.2;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\n// importing all standards bases\nimport '@itgold/everscale-tip/contracts/TIP4_1/TIP4_1Nft.sol';\nimport '@itgold/everscale-tip/contracts/TIP4_2/TIP4_2Nft.sol';\nimport '@itgold/everscale-tip/contracts/TIP4_3/TIP4_3Nft.sol';\n\n\ncontract Nft is TIP4_1Nft, TIP4_2Nft, TIP4_3Nft {\n\n    // just call constructors of all implemented classes\n    constructor(\n        address owner,\n        address sendGasTo,\n        uint128 remainOnNft,\n        string json, // for TIP-4.2\n        TvmCell codeIndex, // for TIP-4.3\n        uint128 indexDeployValue, // for TIP-4.3\n        uint128 indexDestroyValue // for TIP-4.3\n    ) TIP4_1Nft(\n        owner,\n        sendGasTo,\n        remainOnNft\n    ) TIP4_2Nft (\n        json\n    ) TIP4_3Nft (\n        indexDeployValue,\n        indexDestroyValue,\n        codeIndex\n    ) \n    public {\n        \n    }\n\n    // Also, you need to implement some handlers, linked with NFT transferring\n    // Maybe you need to implement something special, but you can also use default handlers\n    \n    function _beforeTransfer(\n        address to, \n        address sendGasTo, \n        mapping(address => CallbackParams) callbacks\n    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {\n        TIP4_3Nft._destructIndex(sendGasTo);\n    }\n\n    function _afterTransfer(\n        address to, \n        address sendGasTo, \n        mapping(address => CallbackParams) callbacks\n    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {\n        TIP4_3Nft._deployIndex();\n    }\n\n    function _beforeChangeOwner(\n        address oldOwner, \n        address newOwner,\n        address sendGasTo, \n        mapping(address => CallbackParams) callbacks\n    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {\n        TIP4_3Nft._destructIndex(sendGasTo);\n    }   \n\n    function _afterChangeOwner(\n        address oldOwner, \n        address newOwner,\n        address sendGasTo, \n        mapping(address => CallbackParams) callbacks\n    ) internal virtual override(TIP4_1Nft, TIP4_3Nft) {\n        TIP4_3Nft._deployIndex();\n    }\n\n}\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Notice, that Index (and IndexBasis) code must be precompiled! You shouldn't compile these contracts by yourself. Just take it from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/venom-blockchain/guides/tree/master/nft-auction-contracts/precompiled"},"here"),", place it somewhere in your project, and add them as external contracts in your locklift config like this:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="locklift.config.ts" lineNumbers="false"',title:'"locklift.config.ts"',lineNumbers:'"false"'},'...\n  compiler: {\n    // Specify path to your TON-Solidity-Compiler\n    // path: "/mnt/o/projects/broxus/TON-Solidity-Compiler/build/solc/solc",\n\n    // Or specify version of compiler\n    version: "0.62.0",\n\n    // Specify config for extarnal contracts as in exapmple\n    externalContracts: {\n      "../path/to/precompiled/indexes": [\'Index\', \'IndexBasis\']\n    }\n    ...\n'))),(0,a.kt)("h3",{id:"deploy-action"},"Deploy action"),(0,a.kt)("p",null,"Let's move to deploy action. We need two scripts for this quick start: one for ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," deploying, and the second for calling ",(0,a.kt)("inlineCode",{parentName:"p"},"mintNft")," function, that we have implemented."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="1-deploy-collection.ts" lineNumbers="true"',title:'"1-deploy-collection.ts"',lineNumbers:'"true"'},'async function main() {\n  const signer = (await locklift.keystore.getSigner("0"))!;\n  const nftArtifacts = await locklift.factory.getContractArtifacts("NFT");\n  const indexArtifacts = await locklift.factory.getContractArtifacts("Index");\n  const indexBasisArtifacts = await locklift.factory.getContractArtifacts("IndexBasis");\n  const { contract: sample, tx } = await locklift.factory.deployContract({\n    contract: "Collection",\n    publicKey: signer.publicKey,\n    initParams: {},\n    constructorParams: {\n        codeNft: nftArtifacts.code,\n        codeIndex: indexArtifacts.code,\n        codeIndexBasis: indexBasisArtifacts.code,\n        json: `{"collection":"tutorial"}` // EXAMPLE...not by TIP-4.2\n    },\n    value: locklift.utils.toNano(5),\n  });\n\n  console.log(`Collection deployed at: ${sample.address.toString()}`);\n}\n\nmain()\n  .then(() => process.exit(0))\n  .catch(e => {\n    console.log(e);\n    process.exit(1);\n  });\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="2-call-mintNft.ts" lineNumbers="true"',title:'"2-call-mintNft.ts"',lineNumbers:'"true"'},'import { toNano, WalletTypes } from "locklift";\n\n// you can get this parameter as (await locklift.keystore.getSigner("0"))! if you have a seed phrase sets up in key section of locklift config\n// or you can pass this parameter by cli or get them by some file reading for example\n// if phrase or secret was not set up in key section, calling (await locklift.keystore.getSigner("0"))! will give you a different results from launch to lauch\n// we just hardcode it here\nconst COLLECTION_DEPLOY_PUBLIC_KEY = "e85f61aaef0ea43afc14e08e6bd46c3b996974c495a881baccc58760f6349300"\n\nasync function main() {\n    const signer = (await locklift.keystore.getSigner("0"))!;\n    const collectionArtifacts = await locklift.factory.getContractArtifacts("Collection");\n    const nftArtifacts = await locklift.factory.getContractArtifacts("NFT");\n\n    // calculation of deployed Collection contract address\n    const collectionAddress = await locklift.provider.getExpectedAddress(\n        collectionArtifacts.abi,\n        {\n            tvc: collectionArtifacts.tvc,\n            publicKey: COLLECTION_DEPLOY_PUBLIC_KEY,\n            initParams: {} // we don\'t have any initParams for collection\n        }\n    );\n    // initialize contract object by locklift\n    const collectionInsance = await locklift.factory.getDeployedContract(\n        "Collection",\n        collectionAddress\n    );\n\n    // creating new account for Collection calling (or you can get already deployed by locklift.factory.accounts.addExistingAccount)\n    const { account: someAccount } = await locklift.factory.accounts.addNewAccount({\n        type: WalletTypes.WalletV3,\n        value: toNano(10),\n        publicKey: signer.publicKey\n    });\n    // call mintNft function\n    // firstly get current nft id (totalSupply) for future NFT address calculating\n    const {count: id} = await collectionInsance.methods.totalSupply({ answerId: 0 }).call();\n    await collectionInsance.methods.mintNft({ json: `{"name":"hello world"}` }).send({ from: someAccount.address, amount: toNano(1)});\n    const {nft: nftAddress} = await collectionInsance.methods.nftAddress({ answerId: 0, id: id }).call();\n  \n    console.log(`NFT: ${nftAddress.toString()}`);\n}\n  \nmain()\n    .then(() => process.exit(0))\n    .catch(e => {\n        console.log(e);\n        process.exit(1);\n    });\n  \n')),(0,a.kt)("p",null,"Finally, we can deploy a new token to the ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," network. For this, make sure the local node is running, if not follow the next command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name local-node -e USER_AGREEMENT=yes -p80:80 tonlabs/local-node\n")),(0,a.kt)("p",null,"and run our scripts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s ./scripts/1-deploy-collection.ts -n local\n> [INFO]  factorySource generated\n> [INFO]  Built\n> Collection deployed at: 0:882c1f7af09efaf506ab313daecb6ce127acfab7d082e28e6dbcff839aa58bba\nnpx locklift run -s ./scripts/2-call-mintNft.ts -n local\n> [INFO]  factorySource generated\n> [INFO]  Built\n> NFT: 0:64a4ea8fa80bf3d2ba78c0a602e39a045786a70b69e879f90e9abe2a2f7f33fe</code></pre>\n")),(0,a.kt)("p",null,"Now you know how to deploy your own NFT collection and mint NFT with TIP-4 standard!"))}p.isMDXComponent=!0}}]);