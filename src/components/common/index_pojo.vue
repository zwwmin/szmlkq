<template>
  <div class="experence_evaluation" v-if="article != []">
    <!-- 模版 -->
    <div class="experence_evaluation_stencil_one" v-for="(i,key) in article" :key="key">
      <router-link tag="div" :to="{path: '/stream', query: { id: i.dId }}" class="stencil_one_name">
        <div class="stencil_one_name_img">
          <img class="stencil_one_name_img_1" :src="i.dHeadpic+'-szmlkq'" alt>
          <!-- <div class="stencil_one_name_img_jia icon plus"></div> -->
        </div>
        <div class="stencil_one_name_title">
          <div class="stencil_one_name_title_top">
            <span class="stencil_one_name_title_top_span1">{{i.dName}}</span>
            <!-- <div class="stencil_one_name_title_top_crown icon grown" v-if="i.isMember"></div>
            <span class="stencil_one_name_title_top_span2">V{{i.vip}}</span>-->
            <!-- <div class="stencil_one_name_title_top_span3">
              <i class="el-icon-more"></i>
            </div>-->
          </div>
          <div class="stencil_one_name_title_bottom">
            <div class="stencil_one_name_title_bottom_time">{{i.dAddtime}}</div>
          </div>
        </div>
      </router-link>
      <router-link tag="div" :to="{path: '/stream', query: { id: i.dId }}" class="stencil_one_text">
        {{wenz(i.dContent)}}
        <span class="stencil_one_text_more" v-if="i.dContent.length > 54">[更多]</span>
        <div class="stencil_one_text_map">
          <span>{{i.dSite}}</span>
          <div class="stencil_one_text_map_icon icon address"></div>
        </div>
      </router-link>
      <!-- <div class="stencil_one_label" data-value="labelv">
        <a
          :href="s.url"
          data-value="labelv"
          class="stencil_one_label1"
          v-for="(s,sAll) in i.label"
          :key="sAll"
          v-bind:class="[sAll%2 == 1 ? 'stencil_one_label1-ho': '1']"
        >{{s.name}}</a>
      </div>-->
      <div class="stencil_one_img" v-if="i.videoUrl == null">
        <div class="stencil_one_img1 previewer-demo-img" v-for="b in i.materials" :key="b">
          <img data-value="img" v-lazy="b.mUrl" preview="1" alt>
        </div>
      </div>
      <div class="stencil_one_img" v-else>
        <div class="stencil_one_img_video">
          <!-- <img :src="i.videoUrl" alt> -->
          <video
            x5-playsinline
            x-webkit-airplay="allow"
            webkit-playsinline="true"
            playsinline="true"
            disable-video-auto-fullscreen="true"
            video-no-fixed-top="true"
            preload="auto"
            controls="controls"
            :src="i.videoUrl"
            style
          >
            <!-- <source :src="DataVideo.vVideourl" type="video/mp4">您的浏览器不支持该视频格式。 -->
          </video>
          <router-link
            tag="div"
            :to="{path: '/stream', query: { id: i.dId }}"
            class="play display_flex1"
          >
            <div class="icon play_icon"></div>
          </router-link>
        </div>
      </div>
      <div class="stencil_one_heat">
        <span class="span1">{{i.dBrowse}}已看</span>
        <!-- <div class="stencil_one_heat_information">
          <div class="information_icon icon heat" v-for="e in i.hou" :key="e"></div>
          <div class="information_icon icon heat_gray" v-for="c in (5 - i.hou)" :key="c"></div>
        </div>-->
        <div class="btn-icon">
          <div class="stencil_one_heat_evaluation" v-on:click="thank(key,$event)">
            <div class="icon fabiao4"></div>
            <span>{{i.dLike}}</span>
          </div>
        </div>
        <router-link tag="div" :to="{path: '/stream', query: { id: i.dId }}" class="btn-icon">
          <div class="stencil_one_heat_evaluation">
            <div class="icon comment" data-value="comment"></div>
            <span>111</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 广告模块 -->
    <a href="http://m.szmlkq.com/" class="experence_evaluation_advertising">
      <img src="http://data.szmlkq.com/2019/04/18//1555573221885.jpg" alt>
      <!-- <span>广告</span> -->
    </a>
    <!-- 图片模版 -->
  </div>
</template>
<style >
.video-js .vjs-big-play-button {
  height: 2em;
  width: 2em;
  border-radius: 50%;
}
</style>
<script>
import { Previewer, TransferDom } from "vux";
export default {
  props: [],
  directives: {
    TransferDom
  },
  components: { Previewer },
  data() {
    return {
      value5: 4,
      videoList: [
        {
          src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
          img:
            "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg"
        },
        {
          src:
            "http://dongzi-1255683506.cosbj.myqcloud.com/prod/common/media/audio/mov_bbb.mp4",
          img:
            "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg"
        }
      ],
      article: []
    };
  },
  methods: {
    getImgUrl(row) {
      return "http://pphcs84a8.bkt.clouddn.com/" + row + ".png";
    },
    logIndexChange(arg) {
      console.log(arg);
    },
    thank(i, e) {
      // 父元素第一个
      let vm = this;
      let ad = e.currentTarget.firstChild;
      console.log(ad.getAttribute("class"));
      console.log(ad.getAttribute("class").indexOf("fabiao4"));
      if (ad.getAttribute("class").indexOf("fabiao4") > -1) {
        ad.classList.remove("fabiao4");
        ad.classList.add("biao-4");
        vm.article[i].dLike += 1;
        this.$api.article.dynamicLike({
          dId:vm.article[i].dId
        }).then(res => {
          console.log(res);
        });
      } else {
        ad.classList.remove("biao-4");
        ad.classList.add("fabiao4");
        vm.article[i].dLike -= 1;
      }
    },
    wenz(i) {
      console.log(i.length);
      let a = i;
      if (i.length > 54) {
        a = i.substr(0, 54) + "...";
      }
      return a;
    }
  },
  mounted() {
    let vm = this;
    this.$api.article.showDynamic().then(res => {
      console.log(res.data[0].videoUrl);
      vm.article = res.data;
    });
  },
  computed: {}
};
</script>
