<template>
  <div class="doctors_fill">
    <div class="fixed_top doctors_fill_top">
      <div class="fixed_top_cen fixed_top_cen_left" v-on:click="back">
        <div class="icon left_arrow"></div>
      </div>预约挂号
    </div>
    <div class="doctors_fill_center">
      <div class="doctors_fill_center--avatar">
        <div class="avatar float">
          <div class="avatar_na">
            <img :src="data.dHeadpic" alt>
          </div>
          <div class="doctors_center_avatar_rz icon rz"></div>
        </div>
        <span class="span1">{{data.dName}}</span>
        <span class="span2">{{data.dDuty}}</span>
      </div>
      <div class="doctors_fill_center--time">
        <div class="center--time">
          就诊日期：
          <span>{{doctorsData.sDate}}</span>
        </div>
        <div class="center--time">
          就诊时间：
          <span>{{doctorsData.sTime}}</span>
        </div>
      </div>
      <div class="mlkq_line"></div>
      <div class="doctors_fill_center--input">
        <div class="dovtors_input" style>
          <span class="dovtors_input_span float">选择就诊人</span>
          <input class="float" type="text" v-model="doctorsData.sName" placeholder="姓名">
        </div>
        <div class="dovtors_input">
          <span class="dovtors_input_span float">短信接收号码</span>
          <input class="float" type="text" v-model="doctorsData.sPhone" placeholder="电话号码">
        </div>
      </div>
    </div>
    <div
      class="doctors_fill_btn"
      v-on:click="request"
      v-loading.fullscreen.lock="fullscreenLoading"
    >
      <div class="doctors_fill--btn">下一步</div>
    </div>
  </div>
</template>
<style lang="sass" >
@import "~/css/doctors.scss"
</style>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false,
      swiperOption: {
        loop: true,
        pagination: {
          el: ".stream_list_swiper_pagination",
          type: "fraction"
        }
      },
      doctorsDome: "",
      doctorsTime: "",
      doctorsData: {
        sDate: "", //日期
        sTime: "", //时间
        sName: "", //名字
        sPhone: "", //手机
        dId: "" //医生id
      },
      data: {}
    };
  },
  mounted() {
    console.log(localStorage);
    let vm = this;
    this.doctorsData.sDate = localStorage.doctorsDate;
    this.doctorsData.sTime =
      localStorage.doctorsTime + "" + localStorage.doctorsDome;
    this.doctorsData.dId = localStorage.doctorsID;
    this.$api.article
      .doctorListId({
        dId: this.doctorsData.dId
      })
      .then(res => {
        console.log("1111");
        console.log(res);
        vm.data = res;
      });
  },
  methods: {
    request() {
      let vm = this;
      if (vm.doctorsData.sName == "" && vm.doctorsData.sPhone == "") {
        alert("请输入名字和电话号码");
        return;
      } else {
        vm.fullscreenLoading = true;
        vm.$api.article.subscribe(vm.doctorsData).then(res => {
          if (res.data == 0) {
            setTimeout(() => {
              this.fullscreenLoading = false;
              this.$router.push("/doctors_carry");
            }, 500);
          } else {
            this.$text();
          }
        });
      }
    },
    back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>
