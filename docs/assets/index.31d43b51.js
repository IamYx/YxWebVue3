import{p as e,a as t,r as n,N as o,u as a,o as l,c as s,b as r,t as c,w as u,v as i,F as d,d as p,e as v,f as g,g as m,h as f,n as h,i as y,j as b,k}from"./vendor.8cb48d77.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();e("data-v-82f24a4c");const I=g(" Welcome: "),w={href:"https://www.baidu.com/",target:"_blank"},C={class:"left-aligned-list"},M=["onClick"],V={key:0,class:"dialog"},L=[r("div",{class:"dialog-content"},[r("p",null,"发送成功！")],-1)];t();const N={props:{msg:String},setup(e){n(0);const t=n(""),g=n(""),m=n(""),f=n([]);n("");const h=n(0),y=n(""),b=n(!1);o.getInstance({appkey:"4727023efa991d31d61b3b32e819bd5b",debugLevel:"debug",apiVersion:"v2"}).V2NIMLoginService.on("onConnectStatus",(function(e){console.log("=== onConnectStatus"+e)}));const k=a(),N=()=>{k.push("/TwoPage")},S=async()=>{try{const e=await fetch("https://v2.jokeapi.dev/joke/Any"),t=await e.json();t.error?console.error("获取笑话数据出错:",t.error):(m.value=t.joke||`${t.setup}  ${t.delivery}`,f.value.push(`【${f.value.length}】`+m.value),h.value++)}catch(e){console.error("获取笑话数据出错:",e)}},_=async()=>{try{await o.getInstance().V2NIMLoginService.login(t.value,"123456",{forceMode:!1}),(async()=>{const e=await o.getInstance().V2NIMUserService.getUserList([t.value]);y.value=e[0].name})(),S()}catch(e){console.log("===0"+e)}},x=async()=>{try{const e=o.getInstance().V2NIMMessageCreator.createTextMessage(m.value);e.serverExtension="abc";const t=o.getInstance().V2NIMConversationIdUtil.p2pConversationId(g.value);console.log("=== 发送1"),1==(await o.getInstance().V2NIMMessageService.sendMessage(e,t)).message.sendingState?(b.value=!0,setTimeout((()=>{b.value=!1}),3e3)):console.log("=== 发送失败")}catch(e){console.log("==="+e)}};return(n,o)=>(l(),s(d,null,[r("h1",null,c(e.msg),1),u(r("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),placeholder:"login"},null,512),[[i,t.value]]),r("button",{type:"button",onClick:_},"login"),r("p",null,[I,r("a",w,c(y.value),1)]),r("button",{onClick:N},"go to next page"),r("div",null,[r("p",null,c(m.value),1)]),r("button",{type:"button",onClick:S},"count is: "+c(h.value),1),u(r("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>g.value=e),placeholder:"send to"},null,512),[[i,g.value]]),r("button",{type:"button",onClick:x},"sendJoke"),r("ul",C,[(l(!0),s(d,null,p(f.value,(e=>(l(),s("li",{key:e,onClick:t=>(e=>{console.log(`点击了: ${e}`),m.value=e})(e)},c(e),9,M)))),128))]),b.value?(l(),s("div",V,L)):v("",!0)],64))},__scopeId:"data-v-82f24a4c"};const S={setup:e=>(e,t)=>{const n=m("router-view");return l(),f(n)}},_={};const x=["src"],j=["src","alt"],E=[{path:"/",component:N},{path:"/twoPage",component:{setup(e){const t=n([]),o=n(0),a=n(!1),u=n("liImageClass"),i=n("https://img1.baidu.com/it/u=2789072492,3212934856&fm=253&app=120&size=w931&n=0&f=GIF&fmt=auto?sec=1736355600&t=70c66a1fea960cb28ff7ccbacd5645e8");(async()=>{const{default:e}=await(n=()=>import("./index.f880b8f6.js"),o=[],o&&0!==o.length?Promise.all(o.map((e=>{if((e=`/YxWebVue3/${e}`)in _)return;_[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>n())):n());var n,o;try{const n=await e.get("https://picsum.photos/v2/list");t.value=n.data}catch(a){console.error("获取图片列表失败",a)}})();const v=()=>{o.value++,a.value=!0,setTimeout((()=>{a.value=!1}),500),console.log("木鱼被敲了！")};return(e,n)=>(l(),s(d,null,[r("div",null,[r("button",{onClick:v},"+1"),r("p",null,"good luck: "+c(o.value),1),r("img",{src:i.value,onClick:v,class:h(a.value?"hit-animation":"")},null,10,x)]),r("div",null,[r("ul",null,[(l(!0),s(d,null,p(t.value,(e=>(l(),s("li",{key:e.id},[r("img",{src:e.download_url,alt:e.author,class:h(u.value)},null,10,j),r("p",null,c(e.author),1)])))),128))])])],64))}}}],$=y({history:b("/YxWebVue3/"),routes:E});k(S).use($).mount("#app");
