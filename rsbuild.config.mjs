import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginSvgr } from "@rsbuild/plugin-svgr";

export default defineConfig({
  plugins: [
    pluginVue2(),
    pluginSvgr({
      svgrOptions: {
        // 如果需要将 SVG 作为 Vue 组件使用，请设置为 true
        vue: true
      }
    }),
    pluginSass()
  ],
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
    // 对应 devServer.port
    port: 6060
  }
});
