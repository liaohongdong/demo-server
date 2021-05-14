/*
 * @Author: hongdong.liao
 * @Date: 2021-05-12 15:32:17
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 16:09:30
 * @FilePath: /demo-server/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middlewares, } = app;
  const jwtVerify = middlewares.jwtVerify(app.config.jwt);
  router.get('/', controller.home.index);
  router.post('/user/login', controller.users.login);
  router.get('/user/menus', jwtVerify, controller.users.menu);
};
