webpackJsonp([9],{"7q/e":function(t,e){},afWN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{videoList:[{img:"http://pphcs84a8.bkt.clouddn.com/93997d3d-a70f-5416-ad6e-b8047cfaf4ef.jpg-mlkqtext",title:"深圳美食✨免费穿汉服吃小龙虾🦐江味龙虾馆",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext",video:"http://data.szmlkq.com/33.mp4",loveNu:337,islove:!0,name:"小王子",id:1},{img:"http://pphcs84a8.bkt.clouddn.com/02a8cf74-c59a-3d70-983a-523e4aaea000.jpg-mlkqtext",title:"留学生必备的ipad分屏学习大法 一看就会",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",video:"http://data.szmlkq.com/32.mp4",loveNu:336,islove:!1,name:"小丑王",id:2},{img:"http://pphcs84a8.bkt.clouddn.com/8b16a172-9603-521d-be98-8d0cd7175797.jpg-mlkqtext",title:"无需冰淇淋机㊙️超简单养生黑芝麻冰淇淋补肾乌发吃过都说好吃 今天和宝宝们分享一款",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-2248390dd3700e8156850d85e7de1b7e_r.jpg-mlkqtext",video:"http://data.szmlkq.com/41.mp4",loveNu:35,islove:!1,name:"比卡丘",id:3},{img:"http://pphcs84a8.bkt.clouddn.com/bcaebefc-2ac1-5ee7-806d-0106df750d2a.jpg-mlkqtext",title:"🌸超棒的哄娃神器～妈妈牌的雪梨棒棒糖🍭",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",video:"http://data.szmlkq.com/31.mp4",loveNu:32,islove:!1,name:"猪八戒",id:4},{img:"http://pphcs84a8.bkt.clouddn.com/678648eb-a31b-5294-8a88-26cc455ae83c.jpg-mlkqtext",title:"Excel-办公人员的福利来啦！",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",video:"http://data.szmlkq.com/1555422576951_f1871ce1.mp4",loveNu:332,islove:!1,name:"懒羊羊",id:5},{img:"http://pphcs84a8.bkt.clouddn.com/04f14e28-d59e-581d-85d1-0715b4522bc3.jpg-mlkqtext",title:"#3分钟搞定网红甜品你也可以，简单到不行，入口即化，一口一个，好吃到转圈圈#  ",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext",video:"http://data.szmlkq.com/2ecda1cb301839657363e99d0e6e38c6_1280x720.mp4",loveNu:331,islove:!1,name:"喜羊羊",id:6},{img:"http://pphcs84a8.bkt.clouddn.com/ec6a66f3-dc65-541b-9952-9abe64269063.jpg-mlkqtext",title:"#成本不到5块钱的炸酱面原来是这样做出来的，超级简单好吃，学会了就不用下馆子啦#",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-2248390dd3700e8156850d85e7de1b7e_r.jpg-mlkqtext",video:"http://data.szmlkq.com/62b989c76bf0913d87cac7ba92406245_1280x720.mp4",loveNu:332,islove:!1,name:"小灰灰",id:7},{img:"http://pphcs84a8.bkt.clouddn.com/1f034ddc-a82c-54c1-bf9f-7e17a5c0c6f0.jpg-mlkqtext",title:"深圳下午茶 | 青山花园Aoyama Garden🍃",avatar:"http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",video:"http://data.szmlkq.com/16.mp4",loveNu:333,islove:!1,name:"灰太狼",id:8}],DataVideo:[],current:0,isVideoShow:!0,video:null,ListShow:!1,sid:0}},methods:{playvideo:function(t){var e=document.querySelectorAll("video")[0];this.isVideoShow=!1,e.play()},onPlayerEnded:function(t){this.isVideoShow=!0,this.current+=this.current},linkBtn:function(){this.DataVideo.islove=!this.DataVideo.islove,this.DataVideo.islove?this.DataVideo.vLike+=1:this.DataVideo.vLike-=1},getParams:function(){var e=this,a=this;a.sid=this.$route.query.id,this.$api.article.showVideo({vId:a.sid}).then(function(t){null==t.vVideourl?(alert("视频地址不存在，请刷新页面重试"),e.$text()):(a.DataVideo.islove=!1,a.DataVideo=t)})},back:function(){this.$router.go(-1)}},computed:{},components:{list:function(){return a.e(30).then(a.bind(null,"s6P5"))}},mounted:function(){this.getParams()},watch:{$route:"getParams"}},o=a("VU/8")(i,{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stream_video"},[a("div",{staticClass:"fixed_top",staticStyle:{color:"rgba(51,51,51,1)"}},[a("div",{staticClass:"fixed_top_cen fixed_top_cen_left",on:{click:t.back}},[a("div",{staticClass:"icon left_arrow"})])]),t._v(" "),a("div",{staticClass:"video"},[a("div",{staticClass:"video-center"},[a("video",{attrs:{"x5-playsinline":"","x-webkit-airplay":"allow","webkit-playsinline":"true",playsinline:"true","disable-video-auto-fullscreen":"true","video-no-fixed-top":"true",preload:"auto",controls:"controls",poster:t.DataVideo.vImgurl,src:t.DataVideo.vVideourl}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isVideoShow,expression:"isVideoShow"}],staticClass:"video_play display_flex1",on:{click:t.playvideo}},[a("div",{staticClass:"icon_play icon play_icon"})])])]),t._v(" "),a("div",{staticClass:"stream_video_avatar"},[a("img",{attrs:{src:t.DataVideo.vHeadpic,alt:""}}),t._v(" "),a("span",[t._v(t._s(t.DataVideo.vName))])]),t._v(" "),a("div",{staticClass:"stream_video_title"},[t._v(t._s(t.DataVideo.vContent))]),t._v(" "),a("div",{staticClass:"stream_video_title1"},[t._v(t._s(t.DataVideo.vName))]),t._v(" "),a("div",{staticClass:"stream_video_Collection display_flex"},[a("div",{staticClass:"stream_video_Collection-icon display_flex",on:{click:t.linkBtn}},[a("div",{staticClass:"icon stream_video_Collection-icon-n",class:[t.DataVideo.islove?"link_red":"link"]}),t._v("\n      "+t._s(t.DataVideo.vLike)+"\n    ")])]),t._v(" "),a("div",{staticClass:"stream_video_time"},[t._v("发布于 04-09")]),t._v(" "),a("div",{staticClass:"mlkq_line"}),t._v(" "),a("div",{staticClass:"stream_video_related"},[t._v("相关推荐")]),t._v(" "),a("list",{attrs:{ListShow:t.ListShow}})],1)},staticRenderFns:[]},!1,function(t){a("lKBq"),a("7q/e")},null,null);e.default=o.exports},lKBq:function(t,e){}});