/*
 * @Author: hongdong.liao
 * @Date: 2021-01-18 09:39:13
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-01-18 11:37:17
 * @FilePath: /_serve/app/controller/users.js
 */

'use strict';

const Controller = require('./basic');
const jwt = require('jsonwebtoken');
const menus = require('../data/menu');

class UsersController extends Controller {
  async login() {
    const { ctx } = this;
    const { body } = ctx.request;
    const user = await ctx.service.users.findUser(body.username);
    try {
      if (!user) {
        this.failure();
        return;
      }
      const data = {
        user: user.user_name,
        // 生成 token 返回给客户端
        token: jwt.sign(
          {
            data: user.user_name,
            // 设置 token 过期时间
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 60 seconds * 60 minutes = 1 hour
          },
          ctx.app.config.secret
        ),
      };
      ctx.set({
        authorization: data.token,
        'Access-Control-Expose-Headers': 'authorization',
      });
      this.success(data);
    } catch (error) {
      ctx.throw(500, error);
    }
  }

  async menu() {
    // const { ctx } = this;
    // const menuResult = await ctx.service.users.findMenu();
    this.success(menus);
  }
}

module.exports = UsersController;
