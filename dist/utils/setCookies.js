"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookies = void 0;
const cookieOptions_1 = require("./cookieOptions");
const setCookies = (res, tokenInfo) => {
    if (tokenInfo.accessToken) {
        res.cookie('accessToken', tokenInfo.accessToken, cookieOptions_1.cookieOptions);
    }
    ;
    if (tokenInfo.refreshToken) {
        res.cookie('refreshToken', tokenInfo.refreshToken, cookieOptions_1.cookieOptions);
    }
};
exports.setCookies = setCookies;
//# sourceMappingURL=setCookies.js.map