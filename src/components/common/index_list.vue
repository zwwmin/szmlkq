<template>
  <div>
    <div v-show="ListShows" class="index_list_btn display_flex1">
      <span
        class="list_btn btn1"
        v-bind:class="[Active ? 'list_btn_active' : '']"
        v-on:click="isActive"
      >最新</span>
      <span
        class="list_btn btn2"
        v-bind:class="[ !Active ? 'list_btn_active' : '']"
        v-on:click="isActive"
      >最热</span>
    </div>
    <!-- <button-tab v-model="demo01">
        <button-tab-item @on-item-click="consoleIndex()">最新</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">最热</button-tab-item>
    </button-tab>-->
    <div class="index_list">
      <div class="column">
        <div
          class="column_item column_item_margin"
          v-for="(item,i) in Lists1"
          :key="i"
          v-on:click="CommentClick(i,$event,item.vId)"
        >
          <div  :class="{list_img:i%2==0,list_img1:i%2!=0}">
            <img v-lazy="item.vImgurl" alt>
            <div class="icon list_img-icon fiery"></div>
            <div class="list_img-play display_flex1">
              <div class="icon play_icon1"></div>
            </div>
          </div>
          <p>{{item.vTitle}}</p>
          <div class="list_bottom">
            <div class="list_bottom_left float_left display_flex">
              <div class="list_bottom_avatar marig_right10">
                <img :src="item.vHeadpic" alt>
              </div>
              <span>{{item.vName}}</span>
            </div>
            <div class="list_bottom_right float_right" data-value="link1">
              <span class="float_right" data-value="link1">{{item.vLike}}</span>
              <div
                class="icon float_right marig_right10"
                data-value="link1"
                v-bind:class="[item.islove ? 'link_red' : 'link']"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div
          class="column_item column_item_margin1"
          v-for="(s,t) in Lists2"
          :key="t"
          v-on:click="CommentClick(t,$event,s.vId)"
        >
          <div  :class="{list_img:t%2!=0,list_img1:t%2==0}">
            <img v-lazy="s.vImgurl" alt>
            <div class="icon list_img-icon fiery"></div>
            <div class="list_img-play display_flex1">
              <div class="icon play_icon1"></div>
            </div>
          </div>
          <p>{{s.vTitle}}</p>
          <div class="list_bottom">
            <div class="list_bottom_left float_left display_flex">
              <div class="list_bottom_avatar marig_right10">
                <img :src="s.vHeadpic" alt>
              </div>
              <span>{{s.vName}}</span>
            </div>
            <div class="list_bottom_right float_right" data-value="link2">
              <span data-value="link2" class="float_right">{{s.vLike}}</span>
              <div
                data-value="link2"
                class="icon float_right marig_right10"
                v-bind:class="[s.islove ? 'link_red' : 'link']"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index_list_more display_flex1" v-on:click="s">
      查看更多
      <i class="el-icon-arrow-down" style="font-size:0.4rem;color:#cacaca;"></i>
    </div>
  </div>
</template>
<style >
</style>
<script>
import { ButtonTab, ButtonTabItem, Divider } from "vux";
export default {
  props: [],
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider
  },
  data() {
    return {
      Active: true,
      ListShows: this.ListShow,
      Lists1: [],
      Lists2: [],
      startId: 0,
      endId: 10
    };
  },
  methods: {
    isActive() {
      this.Active = !this.Active;
    },
    More() {
      let vm = this;
      this.$api.article
        .showContent({
          startId: vm.startId,
          endId: vm.endId
        })
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            if (i % 2 == 1) {
              var a = res[i];
              a["islove"] = false;
              vm.Lists2.push(a);
            } else {
              let s = res[i];
              s["islove"] = false;
              vm.Lists1.push(s);
            }
          }
        });
    },
    s() {
      let vm = this;
      vm.startId += 10;
      console.log(vm.startId)
      this.More();
    },
    consoleIndex() {
      console.log("click demo01", this.demo01);
    },
    CommentClick(i, e, videoId) {
      console.log(videoId);
      const da = e.target.getAttribute("data-value");
      console.log(da);
      switch (da) {
        case "link1":
          this.LinkClick1(e.target, i);
          break;
        case "link2":
          this.LinkClick2(e.target, i);
          break;
        case "2":
          this.RemClick(e.target, i);
          break;
        case "img":
          break;
        case "labelv":
          break;
        default:
          this.$router.push({
            path: "/stream_video",
            name: "stream_video",
            query: {
              id: videoId
            }
          });
      }
    },
    // 点爱心
    LinkClick1(e, i) {
      this.Lists1[i].islove = !this.Lists1[i].islove;
      if (this.Lists1[i].islove) {
        this.Lists1[i].vLike += 1;
      } else {
        this.Lists1[i].vLike -= 1;
      }
    },
    LinkClick2(e, i) {
      this.Lists2[i].islove = !this.Lists2[i].islove;
      if (this.Lists2[i].islove) {
        this.Lists2[i].vLike += 1;
      } else {
        this.Lists2[i].vLike -= 1;
      }
    }
  },
  mounted() {
    this.More();
  },
  props: {
    ListShow: ""
  }
};
</script>
