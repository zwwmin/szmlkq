<template>
  <!-- 评论 -->
  <div class="evadetails">
    <!-- <div class="fixed_top">
      <div class="fixed_top_cen left" >
				<div class="icon left_arrow_gray"></div>
			</div>
    </div>-->
    <div class="evadetails_tabs">
      <div class="evadetails_tabs_active-bar" v-bind:style="styleObject"></div>
      <div
        class="evadetails_tabs_nav"
        id="1"
        v-bind:class="[isActive == 1 ? 'active_bar' : ' ']"
        @click="active"
      >回复</div>
      <div
        class="evadetails_tabs_nav"
        id="2"
        v-bind:class="[isActive == 2 ? 'active_bar' : ' ']"
        @click="active"
      >赞</div>
      <!-- <div
        class="evadetails_tabs_nav"
        id="3"
        v-bind:class="[isActive == 3 ? 'active_bar' : ' ']"
        @click="active"
      >转发</div> -->
    </div>
    <div class="evadetails_heat" v-if="isActive ==1" v-on:click="heat">
      <div class="icon sort float" style="margin:0.06rem 0.1rem 0 0;"></div>热度
    </div>
    <div v-if="isActive == 1">
      <ul class="evadetaila_personal_discuss" v-if="commentList.length != 0">
        <!-- 第一个评论 -->
        <li class="evadetaila_personal_discuss_model" v-for="(i,item) in commentList" :key="item">
          <img class="avatar" :src="i.discuss.anonymity[0].aHendpic" alt>
          <div class="evadetaila_personal_discuss_model_div">
            <span class="title">{{i.discuss.anonymity[0].aName}}</span>
            <span class="title_wen">{{i.discuss.content}}</span>
          </div>
          <!-- 回复 -->
          <!-- <div
            class="comment_reply"
            v-if="JSON.stringify(i.discussDTOS) != '[]' && ReplysList(i.discussDTOS) < 1"
          >
            <div class="comment_reply_div" v-for="s in i.ReplyS" :key="s">
              <span>{{s.replyName}}</span>回复
              <span>{{s.name}}:</span>
              {{s.reply}}
            </div>
          </div> -->
           <div
            class="comment_reply"
            v-if="JSON.stringify(i.discussDTOS) != '[]' "
          >
            <div class="comment_reply_div" v-for="s in i.discussDTOS" :key="s">
              <span>{{s.discuss.anonymity[0].aName}}</span>回复
              <span>{{i.discuss.anonymity[0].aName}}:</span>
              {{s.discuss.content}}
            </div>
          </div>
          <!-- <span
            class="comment_more"
            data-value="more"
            v-if="JSON.stringify(i.discussDTOS) != '[]'"
          >查看更多共{{ReplysList(i.discussDTOS)}}条回复></span> -->
          <div class="evadetaila_personal_discuss_model_time">
            <span class="time_span">{{i.discuss.addtime}}</span>
            <div class="evad_icon like display_flex1" v-on:click="thank(key,$event)">
              <div class="icon fabiao4" data-value="1"></div>
            </div>
            <!-- 評論 -->
            <div class="evad_icon like display_flex1"  v-on:click="comment(i.discuss.id,i.discuss.anonymity[0].aName)">
              <div class="icon comment" ></div>
            </div>
          </div>
        </li>
      </ul>
      <div class="blank" v-else>
        <div class="blank_Collection"></div>
        <span>做第一条评论吧！</span>
      </div>
    </div>
    <div class="evadetaila_personal_discuss" v-if="isActive == 2">
       <ul class="newforum_center_nav_comment_ul" v-if="commentList.length != 0">
            <li v-for="(i,item) in commentList" :key="item">
              <div class="comment_ul_Avatar float">
                <img :src="i.discuss.anonymity[0].aHendpic" alt>
              </div>
              <div  class="zhan_ul_name">{{i.discuss.anonymity[0].aName}}</div>
            </li>
          </ul>
      <div class="blank" v-else>
        <div class="blank_Collection"></div>
        <span>当前没有点赞</span>
      </div>
    </div>
    <!-- <div class="evadetaila_personal_discuss" v-if="isActive == 3">
      <div class="blank">
        <div class="blank_Forward"></div>
        <span>当前没有转发</span>
      </div>
    </div> -->
    <div class="evadetails_footer_leaveblank"></div>
    <div class="evadetails_footer">
      <div class="evadetails_footer_input float">
        <input type="text" :placeholder="Current" v-model="comInput">
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
      activeName: "first",
      styleObject: {
        width: "0.55rem",
        transform: "translateX(0.2rem)"
      },
      Id: this.parentArray,
      isActive: 1,
      commentList: [],
      Current: "回复楼主",
      CommenWho: 0, //回复谁 0 楼主，1回复其他人
      CommenWhoID: "", //回复其他人的id
      comInput: "" //回复内容
    };
  },
  mounted() {
    console.log(this.parentArray);
    let vm = this;
    vm.nav()
  },
  methods: {
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
          console.log(i);
          localStorage.stream = i;
          this.$router.push({
            path: "/streamcomall",
            name: "streamcomall"
          });
          break;
        // 当前回复
        case "comment":
          console.log(item);
          console.log(i);
          this.Current = "@" + i.Name;
          this.CommenWhoID = item;
          this.CommenWho = 1;
          break;
        default:
          console.log(1);
      }
    },
    thank(i, e) {
      // 父元素第一个
      let vm = this;
      let ad = e.currentTarget.firstChild;
      console.log(ad.getAttribute("class"));
      console.log(ad.getAttribute("class").indexOf("fabiao4"));
      if (ad.getAttribute("class").indexOf("fabiao4") > -1) {
        ad.classList.remove("fabiao4");
        ad.classList.add("biao-4");
        vm.article[i].dLike += 1;
      } else {
        ad.classList.remove("biao-4");
        ad.classList.add("fabiao4");
        vm.article[i].dLike -= 1;
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
    comment(i,name) {
      this.Current = "@" + name;
      this.CommenWhoID = i;
      this.CommenWho = 1;
    },
    btn() {
      let vm = this;
      console.log(vm.comInput);
      if (vm.comInput == "") {
        alert("你什么都没有写");
        return;
      }
      if (vm.CommenWho == 0) {
        // 回复楼主
        this.$api.article
          .addDiscuss({
            dId: this.parentArray,
            content:vm.comInput
          })
          .then(res => {
            console.log(res);
            if(res.data == 0){
              vm.nav()
              vm.comInput=''
            }else{
              alert('提交失败')
            }
            
          });
          
      } else {
        // 回复其他人
        this.$api.article
          .addDiscuss({
            dId: this.parentArray,
            content:vm.comInput,
            parentId:vm.CommenWhoID
          })
          .then(res => {
            console.log(res);
            if(res.data == 0){
              vm.nav()
              vm.comInput=''
            }else{
              alert('提交失败')
            }
            
          });
      }
    },
    // 热度
    heat() {
      this.commentList.reverse();
    },
    changeArray() {
      console.log(11);
      this.Current = "回复楼主";
      this.CommenWho = 0;
    },
    //更新内容
    nav(){
      let vm =this;
      this.$api.article
      .showDynamicById({
        dId: vm.Id
      })
      .then(res => {
        console.log(res.discuss);
        vm.commentList = res.discuss;
      });
    }
  },
  props: {
    parentArray: "",
    evadeta: ""
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
