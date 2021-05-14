/*
 * @Author: hongdong.liao
 * @Date: 2021-01-15 15:46:36
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 15:34:40
 * @FilePath: /demo-server/config/plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
