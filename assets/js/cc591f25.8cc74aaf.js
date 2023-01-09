"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6778],{5318:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var n=o(7378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(o),u=a,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return o?n.createElement(h,r(r({ref:t},m),{},{components:o})):n.createElement(h,r({ref:t},m))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1806:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(2685),a=(o(7378),o(5318));const i={title:"Using Compose with Podman Desktop"},r=void 0,s={unversionedId:"podman-compose",id:"podman-compose",title:"Using Compose with Podman Desktop",description:"Introduction",source:"@site/docs/podman-compose.md",sourceDirName:".",slug:"/podman-compose",permalink:"/docs/podman-compose",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/podman-compose.md",tags:[],version:"current",frontMatter:{title:"Using Compose with Podman Desktop"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"1. Podman Desktop",id:"1-podman-desktop",level:3},{value:"2. Podman Compose",id:"2-podman-compose",level:3},{value:"Get Started",id:"get-started",level:2},{value:"1. Install Podman Compose",id:"1-install-podman-compose",level:3},{value:"For macOS",id:"for-macos",level:4},{value:"For Windows and Linux",id:"for-windows-and-linux",level:4},{value:"2. Using Podman Compose to run multiple containers",id:"2-using-podman-compose-to-run-multiple-containers",level:3},{value:"3. Manage Compose with Podman Desktop",id:"3-manage-compose-with-podman-desktop",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:l};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Podman Desktop is aimed at providing an amazing graphical experience of managing your containers. Developers who have worked on containers might be fans of the ",(0,a.kt)("a",{parentName:"p",href:"https://compose-spec.io/"},"Compose Spec"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose#readme"},"Podman Compose")," is a community-driven tool that allows developers to run multiple containers at the same time and facilitate communication between them. Podman Compose requires a ",(0,a.kt)("a",{parentName:"p",href:"https://compose-spec.io/"},"Compose YAML")," file with definitions about the containers that need to communicate."),(0,a.kt)("p",null,"If you are new to writing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file"},"Compose files")," or ",(0,a.kt)("a",{parentName:"p",href:"https://compose-spec.io/"},"Compose Spec"),", check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md"},"this guide")," for more information. "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"1-podman-desktop"},"1. Podman Desktop"),(0,a.kt)("p",null,"Get the latest version of Podman Desktop by clicking ",(0,a.kt)("a",{parentName:"p",href:"/downloads"},"here"),". Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation"},"installation guide")," for more information."),(0,a.kt)("h3",{id:"2-podman-compose"},"2. Podman Compose"),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,"In this tutorial, we will learn about working with containers on Podman Desktop generated using ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose"),". You can find more information about Podman Compose ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose/blob/devel/README.md"},"here"),". "),(0,a.kt)("h3",{id:"1-install-podman-compose"},"1. Install Podman Compose"),(0,a.kt)("h4",{id:"for-macos"},"For macOS"),(0,a.kt)("p",null,"There are many ways to install ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose")," on your macOS system. One of the easier ways is to use Homebrew. To install ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose"),", run the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install podman-compose\n")),(0,a.kt)("p",null,"To ensure ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose")," is properly installed, run the command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"podman-compose\n")),(0,a.kt)("p",null,"and it will return more information about its usage."),(0,a.kt)("h4",{id:"for-windows-and-linux"},"For Windows and Linux"),(0,a.kt)("p",null,"Refer the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-compose#installation"},"installation guide")," to get the latest version of Podman Compose on your Windows or Linux system. "),(0,a.kt)("h3",{id:"2-using-podman-compose-to-run-multiple-containers"},"2. Using Podman Compose to run multiple containers"),(0,a.kt)("p",null,"For this tutorial, we will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/awesome-compose/tree/master/flask-redis"},"Flask Redis project")," from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/awesome-compose"},"awesome-compose repository"),". This repository consists of many sample projects for you to get started with Podman Compose. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your Terminal window"),(0,a.kt)("li",{parentName:"ol"},"Change to the project directory ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd flask-redis\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the following command ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"podman-compose -f compose.yaml up -d\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"compose.yaml")," file contains definitions for multiple containers within the ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-redis")," project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img1",src:o(7864).Z,width:"1282",height:"882"})),(0,a.kt)("h3",{id:"3-manage-compose-with-podman-desktop"},"3. Manage Compose with Podman Desktop"),(0,a.kt)("p",null,"To check if the containers are running as expected, open Podman Desktop and click on the \u2018Containers\u2019 option on the left side of the application. You will notice that the containers are bundled together under a Pod named ",(0,a.kt)("inlineCode",{parentName:"p"},"flask-redis (compose)")," in this case. Here, the compose within the bracket indicates that it is generated from a Compose YAML file. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img2",src:o(9761).Z,width:"1999",height:"1103"})),(0,a.kt)("p",null,"You can further configure or work with these containers within the Podman Desktop application now that they are visible. Here, clicking on the \u2018Open Browser\u2019 button allows us to check if the application is running as expected. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img3",src:o(9459).Z,width:"1999",height:"877"})),(0,a.kt)("p",null,"You can do much more such as checking logs, opening the terminal or inspecting the files for more details."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img4",src:o(5210).Z,width:"1999",height:"1103"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"That is it. This is how you can use Podman Desktop for your containers generated through ",(0,a.kt)("inlineCode",{parentName:"p"},"podman-compose"),". It will be really exciting to see you all developers use these compatibilities to build exciting applications using Podman Desktop!"))}c.isMDXComponent=!0},7864:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/compose_doc_image_1-79ba096000581d2067cd2fbc31c7d20f.png"},9761:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/compose_doc_image_2-fd0c6791568797c6a5670c72e53687ca.png"},9459:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/compose_doc_image_3-50808a5d4b1e003e5979c3d50a1e0e1c.png"},5210:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/compose_doc_image_4-b6ef9b2966e93143a04e6118e83d7101.png"}}]);