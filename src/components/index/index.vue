<template>
  <div>
    <div class="header_search" id="fixedHeaderRoot">
      <div class="header_login float_left" v-on:click="kuaishantong">
        <div class="header_search_icon icon float_left" style="margin: 0.32rem 0 0 0.2rem;"></div>
      </div>
      <router-link tag="div" to="/search" class="header_search_inp float_left display_flex">
        <div class="header_search_inp_icon icon"></div>
        <div class="header_search_swiper">
          <marquee :interval="3000">
            <marquee-item v-for="i in search" :key="i" class="align-middle single_hid">{{ i.sName}}</marquee-item>
          </marquee>
        </div>
      </router-link>
    </div>
    <div class="header">
      <div style="width: 100%;height: 1rem; "></div>
      <div class="header_Popular">
        <span class="float_left">热搜：</span>
        <div class="header_Popular_center float_left">
          <a
            v-for="searchs in search"
            :key="searchs.id"
            class="header_Popular_center_leb"
            :href="searchs.sUrl"
            @click="Jumphref"
          >{{searchs.sName}}</a>
        </div>
      </div>
      <div class="header_navig">
        <div class="header_navig_a float_left">
          <a class="header_navig_hav" href="javascript:;">网站首页</a>
        </div>
        <div class="header_navig_a float_left">
          <a class href="http://m.szmlkq.com/html/about/">美莱简介</a>
        </div>
        <div class="header_navig_a float_left">
          <a class href="http://m.szmlkq.com/html/doctor/">专家团队</a>
        </div>
        <div class="header_navig_a float_left">
          <a class href="javascript:;">加入我们</a>
        </div>
        <div class="header_navig_a float_left">
          <a class href="http://m.szmlkq.com/html/road/">来院路线</a>
        </div>
      </div>
      <div class="header_swiper">
        <swiper :options="swiperOption" v-if="banner.length">
          <swiper-slide class="header_swiper_1" v-for="item in banner" :key="item.i">
            <a :href="item.bUrl">
              <img :src="item.bName" alt>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="header_swiper_item">
        <div class="icon horn float_left"></div>
        <div class="header_swiper_item_icon-c">
          <marquee :interval="1000">
            <marquee-item v-for="i in showBroadcast" :key="i" class="align-middle single_hid">
              <a :href="i.bUrl" class>
                <span class="header_swiper_item_title float_left">美莱巨惠</span>
                <div class="header_swiper_item_nav float_left">{{i.bContent}}</div>
              </a>
            </marquee-item>
          </marquee>
        </div>
        <div class="header_swiper_item_right float_right" v-on:click="kuaishantong">更多</div>
        <div class="header_swiper_item_lie float_right"></div>
      </div>
    </div>
    <div class="index_Category">
      <router-link
        v-for="item in assort"
        :key="item.id"
        tag="div"
        :to="{path: '/articlelist', query: { id:item.cRank}}"
        class="index_Category_center"
      >
        <div class="category_pos">
          <img :src="item.cImg" alt>
        </div>
        <span>{{item.cName}}</span>
      </router-link>
    </div>
    <!-- 医生 -->
    <div class="index_recommend" style="ma">
      <div class="index_recommend_title display_flex" style="position: relative;">
        <span></span>本月最热
      </div>

      <swiper :options="swiperOption5" class="doctors" v-if="doctor.length">
        <swiper-slide class="doctors_cen" v-for="s in doctor" :key="s.index">
          <div></div>
          <router-link tag="div" :to="{path:'/doctors',query:{id:s.dId}}">
            <div class="doctors_cen_avatar">
              <img :src="s.dHeadpic+'-mlkqtext' " alt>
            </div>
            <span class="doctors_name">{{s.dName}}</span>
            <div class="doctors_title">{{s.dIntro}}</div>
            <div class="doctors_reserve">预约</div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 页面插件 -->
    <keep-alive>
      <pojo></pojo>
    </keep-alive>
    <!-- 产品推荐 -->
    <div class="index_recommend" style="padding-bottom: 0.2rem;">
      <div class="index_recommend_title display_flex">
        <span></span>大家都在搜
      </div>
      <div class="search_all_total">
        <a
          class="search_all"
          v-for="(a,i) in search"
          :key="i"
          :class="{search_all_hov:i%2==0}"
          :href="a.sUrl"
        >#{{a.sName}}</a>
        <!-- <div class="search_all search_all_hov">#牙齿美白</div>
        <div class="search_all">#隐适美</div>
        <div class="search_all">#矫正牙齿要多久</div>
        <div class="search_all search_all_hov">#金属托槽矫正多少钱</div>
        <div class="search_all">#洗牙</div>
        <div class="search_all">#补单颗牙</div>-->
      </div>
    </div>
    <list></list>
    <!-- <div style="width: 1rem;height: 1rem;"></div> -->
    <!-- 热点文章轮播 -->
    <div class="hot_article">
      <div class="hot_article_swiper">
        <swiper :options="swiperOption2" class="article_swiper">
          <swiper-slide>
            <a style="display: block;" href="http://m.szmlkq.com/zt/2019/0423/page/2.html">
              <img src="http://m.szmlkq.com/zt/2019/0423/image/2-2.jpg" alt>
              <div class="hot_article_pos_mask"></div>
              <div class="hot_article_pos">
                <span>每日热点文章</span>
                <p>美莱口腔品牌种植团</p>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a style="display: block;" href="http://m.szmlkq.com/zt/2019/0423/page/5.html">
              <img src="http://m.szmlkq.com/zt/2019/0423/image/5-2.jpg" alt>
              <div class="hot_article_pos_mask"></div>
              <div class="hot_article_pos">
                <span>每日热点文章</span>
                <p>美莱口腔</p>
              </div>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination2" slot="pagination"></div>
      </div>
    </div>
    <!-- 推荐啥的我也不知道叫什么 -->
    <!-- 美莱论坛 -->
    <div class="index_recommend">
      <div class="index_recommend_title display_flex">
        <span></span>精选文章
      </div>
      <!-- 大论坛 -->
      <!-- <div class="forum_big">
        <router-link tag="div" to="/newforum" class="forum_big-cen forum_big_green">
          <div class="forum_big--title">
            <span class="forum_big--title-span1">牙齿修复要怎么做？</span>
            <span class="forum_big--title-span2">已有128条评论</span>
          </div>
          <div class="forum_big--avatar">
            <div class="forum_big--avatar-p">
              <div class="forum_big--avatar-cen forum_big--avatar-poa1">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="forum_big--avatar-cen forum_big--avatar-poa2">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="forum_big--avatar-cen forum_big--avatar-poa3">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="forum_big--avatar-cen forum_big--avatar-poa4">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <span>...</span>
            </div>
          </div>
          <div class="forum_big--bottom">
            <div class="icon forum_big--bottom-icon fine"></div>
            <div class="forum_big--bottom-img display_flex1">
              <img
                src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                alt
              >
            </div>
            <span>刘子逸</span>
            <span>128条评论</span>
            <span>30分钟前</span>
            <router-link tag="div" to="/newforum" class="forum_big--bottom-btn">进入论坛</router-link>
          </div>
        </router-link>
        <router-link tag="div" to="/newforum" class="forum_big-cen forum_big_blue">
          <div class="forum_big--title">
            <span class="forum_big--title-span1">牙齿修复要怎么做？</span>
            <span class="forum_big--title-span2">已有128条评论</span>
          </div>
          <div class="forum_big--avatar">
            <div class="forum_big--avatar-p">
              <div class="forum_big--avatar-cen forum_big--avatar-poa1">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="forum_big--avatar-cen forum_big--avatar-poa2">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="forum_big--avatar-cen forum_big--avatar-poa3">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="forum_big--avatar-cen forum_big--avatar-poa4">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <span>...</span>
            </div>
          </div>
          <div class="forum_big--bottom">
            <div class="icon forum_big--bottom-icon fine"></div>
            <div class="forum_big--bottom-img display_flex1">
              <img
                src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                alt
              >
            </div>
            <span>刘子逸</span>
            <span>128条评论</span>
            <span>30分钟前</span>
            <div class="forum_big--bottom-btn">进入论坛</div>
          </div>
        </router-link>
      </div>-->
      <ul class="list_thing">
        <router-link
          tag="li"
          v-for="(i,index) in lists"
          :key="index"
          :to="{path: '/article', query: { id: i.aId }}"
        >
          <p class="list_thing_top_p">{{i.aTitle}}</p>
          <div class="list_thing_center">
            <div class="list_thing_center_img" v-for="s in Images(i.aCoverimg)" :key="s">
              <img :src="s" alt>
            </div>
          </div>
          <div class="list_thing_bottom">
            <div class="icon fine list_thing_bottom_icon"></div>
            <span>{{i.aSignature}}</span>
            <span>30分钟前</span>
          </div>
        </router-link>
      </ul>
    </div>
    <!-- 特別推薦 -->
    <!-- <div class="GenericDiv">
      <div class="recommend">
        <div class="recommend_tit display_flex">
          <span></span>特别推荐 TEBIETUIJIAN
        </div>
        <router-link tag="div" to="/compared" class="experence_evaluation_Product">
          <div class="experence_evaluation_Product_nav">
            <div class="experence_evaluation_Product_nav_img item__content--medium item_content"></div>
            <div class="experence_evaluation_Product_nav_text">
              <div class="Ranking">
                <div class="Ranking_nav icon recommend1"></div>
              </div>
              <span class="Product_nav_text_span1">美国Invisalign隐适美</span>
              <div class="Product_nav_text_label">
                <span>#金属托槽矫正</span>
                <span>#牙齿矫正</span>
              </div>
              <div class="Product_text">擅长口腔种植，深圳美莱口腔医院莱口腔医院总部有....</div>
            </div>
          </div>
          <div class="experence_evaluation_Product_bottom">
            <div class="Product_bottom_xx" style="width: 1.5rem;">
              <el-rate :value="4" disabled :colors="['#feb234', '#feb234', '#feb234']"></el-rate>
            </div>
            <div class="Product_bottom_wen">问一问</div>
            <div class="Product_bottom_evaluation display_flex">
              <div class="icon link float_right"></div>
              <span class="float_right">222</span>
              <div class="icon comment float_right"></div>
              <span class="float_right">100</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>-->
    <load-more :show-loading="false" tip="我是有底线的" background-color="#fbf9fe"></load-more>
  </div>
