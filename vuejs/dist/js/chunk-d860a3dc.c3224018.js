(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d860a3dc","chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),a("hr")])},i=[],n={data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=JSON.parse(localStorage.getItem("tokendata")),t=JSON.parse(localStorage.getItem("userdata"));null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("tokendata")),a=JSON.parse(localStorage.getItem("userdata"));null!=a&&null!=t?this.axios.post(window.apiRoutes.verifyRoute,{token:t.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?a.admin&&!a.superadmin?(e.logged=!0,e.admin=!0):a.admin&&a.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})})):this.logged=!1}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);t["default"]=l.exports},"9a8d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content registration-page"},[a("TopLinks"),a("div",{staticClass:"loading"},[a("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullPage},on:{"update:active":function(t){e.loading=t}}})],1),a("h4",[e._v("Register")]),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("label",{attrs:{for:"name"}},[e._v(" > Recipient Name")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("label",{attrs:{for:"email"}},[e._v(" > Recipient E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("label",{attrs:{for:"password"}},[e._v(" > Your Admin Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,s=t.target,i=!!s.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);s.checked?o<0&&(e.checked=a.concat([n])):o>-1&&(e.checked=a.slice(0,o).concat(a.slice(o+1)))}else e.checked=i}}}),e._m(0),a("br")]),e._m(1),a("p",{staticStyle:{color:"#bac964"}},[e._v("Note: Only Pending User Requests can be Added and Not Anybody.")])]),a("hr"),a("div",{staticClass:"pendingusers"},[a("button",{staticClass:"getuserbutton",attrs:{type:"submit"},on:{click:e.getPendingUsers}},[e._v("Reload Request List")]),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.pendingMessage))]),a("div",{class:e.columnVisibility?"col-rows":"col-rows is-hidden"},[a("h2",{staticClass:"pendinghead"},[e._v("Pending User List")]),e._m(2),e._l(e.pendingUserList,(function(t){return a("div",{key:t.name,staticClass:"columns is-mobile is-multiline is-centered"},[a("div",{staticClass:"col-data column is-hidden-mobile is-3"},[a("p",[e._v(e._s(t.name))])]),a("div",{staticClass:"col-data column is-3"},[a("p",[e._v(e._s(t.email))])]),a("div",{staticClass:"col-data column is-hidden-mobile is-3"},[a("p",[e._v(e._s(t.message))])])])}))],2)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"terms"}},[e._v(" I Accept and Read the "),a("a",{staticClass:"guidelines",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Community Guidelines")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"registration-button",attrs:{type:"submit"}},[e._v(" Register ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns is-mobile is-multiline is-centered"},[a("div",{staticClass:"column-head column is-hidden-mobile is-3"},[a("p",[e._v("Name")])]),a("div",{staticClass:"column-head column is-3"},[a("p",[e._v("Email")])]),a("div",{staticClass:"column-head column is-hidden-mobile is-3"},[a("p",[e._v("Message From Requester")])])])}],n=(a("99af"),a("b0c0"),a("3905")),o=a("9062"),r=a.n(o),l=(a("e40d"),{components:{TopLinks:n["default"],Loading:r.a},props:["nextUrl"],data:function(){return{name:"",email:"",password:"",resultmessage:"",databasemessage:"",userData:JSON.parse(localStorage.getItem("userdata")),userToken:JSON.parse(localStorage.getItem("tokendata")),checked:"",pendingUserList:[],pendingMessage:"",columnVisibility:!1,loading:!0}},methods:{handleSubmit:function(e){var t=this;if(this.loading=!0,e.preventDefault(),this.password&&this.password.length>0)if(this.checked){var a=window.apiRoutes.registerRoute;this.$http.post(a,{name:this.name,email:this.email,adminpass:this.password,adminuseremail:this.userData.email}).then((function(e){e&&(e.data.auth&&e.data.registered,t.loading=!1,t.resultmessage=e.data.message)})).catch((function(e){console.error(e)}))}else this.loading=!1,this.resultmessage="> You Need to Accept Community Guidelines.",this.checked=!1;else this.loading=!1,this.resultmessage="> Passwords Do Not Match",this.password=""},getPendingUsers:function(){var e=this;this.loading=!0;var t=window.apiRoutes.getPendingUsers;this.$http.post(t,{adminuseremail:this.userData.email}).then((function(t){t&&(t.data.auth&&t.data.registered?(e.loading=!1,e.columnVisibility=!0,e.pendingUserList=t.data.users):(e.loading=!1,e.columnVisibility=!1,e.pendingMessage=t.data.message))}))}},mounted:function(){var e=this;this.loading=!0,this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?e.databasemessage="🟢 Database is Live. You can Login. Ping - ".concat(t.data.ping,"ms"):e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later"}));var t=window.apiRoutes.getPendingUsers;this.$http.post(t,{adminuseremail:this.userData.email}).then((function(t){t&&(t.data.auth&&t.data.registered?(e.columnVisibility=!0,e.pendingUserList=t.data.users):(e.columnVisibility=!1,e.pendingMessage=t.data.message))}));var a=JSON.parse(localStorage.getItem("userdata")),s=JSON.parse(localStorage.getItem("tokendata"));a&&s&&a.verified&&a.admin?(this.loading=!1,this.resultmessage="You are Currently Logged in as ".concat(a.name," as ").concat(a.role)):(this.loading=!1,this.resultmessage=a.admin)}}),d=l,u=a("2877"),c=Object(u["a"])(d,s,i,!1,null,null,null);t["default"]=c.exports}}]);