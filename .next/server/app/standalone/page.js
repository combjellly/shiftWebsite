(()=>{var e={};e.id=772,e.ids=[772],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1327:()=>{},1332:(e,t,r)=>{Promise.resolve().then(r.bind(r,6914))},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},6914:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5512),i=r(8009),a=r(2043),o={script1:`y=0
every 1.5
	y = 0
	i = [0 4 8]

every 0.5
	play.piano:i:y[70,0,0]
	y = y +1

every 3 
	i = [0 5 7]

every 0.75
	play.piano:(i:y)-1[70,0,100]
    `,script2:`change = 6
time = 1/1.3

every 0.75 / time
	y = 0
	i = [0 4 8]

every 1 / time
	vol = 0
	change = change + 1

every 0.5/ time
	play.snare:4[vol]
	vol = vol + 60

every 0.25/ time
	play.teringherrie:o*change[50,0,pan]
	y = y +1
 	o = i:y
	pan = random. 40 70

every 1.5 / time
	i = [0 5 7]
	
every 0.75/ time
	play.hardbass:(o*change)-1 [70,0,40]	
	play.hardbass:(o*change)-2 [70,0,70]

every 3/ time
	y = 0
	i = [0 4 8]

every 1/ time
	play.k2:2[80,(-4),50]

every 2/ time
	play.hi*change [50,0,100]
	y = y +1
 	o = i:y

every 6 / time
	i = [0 5 7]
	change = 0

every 0.75*2/ time
	play.hi:(o*change)-1[50,0,0]
    `,script3:`i=3
every y
	x = random. 1 3
	y = x / 3
	
	play.hi[70,x,p]
	play.hi:1[70,x+4,o]

every 0.1
	play.pingu:x-1[60,x,p]

every 0.2 
	p = random. 0 100
	o = random. 0 100
	d = random. 0 100

every 0.05
	play.organ[50,0+i,p]
	play.organ[50,7+i,o]
	play.organ1[50,12+i,d]

every 16
	i= x
    `,script4:`i=0
notes = [1 6 10 13 18]
note = 3
pCounter = 0 
pnote = 0

every 0.5
	pnote = notes:pCounter
	midi[pnote+ 50,60,300]
	pCounter = pCounter + 1
	if pCounter == 5 [ pCounter = 0]
    `,script5:`y=0
organ = [0 (-1) (-5) 0]
o = 0

time = 1

every 1.5 * time
	y = 0
	i = [0 4 8]

every 0.5* time
	pan = random. 0 100
	play.guitar:i:y[70,0,0]
	y = y +1

every 3 * time
	i = [0 5 7]

every 0.75* time
	play.guitar:(i:y)-1[70,0,100]

every 4* time
	play.organ[70, -12,pan]

every 1* time
	play.organ:12[70, organ:o]

{- every 1
	play.cello[70, organ:o] -}

every 12 * (time/3)
	o = o +1
	if o == 3 [ 
		o=0 ]
`};r(8334);let s=({doEvaluateStandalone:e,stop:t,launchNow:r})=>{let a=(0,i.useRef)(null),[s,l]=(0,i.useState)(1),d=Object.values(o),p=0;(0,i.useEffect)(()=>{c(),u()},[]);let c=()=>{a.current&&(a.current.value=d[p++%d.length])},u=()=>{if(window.location.hash&&a.current){let e=atob(window.location.hash.substring(1).replace(/-/g,"+").replace(/_/g,"/"));a.current.value=e}else console.log("No Hash")};return(0,n.jsxs)("div",{id:"repl-container",children:[(0,n.jsxs)("div",{className:"buttonPlace",children:[(0,n.jsx)("p",{children:(0,n.jsx)("button",{onClick:()=>{document.getElementById("mySidebar").style.width="250px"},className:"bi bi-info-circle"})}),(0,n.jsx)("p",{children:(0,n.jsx)("button",{onClick:()=>{l(r=>{let n=r+1,i=document.getElementById("button_toggle");return n%2==0?(i.className="bi bi-stop-fill",e()):(i.className="bi bi-play-fill",t()),n})},id:"button_toggle",className:"bi bi-play-fill"})}),(0,n.jsx)("p",{children:(0,n.jsx)("button",{onClick:c,className:"bi bi-fast-forward-fill"})}),(0,n.jsx)("p",{children:(0,n.jsx)("button",{onClick:()=>{if(a.current){let e=btoa(a.current.value).replace(/=+$/,"").replace(/\+/g,"-").replace(/\//g,"_"),t=window.location.href,r=`${t.split("#")[0]}#${e}`;navigator.clipboard.writeText(r),console.log(r)}},className:"bi bi-box-arrow-up-right"})})]}),(0,n.jsx)("textarea",{ref:a,id:"code",rows:"4",cols:"50"})]})};r(1327);let l=()=>{let e=(0,i.useRef)(null);return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"shift"}),(0,n.jsx)(a.A,{ref:e}),(0,n.jsx)(s,{doEvaluateStandalone:()=>e.current?.doEvaluateStandalone(),stop:()=>e.current?.stop(),launchNow:()=>e.current?.launchNow()}),(0,n.jsxs)("div",{id:"mySidebar",className:"sidebar",children:[(0,n.jsx)("button",{className:"closebtn",onClick:()=>document.getElementById("mySidebar").style.width="0",children:"\xd7"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{style:{display:"block",margin:"auto"},src:"static/img/logo.png",width:"30%",height:"auto"}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)("a",{href:"https://shift.nickhernandez.ca/docs/intro",children:" About"}),(0,n.jsx)("a",{href:"https://shift.nickhernandez.ca/docs/category/tutorial---basics",children:" Tutorials"}),(0,n.jsx)("a",{href:"http://hdl.handle.net/11375/28305",children:" Thesis"}),(0,n.jsx)("br",{}),(0,n.jsx)("label",{htmlFor:"midiOutputDropdown",children:"Select MIDI Output:"}),(0,n.jsx)("select",{id:"midiOutputDropdown"}),(0,n.jsx)("button",{onClick:()=>populateMidiOutputDropdown(),children:"Populate MIDI Output"}),(0,n.jsx)("button",{onClick:()=>playMidiEvents(),children:"Test MIDI Output"})]})]})]})]})}},7975:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d});var n=r(260),i=r(8203),a=r(5155),o=r.n(a),s=r(7292),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d={children:["",{children:["standalone",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8427)),"/Users/nico/Documents/shiftLanguage/NEWSITE/shift-home/src/app/standalone/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/nico/Documents/shiftLanguage/NEWSITE/shift-home/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,p=["/Users/nico/Documents/shiftLanguage/NEWSITE/shift-home/src/app/standalone/page.js"],c={require:r,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/standalone/page",pathname:"/standalone",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8334:()=>{},8427:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/nico/Documents/shiftLanguage/NEWSITE/shift-home/src/app/standalone/page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/nico/Documents/shiftLanguage/NEWSITE/shift-home/src/app/standalone/page.js","default")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9551:e=>{"use strict";e.exports=require("url")},9892:(e,t,r)=>{Promise.resolve().then(r.bind(r,8427))}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,983,77,477],()=>r(7975));module.exports=n})();