import{r as p,u as z}from"./use-route-CSXkaYBA.js";import{l as I,v as R,m as l,p as C,d as D,i as o,I as N,ar as q,y as w}from"./index-B3aFaRz9.js";import{B as L}from"./constant-B_Jyk4mN.js";import{p as O}from"./dom-CgZUjhBj.js";const[U,a]=I("button"),_=R({},p,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var E=D({name:U,props:_,emits:["click"],setup(n,{emit:g,slots:i}){const f=z(),m=()=>i.loading?i.loading():o(q,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return m();if(i.icon)return o("div",{class:a("icon")},[i.icon()]);if(n.icon)return o(N,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},b=()=>{let e;if(n.loading?e=n.loadingText:e=i.default?i.default():n.text,e)return o("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:r}=n;if(e){const t={color:r?e:"white"};return r||(t.background=e),e.includes("gradient")?t.border=0:t.borderColor=e,t}},y=e=>{n.loading?O(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:r,size:t,block:B,round:S,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:v,iconPosition:u}=n,h=[a([r,t,{plain:P,block:B,round:S,square:k,loading:T,disabled:s,hairline:d}]),{[L]:d}];return o(e,{type:v,class:h,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}});const G=w(E);export{G as B};