(this["webpackJsonpsocial-app"]=this["webpackJsonpsocial-app"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},60:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(21),a=n.n(s),i=(n(49),n(43)),o=n(7),u=(n(50),n(18)),d=n(2),j=function(e){var t=e.username,n=e.title,c=e.body,r=e.children;return Object(d.jsxs)("div",{className:"feed__post",children:[Object(d.jsx)("div",{className:"feed__post__username",children:t}),Object(d.jsxs)("div",{className:"feed__post__body",children:[Object(d.jsx)("div",{className:"feed__post__body__title",children:n}),Object(d.jsxs)("div",{className:"feed__post__body__content",children:[r&&r,c]})]})]})},l=(n(55),function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("div",{className:"loadingio-spinner-disk-nhajlk4gbpl",children:Object(d.jsx)("div",{className:"ldio-0xbwh66nwucj",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})})})}),b="get_posts",p="set_posts",f=(n(56),function(){var e=Object(u.c)((function(e){return e.feed.posts})),t=Object(u.b)();return Object(c.useEffect)((function(){t({type:b})}),[]),Object(d.jsx)("div",{className:"feed",children:e.length?e.map((function(e){return Object(d.jsx)(j,{username:e.userId.toString(),title:e.title,body:e.body},e.id)})):Object(d.jsx)(l,{})})}),h=n(33),v=(n(57),n(24)),O=n(25),x=n(83),m=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),n=Object(h.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),i=Object(h.a)(a,2),o=i[0],u=i[1];Object(c.useEffect)((function(){var e=function(e){e.target!==document.querySelector("#user-search-container")&&e.target!==document.querySelector("#user-search-container>input")&&e.target!==document.querySelector("#user-search-suggestion")&&s(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]);return Object(d.jsxs)("div",{id:"user-search-container",children:[Object(d.jsx)("input",{type:"text",ref:e,placeholder:r?"Search":"",onFocus:function(){s(!0)},value:o,onInput:function(e){u(e.target.value)}}),!r&&!o&&Object(d.jsxs)("div",{className:"placeholder",children:[Object(d.jsx)(v.a,{className:"placeholder__search-icon",icon:O.a}),Object(d.jsx)("span",{children:"Search"})]}),r&&Object(d.jsx)(v.a,{className:"search-icon",icon:O.a}),r&&Object(d.jsx)(v.a,{onClick:function(){u(""),s(!1)},className:"close",icon:O.b}),r&&Object(d.jsx)(x.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},className:"user-search-suggestion",id:"user-search-suggestion",children:Object(d.jsx)("div",{className:"pointer"})})]})},g=(n(60),function(){return Object(d.jsx)("nav",{id:"nav",children:Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("div",{id:"logo",children:Object(d.jsx)("p",{children:"Social App"})}),Object(d.jsx)(m,{}),Object(d.jsx)("div",{id:"nav-container"})]})})}),_=function(){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(f,{})]})};var y=function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(o.c,{children:Object(d.jsx)(o.a,{path:"/",component:_})})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},N=n(16),k=n(44),S=n(13),F=n.n(S),E=n(28),C=n(26),I=n(27),L=n.n(I),P="https://jsonplaceholder.typicode.com",q=(function(){var e=Object(C.a)(F.a.mark((function e(){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(P,"/users"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))}(),function(){var e=Object(C.a)(F.a.mark((function e(t){var n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(P,"/users/").concat(t));case 2:return n=e.sent,c=n.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))}(),{getPosts:function(){var e=Object(C.a)(F.a.mark((function e(){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("".concat(P,"/posts"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),B=F.a.mark(T),J=F.a.mark(A);function T(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(b,A);case 2:case"end":return e.stop()}}),B)}function A(e){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.a)(q.getPosts);case 3:return t=e.sent,e.next=6,Object(E.b)({type:p,data:t});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),J,null,[[0,8]])}var D={posts:[]},M="set_users",R={users:[]},z=Object(N.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{users:t.data};default:return e}},feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{posts:t.data};default:return e}}}),G=Object(k.a)(),H=[G],K=Object(N.d)(z,{},N.a.apply(void 0,H));G.run(T);var Q=K;a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(u.a,{store:Q,children:Object(d.jsx)(y,{})})}),document.getElementById("root")),w()}},[[80,1,2]]]);
//# sourceMappingURL=main.936b36a3.chunk.js.map