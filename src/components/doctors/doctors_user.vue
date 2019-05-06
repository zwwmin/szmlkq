<template>
  <div class="doctors">
    <div class="doctors_user">
      <div class="doctors_mask">
        <div class="doctors_mask_back">
          <img src="http://pphcs84a8.bkt.clouddn.com/%E5%8C%BB%E7%94%9F%E8%83%8C%E6%99%AF%E5%9B%BE.jpg" alt>
        </div>
        <div class="doctors_mask_back2"></div>
        <div class="doctors_mask_center">
          <div class="fixed_top" style="border: 0;">
            <div class="fixed_top_cen left" v-on:click="back">
              <div class="icon left_arrow"></div>
            </div>医生主页
            <!-- <div class="fixed_top_cen fixed_top_cen_right">
              <div class="icon share_it"></div>
            </div>-->
          </div>
        </div>
        <!-- <div class="doctors_mask_yuan"></div> -->
      </div>
      <div class="doctors_center">
        <div class="doctors_center_info float_left">
          <div class="doctors_center_info_name">
            {{doctor.dName}}
            <span>{{doctor.dDuty}}</span>
          </div>
          <div class="doctors_center_info_rate">
            <el-rate :value="5" disabled :colors="['#feb234', '#feb234', '#feb234']"></el-rate>
          </div>
          <div
            class="doctors_center_info_wen doctors_center_info_wen_back"
          >从业21年|执业资格证编号:{{doctor.dNumber}}</div>
          <span class="doctors_center_info_wen">医师微博:{{doctor.dWeibo}}</span>
        </div>
        <div class="doctors_center_avatar float_left">
          <div class="doctors_center_avatar_cen">
            <img :src="doctor.dHeadpic" alt>
          </div>
          <div class="doctors_center_avatar_rz icon rz"></div>
        </div>
        <div class="doctors_center_four float_left">
          <div class="doctors_center_four_nav float_left">
            <span class="span1">{{doctor.dGood}}</span>
            <span class="span2">好评</span>
          </div>
          <div class="doctors_center_four_nav float_left">
            <span class="span1">{{doctor.dFans}}</span>
            <span class="span2">粉丝</span>
          </div>
          <div class="doctors_center_four_nav float_left">
            <span class="span1">{{doctor.dConsult}}</span>
            <span class="span2">咨询</span>
          </div>
          <div class="doctors_center_four_nav float_left">
            <span class="span1">{{doctor.dSubscribe}}</span>
            <span class="span2">总预约</span>
          </div>
        </div>
        <div class="mlkq_line float_left"></div>
        <div class="homepage float_left">
          <div class="homepage_title homepage_left">医生主页</div>
          <div class="homepage_lie">
            <span class="homepage_lie_span1 float_left">医生姓名:</span>
            <span class="homepage_lie_span2 float_left">{{doctor.dName}}</span>
          </div>
          <div class="homepage_lie">
            <span class="homepage_lie_span1 float_left">担任职务:</span>
            <span class="homepage_lie_span2 float_left">{{doctor.dDuty}}</span>
          </div>
          <div class="homepage_lie">
            <span class="homepage_lie_span1 float_left">擅长项目:</span>
            <span class="homepage_lie_span2 float_left">{{doctor.dAdept}}</span>
          </div>
          <div class="homepage_lie">
            <span class="homepage_lie_span1 float_left">职业简介:</span>
            <span class="homepage_lie_span2 float_left">{{doctor.dIntro}}</span>
          </div>
        </div>
      </div>
      <div class="mlkq_line"></div>
      <div class="reservation">
        <span>预约挂号</span>
        <div class="reservation_swiper">
          <!-- <swiper :options="swiperOption" style="width:100%;height:100%;">
          <swiper-slide class="reservation_swiper_center">-->

          <div class="swiper_center">
            <div class="swiper_center_Column1 swiper_center_Column float">
              <div class="swiper_center_Column-lattice"></div>
              <div class="swiper_center_Column-lattice1">
                <span>上午</span>
              </div>
              <div class="swiper_center_Column-lattice1">
                <span>下午</span>
              </div>
            </div>
            <div class="swiper_center_Column float" v-for="i in temp" :key="i">
              <div class="swiper_center_Column-lattice">
                <span class="span1">{{i.week}}</span>
                <span class="span2">{{i.date}}</span>
              </div>
              <div
                class="swiper_center_Column-lattice1"
                v-on:click="reservation(i.dateItem,i.week,'上午')"
              >
                <div v-if="i.isReser == 0">
                  <div class="dian dian_green"></div>
                  <div class="display_flex1 div_span3">
                    <span class="span3">点击预约</span>
                  </div>
                </div>
                <div v-else>
                  <div class="dian dian_red"></div>
                  <span class="span4">热</span>
                  <span class="span5">申请</span>
                </div>
              </div>
              <div
                class="swiper_center_Column-lattice1"
                v-on:click="reservation(i.dateItem,i.week,'下午')"
              >
                <div v-if="i.isReser == 1">
                  <div class="dian dian_green"></div>
                  <div class="display_flex1 div_span3">
                    <span class="span3">点击预约</span>
                  </div>
                </div>
                <div v-else>
                  <div class="dian dian_red"></div>
                  <span class="span4">热</span>
                  <span class="span5">申请</span>
                </div>
              </div>
            </div>
          </div>
          <!-- </swiper-slide>
            <swiper-slide class="reservation_swiper_center">
              <div class="swiper_center"></div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>-->
          <!-- <div class="data_tisi">左右滑动日历查看下周时间</div> -->
          <div class="data_btn">
            <div class="data_btn_1 data_btn_right" v-on:click="reservations">
              <div class="icon data data_icon"></div>在线预约
            </div>
            <div class="data_btn_1" v-on:click="kuaishantong">
              <div class="icon Customer data_icon" ></div>人工客服
            </div>
          </div>
        </div>
      </div>
      <div class="mlkq_line"></div>
      <!-- <div class="service_project">
        <span>预约挂号</span>
        <swiper :options="swiperOption1" class="service_project_swiper">
          <swiper-slide class="service_project_cent" v-for="i in 6" :key="i">
            <div class="service_project_cent-img"></div>
            <span class="span1">【隐形托牙矫正】</span>
            <span class="span2">￥21800</span>
            <span class="span3">已售48</span>
            <div class="service_project_cent_btn" v-on:click="kuaishantong">咨询</div>
          </swiper-slide>
        </swiper>
        <div class="service_project-pagination" slot="pagination"></div>
      </div> -->
      <div class="mlkq_line"></div>
      <!-- 案例日记 -->
      <!-- <div class="case_diary">
        <div class="index_More">
          <div class="index_More-left">案例日记</div>
          <div class="index_More-right display_flex">
            <span>更多</span>
            <div class="icon mask"></div>
          </div>
        </div>
        <div class="case_diary_cen">
          <div class="case_diary_cen_top">
            <div class="case_diary_cen_top--avatar"></div>
            <div class="case_diary_cen_top--name">
              <div class="case_diary_name">
                <span class="float">张小姐</span>
                <div class="icon girl case_diary_icon"></div>
              </div>
              <div class="case_diary_data">2月12日</div>
            </div>
            <div class="case_diary_cen_top--attention float_right">+关注</div>
          </div>
          <div class="case_diary_cen_img">
            <img src="http://data.szmlkq.com/9ab8d066056743c2f08fd0aaaf957658.jpeg" alt>
          </div>
          <div class="case_diary_cen_title">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观，牙齿缺失会非常影响美观</div>
          <div class="index_class_bottom">
            <span class="index_class_bottom--leftwenz">1238人已看</span>
            <div class="index_class_bottom--attention display_flex">
              <div class="icon link index_class_bottom--icon"></div>222
            </div>
          </div>
        </div>
        <div class="case_diary_cen">
          <div class="case_diary_cen_top">
            <div class="case_diary_cen_top--avatar"></div>
            <div class="case_diary_cen_top--name">
              <div class="case_diary_name">
                <span class="float">张小姐</span>
                <div class="icon girl case_diary_icon"></div>
              </div>
              <div class="case_diary_data">2月12日</div>
            </div>
            <div class="case_diary_cen_top--attention float_right">+关注</div>
          </div>
          <div class="case_diary_cen_img">
            <div class="case_diary_cen_img1 case_diary_cen_img-left">
              <img src="http://data.szmlkq.com/24DAD250-1383-44b7-BBE6-D5180EF0EA78.png" alt>
              <div class="case_diary_cen_img1-qian">矫正前</div>
            </div>
            <div class="case_diary_cen_img1 case_diary_cen_img-right">
              <img src="http://data.szmlkq.com/10BD9A6A-7198-498e-81E5-B9868DA806F3.png" alt>
              <div class="case_diary_cen_img1-qian">矫正后</div>
            </div>
          </div>
          <div class="case_diary_cen_title">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观，牙齿缺失会非常影响美观</div>
          <div class="index_class_bottom">
            <span class="index_class_bottom--leftwenz">1238人已看</span>
            <div class="index_class_bottom--attention display_flex">
              <div class="icon link index_class_bottom--icon"></div>222
            </div>
          </div>
        </div>
        <div class="case_diary_cen-n">
          <div class="case_diary_cen-n-c" v-for="i in 2" :key="i">
            <div class="index_class_top">
              <div class="index_class_top-avatar float">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="index_class_top-name float">张小姐</div>
              <div class="index_class_top-icon display_flex1">
                <div class="icon girl"></div>
              </div>
            </div>
            <div class="case_diary_cen-n-c-img">
              <img src="http://data.szmlkq.com/24DAD250-1383-44b7-BBE6-D5180EF0EA78.png" alt>
              <div class="case_diary_cen-n-c-img-qian case_diary_cen-n-c-img-qian1">矫正前</div>
            </div>
            <div class="case_diary_cen-n-c-img">
              <img src="http://data.szmlkq.com/24DAD250-1383-44b7-BBE6-D5180EF0EA78.png" alt>
              <div class="case_diary_cen-n-c-img-qian case_diary_cen-n-c-img-qian2">矫正前</div>
            </div>
            <div class="case_diary_cen-n-c-tit single_hid">单颗牙齿磕断并脱落单颗牙齿磕断并脱落....</div>
            <div class="case_diary_cen-n-c-biao">#牙齿矫正</div>
            <div class="index_class_bottom">
              <span class="index_class_bottom--leftwenz">1238人已看</span>
              <div class="index_class_bottom--attention display_flex">
                <div class="icon link index_class_bottom--icon"></div>222
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 患者评论 -->
      <!-- <div class="doctors_comment">
        <div class="index_More">
          <div class="index_More-left">患者评论（999+）</div>
          <div class="index_More-right display_flex">
            <span>更多</span>
            <div class="icon mask"></div>
          </div>
        </div>
        <ul class="list_thing">
          <router-link tag="li" to="/forum_details" v-for="index in lists" :key="index.id">
            <div class="index_class_top doctors_comment-bottom doctors_comment-avatar-top">
              <div class="index_class_top-avatar float">
                <img
                  src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg-mlkqtext"
                  alt
                >
              </div>
              <div class="index_class_top-name float">{{index.name}}</div>
              <div class="index_class_top-zi1 float">15小时前</div>
            </div>
            <div class="list_thing_top">{{index.title}}</div>
            <div class="list_thing_center">
              <div class="list_thing_center_img">
                <img src="http://pphcs84a8.bkt.clouddn.com/1.png" alt>
              </div>
              <div class="list_thing_center_img">
                <img src="http://pphcs84a8.bkt.clouddn.com/2.png" alt>
              </div>
              <div class="list_thing_center_img">
                <img src="http://pphcs84a8.bkt.clouddn.com/3.png" alt>
              </div>
            </div>
            <div class="index_class_bottom doctors_comment-bottom">
              <span class="index_class_bottom--leftwenz">就诊时间：2018-05-16</span>
              <div class="index_class_bottom--attention display_flex">
                <div class="icon link index_class_bottom--icon"></div>
                {{index.link}}
              </div>
            </div>
          </router-link>
        </ul>
      </div> -->

    <list></list>
    </div>
    <div>
      <popup
        v-model="show"
        height="6rem"
        is-transparent
        position="bottom"
        style="padding-top: 0.2rem;"
      >
        <div class="select_time">
          <div class="select_time_top">
            <span>{{RearTime.dataTime}}</span>
            <span>{{RearTime.week}}</span>
            <span>{{RearTime.ismorning}}</span>
            <div class="select_time_top--down" v-on:click="reservation">X</div>
          </div>
          <div class="select_time_nav">
            <div
              class="time_nav float"
              v-for="(i, index) in time"
              :key="index"
              v-bind:class="[ qwerqwre == index ? 'time_nav_Sele':'']"
              v-on:click="addClassFun(index,i.time)"
            >
              <span class="time_nav_top">{{i.time}}</span>
              <span>（{{i.data}}/3）</span>
            </div>
          </div>
          <router-link tag="div" to="/doctors_fill"  class="select_time_btn" >下一步</router-link>
        </div>
      </popup>
    </div>
  </div>
