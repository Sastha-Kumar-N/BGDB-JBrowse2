"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9273],{9273:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var o=a(7552),n=a(68446),r=a(29499),l=a(36715),c=a(1343),s=a(58507),u=a(5401),i=a(48735);const m=(0,n.observer)((function(e){const{model:t,handleClose:a}=e,[n,m]=(0,o.useState)(""),d=n.match(/^[A-Za-z][A-Za-z0-9]$/);return o.createElement(i.Dialog,{open:!0,onClose:a,title:"Sort by tag"},o.createElement(r.A,null,o.createElement(l.A,null,"Set the tag to sort by"),o.createElement(l.A,{color:"textSecondary"},"Examples: HP for haplotype, RG for read group, etc."),o.createElement(c.A,{value:n,onChange:e=>m(e.target.value),placeholder:"Enter tag name",inputProps:{maxLength:2,"data-testid":"sort-tag-name-input"},error:2===n.length&&!d,helperText:2!==n.length||d?"":"Not a valid tag",autoComplete:"off","data-testid":"sort-tag-name"}),o.createElement(s.A,null,o.createElement(u.A,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,onClick:()=>{t.setSortedBy("tag",n),a()}},"Submit"),o.createElement(u.A,{variant:"contained",color:"secondary",onClick:()=>a()},"Cancel"))))}))}}]);
//# sourceMappingURL=9273.7dc1236c.chunk.js.map