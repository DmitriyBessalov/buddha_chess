(this.webpackJsonpnodejs=this.webpackJsonpnodejs||[]).push([[0],{10:function(e,t,a){e.exports={container:"Auth_container__3e8JN",h1:"Auth_h1__2TQm4",input:"Auth_input__2ysYl",buttonW100:"Auth_buttonW100__11L92",grid:"Auth_grid__grWyv"}},100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var s,n=a(0),c=a.n(n),r=a(12),o=a.n(r),i=a(7),l=a(132),d=a(135),j=a(25),u=a(1),b=function(){var e=c.a.useState(null),t=Object(i.a)(e,2),a=(t[0],t[1],c.a.useState(!1)),s=Object(i.a)(a,2),n=s[0],r=s[1],o=!1;null!==localStorage.getItem("token")&&(o=!0),o!==n&&r(!0);return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)(d.a,{variant:"contained",style:{margin:"10px"},children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"})}),Object(u.jsx)(j.b,{to:"/ru/\u0438\u0433\u0440\u0430\u0442\u044c",children:Object(u.jsx)(d.a,{variant:"contained",style:{margin:"10px"},children:"\u0418\u0433\u0440\u0430\u0442\u044c"})}),n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{variant:"contained",style:{float:"right",margin:"10px"},onClick:function(e){localStorage.removeItem("token"),window.location.reload()},children:"\u0412\u044b\u0445\u043e\u0434"}),Object(u.jsx)(d.a,{variant:"contained",style:{float:"right",margin:"10px"},children:localStorage.getItem("email")})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.b,{to:"/ru/auth/login",style:{float:"right"},children:Object(u.jsx)(d.a,{variant:"contained",style:{margin:"10px"},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})}),Object(u.jsx)(j.b,{to:"/ru/auth/users",style:{float:"right"},children:Object(u.jsx)(d.a,{variant:"contained",style:{margin:"10px"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})},h=a(14),m=a(19),x=a.n(m),O=a(27),p=a(103),v=a(148),g=a(138),f=a(10),w=a.n(f),N=function(){var e=c.a.useState(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=c.a.useState(""),r=Object(i.a)(n,2),o=r[0],l=r[1],b=c.a.useState(null),h=Object(i.a)(b,2),m=h[0],f=h[1],N=c.a.useState(null),y=Object(i.a)(N,2),_=y[0],S=y[1],k=c.a.useState(null),I=Object(i.a)(k,2),J=I[0],C=I[1],T=c.a.useState(null),F=Object(i.a)(T,2),A=F[0],E=F[1],W=c.a.useState(!1),P=Object(i.a)(W,2),V=P[0],q=P[1];return Object(u.jsx)(u.Fragment,{children:V?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{children:"\u0412\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c."}),Object(u.jsx)(p.a,{children:"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0435\u043c\u0430\u0439\u043b, \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e."}),Object(u.jsxs)(p.a,{children:["\u0415\u0441\u043b\u0438 \u043f\u0438\u0441\u044c\u043c\u043e \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e ",Object(u.jsx)(j.b,{to:"/auth/users/resend_activation",children:"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044e"})]})]}):Object(u.jsxs)("form",{noValidate:!0,children:[Object(u.jsx)(p.a,{variant:"h1",className:w.a.h1,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(u.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:w.a.input,required:!0,onChange:function(e){s(e.target.value)},value:a,error:m,helperText:J}),Object(u.jsx)(v.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:w.a.input,type:"password",required:!0,onChange:function(e){l(e.target.value)},value:o,error:_,helperText:A}),Object(u.jsx)(g.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",className:w.a.grid,children:Object(u.jsx)(j.b,{to:"/aunf/login",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b"})}),Object(u.jsx)(d.a,{className:w.a.buttonW100,variant:"contained",onClick:function(e){if(o.length>5){var t='{"email":"'+a+'","username":"'+a+'","password":"'+o+'"}';console.log(t),fetch(window.web_protocol+window.backend+"/api/auth/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){201===e.status?(localStorage.setItem("email",JSON.parse(e.body).email),q(!0)):400===e.status&&(void 0!==JSON.parse(e.body).email?(C(JSON.parse(e.body).email),f(!0)):(C(""),f(!1)),void 0!==JSON.parse(e.body).password?(E(JSON.parse(e.body).password),S(!0)):(E(""),S(!1)))}))}else E("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),S(!0)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})},y=a(139),_=a(146),S=function(){var e=c.a.useState(localStorage.getItem("email")),t=Object(i.a)(e,2),a=t[0],s=t[1],n=c.a.useState(localStorage.getItem("password")),r=Object(i.a)(n,2),o=r[0],l=r[1],b=c.a.useState(!0),h=Object(i.a)(b,2),m=h[0],f=h[1],N=c.a.useState(null),S=Object(i.a)(N,2),k=S[0],I=S[1],J=c.a.useState(null),C=Object(i.a)(J,2),T=C[0],F=C[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{noValidate:!0,children:[Object(u.jsx)(p.a,{variant:"h1",className:w.a.h1,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(u.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:w.a.input,required:!0,onChange:function(e){s(e.target.value)},value:a,error:k}),Object(u.jsx)(v.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:w.a.input,type:"password",required:!0,onChange:function(e){l(e.target.value)},value:o,error:k,helperText:T}),Object(u.jsxs)(g.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:w.a.grid,children:[Object(u.jsx)(y.a,{control:Object(u.jsx)(_.a,{name:"checked",color:"primary",onChange:function(e){f(e.target.checked)},checked:m}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)(j.b,{to:"/auth/reset_password",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(u.jsx)(d.a,{className:w.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'","username":"'+a+'","password":"'+o+'"}';console.log(t),fetch(window.web_protocol+window.backend+"/api/auth/token",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){console.log(JSON.parse(e.body).token),200===e.status?(I(!1),F(null),localStorage.setItem("token",JSON.parse(e.body).token),localStorage.setItem("email",a),m&&localStorage.setItem("password",o),window.location.replace(window.web_protocol+window.frontend)):400===e.status&&void 0!==JSON.parse(e.body).non_field_errors&&(I(!0),F(JSON.parse(e.body).non_field_errors))}))},children:"\u0412\u043e\u0439\u0442\u0438"})]})})},k=function(e){var t=c.a.useState(null),a=Object(i.a)(t,2),s=a[0],r=a[1],o=Object(n.useRef)(1),l='{"uid":"'+e.match.params.uid+'","token":"'+e.match.params.token+'"}';return console.log(l),Object(n.useEffect)((function(){o.current++,2===o.current&&fetch(window.web_protocol+window.backend+"/api/auth/users/activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:l}).then((function(e){return e.json().then((function(t){return{status:e.status,data:t}})).then((function(e){console.log(e.data);var t="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f email.";void 0!==e.data.detail&&(t=t+" "+e.data.detail),void 0!==e.data.uid&&(t=t+" "+e.data.uid),void 0!==e.data.token&&(t=t+" "+e.data.token),r(t)}))})).catch((function(e){return r("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u0438 email")}))})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.a,{children:s})})},I=function(){var e=c.a.useState(localStorage.getItem("email")),t=Object(i.a)(e,2),a=t[0],s=t[1],n=c.a.useState(!1),r=Object(i.a)(n,2),o=r[0],l=r[1],j=c.a.useState(!1),b=Object(i.a)(j,2),h=b[0],m=b[1];return Object(u.jsx)(u.Fragment,{children:h?Object(u.jsx)(p.a,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}):Object(u.jsxs)("form",{noValidate:!0,children:[Object(u.jsx)(p.a,{variant:"h1",className:w.a.h1,children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 Email"}),Object(u.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:w.a.input,value:a,onChange:function(e){s(e.target.value)},error:o}),Object(u.jsx)(d.a,{className:w.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'"}';console.log(t),fetch(window.web_protocol+window.backend+"/api/auth/users/resend_activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?m(!0):400===e.status&&l(!0)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},J=function(){var e=c.a.useState(localStorage.getItem("email")),t=Object(i.a)(e,2),a=t[0],s=t[1],n=c.a.useState(!1),r=Object(i.a)(n,2),o=r[0],l=r[1],j=c.a.useState(!1),b=Object(i.a)(j,2),h=b[0],m=b[1];return Object(u.jsx)(u.Fragment,{children:h?Object(u.jsx)(p.a,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}):Object(u.jsxs)("form",{noValidate:!0,children:[Object(u.jsx)(p.a,{variant:"h1",className:w.a.h1,children:"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(u.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:w.a.input,value:a,onChange:function(e){s(e.target.value)},error:o}),Object(u.jsx)(d.a,{className:w.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'"}';console.log(t),fetch(window.web_protocol+window.backend+"/api/auth/users/reset_password/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?m(!0):400===e.status&&l(!0)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},C=function(e){var t=c.a.useState(!1),a=Object(i.a)(t,2),s=a[0],n=a[1],r=c.a.useState(null),o=Object(i.a)(r,2),l=o[0],j=o[1],b=c.a.useState(null),h=Object(i.a)(b,2),m=h[0],g=h[1],f=c.a.useState(null),N=Object(i.a)(f,2),y=N[0],_=N[1],S=c.a.useState(null),k=Object(i.a)(S,2),I=k[0],J=k[1];return Object(u.jsx)(u.Fragment,{children:s?Object(u.jsx)(p.a,{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0451\u043d"}):Object(u.jsxs)("form",{noValidate:!0,children:[Object(u.jsx)(p.a,{variant:"h1",className:w.a.h1,children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)(v.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:w.a.input,value:l,onChange:function(e){j(e.target.value)},error:y}),Object(u.jsx)(v.a,{label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:w.a.input,value:m,onChange:function(e){g(e.target.value)},error:y,helperText:I}),Object(u.jsx)(d.a,{className:w.a.buttonW100,variant:"contained",onClick:function(t){var a='{"uid":"'+e.match.params.uid+'","token":"'+e.match.params.token+'","new_password":"'+l+'"}';l===m?l.length>5?(J(""),_(!1),fetch(window.web_protocol+window.backend+"/api/auth/users/reset_password_confirm/",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?n(!0):400===e.status&&(JSON.parse(e.body).uid&&J(JSON.parse(e.body).uid),JSON.parse(e.body).token&&J(JSON.parse(e.body).token),JSON.parse(e.body).new_password&&J(JSON.parse(e.body).new_password),_(!0))}))):(J("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),_(!0)):(J("\u041f\u0430\u0440\u043e\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0435"),_(!0))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},T=function(e){return Object(u.jsx)("div",{className:w.a.container,children:Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{path:"/ru/auth/users",exact:!0,component:N}),Object(u.jsx)(h.a,{path:"/ru/auth/users/resend_activation",component:I}),Object(u.jsx)(h.a,{path:"/ru/auth/users/activation/:uid/:token",component:k}),Object(u.jsx)(h.a,{path:"/ru/auth/login",component:S}),Object(u.jsx)(h.a,{path:"/ru/auth/reset_password",component:J}),Object(u.jsx)(h.a,{path:"/ru/auth/users/password_reset_confirm/:uid/:token",component:C})]})})},F=function(){var e=c.a.useState(""),t=Object(i.a)(e,2),a=t[0],s=t[1],r=c.a.useState(""),o=Object(i.a)(r,2),l=o[0],d=o[1];return"/"===window.location.pathname&&window.history.replaceState(null,null,"/ru/"),Object(n.useEffect)((function(){var e=window.location.pathname.split("/"),t='{"lang": "'+e[1]+'", "slug": "/'+decodeURI(e[2])+'"}';console.log(t),fetch(window.web_protocol+window.backend+"/api/article/",{method:"POST",body:t}).then(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){200===e.status&&(s(JSON.parse(e.body).title),d(JSON.parse(e.body).content))}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("title",{children:a}),Object(u.jsx)("h1",{children:a}),Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})]})},A=(a(100),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("style",{id:"board_style"}),Object(u.jsxs)("div",{style:{position:"absolute",margin:"auto",top:0,right:0,bottom:0,left:0,width:"1000px",height:"720px",display:"flex"},children:[Object(u.jsx)("div",{id:"container",style:{overflow:"hidden",width:"720px",height:"720px"},children:Object(u.jsx)("div",{id:"board_rotate",children:Object(u.jsxs)("div",{id:"board",style:{cursor:"pointer"},children:[Object(u.jsx)("div",{style:{height:"50%"},children:Object(u.jsxs)("div",{id:"board_path_top",children:[Object(u.jsxs)("div",{className:"coords collum",children:[Object(u.jsx)("div",{className:"coord a",children:"5"}),Object(u.jsx)("div",{className:"coord b",children:"6"}),Object(u.jsx)("div",{className:"coord a",children:"7"}),Object(u.jsx)("div",{className:"coord b",children:"8"}),Object(u.jsx)("div",{className:"coord a",children:"9"}),Object(u.jsx)("div",{className:"coord b",children:"10"}),Object(u.jsx)("div",{className:"coord a",children:"11"}),Object(u.jsx)("div",{className:"coord b",children:"12"})]}),Object(u.jsxs)("div",{className:"coords row",children:[Object(u.jsx)("div",{className:"coord b",children:"a"}),Object(u.jsx)("div",{className:"coord a",children:"b"}),Object(u.jsx)("div",{className:"coord b",children:"c"}),Object(u.jsx)("div",{className:"coord a",children:"d"}),Object(u.jsx)("div",{className:"coord b",children:"e"}),Object(u.jsx)("div",{className:"coord a",children:"f"}),Object(u.jsx)("div",{className:"coord b",children:"g"}),Object(u.jsx)("div",{className:"coord a",children:"h"}),Object(u.jsx)("div",{className:"coord b",children:"i"}),Object(u.jsx)("div",{className:"coord a",children:"j"}),Object(u.jsx)("div",{className:"coord b",children:"k"}),Object(u.jsx)("div",{className:"coord a",children:"l"})]}),Object(u.jsxs)("div",{className:"size0",children:[Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(300px, 180px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(360px, 180px)"},children:Object(u.jsx)("div",{className:"mask"})})]}),Object(u.jsxs)("div",{className:"size4",children:[Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(180px, 240px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(120px, 180px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(60px, 120px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(480px, 240px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(540px, 180px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(600px, 120px)"},children:Object(u.jsx)("div",{className:"mask"})})]})]})}),Object(u.jsx)("div",{style:{overflow:"hidden",height:"50%"},children:Object(u.jsxs)("div",{id:"board_path_bottom",children:[Object(u.jsxs)("div",{className:"coords collum",children:[Object(u.jsx)("div",{className:"coord a",children:"1"}),Object(u.jsx)("div",{className:"coord b",children:"2"}),Object(u.jsx)("div",{className:"coord a",children:"3"}),Object(u.jsx)("div",{className:"coord b",children:"4"}),Object(u.jsx)("div",{className:"coord a",children:"5"}),Object(u.jsx)("div",{className:"coord b",children:"6"})]}),Object(u.jsxs)("div",{className:"coords row",children:[Object(u.jsx)("div",{className:"coord b",children:"a"}),Object(u.jsx)("div",{className:"coord a",children:"b"}),Object(u.jsx)("div",{className:"coord b",children:"c"}),Object(u.jsx)("div",{className:"coord a",children:"d"}),Object(u.jsx)("div",{className:"coord b",children:"e"}),Object(u.jsx)("div",{className:"coord a",children:"f"}),Object(u.jsx)("div",{className:"coord b",children:"g"}),Object(u.jsx)("div",{className:"coord a",children:"h"}),Object(u.jsx)("div",{className:"coord b",children:"i"}),Object(u.jsx)("div",{className:"coord a",children:"j"}),Object(u.jsx)("div",{className:"coord b",children:"k"}),Object(u.jsx)("div",{className:"coord a",children:"l"})]}),Object(u.jsxs)("div",{className:"size0",children:[Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(300px, 120px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(360px, 120px)"},children:Object(u.jsx)("div",{className:"mask"})})]}),Object(u.jsxs)("div",{className:"size4",children:[Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(180px, 60px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(120px, 120px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(60px, 180px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(480px, 60px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(540px, 120px)"},children:Object(u.jsx)("div",{className:"mask"})}),Object(u.jsx)("div",{className:"piece_rotate",style:{transform:"translate(600px, 180px)"},children:Object(u.jsx)("div",{className:"mask"})})]})]})})]})})}),Object(u.jsx)("div",{style:{margin:"0 0 0 30px"},children:Object(u.jsx)("div",{style:{height:"695px",border:"#0a0ae3 1px solid",overflowY:"scroll"},id:"block_moves_list",children:Object(u.jsx)("div",{id:"moves_list"})})})]})]})}),E=a(104),W=a(150),P=a(147),V=a(144),q=a(141),z=a(151),D=a(142),H=a(73),B=a(140),L=a(152),R=function e(){(s=new WebSocket(window.ws_protocol+window.backend+"/ws/games")).onclose=function(){setTimeout(e,500)}};R();var Y=function(){var e=c.a.useState({}),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){!function e(){switch(console.log(s.readyState),s.readyState){case 0:setTimeout(e,500);break;case 1:var t={cmd:"show_games"};t.jwt=localStorage.getItem("jwt"),t.anonimous_jwt=localStorage.getItem("anonimous_jwt"),console.log(JSON.stringify(t)),s.send(JSON.stringify(t));break;case 2:case 3:setTimeout(R,500),setTimeout(e,3e3)}}()}),[]);var o=Object(H.a)({initialValues:{chess_variant:"2",color:"while"},onSubmit:function(e){e.cmd="create_game",e.jwt=localStorage.getItem("jwt"),e.anonimous_jwt=localStorage.getItem("anonimous_jwt"),console.log(JSON.stringify(e)),s.send(JSON.stringify(e))}}),l=function(e){var t=document.getElementById(e);t&&(t.style.display="none")},j={0:"\u041a\u043b\u0430\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435",1:"\u0424\u0438\u0448\u0435\u0440\u0430 960",2:"\u0418\u043d\u044c-\u044f\u043d",3:"\u0424\u043b\u0430\u043d\u0433\u043e\u0432\u0430\u044f",4:"\u0418\u043d\u044c-\u044f\u043d / \u0424\u043b\u0430\u043d\u0433\u043e\u0432\u0430\u044f",5:"\u0418\u043d\u044c-\u044f\u043d / \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438"},b={random:"\u041b\u044e\u0431\u043e\u0439",while:"\u0411\u0435\u043b\u044b\u0439",black:"\u0427\u0435\u0440\u043d\u044b\u0439"};s.onmessage=function(e){var t=JSON.parse(e.data);switch(t.cmd){case"anonimous_login":localStorage.setItem("anonimous_username",t.anonimous_username),localStorage.setItem("anonimous_jwt",t.anonimous_jwt);break;case"list_games":r(t.list_games),Object.entries(t.list_games).forEach((function(e){var t=Object(i.a)(e,2),a=(t[0],t[1]);setTimeout(l,1e3*(a.ttl-1),a.game_id)}));break;case"join_game":t.rival_black!==localStorage.getItem("anonimous_username")&&t.rival_white!==localStorage.getItem("anonimous_username")||(localStorage.setItem("game_id_"+t.game_id,t),window.history.replaceState(null,"\u041f\u0440\u0430\u0442\u0438\u044f","/ru/\u043f\u0430\u0440\u0442\u0438\u044f/"+t.game_id))}};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(g.a,{container:!0,spacing:3,style:{paddingTop:"40px"},children:[Object(u.jsx)(g.a,{item:!0,xs:6,children:Object(u.jsxs)(E.a,{style:{minHeight:"400px",padding:"15px"},children:[Object(u.jsx)(p.a,{style:{textAlign:"center"},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0438\u0433\u0440\u0443"}),Object(u.jsx)("form",{onSubmit:o.handleSubmit,children:Object(u.jsxs)(D.a,{display:"flex",style:{flexDirection:"column"},children:[Object(u.jsx)(W.a,{component:"fieldset",style:{width:"100%"},children:Object(u.jsx)(P.a,{"aria-label":"gender",name:"chess_variant",value:o.values.chess_variant,onChange:o.handleChange,children:Object.keys(j).map((function(e,t){return Object(u.jsx)(y.a,{value:((t+2)%6).toString(),control:Object(u.jsx)(V.a,{}),label:j[(t+2)%6]},t)}))})}),Object(u.jsxs)(W.a,{variant:"outlined",style:{margin:"15px"},children:[Object(u.jsx)(z.a,{id:"demo-simple-select-label",children:"\u0426\u0432\u0435\u0442 \u0444\u0438\u0433\u0443\u0440"}),Object(u.jsxs)(q.a,{native:!0,name:"color",labelId:"demo-simple-select-label",id:"demo-simple-select",label:"\u0426\u0432\u0435\u0442 \u0444\u0438\u0433\u0443\u0440",value:o.values.color,onChange:o.handleChange,children:[Object(u.jsx)("option",{value:"random",children:"\u041b\u044e\u0431\u043e\u0439"}),Object(u.jsx)("option",{value:"while",children:"\u0411\u0435\u043b\u044b\u0435"}),Object(u.jsx)("option",{value:"black",children:"\u0427\u0435\u0440\u043d\u044b\u0435"})]})]}),Object(u.jsx)(d.a,{variant:"contained",type:"submit",style:{margin:"0 auto",textAlign:"center"},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})]})}),Object(u.jsx)(g.a,{item:!0,xs:6,style:{textAlign:"center"},children:Object(u.jsxs)(E.a,{style:{minHeight:"400px",padding:"15px"},children:[Object(u.jsx)(p.a,{children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0438\u0433\u0440\u0430\u043c:"}),Object.keys(a).map((function(e,t){return Object(u.jsxs)(B.a,{id:a[t].game_id,variant:"outlined",style:{margin:"10px 0 0 0"},children:[Object(u.jsxs)(D.a,{p:2,display:"flex",children:[Object(u.jsx)(D.a,{mr:2,children:Object(u.jsx)(L.a,{"aria-label":"recipe",children:"\u0418"})}),Object(u.jsxs)(D.a,{display:"flex",style:{flexDirection:"column"},children:[Object(u.jsx)(p.a,{style:{textAlign:"left"},children:j[a[t].chess_variant]}),Object(u.jsx)(p.a,{style:{textAlign:"left"},children:a[t].user}),Object(u.jsx)(p.a,{style:{textAlign:"left",color:"rgba(0, 0, 0, 0.54)"},children:b[a[t].color]})]})]}),Object(u.jsx)(D.a,{display:"flex",style:{flexDirection:"column",margin:"0 0 0 240px"},children:Object(u.jsx)(d.a,{color:"primary",style:{textAlign:"left"},onClick:function(){return function(e){var t={cmd:"join_game"};t.jwt=localStorage.getItem("jwt"),t.anonimous_jwt=localStorage.getItem("anonimous_jwt"),t.game_id=e,console.log(JSON.stringify(t)),s.send(JSON.stringify(t))}(a[t].game_id)},children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})})]},a[t].game_id)}))]})})]})})},M=a(143);"buddhachess.org"===window.location.host?(window.backend=window.frontend="buddhachess.org",window.web_protocol="https://",window.ws_protocol="wss://"):(window.backend="localhost:8000",window.frontend="localhost:3000",window.protocol="http://",window.ws_protocol="ws://");var Q=function(){return Object(u.jsxs)(M.b,{injectFirst:!0,children:[Object(u.jsx)("base",{href:window.protocol+window.frontend}),Object(u.jsxs)(j.a,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(l.a,{children:Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{path:"/ru/auth",component:T}),Object(u.jsx)(h.a,{path:"/ru/\u043f\u0430\u0440\u0442\u0438\u044f",component:A}),Object(u.jsx)(h.a,{path:"/ru/\u0438\u0433\u0440\u0430\u0442\u044c",component:Y}),Object(u.jsx)(h.a,{path:"/",component:F})]})})]})]})};o.a.render(Object(u.jsx)(Q,{}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.4ed6a5a9.chunk.js.map