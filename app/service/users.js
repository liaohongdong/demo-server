/*
 * @Author: hongdong.liao
 * @Date: 2021-01-18 09:42:34
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-06-11 18:19:17
 * @FilePath: /microDemo/demo-web/demo-server/app/service/users.js
 */
'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  async findUser(username, password) {
    if (username) {
      // let _sql = `select * from user_info where user_name = "${username}" limit 1;`;
      return this.app.mysql.get('user_info', {
        user_name: username,
        user_pwd: password,
      });
    }
    return null;
  }

  async getChildrenMenu(id, menu) {
    let childMenu = await this.app.mysql.select('micro_menu', {
      where: {
        pid: id,
      }
    });
    if (!menu.children) {
      menu.children = childMenu;
    } else {
      menu.children.push(childMenu);
    }
    return menu;
  }

  async findMenu() {
    let menus = await this.app.mysql.select('micro_menu', {
      where: {
        pid: 0,
      }
    });
    console.log(menus);
    if (menus && menus.length > 0) {
      for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        if (menu && menu.id) {
          await this.getChildrenMenu(menu.id, menu);
        }
      }
    }
    return menus;
  }
}

module.exports = UsersService;
