"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[505],{544:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7378),l=a(161);const r=function(){function e(){var e;if(!document||!document.documentElement)return;const t=document.documentElement;"dark"===(null==(e=t.dataset)?void 0:e.theme)?(t.classList.add("dark"),setTimeout((()=>{t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((()=>{t.classList.remove("dark")}),100))}return(0,n.useEffect)((()=>{l.Z.canUseDOM&&e()}),[l.Z.canUseDOM]),(0,n.useEffect)((()=>{if(!l.Z.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{("data-rh"===t.attributeName&&"attributes"==t.type||"data-theme"===t.attributeName&&"attributes"==t.type)&&e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[l.Z.canUseDOM]),n.createElement("div",null)}},919:(e,t,a)=>{a.r(t),a.d(t,{MacOSDownloads:()=>d,default:()=>u});var n=a(353),l=a(3626),r=a(7378),s=a(544),m=a(1884),c=a(9072),o=a(9928),i=a(9374);function d(){const[e,t]=(0,r.useState)({version:"",universal:"",x64:"",arm64:""});return(0,r.useEffect)((()=>{!async function(e){const t=await fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest"),a=await t.json(),n=a.assets,l=n.filter((e=>e.name.endsWith("-arm64.dmg")));if(1!==l.length)throw new Error("Unable to grab arm64 dmg");const r=l[0],s=n.filter((e=>e.name.endsWith("-x64.dmg")));if(1!==s.length)throw new Error("Unable to grab x64 dmg");const m=s[0],c=n.filter((e=>e.name.endsWith(".dmg")&&e.name!==r.name&&e.name!==m.name));if(1!==c.length)throw new Error("Unable to grab unified dmg");const o=c[0];e({version:a.name,universal:o.browser_download_url,x64:m.browser_download_url,arm64:r.browser_download_url})}(t)}),[]),r.createElement("div",{className:"basis-1/3 py-2 rounded-lg dark:text-gray-300 text-gray-700  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center"},r.createElement(c.G,{size:"4x",icon:o.Av$,className:"my-4"}),r.createElement("h2",{className:"w-full text-center text-4xl title-font font-medium pb-3 border-purple-600 border-b-2"},"macOS"),r.createElement("div",{className:"flex p-1 flex-col md:flex-col items-center align-top"},r.createElement("div",{className:"flex flex-col align-middle items-center"},r.createElement("h3",{className:"mt-0"},"Podman Desktop for macOS"),r.createElement("div",{className:"pt-8"},r.createElement(m.Z,{className:"mt-auto no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-md font-semibold",to:e.universal},r.createElement(c.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Download Now"),r.createElement("caption",{className:"block w-full mt-1 text/50 dark:text-white/50"},"Universal *.dmg, version ",e.version)),r.createElement("div",{className:"mt-4"},r.createElement("div",null,"Other macOS downloads:"),r.createElement(m.Z,{className:"underline inline-flex dark:text-white text-purple-600 hover:text-purple-300 py-2 px-6 font-semibold text-md",to:e.x64},r.createElement(c.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Intel"),r.createElement(m.Z,{className:"underline inline-flex dark:text-white text-purple-600 hover:text-purple-300 py-2 px-6 text-md font-semibold",to:e.arm64},r.createElement(c.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Arm")),r.createElement("div",{className:"flex flex-col align-middle items-center"},r.createElement("div",{className:"items-center text-center pt-6"},r.createElement("p",{className:"text-lg"},"Using ",r.createElement("strong",null,"Brew"),"? Install in one command:"),r.createElement("div",{className:"flex flex-row pt-3"},r.createElement("p",{className:"text-xl p-1"},r.createElement(c.G,{size:"sm",icon:i.v8y,className:"mx-1 mt-2"})),r.createElement("div",{className:"dark:bg-zinc-900/50 bg-zinc-300/50 p-1 truncate"},r.createElement("p",{className:"text-xl dark:text-purple-300 text-purple-700"},r.createElement(c.G,{size:"xs",icon:i.Jw3,className:"mx-2 mt-3"}),"brew install podman-desktop",r.createElement("button",{title:"Copy To Clipboard",className:"mr-2 p-1"}," ",r.createElement(c.G,{size:"xs",icon:i.O4,className:"ml-3  cursor-pointer text-xl  text-white-500",onClick:()=>{navigator.clipboard.writeText("brew install podman-desktop")}}))))))))))}function u(){const{siteConfig:e}=(0,n.Z)();return r.createElement(l.Z,{title:e.title,description:"Downloads for macOS"},r.createElement(s.Z,null),r.createElement("main",{className:"h-screen"},r.createElement(d,null)))}}}]);