'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/login', controller.users.login);
  router.get('/user/menus', controller.users.menu);
  // router.get('/user/menu', controller.home.index);
};
