/*
 * @Author: hongdong.liao
 * @Date: 2021-01-15 15:46:36
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 15:39:19
 * @FilePath: /demo-server/config/config.default.js
 */
/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610696787796_254';

  // add your middleware config here
  config.middleware = [ 'gzip', 'notfoundHandler', 'errorHandler' ];

  config.cluster = {
    listen: {
      path: '',
      port: 4396,
      hostname: '',
    },
  };

  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      // path.join(appInfo.baseDir, 'path/to/another'),
    ].join(','),
  };

  // add your user config here
  const userConfig = {
    secret: 'jwt_secret',
  };

  config.jwt = {
    secret: 'jwt_secret',
  }

  config.gzip = {
    threshold: 1024,
  };

  config.view = {
    defaultExtension: '.nj',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  config.mysql = {
    client: {
      host: '39.108.115.177',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'micro',
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false, // 是否加载到 agent 上，默认关闭
  };

  config.cors = {
    origin: ctx => ctx.get('origin'),
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
