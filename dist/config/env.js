"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
const requiredEnvVariables = ["PORT", "NODE_ENV", "DATABASE_URL", "FRONTEND_URL", "OWNER_EMAIL", "OWNER_PASS", "BCRYPT_SALT_ROUNDS", 'JWT_ACCESS_SECRET', 'JWT_ACCESS_EXPIRES', 'JWT_REFRESH_SECRET', 'JWT_REFRESH_EXPIRES', 'CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
const loadEnvVariables = () => {
    requiredEnvVariables.forEach((envVar) => {
        if (!process.env[envVar]) {
            throw new Error(`Missing environment variable: ${envVar}`);
        }
        ;
    });
    return {
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        FRONTEND_URL: process.env.FRONTEND_URL,
        OWNER_EMAIL: process.env.OWNER_EMAIL,
        OWNER_PASS: process.env.OWNER_PASS,
        BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES,
        CLOUDINARY: {
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
            CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
            CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
        },
    };
};
exports.envVars = loadEnvVariables();
//# sourceMappingURL=env.js.map