<template>
  <div class="stream">
    <div class="fixed_top" style="color:rgba(51,51,51,1);">
      <div class="fixed_top_cen fixed_top_cen_left" v-on:click="back">
        <div class="icon left_arrow_gray"></div>
      </div>
      <router-link tag="div" to="/search" class="foxed_top_search display_flex">
        <div class="foxed_top_search_icon icon"></div>热门话题牙齿矫正的优势
      </router-link>
    </div>
    <div class="stream_list">
      <div class="stream_details_tit display_flex">
        <div class="icon fine stream_details_tit_icon"></div>牙齿矫正要多少钱？
      </div>
      <!-- 头像 -->
      <div class="stream_list_top">
        <div class="stream_list_top_c display_flex">
          <img
            class="stream_list_avatar"
            src="https://avatars2.githubusercontent.com/u/25892514?s=40&v=4"
            alt
          >
          <div class="stream_list_top_name">
            <span class="span3">刘子逸</span>
          </div>
        </div>
        <!-- <div class="list_right stream_list_top_c">
          <div class="stream_details_attention float_right">+关注</div>
        </div> -->
      </div>
      <!-- 轮播 -->
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
      <div class="stream_list_title">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观，总给人一种滑稽感，牙缺后发音也不标准，在美莱做l</div>
      <!-- 收藏 -->
      <!-- <div class="stream_details_collection">
          <div class="collection" v-on:click='BtnColl'>
              <div class="icon icon_collection collection_icon"></div>
              <span>{{Collection}}</span>
          </div>
          <div class="collection_tit">好的内容 快收藏起来吧</div>
      </div> -->
    </div>
    <div class="mlkq_line"></div>
    <!-- 相关提问 -->
    <div class="related">
        <span class="related_title">相关提问</span>
        <div class="related_cen">
            <div class="related_cen_icon display_flex1 float">
                <div class="icon ask "></div>
            </div>
            <div class="related_cen_tie float single_hid">牙齿矫正要多少钱？隐形牙齿矫正要多长时间多长时间</div>
        </div>
        <div class="related_img">
            <img src="http://pphcs84a8.bkt.clouddn.com/1.png" alt="">
            <img src="http://pphcs84a8.bkt.clouddn.com/2.png" alt="">
            <img src="http://pphcs84a8.bkt.clouddn.com/3.png" alt="">
        </div>
         <div class="related_cen  related_cen_20" style="height:auto;overflow: auto;">
            <div class="related_cen_icon display_flex1 float" style="margin-top: 0.25rem;">
                <div class="icon dazi "></div>
            </div>
            <div class="related_cen_tie1 float">
                <div class="div"> <span class="span1">【精彩回答】</span>牙齿修复要去深圳美莱口腔</div>
                <div class="div">2.牙齿修复要去深圳美莱口腔 ... <span class="span2">更多</span></div>
            </div>
        </div>
        <div class="related_time">
            <span class="related_time--span float">6个回答-回答时间：2019年3月28日</span>
            <div class="related_time--love display_flex1 float" v-on:click="links">
                <div class="icon related_time--love-icon" v-bind:class="[islink ? 'link_red':'link']"></div>{{link}}
            </div>
        </div>
    </div>
    <div class="mlkq_line"></div>
    <div class="index_recommend">
      <div class="index_recommend_title display_flex">
        <span></span>大家都在搜
      </div>
      <div class="search_all_total">
        <div class="search_all">#洗牙</div>
        <div class="search_all search_all_hov">#牙齿美白</div>
        <div class="search_all">#隐适美</div>
        <div class="search_all">#矫正牙齿要多久</div>
        <div class="search_all search_all_hov">#金属托槽矫正多少钱</div>
        <div class="search_all">#洗牙</div>
        <div class="search_all">#补单颗牙</div>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <evadetails></evadetails>
  </div>
</template>
<style lang="sass" >
@import '~/css/stream.scss'
</style>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".stream_list_swiper_pagination",
          type: "fraction"
        }
      },
      Collection:0
      ,link:888
      ,islink:false
    };
  },
  mounted() {},
  methods: {
    BtnColl(){
      this.Collection +=1
    },
    back(){
      this.$router.go(-1);//返回上一层
    },
    links(){
      this.islink=!this.islink;
      this.link += 1

    }
  },
  components: {
    evadetails: () =>
      import(/* webpackChunkName: "evadetails" */ "../common/evadetails.vue")
  }
};
</script>
