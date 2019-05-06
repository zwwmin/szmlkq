<template>
  <div class="stream_video">
    <div class="fixed_top" style="color:rgba(51,51,51,1);">
      <div class="fixed_top_cen fixed_top_cen_left" v-on:click="back">
        <div class="icon left_arrow"></div>
      </div>
    </div>
    <div class="video">
      <div class="video-center">
        <video
          x5-playsinline
          x-webkit-airplay="allow"
          webkit-playsinline="true"
          playsinline="true"
          disable-video-auto-fullscreen="true"
          video-no-fixed-top="true"
          preload="auto"
          controls="controls"
          :poster="DataVideo.vImgurl"
          :src="DataVideo.vVideourl"
          style
        >
          <!-- <source :src="DataVideo.vVideourl" type="video/mp4">您的浏览器不支持该视频格式。 -->
        </video>
        <div class="video_play display_flex1" v-show="isVideoShow" @click="playvideo">
          <div class="icon_play icon play_icon"></div>
        </div>
      </div>
    </div>
    <div class="stream_video_avatar">
      <img :src="DataVideo.vHeadpic" alt>
      <span>{{DataVideo.vName}}</span>
    </div>
    <div class="stream_video_title">{{DataVideo.vContent}}</div>
    <div class="stream_video_title1">{{DataVideo.vName}}</div>
    <div class="stream_video_Collection display_flex">
      <div class="stream_video_Collection-icon display_flex" v-on:click="linkBtn">
        <div
          class="icon stream_video_Collection-icon-n"
          v-bind:class="[DataVideo.islove ? 'link_red' : 'link']"
        ></div>
        {{DataVideo.vLike}}
      </div>
      <!-- <div class="stream_video_Collection-icon display_flex">
        <div class="icon comment stream_video_Collection-icon-n"></div>52
      </div>-->
    </div>
    <div class="stream_video_time">发布于 04-09</div>
    <div class="mlkq_line"></div>
    <!-- 相关推荐 -->
    <div class="stream_video_related">相关推荐</div>
    <list :ListShow="ListShow"></list>
  </div>
</template>
<style lang="sass">
	@import '~/css/index.scss'
</style>
<style  >
.video {
  width: 100%;
  min-height: 1.5rem;
  height: auto;
  /* position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  z-index: ; */
}
.video-center {
  width: 100%;
  height: 100%;
  position: relative;
}
video {
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}
.video_play {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.play,
.platStart {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
}
video {
  object-position: 0 0;
}
.stream_video_avatar {
  margin-left: 0.25rem;
  height: 1.2rem;
  position: relative;
  border: none;
  border-bottom: 0.01rem solid #f1f1f1;
}
.stream_video_avatar img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin: 0.1rem 0.2rem 0.1rem 0;
}
.stream_video_avatar span {
  display: inline-block;
  font-size: 0.3rem;
  font-weight: 800;
  color: #333333;
  line-height: 1rem;
}
.stream_video_title {
  padding: 0.2rem 0.3rem 0.1rem 0.25rem;
  font-size: 0.36rem;
  color: #333;
  font-weight: bold;
}
.stream_video_title1 {
  padding: 0.1rem 0.3rem 0.3rem 0.25rem;
  font-size: 0.3rem;
  color: rgba(141, 141, 141, 1);
}
.stream_video_Collection {
  margin-left: 0.25rem;
  height: 0.5rem;
}
.stream_video_Collection-icon {
  margin-right: 0.25rem;

  font-size: 0.3rem;
  color: #999;
  width: 20%;
  float: left;
}
.stream_video_Collection-icon-n {
  float: left;
  margin-right: 0.15rem;
}
.stream_video_time {
  margin: 0.2rem 0 0.4rem 0.25rem;
  color: #999;
  font-size: 0.26rem;
  line-height: 0.34rem;
}
.stream_video_related {
  margin-left: 0.25rem;
  font-size: 0.3rem;
  color: #333;
  font-weight: 500;
  line-height: 0.9rem;
}
</style>

