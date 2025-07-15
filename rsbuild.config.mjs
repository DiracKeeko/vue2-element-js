import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
  plugins: [
    pluginVue2(),
    pluginSvgr({
      svgrOptions: {
        // 如果需要将 SVG 作为 Vue 组件使用，设置为 true
        vue: true
      }
    }),
    pluginSass()
  ],
  source: {
    entry: {
      index: './src/main.js' // 指定入口文件
    }
  },
  html: {
    template: './public/index.html',
    title: 'rs vue app'
  },
  output: {
    assetPrefix: '/',
  },
  resolve: {
    alias: {
      "@": "./src"
    }
  },
  server: {
    port: 6060
  }
});
