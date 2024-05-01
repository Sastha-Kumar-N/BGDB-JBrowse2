"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7761],{77761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var a=r(7552),n=r(75785),s=r(29499),o=r(36715),i=r(63896),l=r(59705),c=r(1343),d=r(83867),m=r(33371),u=r(32808),h=r(58507),f=r(5401),p=r(68446),g=r(45465),b=r(68584),v=r(31409),A=r.n(v),x=r(48735),k=r(99546),w=r(90542),S=r(57118);const y=(0,n.n9)()({dialogContent:{width:"80em"},textAreaFont:{fontFamily:"Courier New"}}),C=(0,p.observer)((function({model:e,handleClose:t}){const{classes:r}=y(),n=(0,k.getSession)(e),[p,v]=(0,a.useState)(),[C,E]=(0,a.useState)(),[$,R]=(0,a.useState)(!1),[W,M]=(0,a.useState)(!1),[N,q]=(0,a.useState)(!1),{leftOffset:G,rightOffset:P}=e,j=Boolean(void 0===C);(0,a.useEffect)((()=>{let t=!0;const r=new AbortController;return(async()=>{try{const a=e.getSelectedRegions(G,P);if(0===a.length)throw new Error("Selected region is out of bounds");const n=await async function(e,t,r){const a=(0,k.getSession)(e),{leftOffset:n,rightOffset:s}=e;if(!n||!s)throw new Error("no offsets on model to use for range");if(n.assemblyName!==s.assemblyName)throw new Error("not able to fetch sequences from multiple assemblies");const{rpcManager:o,assemblyManager:i}=a,l=n.assemblyName||s.assemblyName||"",c=i.get(l);if(!c)throw new Error(`assembly ${l} not found`);const d=(0,b.getConf)(c,["sequence","adapter"]),m="getSequence";return o.call(m,"CoreGetFeatures",{adapterConfig:d,regions:t,sessionId:m,signal:r})}(e,a,r.signal);t&&E(n)}catch(e){console.error(e),t&&v(e)}})(),()=>{r.abort(),t=!1}}),[e,n,G,P]);const D=C?C.filter((e=>!!e)).map((e=>{let t=e.get("seq");const r=e.get("refName"),a=e.get("start")+1,n=e.get("end"),s=`${r}:${a}-${n}`;if(t?.length!==n-a+1)throw new Error(`${s} returned ${t.length.toLocaleString()} bases, but should have returned ${(n-a).toLocaleString()}`);return $&&(t=(0,k.reverse)(t)),N&&(t=(0,k.complement)(t)),{header:s+($?"-rev":"")+(N?"-comp":""),seq:t}})).map((e=>{return`>${e.header}\n${t=e.seq,t.replaceAll(/(.{1,80})/g,"$1\n").trimEnd()}`;var t})).join("\n"):"",F=!!D&&D.length>1e6;return a.createElement(x.Dialog,{maxWidth:"xl",open:!0,onClose:()=>{t(),e.setOffsets()},title:"Reference sequence"},a.createElement(s.A,null,p?a.createElement(o.A,{color:"error"},`${p}`):j?a.createElement(i.A,null,"Retrieving reference sequence...",a.createElement(l.A,{style:{marginLeft:10},size:20,disableShrink:!0})):null,a.createElement(c.A,{"data-testid":"rubberband-sequence",variant:"outlined",multiline:!0,minRows:5,maxRows:10,disabled:F,className:r.dialogContent,fullWidth:!0,value:F?"Reference sequence too large to display, use the download FASTA button":D,InputProps:{readOnly:!0,classes:{input:r.textAreaFont}}}),a.createElement(d.A,null,a.createElement(m.A,{control:a.createElement(u.A,{value:$,onChange:e=>R(e.target.checked)}),label:"Reverse sequence"}),a.createElement(m.A,{control:a.createElement(u.A,{value:N,onChange:e=>q(e.target.checked)}),label:"Complement sequence"})),a.createElement(o.A,{style:{margin:10}},'Note: Check both boxes for the "reverse complement"')),a.createElement(h.A,null,a.createElement(f.A,{onClick:()=>{A()(D),M(!0),setTimeout((()=>M(!1)),500)},disabled:j||!!p||F,color:"primary",startIcon:a.createElement(w.PM,null)},W?"Copied":"Copy to clipboard"),a.createElement(f.A,{onClick:()=>{(0,g.saveAs)(new Blob([D||""],{type:"text/x-fasta;charset=utf-8"}),"jbrowse_ref_seq.fa")},disabled:j||!!p,color:"primary",startIcon:a.createElement(S.A,null)},"Download FASTA"),a.createElement(f.A,{onClick:t,variant:"contained"},"Close")))}))},57118:(e,t,r)=>{var a=r(92120);t.A=void 0;var n=a(r(33380)),s=r(69500);t.A=(0,n.default)((0,s.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"}),"GetApp")},59705:(e,t,r)=>{r.d(t,{A:()=>C});var a=r(83673),n=r(6614),s=r(7552),o=r(93878),i=r(60827),l=r(64761),c=r(15622),d=r(31049),m=r(51148),u=r(72489),h=r(69500);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let p,g,b,v,A=e=>e;const x=(0,l.i7)(p||(p=A`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,l.i7)(g||(g=A`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,m.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.A)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.A)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.AH)(b||(b=A`
      animation: ${0} 1.4s linear infinite;
    `),x))),S=(0,m.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),y=(0,m.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.AH)(v||(v=A`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k))),C=s.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiCircularProgress"}),{className:s,color:l="primary",disableShrink:m=!1,size:p=40,style:g,thickness:b=3.6,value:v=0,variant:A="indeterminate"}=r,x=(0,a.A)(r,f),k=(0,n.A)({},r,{color:l,disableShrink:m,size:p,thickness:b,value:v,variant:A}),C=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,s={root:["root",r,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(r)}`,n&&"circleDisableShrink"]};return(0,i.A)(s,u.b,t)})(k),E={},$={},R={};if("determinate"===A){const e=2*Math.PI*((44-b)/2);E.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(v),E.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,$.transform="rotate(-90deg)"}return(0,h.jsx)(w,(0,n.A)({className:(0,o.A)(C.root,s),style:(0,n.A)({width:p,height:p},$,g),ownerState:k,ref:t,role:"progressbar"},R,x,{children:(0,h.jsx)(S,{className:C.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,h.jsx)(y,{className:C.circle,style:E,ownerState:k,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})})}))}))},72489:(e,t,r)=>{r.d(t,{A:()=>o,b:()=>s});var a=r(55549),n=r(9577);function s(e){return(0,n.Ay)("MuiCircularProgress",e)}const o=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},63896:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(83673),n=r(6614),s=r(7552),o=r(93878),i=r(9577),l=r(60827),c=r(81119),d=r(97269),m=r(49267),u=r(25269),h=r(69500);const f=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,u.A)(),g=(0,m.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,c.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),b=e=>(0,d.A)({props:e,name:"MuiContainer",defaultTheme:p});var v=r(15622),A=r(51148),x=r(31049);const k=function(e={}){const{createStyledComponent:t=g,useThemeProps:r=b,componentName:d="MuiContainer"}=e,m=t((({theme:e,ownerState:t})=>(0,n.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const a=r,n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.A)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=s.forwardRef((function(e,t){const s=r(e),{className:u,component:p="div",disableGutters:g=!1,fixed:b=!1,maxWidth:v="lg"}=s,A=(0,a.A)(s,f),x=(0,n.A)({},s,{component:p,disableGutters:g,fixed:b,maxWidth:v}),k=((e,t)=>{const{classes:r,fixed:a,disableGutters:n,maxWidth:s}=e,o={root:["root",s&&`maxWidth${(0,c.A)(String(s))}`,a&&"fixed",n&&"disableGutters"]};return(0,l.A)(o,(e=>(0,i.Ay)(t,e)),r)})(x,d);return(0,h.jsx)(m,(0,n.A)({as:p,ownerState:x,className:(0,o.A)(k.root,u),ref:t},A))}));return u}({createStyledComponent:(0,A.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,v.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,x.A)({props:e,name:"MuiContainer"})}),w=k}}]);
//# sourceMappingURL=7761.acc2dee7.chunk.js.map