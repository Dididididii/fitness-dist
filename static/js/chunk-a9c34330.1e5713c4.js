(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9c34330"],{7500:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"d",(function(){return c})),a.d(e,"g",(function(){return o})),a.d(e,"b",(function(){return l})),a.d(e,"f",(function(){return u}));var i=a("b775"),s=function(t){return Object(i["a"])({url:"/employee/coach",params:t})},r=function(t){return Object(i["a"])({url:"/employee/coach",method:"post",data:t})},n=function(t){return Object(i["a"])({url:"/employee/coach",method:"delete",data:{id:t}})},c=function(t){return Object(i["a"])({url:"/employee/coach",params:{id:t}})},o=function(t){return Object(i["a"])({url:"/employee/coach",method:"put",data:t})},l=function(){return Object(i["a"])({url:"/coach/all"})},u=function(t){return Object(i["a"])({url:"/coach/all",method:"put",data:t})}},d160:function(t,e,a){"use strict";a("f02a")},ee0b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-role"},[a("header",{staticClass:"add-header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"arrow",on:{click:t.backOut}},[a("i",{staticClass:"el-icon-arrow-left"}),t._v("返回 ")]),a("span",[t._v("|")]),a("span",[t._v("权限分配")])])]),a("main",{staticClass:"add-main"},[a("div",{staticClass:"step-container"},[a("el-steps",{attrs:{direction:"vertical",active:t.step}},[a("el-step",{attrs:{title:"角色信息"}}),a("el-step",{attrs:{title:"权限信息"}}),a("el-step",{attrs:{title:"检查并完成"}})],1)],1),1===t.step?a("div",{staticClass:"form-container"},[a("div",{staticClass:"title"},[t._v("角色信息")]),a("div",{staticClass:"form"},[a("el-form",{attrs:{"label-width":"280px"}},[a("el-form-item",{attrs:{label:"员工姓名"}},[t._v(t._s(t.userInfo.name))]),a("el-form-item",{attrs:{label:"员工电话"}},[t._v(t._s(t.userInfo.photo))]),a("el-form-item",{attrs:{label:"身份证号码"}},[t._v(t._s(t.userInfo.identificationCard||t.userInfo.Identity))]),a("el-form-item",{attrs:{label:"入职时间"}},[t._v(t._s(t.userInfo.entryTime))]),a("el-form-item",{attrs:{label:"离职时间"}},[t._v(t._s(t.userInfo.endTime))]),a("el-form-item",{attrs:{label:"登录账号"}},[t._v(t._s(t.userInfo.login))])],1)],1)]):t._e(),2===t.step?a("div",{staticClass:"form-container"},[a("div",{staticClass:"title"},[t._v("权限配置")]),a("div",{staticClass:"form"},[a("div",{staticClass:"tree-wrapper"},t._l(t.data,(function(e){return a("div",{key:e.id,staticClass:"tree-item"},[a("div",{staticClass:"tree-title"},[t._v(t._s(e.title))]),a("el-tree",{ref:"tree",refInFor:!0,attrs:{"default-checked-keys":t.$store.state.limit.limitList||[],props:t.defaultProps,data:e.children,"show-checkbox":"","check-strictly":"","default-expand-all":"","node-key":"id"},on:{"check-change":t.handleCheckChange}})],1)})),0)])]):t._e(),3===t.step?a("div",{staticClass:"form-container"},[a("div",{staticClass:"title"},[t._v("检查并完成")]),a("div",{staticClass:"form"},[a("div",{staticClass:"tree-wrapper"},t._l(t.data,(function(e){return a("div",{key:e.id,staticClass:"tree-item"},[a("div",{staticClass:"tree-title"},[t._v(t._s(e.title))]),a("el-tree",{ref:"tree",refInFor:!0,attrs:{"default-checked-keys":t.$store.state.limit.limitList||[],props:{label:"title",disabled:!0},data:e.children,"show-checkbox":"","check-strictly":"","default-expand-all":"","node-key":"id"},on:{"check-change":t.handleCheckChange}})],1)})),0)])]):t._e()]),a("footer",{staticClass:"add-footer"},[a("div",{staticClass:"btn-container"},[1!==t.step?a("el-button",{on:{click:function(e){t.step--}}},[t._v("上一步")]):t._e(),t.step<=2?a("el-button",{attrs:{type:"primary"},on:{click:t.handleNextStep}},[t._v("下一步")]):t._e(),3===t.step?a("el-button",{attrs:{type:"primary"},on:{click:t.addLimit}},[t._v("完成")]):t._e()],1)])])},s=[],r=a("c7eb"),n=a("1da1"),c=(a("14d9"),a("4de4"),a("d3b7"),a("159b"),a("d918")),o=a("7500"),l=a("ef75"),u={data:function(){return{step:1,userInfo:[],data:[],defaultProps:{children:"children",label:"title"},selectList:[]}},created:function(){this.getLimitsList(),this.$store.dispatch("limit/getLimitList"),this.getLimitsSelectList(),"manage"===this.$route.query.type?this.onloadEmployee():this.onloadCoach()},methods:{backOut:function(){this.$store.commit("limit/setLimitList",[]),this.$router.back()},addLimit:function(){var t=this;return Object(n["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.selectList.length>0)){e.next=8;break}return e.next=3,Object(c["c"])({id:t.userInfo.id,selectList:t.selectList});case 3:t.$message.success("权限保存成功"),t.$store.commit("limit/setLimitList",[]),t.$router.back(),e.next=9;break;case 8:t.$message.error("请选择一项或一项以上的权限保存");case 9:case"end":return e.stop()}}),e)})))()},handleCheckChange:function(t,e){e?(this.selectList.push(t.id),this.$store.commit("limit/setLimitList",this.selectList)):(this.selectList=this.selectList.filter((function(e){return e!==t.id})),this.$store.commit("limit/setLimitList",this.selectList))},getLimitsSelectList:function(){var t=this;return Object(n["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])(t.$route.query.id);case 2:a=e.sent,t.selectList=a.data||[];case 4:case"end":return e.stop()}}),e)})))()},getLimitsList:function(){var t=this;return Object(n["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])();case 2:a=e.sent,t.data=a.data;case 4:case"end":return e.stop()}}),e)})))()},onloadCoach:function(){var t=this;return Object(n["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["d"])(t.$route.query.id);case 2:a=e.sent,t.userInfo=a.data;case 4:case"end":return e.stop()}}),e)})))()},onloadEmployee:function(){var t=this;return Object(n["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["d"])(t.$route.query.id);case 2:a=e.sent,t.userInfo=a.data;case 4:case"end":return e.stop()}}),e)})))()},handleStepChange:function(t){this.step=t},handlePreviousStep:function(){this.$router.back()},handleNextStep:function(){this.step++},addDisabled:function(t){var e=this;t.forEach((function(t){t.disabled=!0,t.children&&t.children.length>0&&e.addDisabled(t.children)}))}}},d=u,f=(a("d160"),a("2877")),h=Object(f["a"])(d,i,s,!1,null,"061b24e8",null);e["default"]=h.exports},ef75:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return c})),a.d(e,"d",(function(){return o}));var i=a("b775"),s=function(t){return Object(i["a"])({url:"/employee",params:t})},r=function(t){return Object(i["a"])({url:"/employee/add",method:"post",data:t})},n=function(t){return Object(i["a"])({url:"/employee/edit",method:"put",data:t})},c=function(t){return Object(i["a"])({url:"/employee/del?id=".concat(t),method:"delete"})},o=function(t){return Object(i["a"])({url:"/employee",params:{id:t}})}},f02a:function(t,e,a){}}]);