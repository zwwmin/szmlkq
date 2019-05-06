<template>
  <!-- 评论 -->
  <div class="evadetails">
    <div class="fixed_top">
      <div class="fixed_top_cen left" v-on:click="back">
        <div class="icon left_arrow_gray"></div>
      </div>
      <div class="fixed_top_title">43条回复</div>
    </div>
    <div class="evadetails_top">
      <div class="evadetails_top_ava">
        <img src="http://www.dianlibian.com/res/images/imgv4/chunwan.png" alt>
      </div>
      <div class="evadetails_right">
        <div class="evadetails_right_name">张维维</div>
        <p>成人及青少年牙颌畸形的传统及隐形矫治，美国Invisalign隐适美隐形矫正，各种美学隐形矫正，独创的鼻唇颏侧颜E线美学矫正方法更是受到众人的一致赞赏</p>
        <div class="evadetails_right_bottom">
          <span class="evadetails_right_bottom_time">15分钟前</span>
          <div class="evadetails_right_bottom_icon display_flex1">
            <div class="icon link"></div>
          </div>
        </div>
      </div>
    </div>
    <div style="background:rgba(247,247,247,1);">
      <div class="evadetails_heat" v-on:click="heat">
        <div class="icon sort float" style="margin:0.06rem 0.1rem 0 0;"></div>热度
      </div>
      <div class="streazong"></div>
      <ul class="evadetaila_personal_discuss">
        <li
          class="evadetaila_personal_discuss_model"
          v-for="(i,item) in commentList.ReplyS"
          :key="item"
          v-on:click="CommentClick($event,i,item)"
        >
          <img class="avatar" src="http://www.dianlibian.com/res/images/imgv4/chunwan.png" alt>
          <div class="evadetaila_personal_discuss_model_div">
            <span class="title">{{i.replyName}}</span>
            <span class="title_wen">{{i.reply}}</span>
          </div>
          <!-- 回复 -->
          <div class="evadetaila_personal_discuss_model_time">
            <span class="time_span">35分钟前</span>
            <div class="evad_icon like display_flex1">
              <div class="icon link" data-value="1"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="evadetails_footer_leaveblank"></div>
    <div class="evadetails_footer">
      <div class="evadetails_footer_input float">
        <input type="text" placeholder="回复" v-model="comInput">
        <!-- <div class="icon evadetails_footer_input_icon"></div> -->
      </div>
      <div class="evadetails_footer_btn float" v-on:click="btn">发表</div>
    </div>
  </div>
</template>
<style lang="sass" >
@import '~/css/stream.scss'
</style>
<script>
export default {
  data() {
    return {
      Id: this.id,
      commentList: {
        Name: "小熊1",
        title: "测试数据1111111111111",
        time: "15分钟前",
        ReplyS: [
          {
            reply: "测试数据,测试数据,测试数据,测试数据,测试数据,v,测试数据",
            replyName: "小兔2",
            name: "小熊1"
          },
          {
            reply: "单颗牙齿磕断并脱落，因为是门牙位置。",
            replyName: "小兔3",
            name: "小熊1"
          },
          {
            reply: "单颗牙齿磕断并脱落，因为是门牙位置。",
            replyName: "小兔3",
            name: "小熊1"
          },
          {
            reply: "单颗牙齿磕断并脱落，因为是门牙位置。",
            replyName: "小兔3",
            name: "小熊1"
          },
          {
            reply: "单颗牙齿磕断并脱落，因为是门牙位置。",
            replyName: "小兔3",
            name: "小熊1"
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    // 事件委托点击
    CommentClick(e, i, item) {
      let vm = this;
      const da = e.target.getAttribute("data-value");
      switch (da) {
        case "1":
          this.LinkClick(e.target);
          break;
        case "2":
          this.RemClick(e.target);
          break;
        default:
          console.log(1);
      }
    },
    // 点爱心
    LinkClick(e) {
      e.classList.add("link_red");
      e.classList.remove("link");
      e.setAttribute("data-value", "2");
    },
    RemClick(e) {
      e.classList.remove("link_red");
      e.classList.add("link");
      e.setAttribute("data-value", "1");
    },
    btn() {
      let vm = this;
      console.log(vm.comInput);
  
    },
    // 热度
    heat() {
      this.commentList.reverse();
    },
    back() {
      this.$router.go(-1);
    }
  },
  props: {
    id: "",
    evadeta: ""
  }
};
</script>

