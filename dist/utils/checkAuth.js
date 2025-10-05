"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const jwt_1 = require("../utils/jwt");
const env_1 = require("../config/env");
const db_1 = require("../config/db");
const checkAuth = () => async (req, res, next) => {
    try {
        const role = "OWNER";
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            throw new AppError_1.default(403, "No token received");
        }
        ;
        const verifiedToken = (0, jwt_1.verifyToken)(accessToken, env_1.envVars.JWT_ACCESS_SECRET);
        const isUserExist = await db_1.prisma.user.findUnique({
            where: {
                email: verifiedToken.email
            }
        });
        if (!isUserExist) {
            throw new AppError_1.default(400, 'User does not exist');
        }
        ;
        if (!role === verifiedToken.role) {
            throw new AppError_1.default(403, "You are not permitted to access!!");
        }
        ;
        req.user = verifiedToken;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=checkAuth.js.map