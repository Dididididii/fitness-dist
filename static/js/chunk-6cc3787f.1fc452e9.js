(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cc3787f"],{"7fe0":function(e,r,t){},"82dc":function(e,r,t){"use strict";t("7fe0")},d9c9:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login_body"},[t("div",{staticClass:"bg"}),t("div",{staticClass:"box"},[t("div",{staticClass:"title"},[e._v("咖恺健身房-登录")]),t("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules}},[t("el-form-item",{attrs:{placeholder:"请输入用户名",label:"账号",prop:"name"}},[t("el-input",{model:{value:e.loginForm.name,callback:function(r){e.$set(e.loginForm,"name",r)},expression:"loginForm.name"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),t("el-form-item",{attrs:{prop:"remember"}},[t("el-checkbox",{model:{value:e.loginForm.remember,callback:function(r){e.$set(e.loginForm,"remember",r)},expression:"loginForm.remember"}},[e._v("记住我")])],1),t("el-form-item",[t("el-button",{staticClass:"reset_btn",on:{click:e.resetForm}},[e._v("重置")]),t("el-button",{staticClass:"login_btn",attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("登录")])],1)],1)],1)])},s=[],n=t("c7eb"),a=t("5530"),i=t("1da1"),l=(t("e9c4"),t("14d9"),{name:"Login",data:function(){return{loginForm:{name:"",password:"",remember:!1},loginRules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 6 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:12,message:"长度在 5 到 12 个字符",trigger:"blur"}]}}},created:function(){if(localStorage.getItem("userInfo")){var e=JSON.parse(localStorage.getItem("userInfo"));this.loginForm=e}},methods:{submitForm:function(){var e=this;this.$refs.loginForm.validate(function(){var r=Object(i["a"])(Object(n["a"])().mark((function r(t){var o;return Object(n["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return");case 2:return o=Object(a["a"])({},e.loginForm),delete o.remember,r.next=6,e.$store.dispatch("user/userLogin",o);case 6:e.loginForm.remember?localStorage.setItem("userInfo",JSON.stringify(e.loginForm)):localStorage.removeItem("userInfo"),e.$message.success("登录成功."),e.$router.push(e.$route.query.redirect||"/");case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs.loginForm.resetFields()}}}),m=l,c=(t("82dc"),t("2877")),u=Object(c["a"])(m,o,s,!1,null,"1adfa3d7",null);r["default"]=u.exports}}]);