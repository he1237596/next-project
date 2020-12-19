/*
 * @Author: Chris
 * @Date: 2020-12-18 01:05:03
 * @LastEditors: Chris
 * @LastEditTime: 2020-12-19 16:03:04
 * @Descripttion: **
 */

const antdLessLoader = require("next-antd-aza-less")
const withCss = require("@zeit/next-css")
// const modifyVars = reuire("./your/custom/vars")

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

/* Without CSS Modules, with PostCSS */
module.exports = antdLessLoader(withCss({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      // modifyVars: modifyVars
    }
}));