webpackJsonp([20],{EV1k:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=!0,e={created:function(){var i=this;this.$on("demo",function(){i.ziksang1++,5==i.ziksang1&&i.$off("demo")}),this.$once("demo2",function(t){i.ziksang2+=t})},data:function(){return{ziksang1:0,ziksang2:0,time:"获取验证码"}},methods:{onbtn:function(){1==s&&this.countDown()},countDown:function(){var t=this;this.time=60;var i=setInterval(function(){t.time--,0==t.time&&(t.$emit("countDown"),t.time="获取验证码",s=!0,clearInterval(i))},1e3)},Landing:function(){alert("lalalalalal")},ss:function(){this.$router.go(-1)}},filters:{change:function(t){return t?isNaN(t)?t:1==s?"重新发送"+t+"S":t+"S":""}}},a={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"login"},[n("div",{staticClass:"login_header"},[n("div",{staticClass:"login_header_cen left",on:{click:t.ss}},[n("div",{staticClass:"icon left_arrow"})]),t._v("登录\n    "),t._m(0)]),t._v(" "),n("div",{staticClass:"login_center"},[t._m(1),t._v(" "),n("span",{staticClass:"login_center_title"},[t._v("登录")]),t._v(" "),n("span",{staticClass:"login_center_nav"},[t._v("您好，欢迎来到美莱口腔")]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"login_center_input",staticStyle:{"margin-top":"0.2rem"}},[n("span",{staticClass:"login_center_input_icon icon verification"}),t._v(" "),n("input",{staticStyle:{width:"60%"},attrs:{type:"text",placeholder:"输入手机验证码"}}),t._v(" "),n("div",{staticClass:"login_code",on:{click:t.onbtn}},[t._v(t._s(t._f("change")(t.time)))])]),t._v(" "),n("div",{staticClass:"login_btn"},[t._v("登录")])]),t._v(" "),n("div",{staticClass:"login_bottom"},[n("span",{staticClass:"login_bottom_span"},[t._v("社交账号登录")]),t._v(" "),n("div",{staticClass:"login_bottom_center display_flex1",on:{click:t.Landing}},[n("span",{staticClass:"icon WeChat"})]),t._v(" "),n("div",{staticClass:"login_bottom_center display_flex1",on:{click:t.Landing}},[n("span",{staticClass:"icon qq"})]),t._v(" "),n("div",{staticClass:"login_bottom_center display_flex1",on:{click:t.Landing}},[n("span",{staticClass:"icon weibo"})])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"login_header_cen right"},[i("div",{staticClass:"icon share_it"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"login_center_commercial"},[i("img",{attrs:{src:n("6JuL"),alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"login_center_input"},[i("span",{staticClass:"login_center_input_icon icon phone"}),this._v(" "),i("input",{attrs:{type:"text",placeholder:"手机号"}})])}]},c=n("VU/8")(e,a,!1,function(t){n("vs/c")},null,null);i.default=c.exports},"vs/c":function(t,i){}});