(this.webpackJsonpnodejs=this.webpackJsonpnodejs||[]).push([[0],{11:function(e,t,a){e.exports={container:"Auth_container__3e8JN",h1:"Auth_h1__2TQm4",input:"Auth_input__2ysYl",buttonW100:"Auth_buttonW100__11L92",grid:"Auth_grid__grWyv"}},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),o=a(7),i=a(126),l=a(129),u=a(139),d=a(144),j=a(22),b=a(2),h=function(){var e=r.a.useState(null),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(U),h=Boolean(a),p=h?"simple-popover":void 0;return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"})}),Object(b.jsx)(j.b,{to:"/ru/\u0438\u0433\u0440\u0430\u0442\u044c",children:Object(b.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0418\u0433\u0440\u0430\u0442\u044c"})}),s?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{"aria-describedby":p,variant:"contained",style:{margin:"10px"},onClick:function(e){c(e.currentTarget)},children:"\u042e\u0437\u0435\u0440\u043d\u0435\u0439\u043c"}),Object(b.jsx)(u.a,{id:p,open:h,anchorEl:a,onClose:function(){c(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(b.jsx)(j.b,{to:"/ru/auth/logout",children:Object(b.jsx)(d.a,{children:"\u0412\u044b\u0445\u043e\u0434"})})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.b,{to:"/ru/auth/users",style:{float:"right"},children:Object(b.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(b.jsx)(j.b,{to:"/ru/auth/login",style:{float:"right"},children:Object(b.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})]})]})},p=a(15),O=a(17),x=a.n(O),m=a(25),f=a(95),v=a(145),g=a(134),w=a(11),y=a.n(w),S=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],c=r.a.useState(""),s=Object(o.a)(c,2),i=s[0],u=s[1],d=r.a.useState(null),h=Object(o.a)(d,2),p=h[0],O=h[1],w=r.a.useState(null),S=Object(o.a)(w,2),k=S[0],N=S[1],_=r.a.useState(null),C=Object(o.a)(_,2),T=C[0],J=C[1],I=r.a.useState(null),F=Object(o.a)(I,2),E=F[0],W=F[1],A=r.a.useState(!1),P=Object(o.a)(A,2),V=P[0],q=P[1];return Object(b.jsx)(b.Fragment,{children:V?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{children:"\u0412\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c."}),Object(b.jsx)(f.a,{children:"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0435\u043c\u0430\u0439\u043b, \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e."}),Object(b.jsxs)(f.a,{children:["\u0415\u0441\u043b\u0438 \u043f\u0438\u0441\u044c\u043c\u043e \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e ",Object(b.jsx)(j.b,{to:"/auth/users/resend_activation",children:"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044e"})]})]}):Object(b.jsxs)("form",{noValidate:!0,children:[Object(b.jsx)(f.a,{variant:"h1",className:y.a.h1,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:y.a.input,required:!0,onChange:function(e){n(e.target.value)},value:a,error:p,helperText:T}),Object(b.jsx)(v.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:y.a.input,type:"password",required:!0,onChange:function(e){u(e.target.value)},value:i,error:k,helperText:E}),Object(b.jsx)(g.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",className:y.a.grid,children:Object(b.jsx)(j.b,{to:"/aunf/login",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b"})}),Object(b.jsx)(l.a,{className:y.a.buttonW100,variant:"contained",onClick:function(e){if(i.length>5){var t='{"email":"'+a+'","username":"'+a+'","password":"'+i+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){201===e.status?(localStorage.setItem("email",JSON.parse(e.body).email),q(!0)):400===e.status&&(void 0!==JSON.parse(e.body).email?(J(JSON.parse(e.body).email),O(!0)):(J(""),O(!1)),void 0!==JSON.parse(e.body).password?(W(JSON.parse(e.body).password),N(!0)):(W(""),N(!1)))}))}else W("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),N(!0)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})},k=a(135),N=a(142),_=function(){var e=r.a.useState(localStorage.getItem("email")),t=Object(o.a)(e,2),a=t[0],n=t[1],c=r.a.useState(localStorage.getItem("password")),s=Object(o.a)(c,2),i=s[0],u=s[1],d=r.a.useState(!1),h=Object(o.a)(d,2),p=h[0],O=h[1],w=r.a.useState(null),S=Object(o.a)(w,2),_=S[0],C=S[1],T=r.a.useState(null),J=Object(o.a)(T,2),I=J[0],F=J[1],E=r.a.useState(!1),W=Object(o.a)(E,2),A=W[0],P=W[1];return Object(b.jsx)(b.Fragment,{children:A?Object(b.jsx)(f.a,{children:"\u0412\u044b \u0437\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u043b\u0438\u0441\u044c"}):Object(b.jsxs)("form",{noValidate:!0,children:[Object(b.jsx)(f.a,{variant:"h1",className:y.a.h1,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(b.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:y.a.input,required:!0,onChange:function(e){n(e.target.value)},value:a,error:_}),Object(b.jsx)(v.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:y.a.input,type:"password",required:!0,onChange:function(e){u(e.target.value)},value:i,error:_,helperText:I}),Object(b.jsxs)(g.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:y.a.grid,children:[Object(b.jsx)(k.a,{control:Object(b.jsx)(N.a,{name:"checked",color:"primary",onChange:function(e){O(e.target.checked)},checked:p}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)(j.b,{to:"/auth/reset_password",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(b.jsx)(l.a,{className:y.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'","username":"'+a+'","password":"'+i+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/token",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){console.log(JSON.parse(e.body).token),200===e.status?(C(!1),F(null),localStorage.setItem("token",JSON.parse(e.body).token),localStorage.setItem("email",a),p&&localStorage.setItem("password",i),P(!0)):400===e.status&&void 0!==JSON.parse(e.body).non_field_errors&&(C(!0),F(JSON.parse(e.body).non_field_errors))}))},children:"\u0412\u043e\u0439\u0442\u0438"})]})})},C=function(e){var t=r.a.useState(null),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(n.useRef)(1),l='{"uid":"'+e.match.params.uid+'","token":"'+e.match.params.token+'"}';return console.log(l),Object(n.useEffect)((function(){i.current++,2===i.current&&fetch(window.protocol+window.backend+"/api/auth/users/activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:l}).then((function(e){return e.json().then((function(t){return{status:e.status,data:t}})).then((function(e){console.log(e.data);var t="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f email.";void 0!==e.data.detail&&(t=t+" "+e.data.detail),void 0!==e.data.uid&&(t=t+" "+e.data.uid),void 0!==e.data.token&&(t=t+" "+e.data.token),s(t)}))})).catch((function(e){return s("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u0438 email")}))})),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(f.a,{children:c})})},T=function(){var e=r.a.useState(localStorage.getItem("email")),t=Object(o.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],d=r.a.useState(!1),j=Object(o.a)(d,2),h=j[0],p=j[1];return Object(b.jsx)(b.Fragment,{children:h?Object(b.jsx)(f.a,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}):Object(b.jsxs)("form",{noValidate:!0,children:[Object(b.jsx)(f.a,{variant:"h1",className:y.a.h1,children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 Email"}),Object(b.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:y.a.input,value:a,onChange:function(e){n(e.target.value)},error:i}),Object(b.jsx)(l.a,{className:y.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/users/resend_activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?p(!0):400===e.status&&u(!0)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},J=function(){var e=r.a.useState(localStorage.getItem("email")),t=Object(o.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],d=r.a.useState(!1),j=Object(o.a)(d,2),h=j[0],p=j[1];return Object(b.jsx)(b.Fragment,{children:h?Object(b.jsx)(f.a,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}):Object(b.jsxs)("form",{noValidate:!0,children:[Object(b.jsx)(f.a,{variant:"h1",className:y.a.h1,children:"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(b.jsx)(v.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:y.a.input,value:a,onChange:function(e){n(e.target.value)},error:i}),Object(b.jsx)(l.a,{className:y.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/users/reset_password/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?p(!0):400===e.status&&u(!0)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},I=function(e){var t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState(null),i=Object(o.a)(s,2),u=i[0],d=i[1],j=r.a.useState(null),h=Object(o.a)(j,2),p=h[0],O=h[1],g=r.a.useState(null),w=Object(o.a)(g,2),S=w[0],k=w[1],N=r.a.useState(null),_=Object(o.a)(N,2),C=_[0],T=_[1];return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)(f.a,{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0451\u043d"}):Object(b.jsxs)("form",{noValidate:!0,children:[Object(b.jsx)(f.a,{variant:"h1",className:y.a.h1,children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)(v.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:y.a.input,value:u,onChange:function(e){d(e.target.value)},error:S}),Object(b.jsx)(v.a,{label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:y.a.input,value:p,onChange:function(e){O(e.target.value)},error:S,helperText:C}),Object(b.jsx)(l.a,{className:y.a.buttonW100,variant:"contained",onClick:function(t){var a='{"uid":"'+e.match.params.uid+'","token":"'+e.match.params.token+'","new_password":"'+u+'"}';u===p?u.length>5?(T(""),k(!1),fetch(window.protocol+window.backend+"/api/auth/users/reset_password_confirm/",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?c(!0):400===e.status&&(JSON.parse(e.body).uid&&T(JSON.parse(e.body).uid),JSON.parse(e.body).token&&T(JSON.parse(e.body).token),JSON.parse(e.body).new_password&&T(JSON.parse(e.body).new_password),k(!0))}))):(T("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),k(!0)):(T("\u041f\u0430\u0440\u043e\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0435"),k(!0))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},F=function(e){return Object(b.jsx)("div",{className:y.a.container,children:Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{path:"/ru/auth/users",exact:!0,component:S}),Object(b.jsx)(p.a,{path:"/ru/auth/users/resend_activation",component:T}),Object(b.jsx)(p.a,{path:"/ru/auth/users/activation/:uid/:token",component:C}),Object(b.jsx)(p.a,{path:"/ru/auth/login",component:_}),Object(b.jsx)(p.a,{path:"/ru/auth/reset_password",component:J}),Object(b.jsx)(p.a,{path:"/ru/auth/users/password_reset_confirm/:uid/:token",component:I})]})})},E=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=r.a.useState(""),i=Object(o.a)(s,2),l=i[0],u=i[1];return"/"===window.location.pathname&&window.history.replaceState(null,null,"/ru/"),Object(n.useEffect)((function(){var e=window.location.pathname.split("/"),t='{"lang": "'+e[1]+'", "slug": "/'+decodeURI(e[2])+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/article/",{method:"POST",body:t}).then(function(){var e=Object(m.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){200===e.status&&(c(JSON.parse(e.body).title),u(JSON.parse(e.body).content))}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("title",{children:a}),Object(b.jsx)("h1",{children:a}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})]})},W=a(13),A=a(61),P=a(136),V=a(130),q=a(133),H=a(143),z=a(141),B=a(140),L=a(147),R=a(137),D=Object(P.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),M=function(){var e=D(),t=r.a.useState("yin-yang"),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState({age:"",name:"hai"}),i=Object(o.a)(s,2),u=i[0],d=i[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(g.a,{container:!0,spacing:3,style:{paddingTop:"40px"},children:[Object(b.jsx)(g.a,{item:!0,xs:6,children:Object(b.jsxs)(V.a,{style:{minHeight:"400px",padding:"15px"},children:[Object(b.jsx)("p",{style:{textAlign:"center"},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0438\u0433\u0440\u0443"}),Object(b.jsxs)(R.a,{display:"flex",style:{flexDirection:"column"},children:[Object(b.jsx)(q.a,{component:"fieldset",style:{width:"100%"},children:Object(b.jsxs)(H.a,{"aria-label":"gender",name:"chess_variant",value:n,onChange:function(e){c(e.target.value)},children:[Object(b.jsx)(k.a,{value:"yin-yang",control:Object(b.jsx)(z.a,{}),label:"\u0418\u043d\u044c-\u044f\u043d"}),Object(b.jsx)(k.a,{value:"simple",control:Object(b.jsx)(z.a,{}),label:"\u041f\u0440\u043e\u0441\u0442\u044b\u0435"}),Object(b.jsx)(k.a,{value:"mixed",control:Object(b.jsx)(z.a,{}),label:"\u0421\u043c\u0435\u0448\u0430\u043d\u043d\u044b\u0435"}),Object(b.jsx)(k.a,{value:"golden-order",control:Object(b.jsx)(z.a,{}),label:"\u0417\u043e\u043b\u043e\u0442\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430"}),Object(b.jsx)(k.a,{value:"classic",control:Object(b.jsx)(z.a,{}),label:"\u041a\u043b\u0430\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435"}),Object(b.jsx)(k.a,{value:"960",control:Object(b.jsx)(z.a,{}),label:"\u0424\u0438\u0448\u0435\u0440\u0430"})]})}),Object(b.jsxs)(q.a,{variant:"outlined",style:{margin:"15px"},className:e.formControl,children:[Object(b.jsx)(L.a,{id:"demo-simple-select-label",children:"\u0426\u0432\u0435\u0442 \u0444\u0438\u0433\u0443\u0440"}),Object(b.jsxs)(B.a,{native:!0,labelId:"demo-simple-select-label",id:"demo-simple-select",label:"\u0426\u0432\u0435\u0442 \u0444\u0438\u0433\u0443\u0440",value:u.age,onChange:function(e){var t=e.target.name;d(Object(A.a)(Object(A.a)({},u),{},Object(W.a)({},t,e.target.value)))},children:[Object(b.jsx)("option",{"aria-label":"None",value:""}),Object(b.jsx)("option",{value:"random",children:"\u041b\u044e\u0431\u043e\u0439"}),Object(b.jsx)("option",{value:"while",children:"\u0411\u0435\u043b\u044b\u0435"}),Object(b.jsx)("option",{value:"black",children:"\u0427\u0435\u0440\u043d\u044b\u0435"})]})]}),Object(b.jsx)(l.a,{variant:"contained",style:{margin:"0 auto",textAlign:"center"},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})]})}),Object(b.jsx)(g.a,{item:!0,xs:6,style:{textAlign:"center"},children:Object(b.jsxs)(V.a,{style:{minHeight:"400px",padding:"15px"},children:[Object(b.jsx)("p",{children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0441\u044f \u043a \u0438\u0433\u0440\u0435"}),Object(b.jsx)("div",{style:{margin:"10px 0",padding:"10px 0",border:"1px solid"},children:"\u0428\u0430\u0445\u043c\u0430\u0442\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442_ \u0431\u0435\u043b\u044b\u043c\u0438 __ \u0441 \u0438\u0433\u0440\u043e\u043a\u043e\u043c"}),Object(b.jsx)("div",{style:{margin:"10px 0",padding:"10px 0",border:"1px solid"},children:"\u0428\u0430\u0445\u043c\u0430\u0442\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442_ \u0447\u0435\u0440\u043d\u044b\u043c\u0438 __ \u0441 \u0438\u0433\u0440\u043e\u043a\u043e\u043c"})]})})]})})},Q=a(138),U=r.a.createContext();"buddhachess.org"===window.location.host?(window.backend=window.frontend="buddhachess.org",window.protocol="https://"):(window.backend="localhost:8000",window.frontend="localhost:3000",window.protocol="http://");var Y=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0];t[1];return Object(b.jsxs)(Q.b,{injectFirst:!0,children:[Object(b.jsx)("base",{href:window.protocol+window.frontend}),Object(b.jsx)(j.a,{children:Object(b.jsxs)(U.Provider,{value:a,children:[Object(b.jsx)(h,{}),Object(b.jsx)(i.a,{children:Object(b.jsxs)(p.c,{children:[Object(b.jsx)(p.a,{path:"/ru/auth",component:F}),Object(b.jsx)(p.a,{path:"/ru/\u0438\u0433\u0440\u0430\u0442\u044c",component:M}),Object(b.jsx)(p.a,{path:"/",component:E})]})})]})})]})};s.a.render(Object(b.jsx)(Y,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.2b62f507.chunk.js.map