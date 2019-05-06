<template>
  <div class="forum_taolun">
    <div class="forum_taolun-top">
      <div class="search_header_input_in">
        <input type="text" placeholder="热门话题牙齿矫正的优势">
      </div>
      <div class="search_header_input_cancel">话题</div>
    </div>
    <div class="index_recommend">
      <div class="index_recommend_title display_flex">热门话题</div>
      <div class="search_all_total">
        <div class="search_all">#洗牙</div>
        <div class="search_all search_all_hov">#牙齿美白</div>
        <div class="search_all">#隐适美</div>
        <div class="search_all">#矫正牙齿要多久</div>
        <div class="search_all search_all_hov">#金属托槽矫正多少钱</div>
        <div class="search_all">#洗牙</div>
        <div class="search_all">#补单颗牙</div>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <div class="forum_taolun-news">
      <span class="forum_taolun-news--span">论坛动态</span>
      <div class="forum_taolun-news--title">
        <div class="forum_taolun-news--title-icon display_flex1">
          <div class="icon fine"></div>
        </div>
        <div class="forum_taolun-news--title-t">牙齿修复要怎么做？</div>
      </div>
      <!-- <div class="forum_taolun-news--center" v-for="i in 3" :key="i">
        <div class="avatar-div">
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg" alt>
          <span>刘子逸</span>
        </div>
        <span class="forum_taolun-news--center-title">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观</span>
        <div class="forum_taolun-news--center-bottom">
          <span class="center-bottom-span1">15小时前</span>
          <div class="center-bottom-div display_flex1 center-bottom-div-10">
            <div class="icon link"></div>
          </div>
          <div class="center-bottom-div display_flex1">
            <div class="icon comment"></div>
          </div>
          <div class="center-bottom-div display_flex1">
            <div class="icon link"></div>
          </div>
        </div>
      </div>-->
      <div class="evadetails">
        <div class="evadetails_heat" style="margin: 0 0.25rem 0 0;" v-if="isActive ==1">
          <div class="icon sort float" style="margin:0.06rem 0.1rem 0 0;"></div>热度
        </div>
        <ul class="evadetaila_personal_discuss" v-if="isActive == 1" v-on:click="CommentClick">
          <!-- 第一个评论 -->
          <li
            class="evadetaila_personal_discuss_model"
            v-for="(i,item) in commentList"
            :key="item"
            v-bind:class="[item == 0 ? '' : 'evadetaila_personal_discuss_model-border']"
            v-on:click="CommentClick($event,i,item)"
          >
            <img class="avatar" src="http://www.dianlibian.com/res/images/imgv4/chunwan.png" alt>
            <div class="evadetaila_personal_discuss_model_div">
              <span class="title">{{i.Name}}</span>
              <span class="title_wen">{{i.title}}</span>
            </div>
            <!-- 回复 -->
            <div class="comment_reply" v-if="JSON.stringify(i.ReplyS) != '[]'">
              <div class="comment_reply_div" v-for="s in i.ReplyS" :key="s">
                <span>{{s.replyName}}</span>回复
                <span>{{s.name}}:</span>
                {{s.reply}}
              </div>
            </div>
            <span
              class="comment_more"
              data-value="more"
              v-if="JSON.stringify(i.ReplyS) != '[]'"
            >查看更多共{{ReplysList(i.ReplyS)}}条回复></span>
            <div class="evadetaila_personal_discuss_model_time">
              <span class="time_span">{{i.time}}</span>
              <div class="evad_icon like display_flex1">
                <div class="icon link" data-value="1"></div>
              </div>
              <!-- 評論 -->
              <div class="evad_icon like display_flex1" data-value="comment">
                <div class="icon comment" data-value="comment"></div>
              </div>
            </div>
          </li>
          <!-- <div class="index_list_more display_flex1" style="background: #fff" v-show="maskShow" v-on:click="dateMore">
            查看更多
            <i class="el-icon-arrow-down" style="font-size:0.4rem;color:#cacaca;"></i>
          </div>-->
          <div class="taolun-com display_flex">
            <span>查看全部 1,928 个评论</span>
            <div class="icon mask"></div>
          </div>
        </ul>
        <div class="taolun_input">
          <div class="taolun_input1 float">
            <input type="text" placeholder="发表" id="send-content" v-model="currentReplyInput">
            <!-- <div class="icon evadetails_footer_input_icon"></div> -->
          </div>
          <div class="taolun_input_btn1 float" v-on:click="btn_more">回复</div>
        </div>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <div class="forum_taolun-news">
      <span class="forum_taolun-news--span">热门活动</span>
      <div class="forum_taolun-news--guangao">
        <div class="news--guangao">
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-b75af660b3768fe28bb21289645e48a0_r.jpg" alt>
        </div>
        <div class="news--guangao">
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-2248390dd3700e8156850d85e7de1b7e_r.jpg" alt>
        </div>
        <div class="news--guangao">
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg" alt>
        </div>
      </div>
      <div class="forum_taolun-news--guangao1">
        <img src="../../../static/img/1-1.jpg" alt>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <div class="forum_taolun-news">
      <span class="forum_taolun-news--span">精彩话题</span>
      <router-link
        tag="div"
        to="/forum_details"
        class="forum_taolun-news--center"
        v-for="i in 2"
        :key="i"
      >
        <div class="avatar-div">
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg" alt>
          <span>刘子逸</span>
        </div>
        <span class="forum_taolun-news--center-title1">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观</span>
        <div class="forum_taolun-news--center-img">
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-b75af660b3768fe28bb21289645e48a0_r.jpg" alt>
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-2248390dd3700e8156850d85e7de1b7e_r.jpg" alt>
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-68ee336879d5554f3b6a9a7aec54355c_r.jpg" alt>
        </div>
        <div class="forum_taolun-news--center-bottom">
          <span class="center-bottom-span2">15小时前</span>
          <!-- <div class="center-bottom-div display_flex1 center-bottom-div-10">
            <div class="icon link"></div>
          </div>-->
          <!-- <div class="center-bottom-div display_flex1">
            <div class="icon comment"></div>
          </div>-->
          <!-- <div class="center-bottom-div display_flex1">
            <div class="icon link"></div>
          </div>-->
        </div>
      </router-link>

      <div class="forum_taolun-news--center" v-for="i in 2" :key="i">
        <div class="avatar-div">
          <img src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg" alt>
          <span>刘子逸</span>
        </div>
        <span class="forum_taolun-news--center-title1">单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观</span>
        <router-link tag="div" to="/stream_video" class="forum_taolun-news--center-video">
          <img src="http://pphcs84a8.bkt.clouddn.com/9ea6ee30-74e2-4011-80be-77e7bda0d318.jpg" alt>
          <div class="display_flex1 forum_taolun-news--center-video-cen">
            <div class="icon play_icon2"></div>
          </div>
        </router-link>
        <div class="forum_taolun-news--center-bottom">
          <span class="center-bottom-span2">15小时前</span>
          <!-- <div class="center-bottom-div display_flex1 center-bottom-div-10">
            <div class="icon link"></div>
          </div>
          <div class="center-bottom-div display_flex1">
            <div class="icon comment"></div>
          </div>
          <div class="center-bottom-div display_flex1">
            <div class="icon link"></div>
          </div>-->
        </div>
      </div>
    </div>
    <div class="forum_taolun-news">
      <span class="forum_taolun-news--span">热门提问</span>
      <router-link
        tag="div"
        to="/forum_wenda"
        class="forum_taolun-news--tiwen"
        v-for="i in 2"
        :key="i"
      >
        <span class="forum_taolun-news--tiwen-span1">牙齿修复要怎么做？</span>
        <div class="forum_taolun-news--tiwen-span2">
          <span class="span1">[精彩回答]</span>牙齿修复要去深圳美莱口腔.
        </div>
        <div class="forum_taolun-news--tiwen-span2">
          2.牙齿修复要去深圳美莱口腔
          <span class="span2">...更多</span>
        </div>
        <div class="forum_taolun-news--tiwen-bottom">
          <div class="tiwen-bottom-left">6个回答-回答时间：2019年3月28日</div>
          <div class="tiwen-bottom-btn">进入问答</div>
        </div>
      </router-link>
    </div>回复
    <div>
      <popup v-model="showComment" position="bottom" height="100%" @on-hide="down">
        <div class="masks">
          <div class="fixed_top" style="color: rgb(51, 51, 51);">
            <div class="fixed_top_cen fixed_top_cen_left" v-on:click="showCommentDown">
              <div class="icon left_arrow_gray"></div>
            </div>所有回复
          </div>
          <ul class="evadetaila_personal_discuss">
            <li class="evadetaila_personal_discuss_model" style="border:0;">
              <img src="http://www.dianlibian.com/res/images/imgv4/chunwan.png" alt class="avatar">
              <div class="evadetaila_personal_discuss_model_div">
                <span class="title">{{currentReplyList.Name}}</span>
                <span class="title_wen">{{currentReplyList.title}}</span>
              </div>
            </li>
          </ul>
          <ul class="evadetaila_personal_discuss" style="background:#f7f7f7">
            <!-- 第一个评论 -->
            <li
              class="evadetaila_personal_discuss_model"
              v-for="(i,item) in currentReplyList.ReplyS"
              :key="item"
              style="border:0;"
            >
              <img class="avatar" src="http://www.dianlibian.com/res/images/imgv4/chunwan.png" alt>
              <div
                class="evadetaila_personal_discuss_model_div"
                style="border-bottom: 0.01rem solid gainsboro;padding-bottom: 0.2rem;"
              >
                <span class="title">{{i.replyName}}</span>
                <span class="title_wen">{{i.reply}}</span>
              </div>
            </li>
          </ul>
        </div>
      </popup>
    </div>
    <div>
      <popup v-model="show" position="bottom" height="50%" @on-hide="down">
        <div class="masks">
          <ul class="evadetaila_personal_discuss">
            <li class="evadetaila_personal_discuss_model" style="border:0;">
              <img src="http://www.dianlibian.com/res/images/imgv4/chunwan.png" alt class="avatar">
              <div class="evadetaila_personal_discuss_model_div">
                <span class="title">{{currentReply.Name}}</span>
                <span class="title_wen">{{currentReply.title}}</span>
              </div>
            </li>
          </ul>
          <div class="evadetails_footer1">
            <div class="evadetails_footer_input1 float">
              <input type="text" placeholder="发表" id="send-content" v-model="currentReplyInput">
              <!-- <div class="icon evadetails_footer_input_icon"></div> -->
            </div>
            <div class="evadetails_footer_btn1 float" v-on:click="btn_more">回复</div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<style lang="sass">
