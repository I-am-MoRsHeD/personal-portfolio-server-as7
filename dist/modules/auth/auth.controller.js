"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_services_1 = require("./auth.services");
const seedResponse_1 = require("../../utils/seedResponse");
const setCookies_1 = require("../../utils/setCookies");
const catchAsync_1 = require("../../utils/catchAsync");
const userLogin = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const result = await auth_services_1.AuthServices.userLogin(req.body);
    (0, setCookies_1.setCookies)(res, result);
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully",
        data: result
    });
});
const getMe = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const user = req.user;
    console.log('controller', user);
    const result = await auth_services_1.AuthServices.getMe(user);
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "User retrieved successfully",
        data: result
    });
});
const logout = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "User logged out successfully",
        data: null
    });
});
exports.AuthController = {
    userLogin,
    logout,
    getMe
};
//# sourceMappingURL=auth.controller.js.map