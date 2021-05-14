/*
 * @Author: hongdong.liao
 * @Date: 2021-01-15 17:21:23
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 11:02:43
 * @FilePath: /demo-server/app.js
 */
'use strict';

class App {
  constructor(app) {
    this.app = app;
    app.loggers.logger.info(`current environment ${app.config.env}`);
  }
  // TODO: https://eggjs.org/zh-cn/basics/app-start.html
}

module.exports = App;
