<template>
  <div class="show-pdf-exporter">
    <div class="content-container">this is a test page for pdf exporter</div>
    <el-button type="success" style="margin-right: 10px" @click="handleExportImage"
      >export image</el-button
    >
    <el-button type="success" style="margin-right: 10px" @click="handleExportPdf"
      >export pdf</el-button
    >
    <div class="image-export-template">
      <img class="content" :src="viteLogo" />
      <div class="cutline"></div>
      <div class="footer">
        <span class="footer-left">页面数据来源于wind</span>
        <img class="footer-right" :src="vue2logo" />
      </div>
    </div>
  </div>
</template>

<script>
import { getImageBase64Url, getImage, getSinglePagePdf } from "pdf-exporter";
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
    async getImageUrl(element) {
      return getImageBase64Url(element);
    },
    async handleExportImage() {
      const exportName = `test_pdf_exporter_download`;
      const pdfElement = document.querySelector(".content-container");
      const url = await this.getImageUrl(pdfElement);
      console.log("url", url);
      await getImage(exportName, pdfElement);
    },
    handleExportPdf() {
      const exportName = `test_pdf_exporter_download`;
      const pdfElement = document.querySelector(".content-container");
      getSinglePagePdf(exportName, pdfElement);
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
