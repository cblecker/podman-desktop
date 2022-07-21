"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[241],{5318:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return m}});var a=e(7378);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var s=a.createContext({}),c=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},d=function(t){var n=c(t.components);return a.createElement(s.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),p=c(e),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return e?a.createElement(f,l(l({ref:n},d),{},{components:e})):a.createElement(f,l({ref:n},d))}));function m(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,l=new Array(o);l[0]=p;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=t,r.mdxType="string"==typeof t?t:i,l[1]=r;for(var c=2;c<o;c++)l[c]=e[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},7259:function(t,n,e){e.r(n),e.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var a=e(5773),i=e(808),o=(e(7378),e(5318)),l=["components"],r={sidebar_position:4},s="Windows",c={unversionedId:"Installation/windows-install",id:"Installation/windows-install",title:"Windows",description:"1. Installing Podman Desktop on Windows",source:"@site/docs/Installation/windows-install.md",sourceDirName:"Installation",slug:"/Installation/windows-install",permalink:"/docs/Installation/windows-install",editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/windows-install.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MacOS",permalink:"/docs/Installation/macos-install"}},d={},u=[{value:"1. Installing Podman Desktop on Windows",id:"1-installing-podman-desktop-on-windows",level:2},{value:"2. Installing Podman (if not already present)",id:"2-installing-podman-if-not-already-present",level:2},{value:"3. Initialize &amp; Start the Podman Machine",id:"3-initialize--start-the-podman-machine",level:2},{value:"a. Default Configurations",id:"a-default-configurations",level:3},{value:"b. Custom Configurations",id:"b-custom-configurations",level:3},{value:"c. Command Line",id:"c-command-line",level:3}],p={toc:u};function m(t){var n=t.components,r=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows"},"Windows"),(0,o.kt)("h2",{id:"1-installing-podman-desktop-on-windows"},"1. Installing Podman Desktop on Windows"),(0,o.kt)("p",null,"In order to install the latest Podman Desktop application for Windows, visit the ",(0,o.kt)("a",{parentName:"p",href:"/downloads/windows"},"Downloads")," section of this website to download the .exe file."),(0,o.kt)("p",null,"Simply download the file from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads/windows"},"Downloads")," section and open it in your Desktop to install Podman Desktop."),(0,o.kt)("h2",{id:"2-installing-podman-if-not-already-present"},"2. Installing Podman (if not already present)"),(0,o.kt)("p",null,"If you don't have Podman installed in your Windows computer, Podman Desktop will prompt you to do so as soon as you open the application. With the latest update, Podman Desktop will be able to install and configure Podman once you click on the 'Install' button on the home page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1",src:e(6215).Z,width:"1920",height:"1016"})),(0,o.kt)("h2",{id:"3-initialize--start-the-podman-machine"},"3. Initialize & Start the Podman Machine"),(0,o.kt)("h3",{id:"a-default-configurations"},"a. Default Configurations"),(0,o.kt)("p",null,'Once Podman is installed, you will see a toggle button at "Home" window that will allow you to initialize a Podman Machine with default configurations. Simply activate the toggle to proceed.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2",src:e(1070).Z,width:"1920",height:"1016"})),(0,o.kt)("p",null,"After initializing a Podman Machine, you should see a toggle to Run Podman. This will start the Podman Machine upon activation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img3",src:e(5618).Z,width:"1920",height:"1017"})),(0,o.kt)("h3",{id:"b-custom-configurations"},"b. Custom Configurations"),(0,o.kt)("p",null,'In order to initialize a Podman Machine with custom configurations, go to "Preferences" on the menu present in the left-side of the application. Under Resources, you will find Podman. Clicking on it shall load the configuration settings for the machine. Enter the values that deem fit for your purpose and click on the "Create" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2",src:e(3850).Z,width:"1920",height:"1024"})),(0,o.kt)("p",null,"Once the machine is created, you can click on the Start button in the Machine Settings to start the Machine."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img3",src:e(103).Z,width:"1920",height:"1016"})),(0,o.kt)("h3",{id:"c-command-line"},"c. Command Line"),(0,o.kt)("p",null,"Using the following two commands in the command line, you can initialize and start a Podman Machine the classic way!"),(0,o.kt)("p",null,"To initialize the machine, the command is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine init\n")),(0,o.kt)("p",null,"After which, you can start the machine with the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine start\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Well that's just it. You shall now be all set to use Podman Desktop on Windows!")))}m.isMDXComponent=!0},3850:function(t,n,e){n.Z=e.p+"assets/images/create-a5a2302c3eb2d9cde651ea8830e0f398.png"},6215:function(t,n,e){n.Z=e.p+"assets/images/homescreen-2f222126a2f033005a67a2f187add164.png"},1070:function(t,n,e){n.Z=e.p+"assets/images/initialize-3b40daad029546f9a0efd9f80ed77011.png"},103:function(t,n,e){n.Z=e.p+"assets/images/machine-d8cdde6d6087c23415bbb1af76d15d1b.png"},5618:function(t,n,e){n.Z=e.p+"assets/images/starting-6fc96092ae7b123f1eb13b8c58baa397.png"}}]);