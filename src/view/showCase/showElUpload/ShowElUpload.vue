<template>
  <div class="show-el-upload">
    <div class="picture-uploader">
      <el-upload
        action=""
        accept=".png,.jpg,.jpeg"
        :multiple="false"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="handleFileChange"
        list-type="picture"
      >
        <div>
          <el-button slot="trigger" size="small" type="primary">上传图片</el-button>
          <span class="mx-5"> 尺寸1200 * 900</span> 
          <span>最大支持1600KB </span>
        </div>
      </el-upload>
      <div v-if="imageFile.url" class="img-holder mt-2">
        <img class="image-case" :src="imageFile.url" />
      </div>
      <div v-else class="img-holder mt-2"></div>
    </div>
    <div class="url-input d-flex mt-5" style="width: 620px">
      <div class="label mr-3" style="flex-shrink: 0">
        <span>图片链接:</span>
      </div>
      <el-input v-model="imageFile.link" placeholder="请输入图片链接"></el-input>
    </div>

  </div>
</template>

<script>
import { toBase64, validateImage } from "./constant.js";

export default {
  name: "ShowElUpload",
  components: {},
  data() {
    return {
      imageFile: {},
      notificationImageObj: {},
    };
  },
  methods: {
    async handleFileChange(file) {
      console.log("file->", file);
      this.imageFile = file;
      try {
        await validateImage({ imageData: file });
        this.notificationImageObj = file;
        // this.imageFile.content = await toBase64(file.raw);
      } catch (err) {
        console.log("err->", err);
        this.errorHandler(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.show-el-upload {
  position: relative;
  height: 610px;
  .picture-uploader {
    .img-holder {
      width: 750px;
      height: 423px;
      border: 1px dashed var(--dark-color);
    }
    .image-case {
      width: 100%;
      height: 100%;
    }
  }

  .url-input {
    .label {
      line-height: 32px;
    }
    ::v-deep .el-input__inner {
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>
