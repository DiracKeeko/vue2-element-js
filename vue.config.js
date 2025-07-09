const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  chainWebpack: (conf) => {
    conf.module.rule("svg").exclude.add(resolve("src/icons")).end();
    conf.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },
  lintOnSave: false,
  devServer: {
    port: 6060,
    overlay: {
      warning: false,
      errors: false
    }
  }
};

module.exports = config;
