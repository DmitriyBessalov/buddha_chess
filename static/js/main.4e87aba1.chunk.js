(this.webpackJsonpnodejs=this.webpackJsonpnodejs||[]).push([[0],{10:function(e,t,a){e.exports={container:"Auth_container__3e8JN",h1:"Auth_h1__2TQm4",input:"Auth_input__2ysYl",buttonW100:"Auth_buttonW100__11L92",grid:"Auth_grid__grWyv"}},100:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),s=a.n(r),o=a(8),i=a(131),l=a(134),u=a(25),d=a(2),j=function(){var e=c.a.useState(null),t=Object(o.a)(e,2),a=(t[0],t[1],c.a.useState(!1)),n=Object(o.a)(a,2),r=n[0],s=n[1],j=!1;null!==localStorage.getItem("token")&&(j=!0),j!==r&&s(!0);return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(u.b,{to:"/",children:Object(d.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{to:"/ru/\u0438\u0433\u0440\u0430\u0442\u044c",children:Object(d.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0418\u0433\u0440\u0430\u0442\u044c"})}),r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{variant:"contained",style:{float:"right",margin:"10px"},onClick:function(e){localStorage.removeItem("token"),window.location.reload()},children:"\u0412\u044b\u0445\u043e\u0434"}),Object(d.jsx)(l.a,{variant:"contained",style:{float:"right",margin:"10px"},children:localStorage.getItem("email")})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.b,{to:"/ru/auth/login",style:{float:"right"},children:Object(d.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{to:"/ru/auth/users",style:{float:"right"},children:Object(d.jsx)(l.a,{variant:"contained",style:{margin:"10px"},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})},b=a(14),h=a(19),p=a.n(h),x=a(27),O=a(102),m=a(147),f=a(137),g=a(10),v=a.n(g),w=function(){var e=c.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState(""),s=Object(o.a)(r,2),i=s[0],j=s[1],b=c.a.useState(null),h=Object(o.a)(b,2),g=h[0],w=h[1],y=c.a.useState(null),S=Object(o.a)(y,2),k=S[0],N=S[1],_=c.a.useState(null),C=Object(o.a)(_,2),J=C[0],T=C[1],A=c.a.useState(null),I=Object(o.a)(A,2),F=I[0],E=I[1],W=c.a.useState(!1),P=Object(o.a)(W,2),V=P[0],D=P[1];return Object(d.jsx)(d.Fragment,{children:V?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O.a,{children:"\u0412\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c."}),Object(d.jsx)(O.a,{children:"\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0435\u043c\u0430\u0439\u043b, \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e."}),Object(d.jsxs)(O.a,{children:["\u0415\u0441\u043b\u0438 \u043f\u0438\u0441\u044c\u043c\u043e \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e ",Object(d.jsx)(u.b,{to:"/auth/users/resend_activation",children:"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044e"})]})]}):Object(d.jsxs)("form",{noValidate:!0,children:[Object(d.jsx)(O.a,{variant:"h1",className:v.a.h1,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)(m.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:v.a.input,required:!0,onChange:function(e){n(e.target.value)},value:a,error:g,helperText:J}),Object(d.jsx)(m.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:v.a.input,type:"password",required:!0,onChange:function(e){j(e.target.value)},value:i,error:k,helperText:F}),Object(d.jsx)(f.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",className:v.a.grid,children:Object(d.jsx)(u.b,{to:"/aunf/login",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b"})}),Object(d.jsx)(l.a,{className:v.a.buttonW100,variant:"contained",onClick:function(e){if(i.length>5){var t='{"email":"'+a+'","username":"'+a+'","password":"'+i+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){201===e.status?(localStorage.setItem("email",JSON.parse(e.body).email),D(!0)):400===e.status&&(void 0!==JSON.parse(e.body).email?(T(JSON.parse(e.body).email),w(!0)):(T(""),w(!1)),void 0!==JSON.parse(e.body).password?(E(JSON.parse(e.body).password),N(!0)):(E(""),N(!1)))}))}else E("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),N(!0)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})})},y=a(138),S=a(145),k=function(){var e=c.a.useState(localStorage.getItem("email")),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState(localStorage.getItem("password")),s=Object(o.a)(r,2),i=s[0],j=s[1],b=c.a.useState(!0),h=Object(o.a)(b,2),g=h[0],w=h[1],k=c.a.useState(null),N=Object(o.a)(k,2),_=N[0],C=N[1],J=c.a.useState(null),T=Object(o.a)(J,2),A=T[0],I=T[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{noValidate:!0,children:[Object(d.jsx)(O.a,{variant:"h1",className:v.a.h1,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(d.jsx)(m.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:v.a.input,required:!0,onChange:function(e){n(e.target.value)},value:a,error:_}),Object(d.jsx)(m.a,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:v.a.input,type:"password",required:!0,onChange:function(e){j(e.target.value)},value:i,error:_,helperText:A}),Object(d.jsxs)(f.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:v.a.grid,children:[Object(d.jsx)(y.a,{control:Object(d.jsx)(S.a,{name:"checked",color:"primary",onChange:function(e){w(e.target.checked)},checked:g}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)(u.b,{to:"/auth/reset_password",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(d.jsx)(l.a,{className:v.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'","username":"'+a+'","password":"'+i+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/token",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){console.log(JSON.parse(e.body).token),200===e.status?(C(!1),I(null),localStorage.setItem("token",JSON.parse(e.body).token),localStorage.setItem("email",a),g&&localStorage.setItem("password",i),window.location.replace(window.protocol+window.frontend)):400===e.status&&void 0!==JSON.parse(e.body).non_field_errors&&(C(!0),I(JSON.parse(e.body).non_field_errors))}))},children:"\u0412\u043e\u0439\u0442\u0438"})]})})},N=function(e){var t=c.a.useState(null),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(n.useRef)(1),l='{"uid":"'+e.match.params.uid+'","token":"'+e.match.params.token+'"}';return console.log(l),Object(n.useEffect)((function(){i.current++,2===i.current&&fetch(window.protocol+window.backend+"/api/auth/users/activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:l}).then((function(e){return e.json().then((function(t){return{status:e.status,data:t}})).then((function(e){console.log(e.data);var t="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f email.";void 0!==e.data.detail&&(t=t+" "+e.data.detail),void 0!==e.data.uid&&(t=t+" "+e.data.uid),void 0!==e.data.token&&(t=t+" "+e.data.token),s(t)}))})).catch((function(e){return s("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043b\u0438 email")}))})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O.a,{children:r})})},_=function(){var e=c.a.useState(localStorage.getItem("email")),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],j=c.a.useState(!1),b=Object(o.a)(j,2),h=b[0],f=b[1];return Object(d.jsx)(d.Fragment,{children:h?Object(d.jsx)(O.a,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}):Object(d.jsxs)("form",{noValidate:!0,children:[Object(d.jsx)(O.a,{variant:"h1",className:v.a.h1,children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 Email"}),Object(d.jsx)(m.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:v.a.input,value:a,onChange:function(e){n(e.target.value)},error:i}),Object(d.jsx)(l.a,{className:v.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/users/resend_activation/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?f(!0):400===e.status&&u(!0)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},C=function(){var e=c.a.useState(localStorage.getItem("email")),t=Object(o.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],j=c.a.useState(!1),b=Object(o.a)(j,2),h=b[0],f=b[1];return Object(d.jsx)(d.Fragment,{children:h?Object(d.jsx)(O.a,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}):Object(d.jsxs)("form",{noValidate:!0,children:[Object(d.jsx)(O.a,{variant:"h1",className:v.a.h1,children:"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(d.jsx)(m.a,{label:"Email \u0430\u0434\u0440\u0435\u0441",variant:"outlined",className:v.a.input,value:a,onChange:function(e){n(e.target.value)},error:i}),Object(d.jsx)(l.a,{className:v.a.buttonW100,variant:"contained",onClick:function(e){var t='{"email":"'+a+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/auth/users/reset_password/",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?f(!0):400===e.status&&u(!0)}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},J=function(e){var t=c.a.useState(!1),a=Object(o.a)(t,2),n=a[0],r=a[1],s=c.a.useState(null),i=Object(o.a)(s,2),u=i[0],j=i[1],b=c.a.useState(null),h=Object(o.a)(b,2),f=h[0],g=h[1],w=c.a.useState(null),y=Object(o.a)(w,2),S=y[0],k=y[1],N=c.a.useState(null),_=Object(o.a)(N,2),C=_[0],J=_[1];return Object(d.jsx)(d.Fragment,{children:n?Object(d.jsx)(O.a,{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0451\u043d"}):Object(d.jsxs)("form",{noValidate:!0,children:[Object(d.jsx)(O.a,{variant:"h1",className:v.a.h1,children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)(m.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:v.a.input,value:u,onChange:function(e){j(e.target.value)},error:S}),Object(d.jsx)(m.a,{label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",className:v.a.input,value:f,onChange:function(e){g(e.target.value)},error:S,helperText:C}),Object(d.jsx)(l.a,{className:v.a.buttonW100,variant:"contained",onClick:function(t){var a='{"uid":"'+e.match.params.uid+'","token":"'+e.match.params.token+'","new_password":"'+u+'"}';u===f?u.length>5?(J(""),k(!1),fetch(window.protocol+window.backend+"/api/auth/users/reset_password_confirm/",{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then(function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){204===e.status?r(!0):400===e.status&&(JSON.parse(e.body).uid&&J(JSON.parse(e.body).uid),JSON.parse(e.body).token&&J(JSON.parse(e.body).token),JSON.parse(e.body).new_password&&J(JSON.parse(e.body).new_password),k(!0))}))):(J("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),k(!0)):(J("\u041f\u0430\u0440\u043e\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0435"),k(!0))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})},T=function(e){return Object(d.jsx)("div",{className:v.a.container,children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/ru/auth/users",exact:!0,component:w}),Object(d.jsx)(b.a,{path:"/ru/auth/users/resend_activation",component:_}),Object(d.jsx)(b.a,{path:"/ru/auth/users/activation/:uid/:token",component:N}),Object(d.jsx)(b.a,{path:"/ru/auth/login",component:k}),Object(d.jsx)(b.a,{path:"/ru/auth/reset_password",component:C}),Object(d.jsx)(b.a,{path:"/ru/auth/users/password_reset_confirm/:uid/:token",component:J})]})})},A=function(){var e=c.a.useState(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=c.a.useState(""),i=Object(o.a)(s,2),l=i[0],u=i[1];return"/"===window.location.pathname&&window.history.replaceState(null,null,"/ru/"),Object(n.useEffect)((function(){var e=window.location.pathname.split("/"),t='{"lang": "'+e[1]+'", "slug": "/'+decodeURI(e[2])+'"}';console.log(t),fetch(window.protocol+window.backend+"/api/article/",{method:"POST",body:t}).then(function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.status,e.next=3,t.text();case 3:return e.t1=e.sent,e.abrupt("return",{status:e.t0,body:e.t1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){200===e.status&&(r(JSON.parse(e.body).title),u(JSON.parse(e.body).content))}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("title",{children:a}),Object(d.jsx)("h1",{children:a}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})]})},I=a(103),F=a(149),E=a(146),W=a(143),P=a(140),V=a(150),D=a(141),q=a(73),H=a(139),L=a(151),R=function(){var e=new WebSocket("ws://localhost:8000/ws/games");Object(n.useEffect)((function(){setTimeout((function(){return e.send('{"cmd": "show_games", "jwt": "'+localStorage.getItem("token")+'"}')}),2e3)}),[]);var t=Object(q.a)({initialValues:{chess_variant:"yin-yang",color:"random"},onSubmit:function(e){console.log(e),alert(JSON.stringify(e))}});return e.onmessage=function(e){console.log(e.data)},Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(f.a,{container:!0,spacing:3,style:{paddingTop:"40px"},children:[Object(d.jsx)(f.a,{item:!0,xs:6,children:Object(d.jsxs)(I.a,{style:{minHeight:"400px",padding:"15px"},children:[Object(d.jsx)(O.a,{style:{textAlign:"center"},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0438\u0433\u0440\u0443"}),Object(d.jsx)("form",{onSubmit:t.handleSubmit,children:Object(d.jsxs)(D.a,{display:"flex",style:{flexDirection:"column"},children:[Object(d.jsx)(F.a,{component:"fieldset",style:{width:"100%"},children:Object(d.jsxs)(E.a,{"aria-label":"gender",name:"chess_variant",value:t.values.chess_variant,onChange:t.handleChange,children:[Object(d.jsx)(y.a,{value:"yin-yang",control:Object(d.jsx)(W.a,{}),label:"\u0418\u043d\u044c-\u044f\u043d"}),Object(d.jsx)(y.a,{value:"flank",control:Object(d.jsx)(W.a,{}),label:"\u0424\u043b\u0430\u043d\u0433\u043e\u0432\u0430\u044f"}),Object(d.jsx)(y.a,{value:"yin-yang_flank",control:Object(d.jsx)(W.a,{}),label:"\u0418\u043d\u044c-\u044f\u043d / \u0424\u043b\u0430\u043d\u0433\u043e\u0432\u0430\u044f"}),Object(d.jsx)(y.a,{value:"yin-yang_fibonacci",control:Object(d.jsx)(W.a,{}),label:"\u0418\u043d\u044c-\u044f\u043d / \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438"}),Object(d.jsx)(y.a,{value:"classic",control:Object(d.jsx)(W.a,{}),label:"\u041a\u043b\u0430\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0435"}),Object(d.jsx)(y.a,{value:"960",control:Object(d.jsx)(W.a,{}),label:"\u0424\u0438\u0448\u0435\u0440\u0430 960"})]})}),Object(d.jsxs)(F.a,{variant:"outlined",style:{margin:"15px"},children:[Object(d.jsx)(V.a,{id:"demo-simple-select-label",children:"\u0426\u0432\u0435\u0442 \u0444\u0438\u0433\u0443\u0440"}),Object(d.jsxs)(P.a,{native:!0,name:"color",labelId:"demo-simple-select-label",id:"demo-simple-select",label:"\u0426\u0432\u0435\u0442 \u0444\u0438\u0433\u0443\u0440",value:t.values.color,onChange:t.handleChange,children:[Object(d.jsx)("option",{value:"random",children:"\u041b\u044e\u0431\u043e\u0439"}),Object(d.jsx)("option",{value:"while",children:"\u0411\u0435\u043b\u044b\u0435"}),Object(d.jsx)("option",{value:"black",children:"\u0427\u0435\u0440\u043d\u044b\u0435"})]})]}),Object(d.jsx)(l.a,{variant:"contained",type:"submit",style:{margin:"0 auto",textAlign:"center"},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})]})}),Object(d.jsx)(f.a,{item:!0,xs:6,style:{textAlign:"center"},children:Object(d.jsxs)(I.a,{style:{minHeight:"400px",padding:"15px"},children:[Object(d.jsx)(O.a,{children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0441\u044f \u043a \u0438\u0433\u0440\u0435"}),Object(d.jsxs)(D.a,{mt:2,children:[Object(d.jsxs)(H.a,{variant:"outlined",children:[Object(d.jsxs)(D.a,{p:2,display:"flex",children:[Object(d.jsx)(D.a,{mr:2,children:Object(d.jsx)(L.a,{"aria-label":"recipe",children:"\u0418"})}),Object(d.jsxs)(D.a,{display:"flex",style:{flexDirection:"column"},children:[Object(d.jsx)(O.a,{style:{textAlign:"left"},children:"\u0418\u043d\u044c-\u044f\u043d"}),Object(d.jsx)(O.a,{style:{textAlign:"left",color:"rgba(0, 0, 0, 0.54)"},children:"\u0427\u0435\u0440\u043d\u044b\u043c\u0438"}),Object(d.jsx)(O.a,{style:{textAlign:"left"},children:"\u0441 Anonymous"})]})]}),Object(d.jsx)(D.a,{display:"flex",style:{flexDirection:"column",margin:"0 0 0 240px"},children:Object(d.jsx)(l.a,{color:"primary",style:{textAlign:"left"},children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})})]}),Object(d.jsxs)(H.a,{variant:"outlined",style:{margin:"10px 0 0 0"},children:[Object(d.jsxs)(D.a,{p:2,display:"flex",children:[Object(d.jsx)(D.a,{mr:2,children:Object(d.jsx)(L.a,{"aria-label":"recipe",children:"\u0418"})}),Object(d.jsxs)(D.a,{display:"flex",style:{flexDirection:"column"},children:[Object(d.jsx)(O.a,{style:{textAlign:"left"},children:"\u0418\u043d\u044c-\u044f\u043d"}),Object(d.jsx)(O.a,{style:{textAlign:"left",color:"rgba(0, 0, 0, 0.54)"},children:"\u0427\u0435\u0440\u043d\u044b\u043c\u0438"}),Object(d.jsx)(O.a,{style:{textAlign:"left"},children:"\u0441 Anonymous"})]})]}),Object(d.jsx)(D.a,{display:"flex",style:{flexDirection:"column",margin:"0 0 0 240px"},children:Object(d.jsx)(l.a,{color:"primary",style:{textAlign:"left"},children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f"})})]})]})]})})]})})},B=a(142);"buddhachess.org"===window.location.host?(window.backend=window.frontend="buddhachess.org",window.protocol="https://"):(window.backend="localhost:8000",window.frontend="localhost:3000",window.protocol="http://");var M=function(){return Object(d.jsxs)(B.b,{injectFirst:!0,children:[Object(d.jsx)("base",{href:window.protocol+window.frontend}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(i.a,{children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/ru/auth",component:T}),Object(d.jsx)(b.a,{path:"/ru/\u0438\u0433\u0440\u0430\u0442\u044c",component:R}),Object(d.jsx)(b.a,{path:"/",component:A})]})})]})]})};s.a.render(Object(d.jsx)(M,{}),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.4e87aba1.chunk.js.map