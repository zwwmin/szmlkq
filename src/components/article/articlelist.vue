<template>
  <div class="article">
    <tab bar-position="bottom" :line-width="2" bar-active-color="#b2d346">
      <tab-item
        selected
        v-for="(i,index) in data"
        :key="index"
        v-if="index == 0"
        @on-item-click="onItemClick(i.sort.sId)"
      >{{i.sort.sName}}</tab-item>
      <tab-item
        v-for="(i,index) in data"
        :key="index"
        v-if="index != 0"
        @on-item-click="onItemClick(i.sort.sId)"
      >{{i.sort.sName}}</tab-item>
    </tab>
    <div class="article_list">
      <ul class="list_thing" v-if="List != null">
        <!-- 第一种 -->
        <router-link
          tag="li"
          v-for="(i,item) in List"
          :key="item"
          :to="{path: '/article', query: { id: i.aId }}"
        >
          <div v-if="length(i.aCoverimg) == 3">
            <div class="list_thing_top float">{{i.aTitle}}</div>
            <div class="list_thing_center float">
              <div class="list_thing_center_img" v-for="s in Images(i.aCoverimg)" :key="s.index">
                <img :src="s" alt>
              </div>
            </div>
            <div class="list_thing_bottom float">
              <div class="icon fine list_thing_bottom_icon"></div>
              <span>{{i.aSignature}}</span>
              <span>{{time(i.aAddtime)}}</span>
            </div>
          </div>
          <div v-else-if="length(i.aCoverimg) == 2">
            <div class="list_thing_top float">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观，因为是门牙位置，牙齿缺失会非常影响美观</div>
            <div class="list_thing_center float">
              <div class="list_thing_center_img2" v-for="s in Images(i.aCoverimg)" :key="s.index">
                <img :src="s" alt>
              </div>
            </div>
            <div class="list_thing_bottom float">
              <div class="icon fine list_thing_bottom_icon"></div>
              <span>{{i.aSignature}}</span>
              <span>{{time(i.aAddtime)}}</span>
            </div>
          </div>
          <div v-else-if="length(i.aCoverimg) == 1">
            <div class="list_thing_left float">
              <img :src="i.aCoverimg" alt>
            </div>
            <div class="list_thing_right float">
              <p>{{i.aTitle}}</p>
            </div>
            <div class="list_thing_bottom float">
              <div class="icon fine list_thing_bottom_icon"></div>
              <span>{{i.aSignature}}</span>
              <span>{{time(i.aAddtime)}}</span>
            </div>
          </div>
          <div v-else-if="length(i.aCoverimg) == 0">
            <div class="list_thing_p">
              <p>{{i.aTitle}}</p>
            </div>
            <div class="list_thing_bottom float">
              <div class="icon fine list_thing_bottom_icon"></div>
              <span>{{i.aSignature}}</span>
              <span>{{time(i.aAddtime)}}</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<style lang="sass" >
@import "~/css/article.scss"
</style>
<script>
import { Tab, TabItem } from "vux";
import { stringify } from "querystring";
export default {
  data() {
    return {
      indexId: "",
      data: [],
      List: [],
      ListId:''
    };
  },
  mounted() {
    let vm = this;
    console.log(this.$route.query.id);
    this.$api.article
      .showSortById({
        sSid: this.$route.query.id
      })
      .then(res => {
        console.log(res);
        vm.data = res.obj;
        console.log(res.obj[0].sort.sId)
        vm.ListId = res.obj[0].sort.sId;
        vm.wenzlist();
      });
    
  },
  methods: {
    switchTabItem(index) {
      console.log("on-before-index-change", index);
      this.indexId = index;
    },
    onItemClick(i) {
      console.log(i);
      this.ListId = i;
      this.wenzlist();
    },
    wenzlist() {
      let vm = this;
      this.$api.article.showArticleSort({
        sId:this.ListId
      }).then(res => {
        console.log(res);
        vm.List = res.obj;
      });
    },
    Images(i) {
      let a = [];
      if (i != null) {
        a = i.split(",");
      }
      return a;
    },
    length(i) {
      let s = 0;
      if (i != null && i != "") {
        s = i.split(",").length;
        console.log(s)
      }else{
        console.log('nu;;')
      }
      return s;
    },
    time(t) {
      var d = new Date(t);
      var times =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();

      return times
    }
  },
  components: {
    Tab,
    TabItem
  }
};
</script>
