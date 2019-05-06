<template>
  <div class="product" style="background: white;">
    <div class="product_top">
      <div class="product_top_left float">
        <i class="el-icon-arrow-left display_flex" style="font-size: 25px; margin-top: 0.1rem;"></i>
      </div>
      <span class="product_top_center float">产品详情</span>
      <div class="product_top_left float">
        <i class="el-icon-more display_flex" style="font-size: 25px; margin-top: 0.1rem;"></i>
      </div>
    </div>
    <div class="product_header_title">
      <div class="product_header_title_div display_flex float">
        <a class="current" href>种植</a>
      </div>
      <div class="product_header_title_div display_flex float">
        <a href>科普</a>
      </div>
      <div class="product_header_title_div display_flex float">
        <a href>评价 221</a>
      </div>
      <div class="product_header_title_div display_flex float">
        <a href>日记 96</a>
      </div>
			<tab :line-width="1" custom-bar-width="25%">
      <tab-item selected>种植</tab-item>
      <tab-item>科普</tab-item>
      <tab-item>评价 221</tab-item>
			 <tab-item>日记 96</tab-item>
    </tab>
    </div>
		
    <div class="product_text">德国的ICX种植系统，以其严谨的制造工艺、高等级的种植材料、高清洁度的S.L.A亲水性表面处理、</div>
    <div class="product_line"></div>
    <div class="product_module">
      <div class="product_module_top">
        <img src="../../../static/img/zaixiankefu.png" alt>
        <span>相关技术</span>
      </div>
      <div class="header_recording_ranking">
        <div class="header_recording_ranking_Shelf">德国ICX种植系统</div>
        <div class="header_recording_ranking_Shelf">瑞典诺贝尔种植系统</div>
        <div class="header_recording_ranking_Shelf">韩国DIO种植牙</div>
        <div class="header_recording_ranking_Shelf">即刻种植技术</div>
        <div class="header_recording_ranking_Shelf">无痛种植技术</div>
      </div>
    </div>
    <div class="product_line"></div>
    <div class="product_module">
      <div class="product_module_top">
        <img src="../../../static/img/zaixiankefu.png" alt>
        <span>项目概览</span>
      </div>
      <div class="product_module_center">
        <span class="product_module_center_title">项目简介</span>
        <p>德国的ICX种植系统，以其严谨的制造工艺、高等级的种植材料、高清洁度的S.L.A亲水性表面处理、超精密内部结构以及强大的技术研发和质量控制，成功跻身于世界种植领域品牌的前列。ICX种植系统完美体现了严谨的德国精工制造艺术，实现了从种植到全数字化修复的“一条龙服务”。</p>
        <span class="product_module_center_title">项目特色</span>
        <p>1、全程可视，精确定位：通过CBCT影像技术和口内激光扫描，获取患者的口腔信息后制作三维种植模型，准确定位种植位置，利用患者现存骨量，优化种植方案。</p>
        <p>2、数字打印，安全植入，：利用CAD/CAM 3D打印技术设备制作种植导板，医生在种植导板的辅助下有效控制种植位置、深度和角度，准确把控整个种植过程，实现安全植入。</p>
        <p>3、智能修复，减少创伤：很好的解决种植体之间的位置、距离、轴向、平行度问题，大大缩短种植多颗牙、半口无牙、全口无牙种植手术的耗时，减少创伤，降低手术难度，是目前复杂型多牙、半口、全口牙缺失理想的治疗方法。</p>
        <span class="product_module_center_title">功效</span>
        <p>适用于单颗牙齿缺失、意外摔断留残根；意外缺失、牙齿松动、口腔疾病导致缺失、单颗牙齿缺失；牙齿松动拔出、单颗牙齿缺失、多颗牙齿缺失、全口牙齿缺失</p>
        <span class="product_module_center_title">适用人群</span>
        <p>青年人、中年人、老年人</p>
      </div>
    </div>

    <div class="product_module">
      <div class="product_module_top">
        <img src="../../../static/img/zaixiankefu.png" alt>
        <span>效果展示</span>
      </div>
      <div class="product_module_center">
        <div class="product_module_center_swiper">
          <swiper :options="swiperOption" style="height:1.9rem;">
            <swiper-slide><div class="swiper"></div></swiper-slide>
            <swiper-slide><div class="swiper"></div></swiper-slide>
            <swiper-slide><div class="swiper"></div></swiper-slide>
            <swiper-slide><div class="swiper"></div></swiper-slide>
            <swiper-slide><div class="swiper"></div></swiper-slide>
            <swiper-slide><div class="swiper"></div></swiper-slide>
          </swiper>
          <div class="center_swiper_point" slot="pagination"></div>
        </div>
      </div>
    </div>
    <div class="product_line"></div>
    <div class="product_module">
      <div class="product_module_top">
        <img src="../../../static/img/zaixiankefu.png" alt>
        <span>相关视频</span>
      </div>
      <div class="product_module_center">
        <div class="product_module_center_vide"></div>
      </div>
    </div>
    <div class="product_line"></div>
    <div class="product_project">
      <div class="product_top" style="width:100%;border-bottom:1px solid rgba(205,205,205,1);padding: 0 0.4rem;">
        <span class="product_top_center" style="  float: left;text-align: left;">让牙齿健康</span>
        <div class="product_top_left" style="  float: right;">
          <i class="el-icon-arrow-right display_flex" style="font-size: 25px; margin-top: 0.1rem;"></i>
        </div>
      </div>
      <div class="project">
        <div class="project_center float">
          <img src="http://www.dianlibian.com/res/images/imgv4/chunwan.png" alt>
          <div class="project_center_right">
            <span class="project_title">【美莱种植牙】德国ICX种植系统 全程可视，精确定位：通过CBCT影像技术和口内激和口内激</span>
            <div class="project_center_right_bottom">
              <span style="float: left;">￥12581</span>
              <span style="float: right;">1115人已购买</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
	@import '~/css/index.scss'
</style>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Tab , TabItem} from 'vux'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".center_swiper_point",
          clickable: true
        }
      }
    };
  },
  mounted() {},
  components: { swiper, swiperSlide,Tab,TabItem}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.swiper{
  width: 3.27rem;
  height: 100%;
  background: rgba(246,246,246,1);
  border-radius:0.1rem;
}
</style>
