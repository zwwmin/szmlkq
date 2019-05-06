<template>
  <div class="stream_video">
    <div class="video">
      <video
       width="100%"
            height="100%"
            style="width: 100%; height:100%; object-fit: fill"
            webkit-playsinline="ture"
            x5-playsinline
            x5-video-player-type="h5"
            preload="auto"
           
            
            
            x5-video-player-fullscreen="true"
            x-webkit-airplay="true"
            playsinline="true"
            x5-video-orientation="portrait"
        
          
            loop="loop"
        disable-video-auto-fullscreen="true"
        video-no-fixed-top="true"
        controls="controls"
        poster="http://p1.pstatp.com/list/640x480/tos-cn-i-0004/cd043ec6d3ba46369bfaba0c4efa2e2e"
     
      >
        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4">您的浏览器不支持该视频格式。
      </video>
      <div class="video_play display_flex1" v-show="isVideoShow" @click="playvideo">
        <div class="icon_play icon play_icon"></div>
      </div>
    </div>
   
    <h1 v-for="i in 40" :key="i">{{i}}</h1>
  </div>
</template>
<style  >
.video {
  width: 100%;
  min-height: 1.5rem;
  position: relative;
  margin: 0 0 0.5rem 0;
}
video {
  width: 100%;
  height: 100%;
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
</style>

<script>
export default {
  data() {
    let u = navigator.userAgent;
    let vm = this;
    return {
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
      // let video = document.querySelectorAll("video")[this.current];
      // video.pause();
      this.playOrPause = false;
      this.current = index;
      // if (this.isiOS) {
      //   //ios切换直接自动播放下一个
      //   this.isVideoShow = false;
      //   // this.pauseVideo();
      // } else {
      //   //安卓播放时重置显示封面。图标等
      //   this.isVideoShow = true;
      //   this.iconPlayShow = true;
      // }
    },
    playvideo(event) {
      console.log("event方法");
      let video = document.querySelectorAll("video")[0];
      console.log("playvideo：" + this.current);
      console.log(video);
      this.isVideoShow = false;
      video.play();
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
  components: {},
  computed: {},
  mounted() {
    console.log(this.isAndroid);
    console.log(this.isiOS);
  }
};
</script>
