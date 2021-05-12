/*
 * @Author: hongdong.liao
 * @Date: 2021-01-18 09:42:34
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-01-18 11:18:46
 * @FilePath: /_serve/app/service/users.js
 */
'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  async findUser(username) {
    if (username) {
      // let _sql = `select * from user_info where user_name = "${username}" limit 1;`;
      return this.app.mysql.get('user_info', {
        user_name: username,
      });
    }
    return null;
  }

  async getChildrenMenu(id, menuList) {
    const lists = [];
    if (menuList && menuList.length > 0) {
      for (let i = 0; i < menuList.length; i++) {
        const menu = menuList[i];
        if (id === menu.pid) {
          menu.children = this.getChildrenMenu(menu.id, menuList);
          lists.push(menu);
        }
      }
    }
    return lists;
  }

  async findMenu() {
    const menus = await this.app.mysql.select('micro_menu');
    if (menus && menus.length > 0) {
      for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        if (menu && menu.id) {
          menu.children = await this.getChildrenMenu(menu.id, menus);
        }
      }
    }
    return menus;
  }
}

module.exports = UsersService;
