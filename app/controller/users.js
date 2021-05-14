/*
 * @Author: hongdong.liao
 * @Date: 2021-01-18 09:39:13
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 16:25:19
 * @FilePath: /demo-server/app/controller/users.js
 */

'use strict';

const Controller = require('./basic');

class UsersController extends Controller {
  async login() {
    console.log('login');
    const { ctx } = this;
    const { body } = ctx.request;
    const user = await ctx.service.users.findUser(body.username, body.password);
    try {
      if (!user) {
        this.failure();
        return;
      }
      const data = {
        user: user.user_name,
        // 生成 token 返回给客户端
        // token: ctx.app.jwt.sign({ name: 'micro' }, ctx.app.config.jwt.secret),
        token: ctx.helper.getToken({ name: 'micro' }, ctx.app.config.jwt.secret),
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
    console.log('menu');
    const { ctx } = this;
    const menuResult = await ctx.service.users.findMenu();
    this.success(menuResult);
  }
}

module.exports = UsersController;
