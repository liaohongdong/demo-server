/*
 * @Author: hongdong.liao
 * @Date: 2021-01-15 17:21:23
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-01-18 09:38:25
 * @FilePath: /_serve/app.js
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
