<template>
     <div class="lost">
       <img class="lost_img1" src="../../../static/img/404_01.png" alt="">
       <div style="width:100%">
         <router-link class="Back_index" tag="div" to="/">返回首页</router-link>
       </div>
       <img class="lost_img2" src="../../../static/img/404_02.png" alt="">
    </div>
</template>
<style>
#app{
  width: 100%;
  height: 100%;
}
.Back_index{
  width: 2.2rem;
  font-size: 0.3rem;
	text-align: center;
  color: white;
  padding: 0.18rem 0.45rem;
  background: #48c6f9;
  border-radius:0.3rem; 
  margin: 0 auto; 
}
</style>

<script>

export default {
  data() {
    return {
      
      
    };
  },
  mounted() {
    // window.addEventListener("scroll", () => {
    //   let excNavHeight =
    //     (window.innerHeight || document.documentElement.clientHeight) * 0.3;
    //   if (document.body.scrollTop > excNavHeight) {
    //     this.$refs.nav.className = "fixed";
    //   } else {
    //     this.$refs.nav.className = "";
    //   }
    // });
  }
};
</script>