/*
 * @Author: hongdong.liao
 * @Date: 2021-05-12 15:32:17
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 17:37:24
 * @FilePath: /demo-server/app/middleware/gzip.js
 */
'use strict';

const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => {
  return async function gzip(ctx, next) {
    await next();

    // // 后续中间件执行完成后将响应体转换成 gzip
    // let body = ctx.body;
    // if (!body) return;
    // // 支持 options.threshold
    // if (options.threshold && ctx.length < options.threshold) return;

    // if (isJSON(body)) body = JSON.stringify(body);

    // // 设置 gzip body，修正响应头
    // const stream = zlib.createGzip();
    // stream.end(body);
    // ctx.body = stream;
    // ctx.set('Context-Encoding', 'gzip');
  };
};
