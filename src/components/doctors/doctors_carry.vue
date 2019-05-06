<template>
  <div class="doctors_user">
    <div class="fixed_top doctors_fill_top">
      <router-link tag="div" to="/" class="fixed_top_cen fixed_top_cen_left">
        <div class="icon left_arrow"></div>
      </router-link>
      预约成功
      <router-link tag="div" to="/"  class="fixed_top_right_btn">完成</router-link>
    </div>
    <div class="carry">
      <div class="icon icon_carry carry--ic"></div>
      <span>预约成功</span>
    </div>
<!-- 
    <div class="mlkq_line"></div>
    <div class="service_project">
      <span>服务项目</span>
      <swiper :options="swiperOption1" class="service_project_swiper">
        <swiper-slide class="service_project_cent" v-for="i in 6" :key="i">
          <div class="service_project_cent-img"></div>
          <span class="span1">【隐形托牙矫正】</span>
          <span class="span2">￥21800</span>
          <span class="span3">已售48</span>
          <div class="service_project_cent_btn">咨询</div>
        </swiper-slide>
      </swiper>
      <div class="service_project-pagination" slot="pagination"></div>
    </div> -->
  </div>
</template>
<style lang="sass" >
@import "~/css/doctors.scss"
</style>
<style>
body {
  background: white;
}
</style>
<script>
export default {
  data() {
    return {
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 5,
        pagination: {
          el: ".service_project-pagination",
          clickable: true
        }
      }
    };
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>
