/*
 * @Author: hongdong.liao
 * @Date: 2021-01-18 09:39:13
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-06-11 19:05:18
 * @FilePath: /microDemo/demo-web/demo-server/app/controller/users.js
 */

'use strict';

const Controller = require('./basic');

class UsersController extends Controller {
  async login() {
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
    // this.success(menuResult);
    let str = "[{\"id\":5,\"name\":\"系统\",\"pid\":0,\"order\":100,\"module\":\"system\",\"defaultRegister\":1,\"dev_entry\":\"http://localhost:10002\",\"dep_entry\":null,\"routerBase\":\"/system\",\"component\":null,\"url\":\"/system\",\"title\":\"系统\",\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null,\"children\":[{\"id\":6,\"name\":\"菜单管理\",\"pid\":5,\"order\":10,\"module\":\"system\",\"defaultRegister\":0,\"dev_entry\":null,\"dep_entry\":null,\"routerBase\":\"/system\",\"component\":null,\"url\":\"/system\",\"title\":null,\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null},{\"id\":7,\"name\":\"角色管理\",\"pid\":5,\"order\":9,\"module\":\"system\",\"defaultRegister\":0,\"dev_entry\":null,\"dep_entry\":null,\"routerBase\":\"/system\",\"component\":null,\"url\":\"/system\",\"title\":null,\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null},{\"id\":8,\"name\":\"用户管理\",\"pid\":5,\"order\":8,\"module\":\"system\",\"defaultRegister\":0,\"dev_entry\":null,\"dep_entry\":null,\"routerBase\":\"/system\",\"component\":null,\"url\":\"/system\",\"title\":null,\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null}]},{\"id\":9,\"name\":\"订单\",\"pid\":0,\"order\":0,\"module\":\"order\",\"defaultRegister\":0,\"dev_entry\":\"http://localhost:10003\",\"dep_entry\":null,\"routerBase\":\"/order\",\"component\":null,\"url\":\"/order\",\"title\":\"订单\",\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null,\"children\":[{\"id\":10,\"name\":\"订单记录\",\"pid\":9,\"order\":10,\"module\":\"order\",\"defaultRegister\":0,\"dev_entry\":null,\"dep_entry\":null,\"routerBase\":\"/order\",\"component\":null,\"url\":\"/order\",\"title\":null,\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null},{\"id\":11,\"name\":\"订单列表\",\"pid\":9,\"order\":9,\"module\":\"order\",\"defaultRegister\":0,\"dev_entry\":null,\"dep_entry\":null,\"routerBase\":\"/order\",\"component\":null,\"url\":\"/order\",\"title\":null,\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null},{\"id\":12,\"name\":\"自定处理订单\",\"pid\":9,\"order\":8,\"module\":\"order\",\"defaultRegister\":0,\"dev_entry\":null,\"dep_entry\":null,\"routerBase\":\"/order\",\"component\":null,\"url\":\"/order\",\"title\":null,\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null},{\"id\":13,\"name\":\"延迟发货报表\",\"pid\":9,\"order\":7,\"module\":\"order\",\"defaultRegister\":0,\"dev_entry\":null,\"dep_entry\":null,\"routerBase\":\"/order\",\"component\":null,\"url\":\"/order\",\"title\":null,\"icon\":null,\"create_time\":null,\"create_name\":null,\"update_time\":null,\"update_name\":null,\"last_ip\":null}]}]";
    this.success(JSON.parse(str));
  }
}

module.exports = UsersController;
