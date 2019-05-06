<template>
  <div class="ass">
    <div class="ss">
      <router-link to="index">首页页面-100%</router-link>
    </div>
    <!-- <transition mode="out-in" enter-active-class="bounceInLeft" leave-active-class="bounceOutRight"> -->
    <div class="ss">
      <router-link to="search">搜索页面-100%</router-link>
    </div>
    <div class="ss">
      <router-link to="product">产品页面-科普-100%</router-link>
    </div>
    <div class="ss">
      <router-link to="evadetails">产品评价详情</router-link>
    </div>
    <div class="ss">
      <router-link to="evadetai">路由不匹配-404页面</router-link>
    </div>

    <div class="ss">
      <router-link to="404">404页面</router-link>
    </div>
    <x-button>submit</x-button>
    <x-button type="primary">primary</x-button>
    <x-button type="warn">Delete</x-button>
  </div>
</template>

<script>
import { XButton } from "vux";

export default {
  name: "HelloWorld",
  components: { XButton },
  data() {
    return {
      message: "Vue的生命周期",
      show: true,
      popupVisible: false
    };
  },
  mounted() {
    this.getData();
    
  },
  methods: {
    getData() {
      this.$api.article.articleList().then(res => {
        // 执行某些操作
        console.log('111');
        console.log(res);
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style  scoped>
.ass {
  width: 100%;
  height: 400px;
}
.ss {
  width: 100%;
  height: 30px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
