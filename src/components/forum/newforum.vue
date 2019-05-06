<template>
  <div class="newforum">
    <div class="newforum_top">
      <div class="icon left_arrow_gray newforum_top_back float"></div>
      <!-- 标签 -->
      <div class="icon fine newforum_top_fine float"></div>
      <!-- 标题 -->
      <div class="newforum_top_title float">
        <span class="newforum_top_title_span1">牙齿修复要怎么做？</span>
        <span class="newforum_top_title_span2">152篇内容</span>
      </div>
      <!-- 分享 -->
      <!-- <div class="newforum_top_share icon share_it float_right"></div> -->
      <!-- 发表Btn -->
      <div class="newforum_top_btn float_right" @click="show()">发表</div>
    </div>
    <div style="width:100%;height:1rem;"></div>
    <div class="newforum_center">
      <!-- btn切换 -->
      <div class="newforum_center_btn display_flex1">
        <div class="newforum_center_btn1 float newforum_center_btn_av">最新</div>
        <div class="newforum_center_btn2 float">最热</div>
      </div>
      <div class="newforum_center_nav" v-for="(s,sindex) in 2" :key="sindex">
        <!-- 主体部分 -->
        <div class="newforum_center_nav_main">
          <!-- 头像名称 -->
          <div class="newforum_center_Avatar">
            <div class="newforum_center_Avatar_img float">
              <img
                src="http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg"
                alt
              >
            </div>
            <div class="newforum_center_Avatar_name float">刘子逸</div>
            <!-- 关注 -->
            <div class="newforum_center_Avatar_attention float_right display_flex1">+关注</div>
          </div>
          <!-- 发布时间 -->
          <div class="newforum_center_time">发布于 2019-4-17</div>
          <!-- 回复内容 -->
          <div class="newforum_center_huif">
            <div class="newforum_center_huif_cen newforum_center_huif_maxh">
              <p
                v-for="i in 10"
                :key="i"
              >矫正不就戴个套套？哪有什么技术含量？我就那点钱，价位高的，我可接受不了！人丑，矫正再贵也是丑套套那么多，看起来都一样，没差....</p>
              <!-- <div class="stream_details_collection">
                <div class="collection" v-on:click="BtnColl">
                  <div class="icon icon_collection collection_icon"></div>
                  <span>11</span>
                </div>
                <div class="collection_tit">好的内容 快收藏起来吧</div>
              </div>-->
            </div>
            <div class="newforum_center_Expand display_flex1" v-on:click="Expand(sindex,$event)">
              <span>展开全部</span>
              <i class="el-icon-arrow-down" style="font-size:0.35rem;color:#cacaca;"></i>
            </div>
          </div>
        </div>
        <!-- 评论模块 -->
        <div class="newforum_center_nav_comment">
          <!-- tab切换 -->
          <div class="newforum_center_nav_comment_tab">
            <span
              class="comment_span float comment_span_av"
              data-value="1"
              v-on:click="comment(1,$event)"
            >评论</span>
            <span class="comment_span float" data-value="2" v-on:click="comment(1,$event)">赞</span>
            <span class="comment_span float" data-value="3" v-on:click="comment(1,$event)">转发</span>
            <span class="comment_span float" data-value="4" v-on:click="comment(1,$event)">收藏</span>
          </div>
          <!--  -->
          <ul class="newforum_center_nav_comment_ul">
            <li v-for="(i,index) in aa" :key="index">
              <div class="comment_ul_Avatar float">
                <img :src="i.img" alt>
              </div>
              <div v-if="i.title!=undefined">
                <div class="comment_ul_t float">
                  <span class="comment_ul_t_name">{{i.name}}</span>
                  <p>{{i.title}}</p>
                </div>
                <div class="comment_ul_p display_flex1">
                  <div class="icon link"></div>22
                </div>
              </div>
              <div v-else class="zhan_ul_name">{{i.name}}</div>
            </li>
          </ul>

          <!-- 查看评论 -->
          <div class="newforum_center_nav_comment_all">查看全部评论 1,339 条评论</div>
          <!-- input -->
          <div class="evadetails_footer1">
            <div class="evadetails_footer_input1 float">
              <input type="text" placeholder="写评论">
              <div class="icon evadetails_footer_input_icon"></div>
            </div>
            <div class="evadetails_footer_btn1 float">发言</div>
          </div>
          <!-- 赞同模块 -->
          <div class="newforum_center_nav_comment_Endorsed">
            <div class="comment_Endorsed_btn eva display_flex1 float" v-on:click="zhantong($event)">赞同</div>
            <span class="comment_Endorsed_Number">已有3156人赞同</span>
            <div class="comment_Endorsed_icon" >
              <div class="icon fabiao6 comment_Endorsed_icon_nav"></div>
              <span class="comment_Endorsed_icon_tit">评论（1339）</span>
            </div>
            <div class="comment_Endorsed_icon" v-on:click="Collection($event)">
              <div class="icon fabiao5 comment_Endorsed_icon_nav"></div>
              <span class="comment_Endorsed_icon_tit">收藏</span>
            </div>
            <div class="comment_Endorsed_icon" v-on:click="thank($event)">
              <div class="icon fabiao4 comment_Endorsed_icon_nav"></div>
              <span class="comment_Endorsed_icon_tit">感谢</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="show13">
      <div class="fabiao-mask" v-on:click="show"></div>
      <div class="fabiao">
        <div class="fabiao-top"></div>
        <div class="fabiao-cen1">
          <div class="icon fabiao1 fabiao-cen1-icon"></div>
          <span>说点什么</span>
        </div>
        <div class="fabiao-cen1">
          <div class="icon fabiao2 fabiao-cen1-icon"></div>
          <span>发图片</span>
        </div>
        <div class="fabiao-cen1">
          <div class="icon fabiao3 fabiao-cen1-icon"></div>
          <span>写日记</span>
        </div>
        <div class="fabiao-gb" v-on:click="show">x</div>
      </div>
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
      show13: false,
      isActive: 1,
      maskShow: true,
      comInput: "",
      fullscreenLoading: false,
      showComment: false,
      aa: [
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg",
          name: "刘子逸1",
          title: "单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观"
        },
        {
          img:
            "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg",
          name: "刘子逸2",
          title: "单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观"
        }
      ],
      commentList: 1
    };
  },
  mounted() {},
  methods: {
    Expand(i, t) {
      let cen = document.querySelectorAll(".newforum_center_huif_cen")[i];
      cen.classList.remove("newforum_center_huif_maxh");
      t.currentTarget.classList.remove("display_flex1");
      t.currentTarget.classList.add("display_no");
    },
    comment(id, e) {
      console.log(id);
      console.log(e.path[0].getAttribute("data-value"));
      let dataVlue = e.path[0].getAttribute("data-value");
      let data = [];
      if (dataVlue == 1) {
        data = [
          {
            img:
              "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg",
            name: "刘子逸3",
            title: "单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观"
          },
          {
            img:
              "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg",
            name: "刘子逸4",
            title: "单颗牙齿磕断并脱落，因为是门牙位置，牙齿缺失会非常影响美观"
          }
        ];
      } else {
        data = [
          {
            img:
              "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg",
            name: "刘子逸5"
          },
          {
            img:
              "http://pphcs84a8.bkt.clouddn.com/v2-6f2a1d1a524514d09a82f529a36668b7_r.jpg",
            name: "刘子逸6"
          }
        ];
      }
      this.aa = [];
      console.log(this.commentList);
      this.aa = data;
      this.commentList = 22;
      console.log(this.commentList);
    },
    show() {
      let vm = this;
      console.log(1);
      vm.show13 = !vm.show13;
    },
    BtnColl() {
      console.log(1);
    },
    Collection(e){
      // 父元素第一个
      let ad = e.currentTarget.firstChild;
      console.log(ad.getAttribute("class"))
      console.log(ad.getAttribute("class").indexOf("fabiao5"))
      if (ad.getAttribute("class").indexOf("fabiao5") > -1) {
        ad.classList.remove("fabiao5");
        ad.classList.add("biao-1");
      } else {
        ad.classList.remove("biao-1");
        ad.classList.add("fabiao5");
      }
    },
    thank(e){
      // 父元素第一个
      let ad = e.currentTarget.firstChild;
      console.log(ad.getAttribute("class"))
      console.log(ad.getAttribute("class").indexOf("fabiao4"))
      if (ad.getAttribute("class").indexOf("fabiao4") > -1) {
        ad.classList.remove("fabiao4");
        ad.classList.add("biao-4");
      } else {
        ad.classList.remove("biao-4");
        ad.classList.add("fabiao4");
      }
    },
    zhantong(e){
      let ad = e.currentTarget;
      console.log(ad.getAttribute("class"))
      console.log(ad.getAttribute("class").indexOf("eva"))
      if (ad.getAttribute("class").indexOf("eva") > -1) {
        ad.classList.remove("eva");
        ad.classList.add("btn-ava");
      } else {
        ad.classList.remove("btn-ava");
        ad.classList.add("eva");
      }
    }
  }
};
</script>
