webpackJsonp([22],{Elep:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={data:function(){return{fullscreenLoading:!1,swiperOption:{loop:!0,pagination:{el:".stream_list_swiper_pagination",type:"fraction"}},doctorsDome:"",doctorsTime:"",doctorsData:{sDate:"",sTime:"",sName:"",sPhone:"",dId:""},data:{}}},mounted:function(){var a=this;this.doctorsData.sDate=localStorage.doctorsDate,this.doctorsData.sTime=localStorage.doctorsTime+""+localStorage.doctorsDome,this.doctorsData.dId=localStorage.doctorsID,this.$api.article.doctorListId({dId:this.doctorsData.dId}).then(function(t){a.data=t})},methods:{request:function(){var a=this,t=this;""!=t.doctorsData.sName||""!=t.doctorsData.sPhone?(t.fullscreenLoading=!0,t.$api.article.subscribe(t.doctorsData).then(function(t){0==t.data?setTimeout(function(){a.fullscreenLoading=!1,a.$router.push("/doctors_carry")},500):a.$text()})):alert("请输入名字和电话号码")},back:function(){this.$router.go(-1)}},components:{}},e=s("VU/8")(o,{render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"doctors_fill"},[s("div",{staticClass:"fixed_top doctors_fill_top"},[s("div",{staticClass:"fixed_top_cen fixed_top_cen_left",on:{click:a.back}},[s("div",{staticClass:"icon left_arrow"})]),a._v("预约挂号\n  ")]),a._v(" "),s("div",{staticClass:"doctors_fill_center"},[s("div",{staticClass:"doctors_fill_center--avatar"},[s("div",{staticClass:"avatar float"},[s("div",{staticClass:"avatar_na"},[s("img",{attrs:{src:a.data.dHeadpic,alt:""}})]),a._v(" "),s("div",{staticClass:"doctors_center_avatar_rz icon rz"})]),a._v(" "),s("span",{staticClass:"span1"},[a._v(a._s(a.data.dName))]),a._v(" "),s("span",{staticClass:"span2"},[a._v(a._s(a.data.dDuty))])]),a._v(" "),s("div",{staticClass:"doctors_fill_center--time"},[s("div",{staticClass:"center--time"},[a._v("\n        就诊日期：\n        "),s("span",[a._v(a._s(a.doctorsData.sDate))])]),a._v(" "),s("div",{staticClass:"center--time"},[a._v("\n        就诊时间：\n        "),s("span",[a._v(a._s(a.doctorsData.sTime))])])]),a._v(" "),s("div",{staticClass:"mlkq_line"}),a._v(" "),s("div",{staticClass:"doctors_fill_center--input"},[s("div",{staticClass:"dovtors_input"},[s("span",{staticClass:"dovtors_input_span float"},[a._v("选择就诊人")]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.doctorsData.sName,expression:"doctorsData.sName"}],staticClass:"float",attrs:{type:"text",placeholder:"姓名"},domProps:{value:a.doctorsData.sName},on:{input:function(t){t.target.composing||a.$set(a.doctorsData,"sName",t.target.value)}}})]),a._v(" "),s("div",{staticClass:"dovtors_input"},[s("span",{staticClass:"dovtors_input_span float"},[a._v("短信接收号码")]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.doctorsData.sPhone,expression:"doctorsData.sPhone"}],staticClass:"float",attrs:{type:"text",placeholder:"电话号码"},domProps:{value:a.doctorsData.sPhone},on:{input:function(t){t.target.composing||a.$set(a.doctorsData,"sPhone",t.target.value)}}})])])]),a._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:a.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"doctors_fill_btn",on:{click:a.request}},[s("div",{staticClass:"doctors_fill--btn"},[a._v("下一步")])])])},staticRenderFns:[]},!1,function(t){s("Pcoe")},null,null);a.default=e.exports},Pcoe:function(t,a){}});