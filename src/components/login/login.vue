<template>
  <div class="login">
    <div class="login_header">
      <div class="login_header_cen left" @click="ss">
        <div class="icon left_arrow"></div>
      </div>登录
      <div class="login_header_cen right">
        <div class="icon share_it"></div>
      </div>
    </div>
    <div class="login_center">
      <!-- 广告 -->
      <div class="login_center_commercial">
        <img src="../../../static/img/1-1.jpg" alt>
      </div>
      <span class="login_center_title">登录</span>
      <span class="login_center_nav">您好，欢迎来到美莱口腔</span>
      <div class="login_center_input">
        <span class="login_center_input_icon icon phone"></span>
        <input type="text" placeholder="手机号">
      </div>
      <div class="login_center_input" style="margin-top: 0.2rem;">
        <span class="login_center_input_icon icon verification"></span>
        <input type="text" placeholder="输入手机验证码" style="width: 60%;">
        <div class="login_code" @click="onbtn">{{time | change}}</div>
      </div>
      <div class="login_btn">登录</div>
    </div>
    <div class="login_bottom">
      <span class="login_bottom_span">社交账号登录</span>
      <div class="login_bottom_center display_flex1" @click="Landing">
        <span class="icon WeChat"></span>
      </div>
      <div class="login_bottom_center display_flex1" @click="Landing">
        <span class="icon qq"></span>
      </div>
      <div class="login_bottom_center display_flex1" @click="Landing">
        <span class="icon weibo"></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$color: rgba(255, 255, 255, 1);
html,
body {
  background: white;
}
.login {
  width: 100%;
  height: 100%;
  background: white;

  .login_header {
    width: 100%;
    height: 0.9rem;
    background: linear-gradient(
      0deg,
      rgba(178, 211, 70, 1),
      rgba(125, 182, 0, 1)
    );
    font-size: 0.32rem;
    color: $color;
    text-align: center;
    line-height: 0.9rem;
    position: relative;

    .login_header_cen {
      position: absolute;
      width: 0.67rem;
      height: 100%;
      top: 0;
      margin-top: 0.1rem;
    }

    .right {
      right: 0;
      padding: 0.15rem 0.25rem 0 0;
    }

    .left {
      left: 0;
      padding: 0.15rem 0 0 0.25rem;
    }
  }

  .login_center {
    width: 100%;
    height: auto;
    margin: 0 auto;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    .login_center_commercial {
      width: 92%;
      height: 2rem;
      margin: 0.4rem auto 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      display: inline-block;
    }
    .login_center_title {
      display: block;
      margin-top: 0.4rem;
      padding-left: 0.25rem;
      font-weight: bold;
      font-size: 0.36rem;
    }
    .login_center_nav {
      font-size: 0.28rem;
      margin-top: 0.3rem;
      margin-bottom: 0.8rem;
      padding-left: 0.25rem;
    }
    .login_center_input {
      width: calc(100% - 0.7rem);
      height: 0.7rem;
      border-bottom: 1px solid rgba(183, 183, 183, 1);
      text-align: center;
      overflow: hidden;
      margin-left: 0.25rem;
      .login_center_input_icon {
        display: inline-block;
        margin-top: 0.2rem;
        float: left;
      }
      input {
        width: 90%;
        height: 100%;
        font-size: 0.28rem;
        font-weight: 400;
        color: #000000;
        margin-left: 0.25rem;
        float: left;
      }

      .login_code {
        width: 1.8rem;
        height: 0.5rem;
        border: 1px solid #f79e1c;
        font-size: 0.26rem;
        line-height: 0.55rem;
        color: rgba(102, 102, 102, 1);
        font-weight: 400;
        border-radius: 0.2rem;
        float: right;
      }
    }
    .login_btn {
      width: 5rem;
      height: 0.8rem;
      background: rgba(247, 158, 28, 1);
      border-radius: 0.4rem;
      letter-spacing: 0.2rem;
      text-align: center;
      color: white;
      line-height: 0.8rem;
      margin: 0.8rem auto 0 auto;
    }
  }
  .login_bottom {
    width: 75%;
    height: auto;
    overflow: auto;
    margin: 2rem auto 0 auto;
    .login_bottom_span {
      display: block;
      font-size: 0.24rem;
      font-weight: 400;
      color: #999999;
      position: relative;
      text-align: center;
    }
    .login_bottom_span:before,
    .login_bottom_span:after {
      content: "";
      position: absolute;
      top: 52%;
      background: #494949;
      width: 10%;
      height: 0.02rem;
    }
    .login_bottom_span:before {
      left: 22%;
    }
    .login_bottom_span:after {
      right: 22%;
    }
    .login_bottom_center {
      width: 33.3%;
      height: 1.25rem;
      float: left;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 400px){
    .login_bottom {
	margin: 1rem auto 0 auto;
	}
  }
}
</style>


<script>
let flag = true;
export default {
  created() {
    this.$on("demo", () => {
      this.ziksang1++;
      console.log(this.ziksang1);
      if (this.ziksang1 == 5) {
        this.$off("demo");
      }
    });
    this.$once("demo2", value => {
      this.ziksang2 += value;
    });
  },
  data() {
    return {
      ziksang1: 0,
      ziksang2: 0,
      time: "获取验证码"
    };
  },
  methods: {
    onbtn() {
      if (flag == true) {
        this.countDown();
      }
    },
    countDown() {
      this.time = 60;
      let time = setInterval(() => {
        this.time--;
        console.log(flag);
        if (this.time == 0) {
          this.$emit("countDown");
          this.time = "获取验证码";
          flag = true;
          clearInterval(time);
        }
      }, 1000);
    },
    Landing() {
      alert("lalalalalal");
    },
    ss() {
      this.$router.go(-1);
    }
  },
  filters: {
    change(value) {
      if (!value) return "";
      if (!isNaN(value)) {
        if (flag == true) {
          return `重新发送${value}S`;
        }
        return value + "S";
      } else {
        return value;
      }
    }
  }
};
</script>