@import '~/css/stream.scss'
</style>

<script>
export default {
  data() {
    return {
      activeName: "first",
      styleObject: {
        width: "0.55rem",
        transform: "translateX(0.2rem)"
      },
      isActive: 1,
      commentList: [
        {
          Name: "小熊1",
          title: "测试数据1111111111111",
          time: "15分钟前",
          ReplyS: [
            {
              reply: "测试数据,测试数据,测试数据,测试数据,测试数据,v,测试数据",
              replyName: "小兔2",
              name: "小熊1"
            }
          ]
        },
        {
          Name: "小兔2",
          title: "测试数据33333333333333333",
          time: "25分钟前",
          ReplyS: []
        },
        {
          Name: "小熊3",
          title: "测试数据444444444444444444444444444",
          time: "35分钟前",
          ReplyS: []
        },
        {
          Name: "小兔3",
          title: "测试数据5555555555555555555555555555",
          time: "45分钟前",
          ReplyS: []
        },
        {
          Name: "小熊4",
          title: "测试数据66666666666666666666666666666666",
          time: "55分钟前",
          ReplyS: []
        }
      ],
      maskShow: true,
      comInput: "",
      fullscreenLoading: false
      ,showComment: false,
      currentReplyInput: "", //回复内容
      currentReplyNum: 0, //回复第几条
      show: false,
      currentReply: [], // 当前回复
      currentReplyList: [] // 查看所有
    };
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    ReplysList(i) {
      return i.length;
    },
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
        // 查看所有
        case "more":
          vm.showComment = !vm.showComment;
          vm.currentReplyList = i;
          $("body").css("overflow", "hidden");
          $("body").css("position", "fixed");
          break;
        // 当前回复
        case "comment":
          vm.show = !vm.show;
          vm.currentReplyNum = item;
          vm.currentReply = i;
          setTimeout(function() {
            document.getElementById("send-content").focus();
          }, 500);
          $("body").css("overflow", "hidden");
          $("body").css("position", "fixed");
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
    active(event) {
      let id = event.toElement.id;
      this.isActive = id;
      switch (id) {
        case "1":
          this.styleObject.width = "0.55rem";
          this.styleObject.transform = "translateX(0.2rem)";
          break;
        case "2":
          console.log(2);
          this.styleObject.width = "0.25rem";
          this.styleObject.transform = "translateX(1.2rem)";
          break;
        default:
          this.styleObject.width = "0.55rem";
          this.styleObject.transform = "translateX(1.95rem)";
      }
    },
    btn() {
      this.fullscreenLoading = true;
      this.commentList.unshift({
        Name: "不願透露姓名的可憐人",
        title: this.comInput,
        time: "1分钟前",
        ReplyS: []
      });
      this.comInput = "";
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 900);
    },
    btn_more() {
      if (!this.currentReplyInput == " ") {
        let a = {
          replyName: "一个陌生人",
          reply: this.currentReplyInput,
          name: this.commentList[this.currentReplyNum].Name
        };
        this.commentList[this.currentReplyNum].ReplyS.push(a);
        this.show = !this.show;
        $("body").css("overflow", "auto");
        console.log(22);
        $("body").css("position", "");
      } else {
        alert("填个东西呗");
      }
    },
    down() {
      console.log(11);
      $("body").css("overflow", "auto");
      $("body").css("position", "");
    },
    showCommentDown() {
      this.showComment = !this.showCommentDown;
      $("body").css("overflow", "auto");
      $("body").css("position", " ");
    },
    active(event) {
      let id = event.toElement.id;
      this.isActive = id;
      switch (id) {
        case "1":
          this.styleObject.width = "0.55rem";
          this.styleObject.transform = "translateX(0.2rem)";
          break;
        case "2":
          console.log(2);
          this.styleObject.width = "0.25rem";
          this.styleObject.transform = "translateX(1.2rem)";
          break;
        default:
          this.styleObject.width = "0.55rem";
          this.styleObject.transform = "translateX(1.95rem)";
      }
    }
  }
};
</script>
