(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jianzhixinxi/add-or-update"],{"08e1":function(n,i,e){"use strict";var t=e("e831"),a=e.n(t);a.a},"2a69":function(n,i,e){"use strict";e.r(i);var t=e("4ddc"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},"4ddc":function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,o){try{var u=n[r](o),c=u.value}catch(s){return void e(s)}u.done?i(c):Promise.resolve(c).then(t,a)}function o(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var o=n.apply(i,e);function u(n){r(o,t,a,u,c,"next",n)}function c(n){r(o,t,a,u,c,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("6591"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{ruleForm:{gongsimingcheng:"",jianzhididian:"",zhiweimingcheng:"",zhiweiyaoqiu:"",zhiweixinzi:"",gongzuoshijian:"",gongzuodidian:"",lianxifangshi:"",gongsitupian:""},jianzhididianOptions:[],jianzhididianIndex:0,user:{},ro:{gongsimingcheng:!1,jianzhididian:!1,zhiweimingcheng:!1,zhiweiyaoqiu:!1,zhiweixinzi:!1,gongzuoshijian:!1,gongzuodidian:!1,lianxifangshi:!1,gongsitupian:!1}}},components:{wPicker:u},computed:{},onLoad:function(i){var e=this;return o(t.default.mark((function a(){var r,o,u,c;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=n.getStorageSync("nowTable"),a.next=3,e.$api.session(r);case 3:if(o=a.sent,e.user=o.data,e.jianzhididianOptions="校内,校外".split(","),e.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(e.ruleForm.refid=i.refid,e.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){a.next=14;break}return e.ruleForm.id=i.id,a.next=12,e.$api.info("jianzhixinxi",e.ruleForm.id);case 12:o=a.sent,e.ruleForm=o.data;case 14:if(!i.cross){a.next=57;break}u=n.getStorageSync("crossObj"),a.t0=t.default.keys(u);case 17:if((a.t1=a.t0()).done){a.next=57;break}if(c=a.t1.value,"gongsimingcheng"!=c){a.next=23;break}return e.ruleForm.gongsimingcheng=u[c],e.ro.gongsimingcheng=!0,a.abrupt("continue",17);case 23:if("jianzhididian"!=c){a.next=27;break}return e.ruleForm.jianzhididian=u[c],e.ro.jianzhididian=!0,a.abrupt("continue",17);case 27:if("zhiweimingcheng"!=c){a.next=31;break}return e.ruleForm.zhiweimingcheng=u[c],e.ro.zhiweimingcheng=!0,a.abrupt("continue",17);case 31:if("zhiweiyaoqiu"!=c){a.next=35;break}return e.ruleForm.zhiweiyaoqiu=u[c],e.ro.zhiweiyaoqiu=!0,a.abrupt("continue",17);case 35:if("zhiweixinzi"!=c){a.next=39;break}return e.ruleForm.zhiweixinzi=u[c],e.ro.zhiweixinzi=!0,a.abrupt("continue",17);case 39:if("gongzuoshijian"!=c){a.next=43;break}return e.ruleForm.gongzuoshijian=u[c],e.ro.gongzuoshijian=!0,a.abrupt("continue",17);case 43:if("gongzuodidian"!=c){a.next=47;break}return e.ruleForm.gongzuodidian=u[c],e.ro.gongzuodidian=!0,a.abrupt("continue",17);case 47:if("lianxifangshi"!=c){a.next=51;break}return e.ruleForm.lianxifangshi=u[c],e.ro.lianxifangshi=!0,a.abrupt("continue",17);case 51:if("gongsitupian"!=c){a.next=55;break}return e.ruleForm.gongsitupian=u[c],e.ro.gongsitupian=!0,a.abrupt("continue",17);case 55:a.next=17;break;case 57:e.styleChange();case 58:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jianzhididianChange:function(n){this.jianzhididianIndex=n.target.value,this.ruleForm.jianzhididian=this.jianzhididianOptions[this.jianzhididianIndex]},gongsitupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.gongsitupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(t.default.mark((function i(){return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.ruleForm.id){i.next=5;break}return i.next=3,n.$api.update("jianzhixinxi",n.ruleForm);case 3:i.next=7;break;case 5:return i.next=7,n.$api.add("jianzhixinxi",n.ruleForm);case 7:n.$utils.msgBack("提交成功");case 8:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=c}).call(this,e("543d")["default"])},"99d5":function(n,i,e){"use strict";e.r(i);var t=e("d034"),a=e("2a69");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("08e1");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"05c22fb5",null,!1,t["a"],o);i["default"]=c.exports},b6ea:function(n,i,e){"use strict";(function(n){e("7343");t(e("66fd"));var i=t(e("99d5"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},d034:function(n,i,e){"use strict";var t;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}));var a=function(){var n=this,i=n.$createElement;n._self._c},r=[]},e831:function(n,i,e){}},[["b6ea","common/runtime","common/vendor"]]]);