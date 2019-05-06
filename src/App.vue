<template>
  <div id="app">
    <!-- <transition mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <router-view class="ass"></router-view>
    
    </transition>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <loading v-model="isLoading"></loading>
    <back-top></back-top>
  </div>
</template>

<script>
import BackTop from "./components/BackTop";
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  name: "App",
  mounted() {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    if (!flag) {
      window.location.href = "http://www.mylikekqsz.com/";
    }
  },
  components: {
    BackTop,
    "back-top": BackTop,
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
};
</script>
<style lang='scss'>
@import "../static/css/zww.scss";
</style>




