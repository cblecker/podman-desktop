"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[138],{5318:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7378),a=r(8944);const o="tabItem_wHwb";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},3337:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(2685),a=r(7378),o=r(8944),i=r(6457),l=r(784),s=r(9947),c=r(3457);const m="tabList_J5MA",d="tabItem_l0OV";function u(e){var t;const{lazy:r,block:i,defaultValue:u,values:p,groupId:g,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,l.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,a.useState)(h),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&k.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,r=P.indexOf(t),n=k[r].value;n!==w&&(T(t),O(n),null!=g&&N(g,String(n)))},I=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;r=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=P[t]??P[P.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},k.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>P.push(e),onKeyDown:I,onClick:E},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,i.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},6472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(2685),a=(r(7378),r(5318)),o=r(3337),i=r(9798);const l={sidebar_position:1,title:"Importing saved containers",description:"Import saved containers to migrate transparently to Podman, and continue using familiar containers.",keywords:["podman desktop","podman","containers","importing"],tags:["migrating-from-docker"]},s="Importing saved containers to Podman",c={unversionedId:"migrating-from-docker/importing-saved-containers",id:"migrating-from-docker/importing-saved-containers",title:"Importing saved containers",description:"Import saved containers to migrate transparently to Podman, and continue using familiar containers.",source:"@site/docs/migrating-from-docker/importing-saved-containers.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/importing-saved-containers",permalink:"/docs/migrating-from-docker/importing-saved-containers",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/importing-saved-containers.md",tags:[{label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Importing saved containers",description:"Import saved containers to migrate transparently to Podman, and continue using familiar containers.",keywords:["podman desktop","podman","containers","importing"],tags:["migrating-from-docker"]},sidebar:"tutorialSidebar",previous:{title:"Migrating from Docker",permalink:"/docs/migrating-from-docker/"},next:{title:"Using the `DOCKER_HOST` environment variable",permalink:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"importing-saved-containers-to-podman"},"Importing saved containers to Podman"),(0,a.kt)("p",null,"Consider importing saved containers to continue using familiar containers."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Podman")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You saved your existing containers by running the command:"),(0,a.kt)(o.Z,{groupId:"container-engines",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"podman",label:"Podman",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman save <your_container> > <your_container_archive>.tar \n"))),(0,a.kt)(i.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker save <your_container> > <your_container_archive>.tar\n")))))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Import your existing containers into Podman.\nRun the command for each container archive:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman import <your_container_archive>.tar\n")))),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your imported containers appear in the Podman Desktop ",(0,a.kt)("em",{parentName:"li"},"Images")," section.")),(0,a.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/save/"},(0,a.kt)("inlineCode",{parentName:"a"},"docker save")," reference documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.podman.io/en/latest/markdown/podman-save.1.html"},(0,a.kt)("inlineCode",{parentName:"a"},"podman save")," reference documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.podman.io/en/latest/markdown/podman-import.1.html"},(0,a.kt)("inlineCode",{parentName:"a"},"podman import")," reference documentation"))))}p.isMDXComponent=!0}}]);