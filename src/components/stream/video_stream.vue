<template>
  <div class="stream_video">
    <swiper class="stream_video_swiper" :options="swiperOption" @change="onChange" ref="mySwiper">
      <swiper-slide class="stream_video_swiper-cen" v-for="(item, index) in videoList" :key="index">
        <div class="stream_video_swiper-cen-video display_flex1">
          <video
            class="video_box"
            width="100%"
            height="100%"
            style="width: 100%; height:auto; object-fit: fill"
            webkit-playsinline
            x5-playsinline
            x5-video-player-type="h5"
            preload="auto"
            :poster="item.cover"
            :src="item.url"
            :playOrPause="playOrPause"
            x5-video-player-fullscreen="true"
            x-webkit-airplay="true"
            playsinline="true"
            x5-video-orientation="portrait"
            @click="pauseVideo"
            @ended="onPlayerEnded($event)"
            loop="loop"
          ></video>
          <img v-show="isVideoShow" class="play" @click="playvideo" :src="item.cover">
          <!-- 播放暂停按钮 -->
          <div v-show="iconPlayShow" class="icon_play icon play_icon" @click="playvideo"></div>
        </div>
        <!-- 右侧点赞、分享功能 -->
        <div class="tools_right">
          <div class="tools_r_li">
            <div class="icon_avact icon_right"></div>
          </div>
          <div class="tools_r_li" @click="changeFollow(item,index)">
            <div class="iconfont iconfont_love icon_right" :class="item.follow?'follow_active':''"></div>
            <div class="tools_r_num">28.1w</div>
          </div>
          <div class="tools_r_li" @click="changeShare">
            <i class="iconfont iconfont_pl icon_right"></i>
            <div class="tools_r_num">5.5w</div>
          </div>
        </div>
        <!-- 底部作品描述 -->
        <div class="production_box">
          <div class="production_name">@抖音</div>
          <div
            class="production_des"
          >年轻的时候要注意‘养生’，少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！切记少玩手机多睡觉！少玩手机多睡觉！少玩手机多睡觉！@ 抖音小助手</div>
        </div>
      </swiper-slide>
    </swiper>
    <div v-transfer-dom>
      <popup v-model="showShareBox" position="bottom" max-height="50%" should-rerender-on-show>
        <h2 v-for="i in 20" :key="i">{{i}}</h2>
        <div style="padding: 15px;">
          <div @click.native="showShareBox = false" plain type="primary">Close Me</div>
        </div>
      </popup>
    </div>
  </div>
</template>
<style lang="sass" >
@import '~/css/stream.scss'
</style>

<script>
import { TransferDom, Popup } from "vux";

export default {
  data() {
    let u = navigator.userAgent;
    let vm = this;
    return {
      swiperOption: {
        direction: "vertical",
        on: {
          slideChangeTransitionEnd: function() {
            console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            vm.onChange(this.activeIndex);
          }
        }
      },
      videoList: [
        {
          url:
            "http://video.jishiyoo.com/eb978106f01f4eed95db9f537d7d9be8/6dbdc80e5c754784abe2e5be96c5feed-514a8b14506d55be68a9d9e3c2810057-ld.mp4",
          cover:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png",
          follow: false
        },
        {
          url:
            "http://video.jishiyoo.com/4bd2b77bad9b45639564becc2bed8e29/30d4e2b677074d079e8c03698edee232-32ca5c6feec9c6445decdd413320bcea-ld.mp4",
          cover:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552140113110.png",
          follow: false
        },
        {
          url:
            "http://video.jishiyoo.com/f843c93d4f3f4bee844690fe1fdfc750/28e2548c47ce4d0cb310697f0ca4c7a3-14818dd00765a9a86871da6734b1be28-ld.mp4",
          cover:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552117102331.png",
          follow: false
        },
        {
          url:
            "http://video.jishiyoo.com/c082827a58584a2c864fa403f1aafabf/d5333562c5c74bcdb5bd3fe92073cd9c-6375039a2dd07d44dfaf66c1a32287ff-ld.mp4",
          cover:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/file-1552022662595.png",
          follow: false
        },

        {
          url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
          cover:
            "http://bendipin.oss-cn-beijing.aliyuncs.com/images/file-1552022662595.png",
          follow: false
        },
        {
          url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
          cover: "http://pphcs84a8.bkt.clouddn.com/1.png",
          follow: false
        }
      ],
      current: 0,
      isVideoShow: true,
      playOrPause: true,
      video: null,
      iconPlayShow: true,
      isAndroid: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, // android终端
      isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      tabIndex: 0,
      showShareBox: false
    };
  },
  directives: {
    TransferDom
  },
  methods: {
    //改变菜单
    changeTab(index) {
      this.tabIndex = index;
    },
    //改变收藏状态
    changeFollow(item, index) {
      this.videoList[index].follow = !this.videoList[index].follow;
    },
    //展示分享弹窗
    changeShare() {
      this.showShareBox = true;
    },
    //取消分享
    cancelShare() {
      this.showShareBox = false;
    },
    //滑动改变播放的视频
    onChange(index) {
      //改变的时候 暂停当前播放的视频
      console.log("滑动改变播放的视频" + index);
      let video = document.querySelectorAll("video")[this.current];
      video.pause();
      this.playOrPause = false;
      this.current = index;
      if (this.isiOS) {
        //ios切换直接自动播放下一个
        this.isVideoShow = false;
        // this.pauseVideo();
      } else {
        //安卓播放时重置显示封面。图标等
        this.isVideoShow = true;
        this.iconPlayShow = true;
      }
    },
    playvideo(event) {
      console.log(this.current);
      let video = document.querySelectorAll("video")[this.current];
      console.log("playvideo：" + this.current);
      this.isVideoShow = false;
      this.iconPlayShow = false;
      video.play();
      window.onresize = function() {
        video.style.width = window.innerWidth + "px";
        video.style.height = window.innerHeight + "px";
      };
    },
    pauseVideo() {
      //暂停\播放
      let video = document.querySelectorAll("video")[this.current];
      console.log("pauseVideo@@" + this.current);
      if (this.playOrPause) {
        video.pause();
        this.iconPlayShow = true;
      } else {
        video.play();
        this.iconPlayShow = false;
      }
      this.playOrPause = !this.playOrPause;
    },
    onPlayerEnded(player) {
      //视频结束
      this.isVideoShow = true;
      this.current += this.current;
    }
  },
  components: {
    Popup
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    console.log(this.isAndroid);
    console.log(this.isiOS);
  }
};
</script>
