/*
 * @Author: hongdong.liao
 * @Date: 2021-05-12 17:30:30
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 17:51:08
 * @FilePath: /demo-server/app/extend/helper.js
 */
'use strict';

const jwt = require('jsonwebtoken');

module.exports = {
    getToken(payload = {}, secret) {
        return jwt.sign(payload, secret, { expiresIn: '3h' });
    }
};
