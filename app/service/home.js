/*
 * @Author: hongdong.liao
 * @Date: 2021-01-15 17:53:48
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-01-15 18:08:13
 * @FilePath: /_serve/app/service/home.js
 */
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async hello() {
    return 'hello';
  }
}

module.exports = HomeService;
