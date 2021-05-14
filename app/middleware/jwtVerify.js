/*
 * @Author: hongdong.liao
 * @Date: 2021-05-13 10:14:30
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 12:14:22
 * @FilePath: /demo-server/app/middleware/jwtVerify.js
 */
'use strict';

module.exports = (options) => {
    return async function jwtVerify(ctx, next) {
        const token = ctx.request.header.authorization.substring(7);
        let decode = '';
        if (token) {
            try {
                // decode = ctx.app.jwt.verify(token, options.secret);
                decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
                await next();
                console.log('decode======>', decode);
            } catch (error) {
                console.log(error, 21);
                ctx.status = 401;
                ctx.body = {
                    message: error.message,
                };
                return;
            }
        } else {
            ctx.status = 401;
            ctx.body = {
                message: '没有token',
            };
            return;
        }
    };
};
