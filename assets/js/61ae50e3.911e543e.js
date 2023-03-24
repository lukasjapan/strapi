"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(3117),o=(r(7294),r(3905));const a={title:"Introduction",slug:"/upload",tags:["upload"]},i="Provider",l={unversionedId:"core/upload/backend/providers/intro",id:"core/upload/backend/providers/intro",title:"Introduction",description:"Extends the upload plugin, to connect to different external services or applications, such as Amazon S3 buckets, Cloudinary, etc.",source:"@site/docs/core/upload/backend/providers/intro.md",sourceDirName:"core/upload/backend/providers",slug:"/upload",permalink:"/upload",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/core/upload/backend/providers/intro.md",tags:[{label:"upload",permalink:"/tags/upload"}],version:"current",frontMatter:{title:"Introduction",slug:"/upload",tags:["upload"]}},p={},d=[],c={toc:d};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"provider"},"Provider"),(0,o.kt)("p",null,"Extends the upload plugin, to connect to different external services or applications, such as Amazon S3 buckets, Cloudinary, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In the case of the Upload plugin, the provider should be able to upload files to a remote server and delete them.")),(0,o.kt)("h1",{id:"using-a-provider"},"Using a provider"),(0,o.kt)("p",null,"To use a provider, you need to install it and configure it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./config/plugins.js")," file."),(0,o.kt)("p",null,"More info about installing providers on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/development/providers.html#installing-providers"},"strapi docs"),"."),(0,o.kt)("h1",{id:"provider-development"},"Provider development"),(0,o.kt)("p",null,"To create a provider, you need to create a package that exports a function that returns an object with the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isPrivate()")," (optional) - Returns a boolean indicating if the provider is private or not. If it is, the ",(0,o.kt)("inlineCode",{parentName:"li"},"getSignedUrl")," method will be used to get the URL of the file. (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getSignedUrl(file)"),". (optional) - Returns a signed URL to access the file if it requires authentication"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upload(file)")," - Uploads a file to the provider"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"uploadStream(stream)")," (optional) - Uploads a stream to the provider"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delete(file)")," - Deletes a file from the provider")))}s.isMDXComponent=!0}}]);