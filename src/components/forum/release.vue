<template>
  <div class="release">
    <div class="release_top">
      <div class="release_top_back float">取消</div>
      <!-- 标题 -->
      <div class="release_top_title float">
        <span class="release_top_title_span1">发表图片</span>
        <span class="release_top_title_span2">刘子逸</span>
      </div>
      <!-- 分享 -->
      <!-- <div class="newforum_top_share icon share_it float_right"></div> -->
      <!-- 发表Btn -->
      <div class="release_top_btn float_right">发表</div>
    </div>
    <div class="release_cen">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea3"
      ></el-input>
      <el-upload
        action="auto"
        :http-request="uploadSectionFile"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="imgData.fileList"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="sass">
@import '~/css/stream.scss'
</style>
<style>
.el-textarea__inner {
  border-color: #fff;
}
.el-textarea__inner:focus {
  border-color: #fff;
}
.el-upload-list--picture-card .el-upload-list__item{
    width: 1.8rem;
    height: 1.8rem;
}
.el-upload--picture-card{
    width: 1.8rem;
    height: 1.8rem;
}
</style>
<script>
export default {
  data() {
    return {
      textarea3: "",
      imgData: {
        fileList: [
          {
            name: "dape.png",
            url: "http://syy-vr.com:8084/hyd.png"
          }
        ]
      },
      dialogImageUrl: "",
      dialogVisible: false,
      uploadFile: [],
      thisTitle: "",
      imageUrl:''
    };
  },
  mounted() {},
  methods: {
    uploadSectionFile(param, e) {
      console.log(param);
      console.log(e);
    //   return;
    //   var uploadFileLength = this.uploadFile.length;
    //   let fileObj = param.file;
    //   let file = new File([fileObj]);
    //   this.uploadFile[uploadFileLength] = { imgFile: file };
    //   console.log(this.uploadFile);
    //   return;
    //   var param = new FormData(); // FormData 对象
    //   var list = this.uploadFile[int];
    //   var file = list.imgFile;
    //   var name = list.title;
    //   param.append("file", file); // 文件对象
    //   // param.append("uploadTitle",  name); // 其他参数
    //   console.log(param);
    //   axios({
    //     method: "post",
    //     url: "http://172.16.19.101:8080/banner/addBanner",
    //     data: param
    //   })
    //     .then(function name(data) {
    //       console.log(data);
    //       this.$message({
    //         message: "上传成功",
    //         type: "success"
    //       });
    //     })
    //     .catch(error => {
    //       this.$message.error("上传失败,请稍后重试");
    //     });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    }
  }
};
</script>

