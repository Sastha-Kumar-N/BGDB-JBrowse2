"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7579],{17579:(o,t,e)=>{e.r(t),e.d(t,{ButtonGroupButtonContext:()=>B.A,ButtonGroupContext:()=>m.A,buttonGroupClasses:()=>h,default:()=>f,getButtonGroupUtilityClass:()=>g});var r=e(83673),i=e(6614),a=e(7552),n=e(93878),d=e(60827),l=e(22991),u=e(48285),s=e(15622),p=e(51148),c=e(31049),b=e(55549),v=e(9577);function g(o){return(0,v.Ay)("MuiButtonGroup",o)}const h=(0,b.A)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var m=e(21572),B=e(97712),$=e(69500);const A=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],R=(0,p.Ay)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[{[`& .${h.grouped}`]:t.grouped},{[`& .${h.grouped}`]:t[`grouped${(0,s.A)(e.orientation)}`]},{[`& .${h.grouped}`]:t[`grouped${(0,s.A)(e.variant)}`]},{[`& .${h.grouped}`]:t[`grouped${(0,s.A)(e.variant)}${(0,s.A)(e.orientation)}`]},{[`& .${h.grouped}`]:t[`grouped${(0,s.A)(e.variant)}${(0,s.A)(e.color)}`]},{[`& .${h.firstButton}`]:t.firstButton},{[`& .${h.lastButton}`]:t.lastButton},{[`& .${h.middleButton}`]:t.middleButton},t.root,t[e.variant],!0===e.disableElevation&&t.disableElevation,e.fullWidth&&t.fullWidth,"vertical"===e.orientation&&t.vertical]}})((({theme:o,ownerState:t})=>(0,i.A)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"contained"===t.variant&&{boxShadow:(o.vars||o).shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},"vertical"===t.orientation&&{flexDirection:"column"},{[`& .${h.grouped}`]:(0,i.A)({minWidth:40,"&:hover":(0,i.A)({},"contained"===t.variant&&{boxShadow:"none"})},"contained"===t.variant&&{boxShadow:"none"}),[`& .${h.firstButton},& .${h.middleButton}`]:(0,i.A)({},"horizontal"===t.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===t.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===t.variant&&"horizontal"===t.orientation&&{borderRight:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${h.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}},"text"===t.variant&&"vertical"===t.orientation&&{borderBottom:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${h.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}},"text"===t.variant&&"inherit"!==t.color&&{borderColor:o.vars?`rgba(${o.vars.palette[t.color].mainChannel} / 0.5)`:(0,l.X4)(o.palette[t.color].main,.5)},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"transparent"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"transparent"},"contained"===t.variant&&"horizontal"===t.orientation&&{borderRight:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${h.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}},"contained"===t.variant&&"vertical"===t.orientation&&{borderBottom:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${h.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}},"contained"===t.variant&&"inherit"!==t.color&&{borderColor:(o.vars||o).palette[t.color].dark},{"&:hover":(0,i.A)({},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"currentColor"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"currentColor"})}),[`& .${h.lastButton},& .${h.middleButton}`]:(0,i.A)({},"horizontal"===t.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===t.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===t.variant&&"horizontal"===t.orientation&&{marginLeft:-1},"outlined"===t.variant&&"vertical"===t.orientation&&{marginTop:-1})}))),f=a.forwardRef((function(o,t){const e=(0,c.A)({props:o,name:"MuiButtonGroup"}),{children:l,className:p,color:b="primary",component:v="div",disabled:h=!1,disableElevation:f=!1,disableFocusRipple:x=!1,disableRipple:C=!1,fullWidth:w=!1,orientation:z="horizontal",size:y="medium",variant:T="outlined"}=e,W=(0,r.A)(e,A),E=(0,i.A)({},e,{color:b,component:v,disabled:h,disableElevation:f,disableFocusRipple:x,disableRipple:C,fullWidth:w,orientation:z,size:y,variant:T}),S=(o=>{const{classes:t,color:e,disabled:r,disableElevation:i,fullWidth:a,orientation:n,variant:l}=o,u={root:["root",l,"vertical"===n&&"vertical",a&&"fullWidth",i&&"disableElevation"],grouped:["grouped",`grouped${(0,s.A)(n)}`,`grouped${(0,s.A)(l)}`,`grouped${(0,s.A)(l)}${(0,s.A)(n)}`,`grouped${(0,s.A)(l)}${(0,s.A)(e)}`,r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,d.A)(u,g,t)})(E),G=a.useMemo((()=>({className:S.grouped,color:b,disabled:h,disableElevation:f,disableFocusRipple:x,disableRipple:C,fullWidth:w,size:y,variant:T})),[b,h,f,x,C,w,y,T,S.grouped]),k=(0,u.A)(l),j=k.length,L=o=>{const t=0===o,e=o===j-1;return t&&e?"":t?S.firstButton:e?S.lastButton:S.middleButton};return(0,$.jsx)(R,(0,i.A)({as:v,role:"group",className:(0,n.A)(S.root,p),ref:t,ownerState:E},W,{children:(0,$.jsx)(m.A.Provider,{value:G,children:k.map(((o,t)=>(0,$.jsx)(B.A.Provider,{value:L(t),children:o},t)))})}))}))}}]);
//# sourceMappingURL=7579.6cfcddff.chunk.js.map