import{H as u,T as p}from"./Tabbar-DXFAxyDY.js";import{d as l,u as m,o as a,c as n,a as e,F as v,r as f,b as c,t as i,_ as g,e as o}from"./index-DUa1lK7r.js";const h={class:"message-list"},C=["onClick"],k={class:"left"},L=["src"],x={class:"center"},H=l({__name:"MessageList",setup(_){const t=m();return console.log(t.getContactList()),(d,r)=>(a(),n("main",null,[e("div",h,[(a(!0),n(v,null,f(c(t).getContactList(),s=>(a(),n("div",{class:"message",key:s.id,onClick:y=>c(t).openChatPage(s.id)},[e("div",k,[e("img",{class:"avatar",src:s.avatar,alt:"avatar"},null,8,L)]),e("div",x,[e("div",null,i(s.name),1),e("div",null,i(s.sayHi),1)]),r[0]||(r[0]=e("div",{class:"right"},null,-1))],8,C))),128))])]))}}),b=g(H,[["__scopeId","data-v-2d3c7227"]]),F=l({__name:"HomeView",setup(_){return(t,d)=>(a(),n("main",null,[o(u),o(p),o(b)]))}});export{F as default};
