import{d as L,r as l,u as C,o as b,a as r,c as i,b as t,e as M,F as N,f as R,t as d,g as T,h as p,w as B,n as f,I,_ as S}from"./index-DmBhjwxV.js";function V(){console.log(`%c   ________  ________  ________  ________     
      |\\   ____\\|\\   __  \\|\\   ____\\|\\   __  \\    
      \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\___|\\ \\  \\|\\  \\   
       \\ \\  \\    \\ \\  \\\\   \\ \\  \\    \\ \\  \\\\   \\  
        \\ \\  \\____\\ \\  \\\\   \\ \\  \\____\\ \\  \\\\   \\ 
         \\ \\_______\\ \\_______\\ \\_______\\ \\_______\\
          \\|_______|\\|_______|\\|_______|\\|_______|`,'font-size: 14px; font-family: "Courier New", monospace; color: #ff6347; text-shadow: 2px 2px 5px rgba(0,0,0,0.7), 0 0 15px rgba(255, 99, 71, 0.8);')}const j={class:"master-page"},D={class:"master-page-wrapper"},E={class:"master-content m-layout",draggable:"true",ref:"masterContent"},F={class:"master-name"},X={class:"flex-y-center",href:"https://github.com/cocoviewsong",target:"_blank"},Y=["src"],z={class:"master-info"},A={key:0,class:"page-mode-state dark"},G={key:1,class:"page-mode-state light"},H={class:"master-project m-layout flex-x-bt"},U={class:"project-route"},$={class:"header"},P={class:"name"},q={class:"finish-state"},J={class:"project-tools"},K="记录我曾经写过的项目，这非常合理。 —— 阿勒苏霍德之笔",x=62,O=L({__name:"index",setup(Q){const _=l(localStorage.getItem("theme")==="true"),o=C("masterContent"),w=()=>{_.value=!_.value,document.documentElement.className=_.value?"cocoviewsong-dark":"cocoviewsong-light",localStorage.setItem("theme",String(_.value))},y=[{name:"网易云",path:"/wyy",icon:"https://s1.music.126.net/style/favicon.ico?v20180823",useTools:"用到的工具: React + Vite + Redux + React Router + TS",className:"wyy",themeColor:"#c92a2a",isFinish:!0},{name:"米游社",path:"/mys",icon:"https://img-static.mihoyo.com/favicon.ico",useTools:"用到的工具: Vue + Vite + Pinia + Vue Router + TS",className:"mys",themeColor:"#00c3ff",isFinish:!1}],m=l(0),u=l(0),h=l(0),v=l(0);return b(()=>{var c;const n=(c=o.value)==null?void 0:c.getBoundingClientRect();h.value=(n==null?void 0:n.top)||0,v.value=(n==null?void 0:n.left)||0,o.value&&(o.value.addEventListener("dragstart",e=>{var a;(a=e.dataTransfer)==null||a.setData("text/plain",""),m.value=e.screenY,u.value=e.screenX}),o.value.addEventListener("dragend",e=>{const a=e.screenY-m.value,k=e.screenX-u.value,g=h.value+a;return o.value.style.left=v.value+k+"px",g<=x?o.value.style.top=g+"px":o.value.style.top=x+"px"})),fetch("https://api.example.com/info").then(e=>{if(!e.ok)throw new Error(`请求失败，状态码: ${e.status}`);return e.json()}).then(e=>console.log(e.data)).catch(e=>console.error("请求错误:",e.message||e)),V()}),(n,s)=>{const c=I,e=T("RouterLink");return r(),i("div",j,[t("header",D,[t("div",E,[t("div",F,[t("h2",null,[t("a",X,[t("img",{src:_.value?"https://img.picgo.net/2024/11/16/text-17317486978542dc62924d0586984.png":"https://img.picgo.net/2024/11/16/text-darkef369eefad6a147a.png",alt:"page creater name",border:"0"},null,8,Y)])])]),t("div",z,[t("div",{class:"page-mode",onClick:w},[_.value?(r(),i("div",A,s[0]||(s[0]=[t("svg",{class:"moon",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg",width:"38",height:"38"},[t("path",{d:`\r
              M60,10 \r
              A50,50 0 1,0 110,60 \r
              A40,40 0 1,1 60,10\r
              `})],-1)]))):(r(),i("div",G,s[1]||(s[1]=[M('<svg class="sun" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="38" height="38" data-v-2d0c5322><circle cx="60" cy="60" r="20" data-v-2d0c5322></circle><path d="M60 0 L60 20" data-v-2d0c5322></path><path d="M60 100 L60 120" data-v-2d0c5322></path><path d="M0 60 L20 60" data-v-2d0c5322></path><path d="M100 60 L120 60" data-v-2d0c5322></path><path d="M15 15 L30 30" data-v-2d0c5322></path><path d="M90 90 L105 105" data-v-2d0c5322></path><path d="M15 105 L30 90" data-v-2d0c5322></path><path d="M90 30 L105 15" data-v-2d0c5322></path></svg>',1)])))])])],512)]),t("main",H,[t("div",U,[(r(),i(N,null,R(y,a=>p(e,{key:a.name,to:a.path,class:f(a.className)},{default:B(()=>[t("div",$,[p(c,{name:a.icon},null,8,["name"]),t("div",P,d(a.name),1),t("span",q,d(a.isFinish?"已完成":"施工中"),1)]),t("div",J,d(a.useTools),1),p(c,{name:"arrow",class:f(["go",a.className])},null,8,["class"])]),_:2},1032,["to","class"])),64))]),t("div",{class:"about-me-wrap"},[s[2]||(s[2]=t("div",{class:"desc"},"Github.Io的用途:",-1)),s[3]||(s[3]=t("span",{class:"false-desc"}," GitHub.Io 提供了静态网页的一键化部署服务...... ",-1)),t("span",{class:"true-desc"},d(K))])]),s[4]||(s[4]=t("footer",{class:"master-footer m-layout"},null,-1))])}}}),Z=S(O,[["__scopeId","data-v-2d0c5322"]]);export{Z as default};