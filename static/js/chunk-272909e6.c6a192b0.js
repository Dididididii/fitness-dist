(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-272909e6"],{"236d":function(e,t,r){},"6f56":function(e,t,r){"use strict";r.d(t,"l",(function(){return a})),r.d(t,"j",(function(){return i})),r.d(t,"g",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"m",(function(){return d})),r.d(t,"f",(function(){return m})),r.d(t,"i",(function(){return v})),r.d(t,"b",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"n",(function(){return b})),r.d(t,"k",(function(){return h}));var n=r("b775"),a=function(e){return Object(n["a"])({url:"/clocking/signin",method:"post",data:e})},i=function(e){return Object(n["a"])({url:"/clocking/signin",params:e})},c=function(e){return Object(n["a"])({url:"/clocking/clockin",params:e})},o=function(e){return Object(n["a"])({url:"/clocking/clockin",method:"post",data:{clockingTime:e}})},s=function(e){return Object(n["a"])({url:"/clocking/clockout",method:"put",data:{checkOutTime:e}})},l=function(e){return Object(n["a"])({url:"/clocking/leave",params:e})},u=function(e){return Object(n["a"])({url:"/clocking/askleave",method:"post",data:e})},d=function(e){return Object(n["a"])({url:"/clocking/askleave",method:"put",data:e})},m=function(e){return Object(n["a"])({url:"/clocking/askleave?clockId=".concat(e),method:"delete"})},v=function(e){return Object(n["a"])({url:"/clocking/over",params:e})},p=function(e){return Object(n["a"])({url:"/clocking/over",method:"post",data:e})},f=function(e){return Object(n["a"])({url:"/clocking/over",method:"delete",data:{id:e}})},b=function(e){return Object(n["a"])({url:"/clocking/over",method:"put",data:e})},h=function(){return Object(n["a"])({url:"/clocking/clockin/today"})}},"86a8":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-container"},[r("div",{directives:[{name:"permission",rawName:"v-permission",value:"clock:overtime:search",expression:"'clock:overtime:search'"}],staticClass:"search-container"},[r("span",{staticClass:"search-label"},[e._v("员工姓名：")]),r("el-input",{staticClass:"search-main",attrs:{clearable:"",placeholder:"请输入内容"},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}}),r("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")])],1),r("div",{staticClass:"create-container"},[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"clock:overtime:add",expression:"'clock:overtime:add'"}],attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("加班申请")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"clock:overtime:del",expression:"'clock:overtime:del'"}],on:{click:e.delSelect}},[e._v("批量删除")])],1),r("div",{staticClass:"table"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.overTimeList},on:{"selection-change":e.selectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{type:"index",label:"序号"}}),r("el-table-column",{attrs:{label:"员工姓名",prop:"name"}}),r("el-table-column",{attrs:{label:"加班开始时间",prop:"startOvertime"}}),r("el-table-column",{attrs:{label:"加班结束时间",prop:"endOvertime"}}),r("el-table-column",{attrs:{label:"加班时长(小时)"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(e.showOverTime(r.startOvertime,r.endOvertime)))]}}])}),r("el-table-column",{attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"clock:overtime:edit",expression:"'clock:overtime:edit'"}],attrs:{size:"mini",type:"text"},on:{click:function(r){return e.editOverTime(t.row)}}},[e._v("编辑")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"clock:overtime:del",expression:"'clock:overtime:del'"}],attrs:{size:"mini",type:"text"},on:{click:function(r){return e.delOverTime(t.row.clockId)}}},[e._v("删除")])]}}])})],1)],1),r("div",{staticClass:"page-container"},[r("el-pagination",{attrs:{layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:e.addForm.clockId?"编辑申请":"加班申请",width:"580px",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.resetForm},scopedSlots:e._u([{key:"footer",fn:function(){return[r("el-button",{attrs:{size:"mini"},on:{click:e.resetForm}},[e._v("取 消")]),r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])]},proxy:!0}])},[r("div",{staticClass:"form-container"},[r("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.addFormRules}},[r("el-form-item",{attrs:{label:"加班开始时间",prop:"startOvertime"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addForm.startOvertime,callback:function(t){e.$set(e.addForm,"startOvertime",t)},expression:"addForm.startOvertime"}})],1),r("el-form-item",{attrs:{label:"加班结束时间",prop:"endOvertime"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.addForm.endOvertime,callback:function(t){e.$set(e.addForm,"endOvertime",t)},expression:"addForm.endOvertime"}})],1)],1)],1)])],1)},a=[],i=r("c7eb"),c=r("1da1"),o=(r("d81d"),r("b0c0"),r("6f56")),s={data:function(){return{loading:!0,superShow:!1,dialogVisible:!1,overTimeList:[],total:0,params:{page:1,limit:10,name:null},addForm:{startOvertime:"",endOvertime:""},addFormRules:{startOvertime:[{required:!0,message:"加班开始时间不能为空",trigger:"change"}],endOvertime:[{required:!0,message:"加班结束时间不能为空",trigger:"change"}]},idList:[]}},created:function(){this.getOverTimeList()},methods:{editOverTime:function(e){this.addForm=e,this.dialogVisible=!0},delSelect:function(){this.idList.length>0?this.delOverTime(this.idList):this.$message.error("请选择要删除的加班记录。")},selectionChange:function(e){this.idList=e.map((function(e){return e.clockId}))},delOverTime:function(e){var t=this;this.$confirm("此操作将删除该加班记录., 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(o["e"])(e);case 2:t.$message.success("删除成功"),t.getOverTimeList();case 4:case"end":return r.stop()}}),r)}))))},daysRemaining:function(e,t){var r=t,n=e,a=r-n;return a>0?Math.floor(a/36e5):0},showOverTime:function(e,t){var r=new Date(e).getTime(),n=new Date(t).getTime(),a=this.daysRemaining(r,n),i="".concat(a>10?a:"0"+a);return i},submitForm:function(){var e=this;this.$refs.addForm.validate(function(){var t=Object(c["a"])(Object(i["a"])().mark((function t(r){var n;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:if(!e.addForm.clockId){t.next=11;break}return n=e.addForm,delete n.id,delete n.name,t.next=8,Object(o["n"])(n);case 8:e.$message.success("修改成功"),t.next=14;break;case 11:return t.next=13,Object(o["b"])(e.addForm);case 13:e.$message.success("申请成功");case 14:e.resetForm(),e.getOverTimeList();case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},resetForm:function(){this.$refs.addForm.resetFields(),this.addForm={startOvertime:"",endOvertime:""},this.dialogVisible=!1},getOverTimeList:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(o["i"])(e.params);case 3:r=t.sent,e.overTimeList=r.data.rows,e.total=r.data.total,e.superShow=r.data.super,e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},handleCurrentChange:function(e){this.params.page=e,this.getOverTimeList()},handleSearch:function(){this.params.page=1,this.getOverTimeList()}}},l=s,u=(r("db16"),r("2877")),d=Object(u["a"])(l,n,a,!1,null,"77e55b8d",null);t["default"]=d.exports},db16:function(e,t,r){"use strict";r("236d")}}]);