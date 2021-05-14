/*
 * @Author: hongdong.liao
 * @Date: 2021-05-13 10:46:27
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 14:20:19
 * @FilePath: /demo-server/app/middleware/notfound_handler.js
 */
module.exports = () => {
    return async function notFoundHandler(ctx, next) {
        try {
            await next();
        } catch (err) {
            if (ctx.status === 404 && !ctx.body) {
                if (ctx.acceptJSON) {
                    ctx.body = {
                        code: '000000',
                        message: '成功',
                        data: {
                            error: 'Not Found...',
                        },
                    };
                } else {
                    ctx.body = '<h1>Page Not Found</h1>';
                }
            }
        }
    };
};
