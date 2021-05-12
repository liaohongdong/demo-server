/*
 * @Author: hongdong.liao
 * @Date: 2021-01-18 10:12:58
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-01-18 10:16:07
 * @FilePath: /_serve/app/controller/basic.js
 */

'use strict';

const Controller = require('egg').Controller;

class BasicController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(data) {
    this.ctx.body = {
      code: '000000',
      message: '成功',
      data,
    };
  }

  failure(data) {
    this.ctx.body = {
      code: 'A00001',
      message: '失败',
      data,
    };
  }
}

module.exports = BasicController;