</template>

<style scoped>
.align-middle {
  text-align: left;
}
</style>
<style lang="sass">
	@import '~/css/index.scss'
</style>
<script>
// require styles
import userPhoto from "../../../static/img/zwt.jpg";
import { Marquee, MarqueeItem, Scroller, LoadMore } from "vux";
import Vue from "vue";
const pojo = Vue.component("pojo", function(resolve) {
  setTimeout(function() {
    require(["../common/index_pojo"], resolve);
  }, 1000);
});
const list = Vue.component("list", function(resolve) {
  setTimeout(function() {
    require(["../common/index_list"], resolve);
  }, 1500);
});
export default {
  data() {
    return {
      valueDisabled: 3,
      swiperOption: {
        loop: true,
        autoplay: 3000,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperOption2: {
        loop: true,
        pagination: {
          el: ".swiper-pagination2"
        }
      },
      swiperOption5: {
        loop: true,
        initialSlide: 2,
        slidesPerView: 3,
        // spaceBetween: 30,
        centeredSlides: true
      },
      lists: [],
      swipers: [
        {
          img:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
          title: "牙齿不齐用隐形矫正好不好？-測試"
        },
        {
          img:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
          title: "種植一顆牙齒要多少錢？-測試"
        },
        {
          img:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg",
          title: "很想清走你脸上泪痕 如苦海的救兵？-測試"
        }
      ],
      scrolling: false,
      previousTop: 0,
      currentTop: 0,
      scrollDelta: 1,
      scrollOffset: 100,
      assort: [],
      search: [],
      ListShow: true,
      banner: [],
      doctor: [],
      showBroadcast: [] //广播展示
    };
  },
  mounted() {
    let vm = this;

    this.$api.article
      .showSearch({
        sBelong: "hot_seek"
      })
      .then(res => {
        console.log("热搜");
        console.log(res);
        vm.search = res;
      });
    // banner展示
    this.$api.article
      .showBanner({
        bSite: "top",
        bBelong: "homepage"
      })
      .then(res => {
        console.log("banner展示");
        vm.banner = res;
      });
    // 分类展示
    this.$api.article
      .showIfy({
        cBelong: "top_ify"
      })
      .then(res => {
        console.log("分类展示");
        vm.assort = res;
      });
    // 医生展示
    this.$api.article
      .doctorList({
        doctor: "other"
      })
      .then(res => {
        console.log("1111");
        console.log(res);
        vm.doctor = res;
      });
    this.$api.article
      .showBroadcast({
        bBelong: "top"
      })
      .then(res => {
        vm.showBroadcast = res;
      });

    this.$api.article.showArticleAll().then(res => {
      console.log("文章");
      console.log(res);
      if (res.data == 0) {
        vm.lists = res.obj;
      } else {
        alert("出现了个问题");
      }
    });
  },
  //组件
  components: {
    pojo,
    list,
    Marquee,
    MarqueeItem,
    Scroller,
    LoadMore
  },
  methods: {
    // img分割
    Images(i) {
      let a = [];
      if (i != null) {
        a = i.split(",");
      }
      return a;
    },
    handleScroll() {
      if (!this.scrolling) {
        this.scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(this.autoHideHeader, 250)
          : requestAnimationFrame(this.autoHideHeader);
      }
    },
    autoHideHeader() {
      this.currentTop = $(window).scrollTop();
      this.checkSimpleNavigation(this.currentTop);
      this.previousTop = this.currentTop;
      this.scrolling = false;
    },
    checkSimpleNavigation(currentTop) {
      let mainHeader = document.getElementById("fixedHeaderRoot");
      if (this.previousTop - this.currentTop > this.scrollDelta) {
        mainHeader.classList.remove("is-hidden");
      } else if (
        this.currentTop - this.previousTop > this.scrollDelta &&
        this.currentTop > this.scrollOffset
      ) {
        mainHeader.classList.add("is-hidden");
      }
    },
    Jumphref() {
      // window.location.href = "http://m.szmlkq.com/";
    },
    a() {
      console.log("111");
    },
    details(id) {
      // this.$router.push({
      //   path: "/forum_details",
      //   name: "forum_details",
      //   query: {
      //     id: id
      //   }
      // });
      console.log(id);
      window.location.href = id;
    },
    kuaishantong() {
      this.$text();
    }
  },
  beforeDestroy() {
    console.log("页面销毁");
    // window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    $route(to, from) {
      // data数据操作
      if (to.name == "HelloWorld") {
        console.log("进入了首页");
        window.addEventListener("scroll", this.handleScroll);
      } else {
        console.log("离开了首页");
        window.removeEventListener("scroll", this.handleScroll);
      }
      console.log(to.name);
      console.log(from);
    }
  }
};
function lazyLoadView(AsyncView) {
  console.log(AsyncView);
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require("../common/Loading.vue").default,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require("../common/Timeout.vue").default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 3000,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children);
    }
  });
}
</script>
<style>
.el-rate__icon {
  margin-right: 0;
}
</style>
