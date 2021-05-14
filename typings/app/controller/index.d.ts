// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBasic = require('../../../app/controller/basic');
import ExportHome = require('../../../app/controller/home');
import ExportUsers = require('../../../app/controller/users');

declare module 'egg' {
  interface IController {
    basic: ExportBasic;
    home: ExportHome;
    users: ExportUsers;
  }
}
