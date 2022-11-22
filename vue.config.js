const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  // chainWebpack: conf => {
  //   conf.resolve.alias.set("@", resolve("src"));
  // },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': resolve('src')
  //     }
  //   }
  // },
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  }
};

module.exports = config;
