<template>
  <div class="article" v-if="data != []">
    <div class="fixed_top">
      <div class="fixed_top_cen left" v-on:click="back">
        <div class="icon left_arrow"></div>
      </div>
    </div>
    <div class="article_center">
      <div class="article_center_title">
        <h1>{{data.aTitle}}</h1>
        <div class="list_thing_bottom1 float">
          <div class="icon fine list_thing_bottom_icon1"></div>
          <span>张维维</span>
          <span>30分钟前</span>
        </div>
      </div>
      <div class="article_center_html" v-html="data.aContent"></div>
    </div>
    <div class="mlkq_line"></div>
    <!-- <div class="article_list">
      <ul class="list_thing">
        <router-link tag="li" :to="{path: '/article', query: { id: 1 }}">
          <div class="list_thing_top float">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观</div>
          <div class="list_thing_center float">
            <div class="list_thing_center_img">
              <img src="../../../static/img/1.png" alt>
            </div>
            <div class="list_thing_center_img">
              <img src="../../../static/img/1.png" alt>
            </div>
            <div class="list_thing_center_img">
              <img src="../../../static/img/1.png" alt>
            </div>
          </div>
          <div class="list_thing_bottom float">
            <div class="icon fine list_thing_bottom_icon"></div>
            <span>张维维</span>
            <span>30分钟前</span>
          </div>
        </router-link>
        <router-link tag="li" :to="{path: '/article', query: { id:2}}">
          <div class="list_thing_left float">
            <img src="../../../static/img/1.png" alt>
          </div>
          <div class="list_thing_right float">
            <p>单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观，因为是门牙位置，牙齿缺失会非常影响美观</p>
          </div>
          <div class="list_thing_bottom float">
            <div class="icon fine list_thing_bottom_icon"></div>
            <span>张维维</span>
            <span>30分钟前</span>
          </div>
        </router-link>
        <li v-on:click="details()">
          <div class="list_thing_top float">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观，因为是门牙位置，牙齿缺失会非常影响美观</div>
          <div class="list_thing_center float">
            <div class="list_thing_center_img2">
              <img src="../../../static/img/1.png" alt>
            </div>
            <div class="list_thing_center_img2">
              <img src="../../../static/img/1.png" alt>
            </div>
          </div>
          <div class="list_thing_bottom float">
            <div class="icon fine list_thing_bottom_icon"></div>
            <span>张维维</span>
            <span>30分钟前</span>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<style lang="sass" >
@import "~/css/article.scss"
</style>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    let vm = this;
    console.log(this.$route.query.id);
    vm.ArticleBy(this.$route.query.id)
  },
  methods: {
    ArticleBy(id) {
      let vm = this;
      this.$api.article
        .showArticleBy({
          aId: id
        })
        .then(res => {
          console.log("文章");
          console.log(res);
          vm.data= res.obj
        });
    },
     back() {
      this.$router.go(-1); //返回上一层
    }
  },
  components: {},
  
  watch: {
    $route(to, from) {
      // data数据操作
      this.ArticleBy(to.query.id)
      console.log(to);
      console.log(from);
    }
  }
};
</script>
