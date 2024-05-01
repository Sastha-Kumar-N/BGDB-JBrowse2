"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9531],{39531:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var n=o(7552),a=o(48735),r=o(29499),s=o(99123),l=o(61723),c=o(48171),i=o(56089),d=o(33371),u=o(33248),h=o(29494);function m({onClose:e,open:t}){return n.createElement(a.Dialog,{onClose:()=>e(),open:t,title:"Info about session URLs"},n.createElement(r.A,null,n.createElement(s.A,null,"Because everything about the JBrowse session is encoded in the URL (e.g. state of the tracks, views, features selected, etc.) the sessions can get very long. Therefore, we created a URL shortener, both as a convenience and because long URLs can break some programs. Note that both the long and short URLs encode the same data, but due to long URLs causing problems with some programs, we recommend sharing short URLs."),n.createElement(s.A,null,'We generate the short URLs in a secure manner which involves encrypting the session on the client side with a random password string and uploading them to a central database. Then the random password is added to the URL but is not uploaded to the central database, making these short URLs effectively "end-to-end encrypted"'),n.createElement(s.A,null,"Only users with a share link can read the session.")))}const A="jbrowse-shareURL";function p(e){const{onClose:t,open:o,currentSetting:p}=e,[v,g]=(0,n.useState)(p),[f,b]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(a.Dialog,{onClose:()=>{localStorage.setItem(A,v),t(v)},open:o,title:"Configure session sharing"},n.createElement(r.A,null,n.createElement(s.A,null,"Select between generating long or short URLs for the session sharing",n.createElement(l.A,{onClick:()=>b(!0)},n.createElement(h.A,null))),n.createElement(c.A,{component:"fieldset"},n.createElement(i.A,{value:v,onChange:e=>g(e.target.value)},n.createElement(d.A,{value:"short",control:n.createElement(u.A,null),label:"Short URL"}),n.createElement(d.A,{value:"long",control:n.createElement(u.A,null),label:"Long URL"}))))),n.createElement(m,{open:f,onClose:()=>b(!1)}))}},29494:(e,t,o)=>{var n=o(92120);t.A=void 0;var a=n(o(33380)),r=o(69500);t.A=(0,a.default)((0,r.jsx)("path",{d:"M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"}),"HelpOutline")},33248:(e,t,o)=>{o.d(t,{A:()=>x});var n=o(83673),a=o(6614),r=o(7552),s=o(93878),l=o(60827),c=o(22991),i=o(15110),d=o(31049),u=o(74893),h=o(69500);const m=(0,u.A)((0,h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),A=(0,u.A)((0,h.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var p=o(51148),v=o(55270);const g=(0,p.Ay)("span",{shouldForwardProp:v.A})({position:"relative",display:"flex"}),f=(0,p.Ay)(m)({transform:"scale(1)"}),b=(0,p.Ay)(A)((({theme:e,ownerState:t})=>(0,a.A)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}))),w=function(e){const{checked:t=!1,classes:o={},fontSize:n}=e,r=(0,a.A)({},e,{checked:t});return(0,h.jsxs)(g,{className:o.root,ownerState:r,children:[(0,h.jsx)(f,{fontSize:n,className:o.background,ownerState:r}),(0,h.jsx)(b,{fontSize:n,className:o.dot,ownerState:r})]})};var C=o(15622),R=o(4402),S=o(39006),k=o(38127);const y=["checked","checkedIcon","color","icon","name","onChange","size","className"],E=(0,p.Ay)(i.A,{shouldForwardProp:e=>(0,v.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"medium"!==o.size&&t[`size${(0,C.A)(o.size)}`],t[`color${(0,C.A)(o.color)}`]]}})((({theme:e,ownerState:t})=>(0,a.A)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${k.A.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${k.A.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),z=(0,h.jsx)(w,{checked:!0}),j=(0,h.jsx)(w,{}),x=r.forwardRef((function(e,t){var o,c;const i=(0,d.A)({props:e,name:"MuiRadio"}),{checked:u,checkedIcon:m=z,color:A="primary",icon:p=j,name:v,onChange:g,size:f="medium",className:b}=i,w=(0,n.A)(i,y),x=(0,a.A)({},i,{color:A,size:f}),L=(e=>{const{classes:t,color:o,size:n}=e,r={root:["root",`color${(0,C.A)(o)}`,"medium"!==n&&`size${(0,C.A)(n)}`]};return(0,a.A)({},t,(0,l.A)(r,k.q,t))})(x),U=(0,S.A)();let M=u;const N=(0,R.A)(g,U&&U.onChange);let $=v;var I,B;return U&&(void 0===M&&(I=U.value,M="object"==typeof(B=i.value)&&null!==B?I===B:String(I)===String(B)),void 0===$&&($=U.name)),(0,h.jsx)(E,(0,a.A)({type:"radio",icon:r.cloneElement(p,{fontSize:null!=(o=j.props.fontSize)?o:f}),checkedIcon:r.cloneElement(m,{fontSize:null!=(c=z.props.fontSize)?c:f}),ownerState:x,classes:L,name:$,checked:M,onChange:N,ref:t,className:(0,s.A)(L.root,b)},w))}))},38127:(e,t,o)=>{o.d(t,{A:()=>s,q:()=>r});var n=o(55549),a=o(9577);function r(e){return(0,a.Ay)("MuiRadio",e)}const s=(0,n.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,t,o)=>{o.d(t,{A:()=>v});var n=o(6614),a=o(83673),r=o(7552),s=o(93878),l=o(60827),c=o(83867),i=o(87625),d=o(51584),u=o(77259),h=o(76258),m=o(89456),A=o(69500);const p=["actions","children","className","defaultValue","name","onChange","value"],v=r.forwardRef((function(e,t){const{actions:o,children:v,className:g,defaultValue:f,name:b,onChange:w,value:C}=e,R=(0,a.A)(e,p),S=r.useRef(null),k=(e=>{const{classes:t,row:o,error:n}=e,a={root:["root",o&&"row",n&&"error"]};return(0,l.A)(a,i.B,t)})(e),[y,E]=(0,u.A)({controlled:C,default:f,name:"RadioGroup"});r.useImperativeHandle(o,(()=>({focus:()=>{let e=S.current.querySelector("input:not(:disabled):checked");e||(e=S.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const z=(0,d.A)(t,S),j=(0,m.A)(b),x=r.useMemo((()=>({name:j,onChange(e){E(e.target.value),w&&w(e,e.target.value)},value:y})),[j,w,E,y]);return(0,A.jsx)(h.A.Provider,{value:x,children:(0,A.jsx)(c.A,(0,n.A)({role:"radiogroup",ref:z,className:(0,s.A)(k.root,g)},R,{children:v}))})}))},76258:(e,t,o)=>{o.d(t,{A:()=>n});const n=o(7552).createContext(void 0)},87625:(e,t,o)=>{o.d(t,{A:()=>s,B:()=>r});var n=o(55549),a=o(9577);function r(e){return(0,a.Ay)("MuiRadioGroup",e)}const s=(0,n.A)("MuiRadioGroup",["root","row","error"])},39006:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(7552),a=o(76258);function r(){return n.useContext(a.A)}}}]);
//# sourceMappingURL=9531.824e8a3d.chunk.js.map