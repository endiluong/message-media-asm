(this["webpackJsonpmessage-media-asm"]=this["webpackJsonpmessage-media-asm"]||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},61:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(1),s=c(14),a=c.n(s),i=c(10),l=(c(50),function(){return Object(n.jsx)("div",{className:"header-box",children:Object(n.jsx)("h1",{className:"display-5",children:" Giphy Images"})})}),o=c(13),u=c(39),j="IMAGEs_LOAD",d="IMAGES_LOAD_SUCCESS",b="IMAGES_LOAD_FAIL",m="SET_OFFSET",f="".concat("https://api.giphy.com","/").concat("v1/gifs"),O=(c(51),function(e){var t=function(){e.onClose()};return function(){var c=e.isOpen,r=e.images,s=e.title;return r&&c?Object(n.jsx)("div",{className:"lightbox ".concat(c?"show":""),onClick:t,children:Object(n.jsx)("div",{className:"lightbox-wrapper",children:Object(n.jsxs)("picture",{className:"lightbox-image",children:[Object(n.jsx)("source",{srcSet:r.downsized.url,type:"image/gif"}),Object(n.jsx)("img",{src:r["480w_still"].url,alt:s})]})})}):null}()}),p=(c(52),function(e){var t=Object(r.useState)(!1),c=Object(o.a)(t,2),s=c[0],a=c[1];return function(){var t=e.image,c=t.title,r=t.images,i=t.user;return Object(n.jsx)("div",{className:"col-6 col-md-4 col-lg-3",children:Object(n.jsxs)("section",{className:"card",children:[Object(n.jsxs)("div",{className:"card-wrapper",children:[Object(n.jsxs)("picture",{className:"card-image",onClick:function(){return a(!0)},children:[Object(n.jsx)("source",{srcSet:r.preview_webp.url,type:"image/webp"}),Object(n.jsx)("source",{srcSet:r["480w_still"].url,type:"image/jpeg"}),Object(n.jsx)("img",{src:r["480w_still"].url,alt:c})]}),Object(n.jsxs)("div",{className:"card-bottom d-flex align-items-center justify-content-between",children:[Object(n.jsx)("div",{className:"mr-auto",children:Object(n.jsx)("i",{className:"fas fa-paperclip f6"})}),Object(n.jsxs)("div",{className:"ml-auto",children:[Object(n.jsx)("span",{className:"ml-2",children:Object(n.jsx)("i",{className:"fas fa-eye mr-2"})}),Object(n.jsxs)("span",{className:"ml-2",children:[Object(n.jsx)("i",{className:"fas fa-comment mr-2"})," "]}),Object(n.jsx)("span",{className:"ml-2",children:Object(n.jsx)("i",{className:"fas fa-heart mr-2"})})]})]})]}),i?Object(n.jsxs)("div",{className:"card-user",children:[Object(n.jsx)("span",{className:"card-user__avatar",children:Object(n.jsx)("img",{src:i.avatar_url,alt:i.display_name})}),Object(n.jsx)("span",{className:"card-user__name",children:i.username})]}):null,Object(n.jsx)(O,Object(u.a)({isOpen:s,onClose:function(){a(!1)}},t))]})})}()}),x=function(e){return{type:d,images:e}},h=function(e){return{type:m,offset:e}},g=c(35),v=c.n(g),N=(c(61),function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!1),l=Object(o.a)(a,2),u=l[0],d=l[1],b=Object(i.b)(),m=Object(i.c)((function(e){return e.isLoading})),f=Object(i.c)((function(e){return e.images})),O=Object(i.c)((function(e){return e.error}));Object(r.useEffect)((function(){b({type:j})}),[b,u]);var x=function(){var e=c.scrollHeight,t=c.scrollTop,n=c.clientHeight;d(n+t===e)};return Object(n.jsx)("div",{children:O?Object(n.jsxs)("div",{className:"row d-flex flex-column justify-content-center align-items-center p-3",children:[Object(n.jsx)("h5",{className:"text-danger",children:O.message}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){return window.location.reload()},children:"Reload Page"})]}):Object(n.jsxs)("div",{ref:function(e){s(e)},className:"image-grid container-fluid pt-3",onScroll:v()(x,100,{leading:!0,trailing:!0}),children:[Object(n.jsx)("div",{className:"row",children:f.map((function(e){return Object(n.jsx)(p,{image:e},e.id)}))}),m?Object(n.jsx)("div",{class:"progress-line"}):null]})})}),w=c(7),_=c(38),y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return!0;case d:case b:return!1;default:return e}},S=c(21),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===d?[].concat(Object(S.a)(e),Object(S.a)(t.images)):e},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.error;case d:case j:return null;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.offset;default:return e}},L=Object(w.c)({isLoading:y,images:E,error:k,offset:A}),C=c(9),D=c.n(C),T=c(11),I=c(36),G=c(37),J=c.n(G).a.create({baseURL:f,headers:{Accept:"application/json","Content-Type":"application/json"}}),M=function(){var e=Object(I.a)(D.a.mark((function e(t){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("/trending",{params:{api_key:"mDxBZ8g8muJniGkZE9PMb8JYc7Azs9yQ",limit:20,offset:t}});case 2:if(!((c=e.sent).status>=400)){e.next=5;break}throw new Error(c.errors);case 5:return e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=D.a.mark(F),U=D.a.mark(z),X=function(e){return e.offset};function F(){var e,t,c,n;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(T.c)(X);case 3:return e=r.sent,r.next=6,Object(T.a)(M,e);case 6:return t=r.sent,c=t.data,n=t.pagination,r.next=10,Object(T.b)(x(c));case 10:return r.next=12,Object(T.b)(h(n.offset+20));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,Object(T.b)((s=r.t0,{type:b,error:s}));case 18:case"end":return r.stop()}var s}),R,null,[[0,14]])}function z(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(j,F);case 2:case"end":return e.stop()}}),U)}var H=z,P=function(){var e=Object(_.a)(),t=Object(w.e)(L,Object(w.d)(Object(w.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));return e.run(H),t.dispatch({type:j}),t},V=(c(81),c(82),P()),Z=function(){return Object(n.jsx)(i.a,{store:V,children:Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(l,{}),Object(n.jsx)(N,{className:"grid"})]})})};a.a.render(Object(n.jsx)(Z,{}),document.querySelector("#root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.7a98a0aa.chunk.js.map