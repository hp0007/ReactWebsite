(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){"use strict";t.r(c);var i=t(1),s=t(2),a=t(26),l=t.n(a),r=t(15),n=(t(35),t(3)),o=(t(36),t(12)),d=t.n(o),j=function(e){var c=function(){var c=document.getElementById("sidebar"),t=document.getElementById("mainicon"),i=document.getElementById(e.id);if(window.screen.width>700)if(c.classList.contains("active")){switch(c.classList.remove("active"),e.id){case"services":case"home":case"about":case"skill":case"portfolio":case"contact":i.style.width="80%";break;default:alert("error")}t.classList.replace("fa-bars","fa-close")}else{switch(c.classList.add("active"),e.id){case"services":case"home":case"about":case"skill":case"portfolio":case"contact":i.style.width="96%";break;default:alert("error")}t.classList.replace("fa-close","fa-bars")}else c.classList.contains("active")?(c.classList.remove("active"),t.classList.replace("fa-bars","fa-close")):(c.classList.add("active"),t.classList.replace("fa-close","fa-bars"))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(d.a,{left:!0,children:Object(i.jsxs)("div",{className:"sidepart active",id:"sidebar",children:[Object(i.jsx)("i",{className:"fa fa-bars",onClick:c,id:"mainicon"}),Object(i.jsx)("div",{className:"img-profile"}),Object(i.jsx)("h4",{className:"name",children:"Harshit Gajjar"}),Object(i.jsx)("p",{className:"work",children:"Web Designer"}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"sidebar active",children:[{id:1,name:"HOME",path:"/ReactWebsite",icon:"fa fa-home"},{id:2,name:"SERVICES",path:"/services",icon:"fa fa-cogs"},{id:3,name:"ABOUT",path:"/about",icon:"fa fa-exclamation-circle"},{id:4,name:"SKILLS",path:"/skills",icon:"fa fa-gg-circle"},{id:5,name:"PORTFOLIO",path:"/portfolio",icon:"fa fa-file"},{id:6,name:"CONTACT",path:"/contact",icon:"fa fa-id-badge"}].map((function(e){return Object(i.jsxs)(r.c,{className:"sidebar-item",to:e.path,onClick:c,activeClassName:"active2",children:[e.name,Object(i.jsx)("i",{className:e.icon})]},e.id)}))})})]})})})},m=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{to:"/portfolio",children:Object(i.jsx)("button",{className:"btn",children:e.name})})})},b=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container-home",id:"home",children:[Object(i.jsx)(j,{id:"home"}),Object(i.jsx)("div",{className:"overlay",children:Object(i.jsx)(d.a,{right:!0,children:Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("h3",{children:"i am designer"}),Object(i.jsx)("p",{className:"seco",children:"I Make Wonderful Things"}),Object(i.jsx)("p",{className:"thir",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit ex reprehenderit eos architecto sed debitis nam optio repellat quis. Aliquid suscipit nesciunt corrupti non quaerat obcaecati unde adipisci et!"}),Object(i.jsx)(m,{name:"My Porfolio",link:"/portfolio"})]})})})]})})},u=t(14),h=function(e){return Object(i.jsx)(d.a,{top:!0,children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("i",{className:e.icon}),Object(i.jsx)("h4",{className:"text-center",children:e.title}),Object(i.jsx)("div",{className:"card-body ",children:Object(i.jsx)("p",{className:"card-text",children:e.valu})})]})})},x=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container align-items-center",children:Object(i.jsx)("div",{className:"row",children:e.cardData.map((function(e){return Object(i.jsx)("div",{className:"col-12 col-sm-12 col-md-4",children:Object(i.jsx)(h,{valu:e.value,title:e.title,icon:e.icon})},e.id)}))})})})},O=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"container-1",children:[Object(i.jsx)("h3",{children:e.title}),Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("p",{children:e.content})]})})},p=function(){var e=Object(s.useState)([{id:1,title:"Web Design",value:"Some quick example text to build on the card title and make up the bulk of the card's content.",icon:"fa fa-desktop"},{id:2,title:"Web Development",value:"Some quick example text to build on the card title and make up the bulk of the card's content.",icon:"fa fa-code"},{id:3,title:"Responsive Design",value:"Some quick example text to build on the card title and make up the bulk of the card's content.",icon:"fa fa-mobile"}]),c=Object(u.a)(e,2),t=c[0];c[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container-service",id:"services",children:[Object(i.jsx)(j,{id:"services"}),Object(i.jsx)(d.a,{left:!0,children:Object(i.jsx)(O,{title:"SERVICES",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!"})}),Object(i.jsx)(x,{cardData:t})]})})},v=t.p+"static/media/profile2.e786e170.png",f=t(7),N=t.n(f),g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{id:"about"}),Object(i.jsxs)("div",{className:"container-about",id:"about",children:[Object(i.jsx)(N.a,{top:!0,children:Object(i.jsx)(O,{title:"ABOUT",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!"})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(N.a,{left:!0,children:Object(i.jsx)("div",{className:"col-12 col-md-6 left",children:Object(i.jsx)("img",{src:v})})}),Object(i.jsx)(N.a,{right:!0,children:Object(i.jsxs)("div",{className:"col-12 col-md-6 right",children:[Object(i.jsx)("h4",{children:"Hi There"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui eaque temporibus voluptates labore porro esse placeat consequuntur delectus at corrupti molestias necessitatibus dicta, quos, unde itaque explicabo quasi dolorem."}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-12 col-md-6 inleft",children:Object(i.jsxs)(N.a,{top:!0,children:[Object(i.jsx)("h4",{children:"Name:"}),Object(i.jsx)("p",{children:"Harshit Gajjar"}),Object(i.jsx)("h4",{children:"Phone:"}),Object(i.jsx)("p",{children:"+91 9106639372"})]})}),Object(i.jsx)("div",{className:"col-12 col-md-6 inright",children:Object(i.jsxs)(N.a,{top:!0,children:[Object(i.jsx)("h4",{children:"Email:"}),Object(i.jsx)("p",{children:"hpgajjar95336@gmail.com"}),Object(i.jsx)("h4",{children:"Linkedin:"}),Object(i.jsx)("p",{children:"Harshit Gajjar"})]})})]})]})})]})]})]})},k=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{id:"skill",id1:"prog"}),Object(i.jsxs)("div",{className:"container-skill",id:"skill",children:[Object(i.jsx)(N.a,{top:!0,children:Object(i.jsx)(O,{title:"SKILLS",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!"})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(N.a,{left:!0,children:Object(i.jsx)("div",{className:"col-12 col-md-6 left",children:Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("p",{className:"title",children:"I,M EXPERT ON"}),Object(i.jsx)("h3",{className:"heading",children:"Let,s Work Together"}),Object(i.jsx)("p",{className:"inn-content",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci molestiae pariatur ipsa, tempore corporis cum dicta dolorum, repudiandae enim quo animi? Dolor nesciunt excepturi architecto qui repellat in incidunt expedita!"}),Object(i.jsx)(m,{name:"Hire Me Now"})]})})}),Object(i.jsx)(N.a,{right:!0,children:Object(i.jsx)("div",{className:"col-12 col-md-6 right",children:[{id:1,text:"HTML",value:85},{id:2,text:"CSS",value:70},{id:3,text:"JAVA SCRIPT",value:80},{id:4,text:"REACT JS",value:75}].map((function(e){return Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("div",{className:"progress",children:Object(i.jsxs)("div",{className:"progress-inn","data-in":e.value,style:{width:e.value+"%"},children:[e.value,"%"]},e.id)}),Object(i.jsx)("label",{children:e.text})]})}))})})]})]})]})},L=function(){return Object(i.jsx)("div",{className:"container-portfolio",id:"portfolio",children:Object(i.jsx)(j,{id:"portfolio"})})},q=t(29),w=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("label",{children:e.title})})},S=t(28),y=t(20),C=t(18),E=function(){var e=Object(q.a)(),c=e.register,t=e.handleSubmit;return Object(i.jsxs)("div",{className:"container-contact",id:"contact",children:[Object(i.jsx)(j,{id:"contact"}),Object(i.jsx)(N.a,{top:!0,children:Object(i.jsx)(O,{title:"GET IN TOUCH",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!"})}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(N.a,{left:!0,children:Object(i.jsx)("div",{className:"col-12 col-md-6 col-lg-6 ",children:Object(i.jsxs)("form",{onSubmit:t((function(e){})),method:"post",children:[Object(i.jsx)(w,{title:"Your Name :"}),Object(i.jsx)("input",{type:"text",name:"fullname",id:"name",ref:c}),Object(i.jsx)(w,{title:"Email Address :"}),Object(i.jsx)("input",{type:"email",name:"email",id:"email",ref:c}),Object(i.jsx)(w,{title:"Subject :"}),Object(i.jsx)("input",{type:"text",name:"subject",id:"subject",ref:c}),Object(i.jsx)(w,{title:"Message :"}),Object(i.jsx)("input",{type:"textarea",name:"msg",id:"msg",ref:c}),Object(i.jsx)("button",{className:"btn",type:"submit",children:"Send"})]})})}),Object(i.jsx)(N.a,{right:!0,children:Object(i.jsxs)("div",{className:"col-12 col-md-6 col-lg-6 right ",children:[Object(i.jsxs)("div",{className:"detail ",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-2 col-md-2 ",children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("div",{className:"col-10 col-md-10 ",children:"Rajkot, Gujarat"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-2 col-md-2",children:Object(i.jsx)(y.a,{})}),Object(i.jsx)("div",{className:"col-10 col-md-10",children:"+91 91066 39372"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-2 col-md-2",children:Object(i.jsx)(y.b,{})}),Object(i.jsx)("div",{className:"col-10 col-md-10",children:"hpgajjar95336@gmail.com"})]})]}),Object(i.jsxs)("div",{className:"account d-flex ",children:[Object(i.jsx)("div",{className:"git",children:Object(i.jsx)(C.a,{})}),Object(i.jsx)("div",{className:"insta",children:Object(i.jsx)(C.b,{})}),Object(i.jsx)("div",{className:"twitt",children:Object(i.jsx)(C.c,{})})]})]})})]})})]})},I=function(){return Object(i.jsx)("div",{children:"Oops Page Not Fount 404"})};t(52);var T=function(){return Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.a,{exact:!0,path:"/ReactWebsite",component:b}),Object(i.jsx)(n.a,{path:"/services",component:p}),Object(i.jsx)(n.a,{path:"/about",component:g}),Object(i.jsx)(n.a,{path:"/skills",component:k}),Object(i.jsx)(n.a,{path:"/portfolio",component:L}),Object(i.jsx)(n.a,{path:"/contact",component:E}),Object(i.jsx)(n.a,{component:I})]})};l.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a07a4c38.chunk.js.map