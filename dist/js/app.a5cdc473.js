(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=a("2877"),s={},l=Object(i["a"])(s,r,o,!1,null,null,null),u=l.exports,p=a("8c4f"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(" Esta es una pagina publica ")]),a("router-link",{attrs:{to:"/login"}},[e._v("Login")]),a("router-link",{attrs:{to:"/Sign-Up"}},[e._v("Sign Up")])],1)},d=[],m={name:"Home"},f=m,v=Object(i["a"])(f,c,d,!1,null,null,null),g=v.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Login page")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{on:{click:e.login}},[e._v("Login")])])},w=[],b=a("2591"),_={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){b["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){alert("El usuario se creo de forma satisfactoria"+e)})).catch((function(e){var t=e.code,a=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(a),console.log(e)}))}}},y=_,E=Object(i["a"])(y,h,w,!1,null,"346f96c7",null),O=E.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Sign Up")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("button",{on:{click:e.SignUp}},[e._v("Sing Up")])])},j=[],S={name:"SignUp",data:function(){return{email:"",password:""}},methods:{SignUp:function(){b["a"].auth().createUserWithEmailAndPassword(this.email,this.password).then((function(e){alert("El usuario se creo de forma satisfactoria"+e)})).catch((function(e){var t=e.code,a=e.message;alert("Error"+t+a)}))}}},x=S,U=Object(i["a"])(x,P,j,!1,null,"cce7e6d6",null),k=U.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Esta es la pagina objetivo (secreta)")])])}],I={name:"Private"},M=I,T=Object(i["a"])(M,L,$,!1,null,"3d0b7f68",null),A=T.exports;n["a"].use(p["a"]);var N=[{path:"*",redirect:"/"},{path:"/",name:"Home",component:g},{path:"/Login",name:"Login",component:O},{path:"/Sign-Up",name:"SignUp",component:k},{path:"/dashboard",name:"Private",component:A}],W=new p["a"]({routes:N}),H=W;a("def6");n["a"].config.productionTip=!1;var K={apiKey:"AIzaSyCXeTtO5yho2y1TM-Ev2QHKMEpBCllabFY",authDomain:"data4all2.firebaseapp.com",databaseURL:"https://data4all2.firebaseio.com",projectId:"data4all2",storageBucket:"data4all2.appspot.com",messagingSenderId:"819788457185",appId:"1:819788457185:web:44c4b7362c9fd05ef303a0",measurementId:"G-EWK3XYT3VD"};b["a"].initializeApp(K),new n["a"]({router:H,render:function(e){return e(u)}}).$mount("#app")},def6:function(e,t,a){}});
//# sourceMappingURL=app.a5cdc473.js.map