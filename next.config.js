/*
 * @Author: Chris
 * @Date: 2020-12-18 01:05:03
 * @LastEditors: Chris
 * @LastEditTime: 2020-12-18 01:26:38
 * @Descripttion: **
 */

const antdLessLoader = require("next-antd-aza-less")
// const modifyVars = require("./your/custom/vars")

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

/* Without CSS Modules, with PostCSS */
module.exports = antdLessLoader({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      // modifyVars: modifyVars
    }
});