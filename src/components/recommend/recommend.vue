<template>
  <div class="recommend">
    <div class="recommend_header">
      <div class="recommend_header_mask"></div>
      <div class="recommend_header_center">
        <div class="fixed_top" style="border: 0;">
          <div class="fixed_top_cen fixed_top_cen_left">
            <div class="icon left_arrow"></div>
          </div>特别推荐
        </div>
        <div class="experence_evaluation_Product">
          <div class="experence_evaluation_Product_nav">
            <div class="experence_evaluation_Product_nav_img item__content--medium item_content"></div>
            <div class="experence_evaluation_Product_nav_text">
              <div class="Ranking">
                <div class="Ranking_nav icon recommend1"></div>
              </div>
              <span class="Product_nav_text_span1">美国Invisalign隐适美</span>
              <div class="Product_text">
                擅长口腔种植，深圳美莱口腔医院莱口腔医院总部有....
                <span>[更多]</span>
              </div>
            </div>
          </div>
        </div>
        <div class="recommend_header_share display_flex1">
          <span>分享到</span>
          <div class="icon link recommend_header_share_left"></div>
          <div class="icon link_red recommend_header_share_left"></div>
          <div class="icon comment recommend_header_share_left"></div>
        </div>
      </div>
    </div>
    <div class="mlkq_line"></div>
    <evadetails></evadetails>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    evadetails: () =>
      import(/* webpackChunkName: "evadetails" */ "../common/evadetails.vue")
  }
};
</script>

<style lang="scss">
body,
html {
  background: white;
}
.recommend_header {
  width: 100%;
  height: 4.6rem;
  position: relative;
  .recommend_header_mask {
    width: 100%;
    height: 3.1rem;
    background: linear-gradient(
      0deg,
      rgba(178, 211, 70, 1),
      rgba(125, 182, 0, 1)
    );
    border-radius: 0 0 3rem 3rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .recommend_header_center {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
}
.recommend {
  .experence_evaluation_Product {
    width: calc(100% - 0.9rem);
    margin: 0 0.25rem;
    background: rgba(255, 255, 255, 1);
    padding: 0.36rem 0.2rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    .experence_evaluation_Product_nav {
      width: 100%;
      height: 1.65rem;
      .experence_evaluation_Product_nav_img {
        width: 1.44rem;
        height: 1.44rem;
        border-radius: 50%;
        float: left;
      }
      .experence_evaluation_Product_nav_text {
        width: calc(100% - 1.8rem);
        height: auto;
        margin-left: 0.27rem;
        float: left;
        position: relative;
        .Product_nav_text_span1 {
          display: block;
          font-size: 0.3rem;
          font-weight: 500;
          color: rgba(68, 68, 68, 1);
        }
        .Product_text {
          width: 100%;
          line-height: 0.4rem;
          font-weight: 500;
          font-size: 0.26rem;
          color: rgba(68, 68, 68, 1);
          margin-top: 0.2rem;
          span {
            color: #41b5ff;
          }
        }
        .Ranking {
          position: absolute;
          width: 0.72rem;
          height: 0.8rem;
          right: 0.1rem;
          top: -0.45rem;
          .Ranking_nav_1 {
            width: 100%;
            height: 100%;
            position: relative;
            img {
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: 1;
            }
            .Ranking_nav_1 {
              padding: absolute;
              z-index: 2;
              top: 0.1rem;
              left: 25%;
              width: 0.34rem;
              height: 0.33rem;
              border-radius: 50%;
              background: rgba(252, 253, 193, 1);
              font-size: 0.31px;
              text-align: center;
              line-height: 0.33rem;
              font-weight: 600;
              font-style: italic;
              color: rgba(238, 225, 22, 1);
            }
            span {
              display: block;
              padding: absolute;
              z-index: 2;
              width: 100%;
              top: 0.45rem;
              left: 0;
              font-size: 0.26rem;
              font-style: italic;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }
  }
}
.recommend_header_share {
  width: 100%;
  height: 0.95rem;
  margin-top: 0.1rem;
  span {
    font-size: 0.24rem;
    font-weight: 500;
    color: rgba(68, 68, 68, 1);
    line-height: 0.95rem;
    margin-right: 0.34rem;
  }
  .recommend_header_share_left {
    margin-left: 0.2rem;
  }
}
</style>
