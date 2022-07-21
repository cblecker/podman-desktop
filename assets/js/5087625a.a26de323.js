"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[724],{544:function(e,t,n){var r=n(7378),a=n(161);t.Z=function(){function e(){var e;if(document&&document.documentElement){var t=document.documentElement;"dark"===(null==(e=t.dataset)?void 0:e.theme)?(t.classList.add("dark"),setTimeout((function(){t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((function(){t.classList.remove("dark")}),100))}}return(0,r.useEffect)((function(){a.Z.canUseDOM&&e()}),[a.Z.canUseDOM]),(0,r.useEffect)((function(){if(a.Z.canUseDOM){var t=new MutationObserver((function(t){t.forEach((function(t){("data-rh"===t.attributeName&&"attributes"==t.type||"data-theme"===t.attributeName&&"attributes"==t.type)&&e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),function(){t.disconnect()}}}),[a.Z.canUseDOM]),r.createElement("div",null)}},36:function(e,t,n){n.r(t),n.d(t,{WindowsDownloads:function(){return b},default:function(){return v}});var r=n(7791),a=n(7135),s=n.n(a),c=n(353),i=n(2676),l=n(7378),o=n(544),u=n(1884),m=n(6443),d=n(1417),f=n(1436),p=!1;function x(){return(x=(0,r.Z)(s().mark((function e(t){var n,r,a,c,i,l,o,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest");case 4:return n=e.sent,e.next=7,n.json();case 7:if(r=e.sent,a=r.assets,1===(c=a.filter((function(e){return e.name.endsWith("-setup.exe")}))).length){e.next=12;break}throw new Error("Unable to grab setup.exe");case 12:i=c[0],l=a.filter((function(e){return e.name.endsWith(".exe")&&e.name!==i.name})),o=l[0],u={version:r.name,binary:o.browser_download_url,setup:i.browser_download_url},t(u),p=!0;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){var e=(0,l.useState)({version:"",binary:"",setup:""}),t=e[0],n=e[1];return(0,l.useEffect)((function(){!function(e){x.apply(this,arguments)}(n)})),l.createElement("section",{className:" dark:bg-zinc-800 bg-zinc-200 py-24 dark:text-gray-300 text-gray-700"},l.createElement("div",{className:"w-5/6 mx-auto"},l.createElement("div",{className:"flex rounded-lg bg-zinc-300 dark:bg-zinc-700 bg-opacity-60 p-8 flex-col md:flex-row  "},l.createElement("div",{className:"flex align-middle items-center mb-3 flex-col "},l.createElement(m.G,{size:"8x",icon:d.ts2}),l.createElement("div",{className:"inline-flex items-center justify-center rounded-full  flex-shrink-0"}),l.createElement("h2",{className:" text-lg title-font font-medium"},"Windows")),l.createElement("div",{className:"h-full flex w-full flex-col align-middle items-center"},l.createElement("div",{className:"flex flex-col align-middle items-center"},l.createElement("div",{className:"pt-8 space-x-4"},l.createElement(u.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:t.binary},l.createElement(m.G,{size:"1x",icon:f.q7m,className:"mr-2"}),"Exe")),l.createElement("div",{className:"font-light mt-4"},"Version ",t.version))))))}function v(){var e=(0,c.Z)().siteConfig;return l.createElement(i.Z,{title:e.title,description:"Downloads for macOS"},l.createElement(o.Z,null),l.createElement("main",{className:"h-screen"},l.createElement(b,null)))}}}]);