</template>
<style lang='scss'>
@import "~/css/doctors.scss";
</style>
<style lang="sass">
	@import '~/css/index.scss'
</style>
<style>
.el-rate__icon {
  margin-right: 0;
}
</style>

<script>
const list = Vue.component("list", function(resolve) {
  setTimeout(function() {
    require(["../common/index_list"], resolve);
  }, 1500);
});
import { Popup } from "vux";
import { stringify } from "querystring";
export default {
  props: [],
  components: { Popup, list },
  data() {
    return {
      // swiperOption: {
      //   loop: true,
      //   pagination: {
      //     el: ".swiper-pagination"
      //   }
      // },
      lists: [
        {
          img: "https://avatars2.githubusercontent.com/u/25892514?s=40&v=4",
          name: "灰太狼",
          link: 22,
          read: 1122,
          islink: true,
          title: "单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观1",
          titleImg: "../../assets/img/list.jpg"
        },
        {
          img: "https://avatars2.githubusercontent.com/u/25892514?s=40&v=4",
          name: "喜羊羊",
          link: 221,
          read: 1122,
          islink: true,
          title: "单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观1",
          titleImg: "../../assets/img/list.jpg"
        }
      ],
      qwerqwre: 0,
      show: false,
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 5,
        pagination: {
          el: ".service_project-pagination",
          clickable: true
        }
      },
      time: [],
      time1: [
        {
          time: "08:00-09:00",
          data: Math.floor(Math.random() * 3)
        },
        {
          time: "09:00-10:00",
          data: Math.floor(Math.random() * 3)
        },
        {
          time: "10:00-11:00",
          data: Math.floor(Math.random() * 3)
        },
        {
          time: "11:00-12:00",
          data: Math.floor(Math.random() * 3)
        }
      ],
      time2: [
        {
          time: "02:00-03:00",
          data: Math.floor(Math.random() * 3)
        },
        {
          time: "03:00-04:00",
          data: Math.floor(Math.random() * 3)
        },
        {
          time: "04:00-05:00",
          data: Math.floor(Math.random() * 3)
        },
        {
          time: "05:00-06:00",
          data: Math.floor(Math.random() * 3)
        }
      ],
      temp: [],
      RearTime: {
        dataTime: "19990",
        week: "周一",
        ismorning: 1
      },
      doctor: []
    };
  },
  mounted() {
    console.log(this.$route.query.id);
    localStorage.doctorsID = this.$route.query.id;
    this.$api.article
      .doctorListId({
        dId: this.$route.query.id
      })
      .then(res => {
        console.log("1111");
        console.log(res);
        vm.doctor = res;
      });
    let vm = this;
    for (let i = 1; i < 8; i++) {
      const time = new Date(new Date().setDate(new Date().getDate() + i));
      const year = time.getFullYear();
      const month = `0${time.getMonth() + 1}`.slice(-2);
      const strDate = `0${time.getDate()}`.slice(-2);
      const week = vm.$util.DateBig(time.getDay());
      const randomTime = Math.floor(Math.random() * 2);
      vm.temp.push({
        date: `${month}-${strDate}`,
        dateItem: `${year}-${month}-${strDate}`,
        week: "周" + `${week}`,
        isReser: randomTime
      });
    }
  },
  methods: {
    reservation(date, i, s) {
      this.RearTime.dataTime = date;
      this.RearTime.week = i;
      this.RearTime.ismorning = s;
      localStorage.doctorsDate = date;
      localStorage.doctorsTime = `${i}-${s}`;
      if (s == "上午") {
        this.time = this.time1;
      } else if (s == "下午") {
        this.time = this.time2;
      }
      this.show = !this.show;
    },
    kuaishantong() {
      this.$text();
    },
    reservations() {
      this.$message({
        message: "请选择日期",
        type: "warning"
      });
    },
    addClassFun(i, data) {
      console.log(data);
      localStorage.doctorsDome = data;
      this.qwerqwre = i;
    },
    next() {
      console.log(11)
      this.$router.push("/doctors_fill");
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  },
  computed: {
 
  }
};
</script>
