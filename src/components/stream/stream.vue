<template>
  <div class="stream" >
    <div class="fixed_top" style="color:rgba(51,51,51,1);">
      <div class="fixed_top_cen fixed_top_cen_left" v-on:click="back">
        <div class="icon left_arrow"></div>
      </div>
    </div>
    <div class="stream_list experence_evaluation" v-if="data != []">
      <!-- <div class="stream_list_top">
        <div class="stream_list_top_c display_flex">
          <img
            class="stream_list_avatar"
            src="https://avatars2.githubusercontent.com/u/25892514?s=40&v=4"
            alt
          >
          <div class="stream_list_top_name">
            <span class="span1">小朋友</span>
            <span class="span2">深圳市</span>
          </div>
        </div>
        <div class="list_right stream_list_top_c">
          <div class="stream_dian float_right">
            <i class="el-icon-more"></i>
          </div>
          <div class="stream_attention float_right" v-on:click="btn">{{care}}</div>
        </div>
      </div>
   
      <div class="stream_list_swiper">
        <swiper :options="swiperOption">
          <swiper-slide class="header_swiper_1">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt>
          </swiper-slide>
          <swiper-slide class="header_swiper_1">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
          </swiper-slide>
          <swiper-slide class="header_swiper_1">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg" alt>
          </swiper-slide>
        </swiper>
        <div class="stream_list_swiper_pagination" style="left: 90%;" slot="pagination"></div>
      </div>
      <div class="stream_list_title">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观，总给人一种滑稽感，牙缺后发音也不标准，在美莱做了</div>
      <div class="stream_list_label">
        <div class="stream_list_label_div">#数字化种植</div>
      </div>-->
      <div class="experence_evaluation_stencil_one">
        <div class="stencil_one_name">
          <div class="stencil_one_name_img">
            <img class="stencil_one_name_img_1" :src="data.dHeadpic" alt>
            <div class="stencil_one_name_img_jia icon plus"></div>
          </div>
          <div class="stencil_one_name_title">
            <div class="stencil_one_name_title_top">
              <span class="stencil_one_name_title_top_span1">{{data.dName}}</span>
              <!-- <div class="stencil_one_name_title_top_crown icon grown" v-if="data.isMember"></div>
              <span class="stencil_one_name_title_top_span2">V{{data.vip}}</span> -->
              <!-- <div class="stencil_one_name_title_top_span3">
              <i class="el-icon-more"></i>
              </div>-->
            </div>
            <div class="stencil_one_name_title_bottom">
              <div class="stencil_one_name_title_bottom_time">{{data.dAddtime}}</div>
            </div>
          </div>
        </div>
        <div class="stencil_one_text">
          {{data.dContent}}
          <div class="stencil_one_text_map">
            <span>{{data.dSite}} </span>
            <div class="stencil_one_text_map_icon icon address"></div>
          </div>
        </div>
        <!-- <div class="stencil_one_label">
          <a
            class="stencil_one_label1"
            v-for="(s,sAll) in data.label"
            :key="sAll"
            v-bind:class="[sAll%2 == 1 ? 'stencil_one_label1-ho': '1']"
          >{{s.name}}</a>
        </div> -->
        <div class="stencil_one_img" v-if="data.videoUrl == null">
          <div class="stencil_one_img1 previewer-demo-img" v-for="b in data.materials" :key="b">
            <img v-lazy="b.mUrl" preview="2" alt>
          </div>
        </div>
        <div class="stencil_one_img" v-else>
          <div class="stencil_one_img_video">
            <img :src="data.imgVideo" alt>
            <div class="play display_flex1">
              <div class="icon play_icon"></div>
            </div>
          </div>
        </div>
        <div class="stencil_one_heat">
          <span class="span1">{{data.dBrowse}}已看</span>
          <div class="btn-icon">
            <div class="stencil_one_heat_evaluation" v-on:click="thank($event)">
              <div class="icon fabiao4" ></div>
              <span>{{data.dLike}}</span>
            </div>
          </div>
          <div class="btn-icon">
            <div class="stencil_one_heat_evaluation" @click="evadeta">
              <div class="icon comment"></div>
              <span>111</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <evadetails v-if="data != []" ref="evad" :parentArray="parentArray"></evadetails>
  </div>
</template>
<style lang="sass" >
@import '~/css/stream.scss'
</style>
<style lang="sass">
	@import '~/css/index.scss'
</style>
<script>
export default {
  data() {
    return {
      data: {},
      parentArray:this.$route.query.id
    };
  },
  mounted() {
    console.log(this.$route.query.id)
    let vm = this;
    this.$api.article.showDynamicById({
      dId:this.$route.query.id
    }).then(res => {
      console.log(res);
      vm.data = res.obj
    });
  },
  methods: {
    btn() {
      console.log(1);
      if (this.care == "已关注") {
        this.care = "+关注";
      } else {
        this.care = "已关注";
      }
    },
    back() {
      this.$router.go(-1); //返回上一层
    },
    evadeta(){
      this.$refs.evad.changeArray();
    },
     thank(e){
      // 父元素第一个
      let vm =this;
      let ad = e.currentTarget.firstChild;
      console.log(ad.getAttribute("class"))
      console.log(ad.getAttribute("class").indexOf("fabiao4"))
      if (ad.getAttribute("class").indexOf("fabiao4") > -1) {
        ad.classList.remove("fabiao4");
        ad.classList.add("biao-4");
        vm.data.dLike +=1;
        this.$api.article.dynamicLike({
          dId:vm.data.dId
        }).then(res => {
          console.log(res);
        });
      } else {
        ad.classList.remove("biao-4");
        ad.classList.add("fabiao4");
        vm.data.dLike -=1
      }
    }
  },
  components: {
    evadetails: () =>
      import(/* webpackChunkName: "evadetails" */ "../common/evadetails.vue")
  }
};
</script>
