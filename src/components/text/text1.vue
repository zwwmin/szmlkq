<template>
  <div>
    <marquee>
      <marquee-item
        v-for="i in 5"
        :key="i"
        @click.native="onClick(i)"
        class="align-middle"
      >hello world {{i}}</marquee-item>
    </marquee>
    <h1 @click="kuaishantong">快商通</h1>
    <img
      class="previewer-demo-img"
      v-for="(item, index) in list"
      :key="index"
      :src="item.src"
      width="100"
      @click="show(index)"
    >

    <input type="text" v-model="input">
    <p>{{input}}</p>
    <div>
      <h1 v-on:click="ssa">弹出</h1>

      <div v-transfer-dom>
        <popup v-model="show1" height="270px" is-transparent>
          <div
            style="width: 100%;background-color:#fff;height:270px;margin:0 auto;border-radius:5px;padding-top:10px;"
          >
            <x-button @click.native="show1 = false">Cancel</x-button>
          </div>
        </popup>
      </div>
    </div>
    <el-upload
      class="avatar-uploader"
      action="http://172.16.19.101:8080/banner/addBanner"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :on-error="error"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import {
  Marquee,
  MarqueeItem,
  Previewer,
  TransferDom,
  Popup,
  XSwitch,
  XButton
} from "vux";
export default {
  directives: {
    TransferDom
  },
  name: "HelloWorld",
  components: { Marquee, MarqueeItem, Previewer, Popup, XSwitch, XButton },
  data() {
    return {
      asyncCount: 0,
      show1: false,
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        // spaceBetween: 30,
        centeredSlides: true
      },
      input: "",
      input1: 1,
      list: [
        {
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
        },
        {
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg"
        },
        {
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg"
        }
      ],
      imageUrl: ""
    };
  },
  mounted() {},
  methods: {
    onClick(i) {
      console.log(i);
    },
    ssa() {
      this.show1 = !this.show1;
    },
    kuaishantong() {
      this.$text();
    },
    logIndexChange(arg) {
      console.log(arg);
    },
    show(index) {
      this.$refs.previewer.show(index);
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
      console.log(URL.createObjectURL(file.raw));
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    error(err, file, fileList) {
      console.log(err);
      console.log(file);
      console.log(fileList);
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  watch: {
    input(a, b) {
      console.log(a);
      console.log(b);
    }
  }
};
</script>
<style scoped>
.align-middle {
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
}
.center {
  width: 100%;
  height: 3rem;
}
.header_swiper_1 {
  height: 5rem;
  background: seagreen;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 0.18rem;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
}
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.8);
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>