<script>
export default {
  data() {
    let vm = this;
    return {
      videoList: [
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/93997d3d-a70f-5416-ad6e-b8047cfaf4ef.jpg-mlkqtext",
          title: "深圳美食✨免费穿汉服吃小龙虾🦐江味龙虾馆",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext",
          video: "http://data.szmlkq.com/33.mp4",
          loveNu: 337,
          islove: true,
          name: "小王子",
          id: 1
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/02a8cf74-c59a-3d70-983a-523e4aaea000.jpg-mlkqtext",
          title: "留学生必备的ipad分屏学习大法 一看就会",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",
          video: "http://data.szmlkq.com/32.mp4",
          loveNu: 336,
          islove: false,
          name: "小丑王",
          id: 2
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/8b16a172-9603-521d-be98-8d0cd7175797.jpg-mlkqtext",
          title:
            "无需冰淇淋机㊙️超简单养生黑芝麻冰淇淋补肾乌发吃过都说好吃 今天和宝宝们分享一款",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-2248390dd3700e8156850d85e7de1b7e_r.jpg-mlkqtext",
          video: "http://data.szmlkq.com/41.mp4",
          loveNu: 35,
          islove: false,
          name: "比卡丘",
          id: 3
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/bcaebefc-2ac1-5ee7-806d-0106df750d2a.jpg-mlkqtext",
          title: "🌸超棒的哄娃神器～妈妈牌的雪梨棒棒糖🍭",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",
          video: "http://data.szmlkq.com/31.mp4",
          loveNu: 32,
          islove: false,
          name: "猪八戒",
          id: 4
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/678648eb-a31b-5294-8a88-26cc455ae83c.jpg-mlkqtext",
          title: "Excel-办公人员的福利来啦！",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",
          video: "http://data.szmlkq.com/1555422576951_f1871ce1.mp4",
          loveNu: 332,
          islove: false,
          name: "懒羊羊",
          id: 5
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/04f14e28-d59e-581d-85d1-0715b4522bc3.jpg-mlkqtext",
          title:
            "#3分钟搞定网红甜品你也可以，简单到不行，入口即化，一口一个，好吃到转圈圈#  ",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext",
          video:
            "http://data.szmlkq.com/2ecda1cb301839657363e99d0e6e38c6_1280x720.mp4",
          loveNu: 331,
          islove: false,
          name: "喜羊羊",
          id: 6
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/ec6a66f3-dc65-541b-9952-9abe64269063.jpg-mlkqtext",
          title:
            "#成本不到5块钱的炸酱面原来是这样做出来的，超级简单好吃，学会了就不用下馆子啦#",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-2248390dd3700e8156850d85e7de1b7e_r.jpg-mlkqtext",
          video:
            "http://data.szmlkq.com/62b989c76bf0913d87cac7ba92406245_1280x720.mp4",
          loveNu: 332,
          islove: false,
          name: "小灰灰",
          id: 7
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/1f034ddc-a82c-54c1-bf9f-7e17a5c0c6f0.jpg-mlkqtext",
          title: "深圳下午茶 | 青山花园Aoyama Garden🍃",
          avatar:
            "http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg-mlkqtext",
          video: "http://data.szmlkq.com/16.mp4",
          loveNu: 333,
          islove: false,
          name: "灰太狼",
          id: 8
        }
      ],
      DataVideo: [],
      current: 0,
      isVideoShow: true,
      video: null,
      ListShow: false,
      sid:0
    };
  },
  methods: {
    playvideo(event) {
      console.log("event方法");
      let video = document.querySelectorAll("video")[0];
      console.log("playvideo：" + this.current);
      console.log(video);
      this.isVideoShow = false;
      video.play();
    },
    onPlayerEnded(player) {
      //视频结束
      this.isVideoShow = true;
      this.current += this.current;
    },
    linkBtn() {
      console.log(1);
      this.DataVideo.islove = !this.DataVideo.islove;
      if (this.DataVideo.islove) {
        this.DataVideo.vLike += 1;
      } else {
        this.DataVideo.vLike -= 1;
      }
    },
    getParams (){
      let vm = this;
    console.log(this.$route.query.id);
    vm.sid = this.$route.query.id;
     // banner展示
    this.$api.article
      .showVideo({
        vId: vm.sid
      })
      .then(res => {
        console.log(res)
        if(res.vVideourl == null){
          alert('视频地址不存在，请刷新页面重试');
          this.$text();
        }else{
        vm.DataVideo['islove']= false;
        vm.DataVideo=res
        }
        
      });
      
    },
      back() {
      this.$router.go(-1); //返回上一层
    },
  },
  computed: {},
  components: {
    list: () => import(/* webpackChunkName: "list" */ "../common/index_list")
  },
  mounted() {
    this.getParams();
  },
  watch: {
  '$route': 'getParams'
}
};
</script>
