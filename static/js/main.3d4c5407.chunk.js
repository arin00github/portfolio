(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[1],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),i=n.n(c),a=n(16),l=n.n(a),r=(n(24),n(25),n(12)),o=n(2),d=n(4);n(27);var j=function(){return Object(c.useEffect)((function(){var e=document.getElementById("header");document.addEventListener("scorll",(function(){var t=window.pageYOffset;console.log(t),t>300?e.classList.add("change"):e.classList.remove("change")}));for(var t=document.getElementsByClassName("list"),n=function(e){t[e].addEventListener("mouseover",(function(){t[e].classList.add("active")})),t[e].addEventListener("mouseleave",(function(){t[e].classList.remove("active")}))},s=0;s<t.length;s++)n(s)}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("header",{id:"header",className:"pc",children:Object(s.jsx)("div",{className:"header-wrap",children:Object(s.jsx)("div",{className:"header-inner",children:Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{className:"gnb",children:[Object(s.jsx)("li",{className:"list",children:Object(s.jsx)(d.b,{to:"/",children:"Home"})}),Object(s.jsx)("li",{className:"list",children:Object(s.jsx)(d.b,{to:"/About",children:"About"})}),Object(s.jsx)("li",{className:"list",children:Object(s.jsx)(d.b,{to:"/web",children:"Web"})}),Object(s.jsx)("li",{className:"list",children:Object(s.jsx)(d.b,{to:"/package",children:"Package"})}),Object(s.jsx)("li",{className:"list",children:Object(s.jsx)(d.b,{to:"/css",children:"CSS"})})]})})})})})})},b=(n(32),Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,87))}))),h=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,81))})),u=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,88))})),m=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,89))})),x=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,85))})),O=Object(c.lazy)((function(){return n.e(15).then(n.bind(null,82))}));var p=function(){return Object(c.useEffect)((function(){function e(e,t){this.count=0,this.diff=0,this.target_elem=document.getElementById("progress-bar"),this.container=document.getElementById("progress"),this.target_count=parseInt(t),this.target_frame=document.getElementById(e),this.timer=null,this.counter()}function t(t,n){return new e(t,n)}return e.prototype.counter=function(){this.diff=this.target_count-this.count;var e=this;this.diff>0&&(e.count+=Math.ceil(this.diff/5),e.target_elem.style.width="".concat(e.count,"%")),this.target_frame.innerHTML=this.count.toString(),this.count<this.target_count?this.timer=setTimeout((function(){e.counter()}),60):(clearTimeout(this.timer),e.target_elem.classList.add("close"),e.target_frame.classList.add("close"),e.container.classList.add("close"))},t("progress-text","100"),t("progress-text","100")}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"pc",id:"progress",children:[Object(s.jsx)("div",{id:"loading",children:Object(s.jsxs)("div",{className:"loading-text",children:[Object(s.jsx)("span",{className:"loading-text-words",children:"L"}),Object(s.jsx)("span",{className:"loading-text-words",children:"O"}),Object(s.jsx)("span",{className:"loading-text-words",children:"A"}),Object(s.jsx)("span",{className:"loading-text-words",children:"D"}),Object(s.jsx)("span",{className:"loading-text-words",children:"I"}),Object(s.jsx)("span",{className:"loading-text-words",children:"N"}),Object(s.jsx)("span",{className:"loading-text-words",children:"G"})]})}),Object(s.jsx)("span",{id:"progress-bar"}),Object(s.jsx)("span",{id:"progress-text",children:"0%"})]}),Object(s.jsxs)("div",{id:"wrap",className:"pc",children:[Object(s.jsx)(j,{}),Object(s.jsx)(c.Suspense,{fallback:Object(s.jsx)("div",{children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694"}),children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(s.jsx)(o.a,{path:"/About",component:h}),Object(s.jsx)(o.a,{path:"/web",component:u}),Object(s.jsx)(o.a,{path:"/package",component:m}),Object(s.jsx)(o.a,{path:"/css",component:x}),Object(s.jsx)(o.a,{path:"/Contact",component:O})]})})]})]})};n(33);var f=function(){return Object(c.useEffect)((function(){var e=document.getElementById("openbtn"),t=document.getElementById("closebtn"),n=document.getElementById("modal-w"),s=document.getElementsByClassName("list-m");e.addEventListener("click",(function(){n.classList.add("open")})),t.addEventListener("click",(function(){n.classList.remove("open")}));for(var c=0;c<s.length;c++)s[c].addEventListener("click",(function(){console.log("close"),n.classList.remove("open")}))}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{id:"header",className:"mobile",children:Object(s.jsx)("div",{className:"header-wrap",children:Object(s.jsx)("div",{className:"header-inner",children:Object(s.jsxs)("button",{className:"btn-header",id:"openbtn",children:[Object(s.jsx)("span",{className:"line"}),Object(s.jsx)("span",{className:"line"}),Object(s.jsx)("span",{className:"line"})]})})})}),Object(s.jsxs)("div",{id:"modal-w",children:[Object(s.jsx)("div",{className:"modal-inner",children:Object(s.jsxs)("ul",{className:"menu",children:[Object(s.jsx)("li",{children:Object(s.jsx)(d.b,{to:"/",className:"list-m",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(d.b,{to:"/About",className:"list-m",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)(d.b,{to:"/web",className:"list-m",children:"Web"})}),Object(s.jsx)("li",{children:Object(s.jsx)(d.b,{to:"/package",className:"list-m",children:"Package"})}),Object(s.jsx)("li",{children:Object(s.jsx)(d.b,{to:"/css",className:"list-m",children:"CSS"})})]})}),Object(s.jsxs)("button",{className:"btn-header",id:"closebtn",children:[Object(s.jsx)("span",{className:"line"}),Object(s.jsx)("span",{className:"line"})]})]})]})},g=(n(34),Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,90))}))),N=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,91))})),v=Object(c.lazy)((function(){return n.e(12).then(n.bind(null,92))})),w=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,93))})),y=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,86))})),L=Object(c.lazy)((function(){return n.e(14).then(n.bind(null,83))}));var E=function(){return Object(c.useEffect)((function(){function e(e,t){this.count=0,this.diff=0,this.target_elem=document.getElementById("progress-bar"),this.container=document.getElementById("progress"),this.target_count=parseInt(t),this.target_frame=document.getElementById(e),this.timer=null,this.counter()}function t(t,n){return new e(t,n)}return e.prototype.counter=function(){this.diff=this.target_count-this.count;var e=this;this.diff>0&&(e.count+=Math.ceil(this.diff/5),e.target_elem.style.width="".concat(e.count,"%")),this.target_frame.innerHTML=this.count.toString(),this.count<this.target_count?this.timer=setTimeout((function(){e.counter()}),60):(clearTimeout(this.timer),e.target_elem.classList.add("close"),e.target_frame.classList.add("close"),e.container.classList.add("close"))},t("progress-text","100"),t("progress-text","100")}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"mobile",id:"progress",children:[Object(s.jsx)("div",{id:"loading",children:Object(s.jsxs)("div",{className:"loading-text",children:[Object(s.jsx)("span",{className:"loading-text-words",children:"L"}),Object(s.jsx)("span",{className:"loading-text-words",children:"O"}),Object(s.jsx)("span",{className:"loading-text-words",children:"A"}),Object(s.jsx)("span",{className:"loading-text-words",children:"D"}),Object(s.jsx)("span",{className:"loading-text-words",children:"I"}),Object(s.jsx)("span",{className:"loading-text-words",children:"N"}),Object(s.jsx)("span",{className:"loading-text-words",children:"G"})]})}),Object(s.jsx)("span",{id:"progress-bar"}),Object(s.jsx)("span",{id:"progress-text",children:"0%"})]}),Object(s.jsxs)("div",{id:"wrap",className:"mobile",children:[Object(s.jsx)(f,{}),Object(s.jsx)(c.Suspense,{fallback:Object(s.jsx)("div",{children:"\ub85c\ub529\uc911\uc774\uc5d0\uc694"}),children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(s.jsx)(o.a,{path:"/About",component:N}),Object(s.jsx)(o.a,{path:"/web",component:v}),Object(s.jsx)(o.a,{path:"/package",component:w}),Object(s.jsx)(o.a,{path:"/css",component:y}),Object(s.jsx)(o.a,{path:"/Contact",component:L})]})})]})]})};var _=function(){return Object(c.useEffect)((function(){}),[]),Object(s.jsxs)("div",{className:"App",id:"App",children:[Object(s.jsx)(r.BrowserView,{children:Object(s.jsx)(p,{})}),Object(s.jsx)(r.MobileView,{children:Object(s.jsx)(E,{})})]})},I=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,84)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};l.a.render(Object(s.jsx)(d.a,{basename:"/portfolio",children:Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(_,{})})}),document.getElementById("root")),I()}},[[35,2,3]]]);
//# sourceMappingURL=main.3d4c5407.chunk.js.map