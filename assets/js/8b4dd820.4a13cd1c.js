"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3636],{5318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(2685),o=(r(7378),r(5318));const a={title:"Release Notes - Podman Desktop 0.10",description:"Podman Desktop 0.10 has been released! New Create Container Wizard, improved Kubernetes workflows, revamped registries configuration, and more!",slug:"podman-desktop-release-0.10",authors:["deekay2310"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/podman-desktop-release-0.10",source:"@site/blog/2022-12-01-release-0.10-blog.md",title:"Release Notes - Podman Desktop 0.10",description:"Podman Desktop 0.10 has been released! New Create Container Wizard, improved Kubernetes workflows, revamped registries configuration, and more!",date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:4.09,hasTruncateMarker:!0,authors:[{name:"Dev Kumar",title:"Technical PMM Intern",url:"https://github.com/deekay2310",imageURL:"https://github.com/deekay2310.png",key:"deekay2310"}],frontMatter:{title:"Release Notes - Podman Desktop 0.10",description:"Podman Desktop 0.10 has been released! New Create Container Wizard, improved Kubernetes workflows, revamped registries configuration, and more!",slug:"podman-desktop-release-0.10",authors:["deekay2310"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},nextItem:{title:"Build & run Podman Desktop in a DevContainer",permalink:"/blog/develop-using-devcontainer"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release note covers Podman Desktop 0.10 release changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Containers Configuration"),": Container creation wizzard allowing to define environment variables, networking and more configuration options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes Improvements"),": Play Kubernetes YAML, custom Kubeconfig path support, reload of kube context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registries Configuration"),": Revamped registries configuration UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman Version"),": Podman 4.3.1 now included in Windows and Mac installers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UX/UI Improvements"),": Improved lists, better contrast, and more.")),(0,o.kt)("p",null,"Podman Desktop 0.10 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"))}d.isMDXComponent=!0}}]);