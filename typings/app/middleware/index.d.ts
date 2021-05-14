// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportGzip = require('../../../app/middleware/gzip');
import ExportJwtVerify = require('../../../app/middleware/jwtVerify');
import ExportNotfoundHandler = require('../../../app/middleware/notfound_handler');

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    gzip: typeof ExportGzip;
    jwtVerify: typeof ExportJwtVerify;
    notfoundHandler: typeof ExportNotfoundHandler;
  }
}
