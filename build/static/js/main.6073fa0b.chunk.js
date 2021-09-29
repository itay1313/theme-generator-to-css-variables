(this["webpackJsonpcss-variables-theme-generator-final"]=this["webpackJsonpcss-variables-theme-generator-final"]||[]).push([[0],{204:function(e,n,t){"use strict";t.r(n);var r,a,o,l,c,i=t(0),s=t.n(i),f=t(77),u=t.n(f),m=t(48),d=t(14),p=t(11),b=t(3),g=t.n(b),k=t(13),y=(t(94),t(85)),h=k.a.div(r||(r=Object(p.a)(["\n  position: absolute;\n  display: ",";\n  z-index: 10;\n"])),(function(e){return e.isOpen?"block":"none"})),x=function(e){var n=e.color,t=e.onChangeComplete,r=e.label,a=Object(i.useState)(!1),o=Object(d.a)(a,2),l=o[0],c=o[1],f=Object(i.useRef)();return Object(i.useEffect)((function(e){if(f&&f.current){var n=f.current;document.body.addEventListener("click",(function(e){e.target===n||n.contains(e.target)||c(!1)}))}}),[f]),s.a.createElement("div",{style:{position:"relative"},ref:f},s.a.createElement("label",null,r),s.a.createElement("div",{style:{display:"inline-flex",marginBottom:"8px"}},s.a.createElement("input",{type:"text",name:"label",value:n,readOnly:!0,onClick:function(e){c(!0)},style:{}}),s.a.createElement("div",{style:{height:"40px",width:"40px",background:n,marginLeft:"8px",border:"1px solid #ddd"}})),s.a.createElement(h,{isOpen:l},s.a.createElement(y.a,{color:n,onChangeComplete:t})))},E=function(){return s.a.createElement("div",{className:"flex"},s.a.createElement("div",null,s.a.createElement("a",{href:"https://itaycode.com",target:"_blank",rel:"noopener noreferrer"},"ItayCode")))},v=t(82),S={height:"50px",width:"50px"},C=k.a.button(a||(a=Object(p.a)(["\n  color: ",";\n  background: ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),(function(e){return e.prim.opposite}),(function(e){return e.prim.normal}),(function(e){return g()(e.bgColor).isDark()?e.prim.light:e.prim.dark}),(function(e){return g()(e.bgColor).isDark()?e.prim.oppositeLight:e.prim.oppositeDark})),O=k.a.div(o||(o=Object(p.a)(["\n  background: ",";\n  color: ",";\n"])),(function(e){return g()(e.bgColor).isDark()?e.prim.light:e.prim.dark}),(function(e){return g()(e.bgColor).isDark()?e.prim.oppositeLight:e.prim.oppositeDark})),j=k.a.div(l||(l=Object(p.a)(["\n  padding: 0 1rem 1rem 1rem;\n  margin: 1rem 0;\n  border: 1px solid;\n  border-color: ",";\n  color: ",";\n  background: ",";\n"])),(function(e){return g()(e.bgColor).isDark()?e.prim.light:e.prim.dark}),(function(e){return g()(e.bgColor).isDark()?e.prim.light:e.prim.dark}),(function(e){return g()(e.bgColor).isDark()?e.prim.oppositeLight:e.prim.oppositeDark}));function H(){var e=s.a.useState("#000"),n=Object(d.a)(e,2),t=n[0],r=(n[1],s.a.useState("#570df8")),a=Object(d.a)(r,2),o=a[0],l=a[1],i=s.a.useState({}),f=Object(d.a)(i,2),u=f[0],b=f[1];s.a.useEffect((function(){b({darkest:g()(o).darken(60).toHexString(),darker:g()(o).darken(40).toHexString(),dark:g()(o).darken(20).toHexString(),normal:o,light:g()(o).lighten(20).toHexString(),lighter:g()(o).lighten(40).toHexString(),lightest:g()(o).lighten(60).toHexString(),secondary:g()(o).spin(-90).toHexString(),secondarytext:g.a.mostReadable(g()(o).spin(-90).toHexString(),["#000","#fff"]).toHexString(),opposite:g.a.mostReadable(o,["#000","#fff"]).toHexString(),oppositeLight:g.a.mostReadable(g()(o).lighten(20).toHexString(),["#000","#fff"]).toHexString(),oppositeDark:g.a.mostReadable(g()(o).darken(20).toHexString(),["#000","#fff"]).toHexString()})}),[o]);var k=Object(v.a)(c||(c=Object(p.a)(["\n  :root {\n  --primary: ",";\n  --primary-focus: ",";\n  --primary-content: ",";\n  --secondary: ",";\n  --secondary-focus: #a255ff;\n  --secondary-content: #0100ca;\n  --link-color: #64379f;\n  --link-color-focus: #64379fc5;\n  --link-color-content: #ffffff;\n  --info: #2094f3;\n  --success: #009485;\n  --warning: #ff9900;\n  --error: #ff5724;\n  --body-background: ",";\n  --body-text: ",";\n  --footer-background: #0a00b6;\n  --footer-text: ",";\n  --button-background: ",";\n  --button-text: ",";\n}\nbody {\n  color: var(--body-text);\n  background-color: var(--body-background);\n}\n"])),u.normal,u.light,u.normal,u.secondary,u.lightest,u.darkest,u.opposite,u.opposite,u.normal);return s.a.createElement("div",{className:"App"},s.a.createElement(k,null),s.a.createElement("div",{className:"flexcenter"},s.a.createElement("h1",null,"Theme generator to css variables"),s.a.createElement("h2",null,"Choose your primary color")),s.a.createElement("div",{className:"flexcenter",style:{display:"block"}},s.a.createElement("div",null,"Primary color",s.a.createElement(x,{color:o,onChangeComplete:function(e){return l(e.hex)}}))),s.a.createElement("div",{className:"flex"},s.a.createElement("div",null,s.a.createElement("h2",null,"Example"),s.a.createElement(O,{prim:u,bgColor:t,style:{padding:"10px"}},s.a.createElement("h4",null,"Hey I'm a Subtitle"),s.a.createElement("hr",null),s.a.createElement("p",null,"Schnitzel ipsum lorem soup, Schnitzel ipsum lorem soup"),s.a.createElement(C,{prim:u,type:"button",bgColor:t},"Primary"),s.a.createElement("button",{style:{background:u.secondary,color:u.secondarytext,padding:"10px",marginLeft:"1rem"}},"Secondary")),s.a.createElement("h2",null,"Color scale"),s.a.createElement("div",{style:{display:"flex"}},Object.values(u).map((function(e){return s.a.createElement("div",{style:Object(m.a)(Object(m.a)({},S),{},{background:e})})})))),s.a.createElement(j,{prim:u,bgColor:t},s.a.createElement("h2",null,"CSS Variables For your Theme - "),s.a.createElement("pre",null,"\n        :root {\n            --primary: ".concat(u.normal,";\n            --primary-focus: ").concat(u.light,";\n            --primary-content: ").concat(u.normal,";\n            --secondary: ").concat(u.secondary,";\n            --secondary-focus: #a255ff;\n            --secondary-content: #0100ca;\n            --link-color: #64379f;\n            --link-color-focus: #64379fc5;\n            --link-color-content: #ffffff;\n            --neutral: #3d4451;\n            --neutral-focus: #2a2e37;\n            --neutral-content: #ffffff;\n            --base-100: #ffffff;\n            --base-200: #f9fafb;\n            --base-300: #d1d5db;\n            --base-content: #1f2937;\n            --info: #2094f3;\n            --success: #009485;\n            --warning: #ff9900;\n            --error: #ff5724; \n            --body-background: ").concat(u.lightest,";\n            --body-text: ").concat(u.darkest,";\n            --footer-background: #0a00b6;\n            --footer-text: ").concat(u.opposite,";\n            --button-background: ").concat(u.opposite,";\n            --button-text: ").concat(u.normal,";\n        }\n        ")))),s.a.createElement(E,null))}var D=document.getElementById("root");u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(H,null)),D)},87:function(e,n,t){e.exports=t(204)},94:function(e,n,t){}},[[87,1,2]]]);