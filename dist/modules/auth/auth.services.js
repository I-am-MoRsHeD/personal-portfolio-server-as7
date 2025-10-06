"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const db_1 = require("../../config/db");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userTokens_1 = require("../../utils/userTokens");
const userLogin = async (payload) => {
    const { email, password } = payload;
    const isUserExist = await db_1.prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!isUserExist) {
        throw new AppError_1.default(400, 'Email does not exist');
    }
    ;
    const bcryptedPassword = await bcryptjs_1.default.compare(password, isUserExist.password);
    if (!bcryptedPassword) {
        throw new AppError_1.default(400, "Password is incorrect");
    }
    ;
    const userTokens = (0, userTokens_1.createTokens)(isUserExist);
    const { password: pass, ...rest } = isUserExist;
    return {
        accessToken: userTokens.accessToken,
        refreshToken: userTokens.refreshToken,
        user: rest
    };
};
const getMe = async (decodedUser) => {
    const isUserExist = await db_1.prisma.user.findUnique({
        where: {
            email: decodedUser?.email
        }
    });
    console.log(isUserExist);
    if (!isUserExist) {
        throw new AppError_1.default(400, 'User does not exist');
    }
    ;
    return isUserExist;
};
exports.AuthServices = {
    userLogin,
    getMe
};
//# sourceMappingURL=auth.services.js.map