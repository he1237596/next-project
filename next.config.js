/*
 * @Author: Chris
 * @Date: 2020-12-18 01:05:03
 * @LastEditors: Chris
 * @LastEditTime: 2020-12-18 01:13:54
 * @Descripttion: **
 */
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')

module.exports=withLess(withCss({ cssModules: true }));