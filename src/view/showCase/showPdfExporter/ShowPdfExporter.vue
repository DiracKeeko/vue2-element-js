<template>
  <div class="show-pdf-exporter">
    <div class="content-container">this is a test page for pdf exporter</div>
    <el-button type="primary" style="margin-right: 10px" @click="handleExportImage"
      >export image</el-button
    >
  </div>
</template>

<script>
import { getImage } from "./imageExporter";
import viteLogo from './vite-logo.png';
import vue2Logo from "./vue-logo.svg";

export default {
  name: "ShowPdfExporter",
  components: {},
  props: {
    basicData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      viteLogo,
      vue2logo: vue2Logo
    };
  },
  computed: {},
  watch: {},
  methods: {
    async handleExportImage() {
      const exportName = `test_image`;
      const imageElement = document.querySelector(".content-container");
      // await getImage(exportName, { element: imageElement, text: "数据来源于wind", logo: vue2Logo });
      // 使用svg的logo导出时会有问题，暂时使用png
      await getImage(exportName, { element: imageElement, text: "数据来源于wind", logo: viteLogo });
    }
  }
};
</script>

<style lang="scss" scoped>
.show-pdf-exporter {
  background-color: #ffffff;
  .content-container {
    box-sizing: border-box;
    width: 190px;
    height: 200px;
    // background-color: #bfa;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.image-export-template {
  border: 1px solid black;
  padding: 20px 20px 0;
  min-width: 800px;
  .content {
    width: 100%;
  }
  .cutline {
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  .footer {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-left {
      font-size: 12px;
      color: #999;
    }
    .footer-right {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
