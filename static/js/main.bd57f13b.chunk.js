(this["webpackJsonpyoutube-player"]=this["webpackJsonpyoutube-player"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(6),n=c.n(a),s=c(34),i=c.n(s),u=(c(45),c(11)),r=(c(46),c(35)),o=c(14),b=(c(62),c(10));var l=function(e){return Object(b.jsxs)("div",{className:"center background",children:[null===e.videos?Object(b.jsx)("p",{children:"There is no video to play"}):Object(b.jsx)(r.a,{videoId:e.videos[0],opts:{height:"390",width:"640",playerVars:{autoplay:1,mute:1}},onEnd:function(t){var c=e.videos;c.shift(),Object(o.d)(Object(o.c)(e.database,"/videos"),c)},onPlay:function(e){e.target.unMute(),e.target.setVolume(40)},className:"player"}),Object(b.jsx)("button",{onClick:function(){Object(o.d)(Object(o.c)(e.database,"/videos"),[])},className:"clear",children:"Clear Queue"})]})},j=c(0),d=c.n(j),p=c(3),O=(c(64),c(26)),f=c(38),h=c.n(f),m=function(e){var t=Object(a.useState)(""),c=Object(u.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!1),r=Object(u.a)(i,2),l=r[0],j=r[1],f=function(){var t=Object(p.a)(d.a.mark((function t(c){var a,i,u,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),e.setIsSubmitting(!0),a=/youtube.com/.test(n),i=/v=.{11}/.test(n),a&&i?(u=null!==e.videos?e.videos:[],r=n.replace(/.+v=(.{11}).*/,"$1"),u.push(r),Object(o.d)(Object(o.c)(e.database,"/videos"),u),s("")):(alert("It have to Youtube Link"),s(""),e.setIsSubmitting(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"center dark",children:e.isSubmitting?Object(b.jsx)(h.a,{size:150,color:"#123abc",loading:e.isSubmitting,speedMultiplier:1.5}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"header",children:"Life Just Better With Music"}),Object(b.jsxs)("form",{onSubmit:f,className:"form",children:[Object(b.jsx)("input",{type:"text",id:"fname",name:"fname",onChange:function(e){s(e.target.value)},value:n,className:"textarea",placeholder:"https://www.youtube.com/..."}),Object(b.jsx)("button",{type:"submit",hidden:!0,disabled:e.isSubmitting})]}),Object(b.jsx)("div",{className:"link",onClick:function(){var e=window.confirm("\u1016\u103d\u1004\u1037\u103a\u1019\u1032\u1037\u101e\u1030\u1010\u101a\u1031\u102c\u1000\u103a\u1018\u1032 \u1012\u102e link \u1000\u102d\u102f\u101e\u103d\u102c\u1038\u1015\u102b (ok or cancel)");j(!!e)},children:Object(b.jsx)(O.b,{to:l?"player":"#",children:"Speaker \u101e\u1019\u102c\u1038"})})]})})},v=c(39),x=Object(v.a)({apiKey:"AIzaSyDXrdBVeyDwU81QVfllPycfiGtiAjAnrpE",authDomain:"react--queue-player.firebaseapp.com",projectId:"react--queue-player",storageBucket:"react--queue-player.appspot.com",messagingSenderId:"393257056440",appId:"1:393257056440:web:7686440fec372fb4961c4d",databaseURL:"https://react--queue-player-default-rtdb.asia-southeast1.firebasedatabase.app"}),y=c(9),g=(c(72),c(29)),S=function(){return Object(b.jsx)("div",{className:"center",children:Object(b.jsx)("button",{className:"button",onClick:function(){var e=Object(g.b)(),t=new g.a;Object(g.c)(e,t).then((function(e){})).catch((function(e){}))},children:"Login With Google"})})},k=c(25),w=Object(k.b)(),I=Object(o.a)(x),N=Object(o.c)(I,"/videos");var C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),r=i[0],j=i[1],d=Object(a.useState)(!1),p=Object(u.a)(d,2),f=p[0],h=p[1];return Object(a.useEffect)((function(){Object(o.b)(N,(function(e){var t=e.val();n(t),console.log("data change :)"),h(!1)})),Object(k.c)(w,(function(e){e&&j(e)}))}),[]),Object(a.useEffect)((function(){console.log(c);var e=Object(k.b)();console.log("this is the user"+e.currentUser)}),[c]),Object(b.jsx)("div",{className:"fullheight",children:Object(b.jsx)(O.a,{children:Object(b.jsxs)(y.c,{children:[r?Object(b.jsx)(y.a,{path:"react-youtube-queue-player/",exact:!0,element:Object(b.jsx)(m,{database:I,videos:c,user:r,isSubmitting:f,setIsSubmitting:h})}):Object(b.jsx)(y.a,{path:"react-youtube-queue-player/",exact:!0,element:Object(b.jsx)(S,{})}),Object(b.jsx)(y.a,{path:"react-youtube-queue-player/player",exact:!0,element:Object(b.jsx)(l,{database:I,videos:c})})]})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),q()}},[[74,1,2]]]);
//# sourceMappingURL=main.bd57f13b.chunk.js.map