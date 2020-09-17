(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),l=a(1),o=a.n(l),u=a(3),m=a(2),i=(a(12),a(13),a(14),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),p=(a(15),function(e){var t=e.getUserPosts,a=e.userSelect,s=e.selectedPostId,c=e.setSelectedPostId,l=e.loadPostDetails,o=Object(n.useState)(""),u=Object(m.a)(o,2),p=u[0],d=u[1];return Object(n.useEffect)((function(){t(a).then((function(e){d(e)}))}),[a]),r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},p?p.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostsList__item"},r.a.createElement("div",null,r.a.createElement("b",null,"[User",e.userId,"]:"),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,l(t),void c(s!==t?t:null);var t}},s===e.id?"Close":"Open"))})):r.a.createElement(i,null)))});p.defaultProps={selectedPostId:null};a(16);var d=function(){return r.a.createElement("form",{className:"NewCommentForm"},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input"})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))},f=function(e){var t=e.comment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button"},"X"),r.a.createElement("p",null,t.id))},E=function(e){var t=e.postComments;return r.a.createElement("ul",{className:"PostDetails__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},r.a.createElement(f,{comment:e}))})))},v=(a(17),function(e){var t=e.selectedPostDetails,a=e.postComments;return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,t.body)),r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button"},"Hide 2 comments"),r.a.createElement(E,{postComments:a})),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(d,null))))}),b="https://mate-api.herokuapp.com",_=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/posts"));case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,r=n.data,"0"===t){e.next=10;break}return s=r.filter((function(e){return e.userId===+t})),e.abrupt("return",s);case 10:return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/posts/").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/comments"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.data.filter((function(e){return t===e.id})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(n.useState)("0"),t=Object(m.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),l=Object(m.a)(c,2),i=l[0],d=l[1],f=Object(n.useState)(null),E=Object(m.a)(f,2),b=E[0],P=E[1],j=Object(n.useState)([]),y=Object(m.a)(j,2),w=y[0],O=y[1],x=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([h(t),N(t)]);case 2:a=e.sent,n=Object(m.a)(a,2),r=n[0],s=n[1],P(r),O(s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",onChange:function(e){s(e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(p,{getUserPosts:_,userSelect:a,selectedPostId:i,setSelectedPostId:d,loadPostDetails:x})),r.a.createElement("div",{className:"App__content"},b&&i&&r.a.createElement(v,{selectedPostId:i,getPostDetails:h,selectedPostDetails:b,postComments:w}))))};c.a.render(r.a.createElement(P,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.48b06df5.chunk.js.map