"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83],{5318:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>c});var a=e(7378);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var r=a.createContext({}),d=function(t){var n=a.useContext(r),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=d(t.components);return a.createElement(r.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,r=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(e),c=i,w=u["".concat(r,".").concat(c)]||u[c]||m[c]||o;return e?a.createElement(w,l(l({ref:n},p),{},{components:e})):a.createElement(w,l({ref:n},p))}));function c(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,l=new Array(o);l[0]=u;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=t,s.mdxType="string"==typeof t?t:i,l[1]=s;for(var d=2;d<o;d++)l[d]=e[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},7006:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=e(2685),i=(e(7378),e(5318));const o={sidebar_position:11,title:"Installing Podman on Windows",description:"Podman Desktop can assist you to install Podman on Windows.",tags:["podman-desktop","podman","installing","windows"],keywords:["podman desktop","containers","podman","installing","installation","windows"]},l="Installing Podman on Windows with Podman Desktop",s={unversionedId:"Installation/windows-install/installing-podman-with-podman-desktop",id:"Installation/windows-install/installing-podman-with-podman-desktop",title:"Installing Podman on Windows",description:"Podman Desktop can assist you to install Podman on Windows.",source:"@site/docs/Installation/windows-install/installing-podman-with-podman-desktop.md",sourceDirName:"Installation/windows-install",slug:"/Installation/windows-install/installing-podman-with-podman-desktop",permalink:"/docs/Installation/windows-install/installing-podman-with-podman-desktop",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/windows-install/installing-podman-with-podman-desktop.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"podman",permalink:"/docs/tags/podman"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Installing Podman on Windows",description:"Podman Desktop can assist you to install Podman on Windows.",tags:["podman-desktop","podman","installing","windows"],keywords:["podman desktop","containers","podman","installing","installation","windows"]},sidebar:"tutorialSidebar",previous:{title:"Installing Podman Desktop with Winget",permalink:"/docs/Installation/windows-install/installing-podman-desktop-with-winget"},next:{title:"Installing Podman with OpenShift Local",permalink:"/docs/Installation/windows-install/installing-podman-with-openshift-local"}},r={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Next steps",id:"next-steps",level:4}],p={toc:d};function m(t){let{components:n,...o}=t;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-podman-on-windows-with-podman-desktop"},"Installing Podman on Windows with Podman Desktop"),(0,i.kt)("p",null,"On Windows, running the Podman container engine requires running a Linux distribution on a virtual machine."),(0,i.kt)("p",null,"Podman Desktop can assist you to install the Podman container engine in a Fedora distribution of Linux, on the Windows Subsystem for Linux version 2 (WSL 2).\nMain benefits are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ease of use"),(0,i.kt)("li",{parentName:"ul"},"Windows native virtualization performance")),(0,i.kt)("p",null,"Consider rather ",(0,i.kt)("a",{parentName:"p",href:"installing-podman-with-openshift-local"},"installing Podman with OpenShift Local")," if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You prefer working with a RHEL distribution of Linux"),(0,i.kt)("li",{parentName:"ul"},"Your environment doesn't allow you to meet the prerequisites")),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"6 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"No VPN"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed"},"WSL prerequisites"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"User with administrator privileges"),(0,i.kt)("li",{parentName:"ul"},"Windows 64bit"),(0,i.kt)("li",{parentName:"ul"},"Windows 10 Build 18362 or greater, or Windows 11"),(0,i.kt)("li",{parentName:"ul"},"On a virtual machine: ",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization#configure-nested-virtualization"},"Nested Virtualization enabled")))),(0,i.kt)("li",{parentName:"ul"},"Podman is not installed"),(0,i.kt)("li",{parentName:"ul"},"No WSL 2 Linux virtual machine is running")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable the WSL feature without installing the default Ubuntu distribution of Linux. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"Enabling WSL 2")," and ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/basic-commands"},"WSL basic commands"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"wsl --install --no-distribution\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Home")," screen displays ",(0,i.kt)("em",{parentName:"p"},"Podman Desktop was not able to find an installation of Podman"),". Click on ",(0,i.kt)("strong",{parentName:"p"},"Install"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"img1",src:e(1259).Z,width:"1920",height:"1080"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Podman Desktop checks the prerequites to install Podman Engine. When necessary, follow the instructions to install prerequisites.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Podman displays the dialog: ",(0,i.kt)("em",{parentName:"p"},"Podman is not installed on this system, would you like to install Podman?"),". Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," to install Podman.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Initialize Podman"),"."))),(0,i.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/about#what-is-wsl-2"},"Understanding WSL 2"),".")),(0,i.kt)("h4",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/getting-started"},"Getting Started with Podman Desktop"))))}m.isMDXComponent=!0},1259:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/homescreen-3bf408d19d6b48375101e7123335e428.png"}}]);