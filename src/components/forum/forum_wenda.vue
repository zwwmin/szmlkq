<template>
  <div class="forum_taolun">
    <div class="forum_taolun-top">
      <router-link tag="div" to="/search" class="search_header_input_in">
        <input type="text" placeholder="热门话题牙齿矫正的优势">
      </router-link>
      <div class="search_header_input_cancel">话题</div>
    </div>
    <div class="index_recommend">
      <div class="index_recommend_title display_flex">大家都在搜</div>
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
    <div class="forum_taolun-news">
      <span class="forum_taolun-news--span">推荐产品</span>
      <!-- 推荐产品 -->
      <div class="forum_taolun-news-Products">
        <div class="forum_taolun-news-Products-div" v-for="i in 3 " :key="i">
          <div class="div-img"></div>
          <span class="div-span">隐适美</span>
          <div class="div-btn">关注</div>
        </div>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <!-- 相关提问 -->
    <div class="related">
      <span class="related_title">相关提问</span>
      <router-link tag="div" to="/forum_details" class="wenda" v-for="i in 2" :key="i">
        <div class="related_cen">
          <div class="related_cen_icon display_flex1 float">
            <div class="icon ask"></div>
          </div>
          <div class="related_cen_tie float single_hid">牙齿矫正要多少钱？隐形牙齿矫正要多长时间多长时间</div>
        </div>
        <div class="related_img">
          <img src="http://pphcs84a8.bkt.clouddn.com/1.png" alt>
          <img src="http://pphcs84a8.bkt.clouddn.com/2.png" alt>
          <img src="http://pphcs84a8.bkt.clouddn.com/3.png" alt>
        </div>
        <div class="related_cen related_cen_20" style="height:auto;overflow: auto;">
          <div class="related_cen_icon1 display_flex1 float">
            <div class="icon dazi"></div>
          </div>
          <div class="related_cen_tie1 float">
            <div class="div">
              <span class="span1">【精彩回答】</span>牙齿修复要去深圳美莱口腔
            </div>
            <div class="div">
              2.牙齿修复要去深圳美莱口腔 ...
              <span class="span2">更多</span>
            </div>
          </div>
        </div>
        <div class="related_time">
          <span class="related_time--span float">6个回答-回答时间：2019年3月28日</span>
          <div class="related_time--love display_flex1 float">
            <div class="icon link related_time--love-icon"></div>222
          </div>
        </div>
      </router-link>
      <router-link tag="div" to="/forum_details" class="wenda">
        <div class="related_cen">
          <div class="related_cen_icon display_flex1 float">
            <div class="icon ask"></div>
          </div>
          <div class="related_cen_tie float single_hid">牙齿矫正要多少钱？隐形牙齿矫正要多长时间多长时间</div>
        </div>
        <div class="related_cen" style="height:auto;overflow: auto;">
          <div class="related_cen_icon1 display_flex1 float">
            <div class="icon dazi"></div>
          </div>
          <div class="related_cen_tie1 float">
            <div class="div">
              <span class="span1">【精彩回答】</span>牙齿修复要去深圳美莱口腔
            </div>
            <div class="div">
              2.牙齿修复要去深圳美莱口腔 ...
              <span class="span2">更多</span>
            </div>
          </div>
        </div>
        <div class="related_time">
          <span class="related_time--span float">6个回答-回答时间：2019年3月28日</span>
          <div class="related_time--love display_flex1 float">
            <div class="icon link related_time--love-icon"></div>222
          </div>
        </div>
      </router-link>
      <!-- 广告 -->
      <div class="forum-guangao">
          <img src="../../../static/img/1-1.jpg" alt>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <div class="forum_taolun-news">
      <span class="forum_taolun-news--span">热门提问</span>
      <div class="forum_taolun-news--tiwen">
        <span class="forum_taolun-news--tiwen-span1">牙齿修复要怎么做？</span>
        <div class="forum_taolun-news--tiwen-span2">
          <span class="span1">[精彩回答]</span>牙齿修复要去深圳美莱口腔.
        </div>
        <div class="forum_taolun-news--tiwen-span2">
          2.牙齿修复要去深圳美莱口腔
          <span class="span2">...更多</span>
        </div>
        <div class="forum_taolun-news--tiwen-bottom">
          <div class="tiwen-bottom-left">6个回答-回答时间：2019年3月28日</div>
          <div class="tiwen-bottom-btn">我要回答</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" >
@import '~/css/stream.scss'
</style>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>
