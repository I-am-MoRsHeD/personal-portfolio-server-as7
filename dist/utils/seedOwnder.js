"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedOwner = void 0;
const db_1 = require("../config/db");
const env_1 = require("../config/env");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const seedOwner = async () => {
    try {
        const isOwnerExist = await db_1.prisma.user.findUnique({
            where: {
                email: env_1.envVars.OWNER_EMAIL
            }
        });
        if (isOwnerExist) {
            console.log('Owner already exists!');
            return;
        }
        ;
        const bcryptedPassword = await bcryptjs_1.default.hash(env_1.envVars.OWNER_PASS, Number(env_1.envVars.BCRYPT_SALT_ROUNDS));
        const payload = {
            name: "Don banega Owner!",
            email: env_1.envVars.OWNER_EMAIL,
            password: bcryptedPassword,
        };
        const owner = await db_1.prisma.user.create({
            data: payload
        });
        console.log(owner);
    }
    catch (error) {
        console.log(error);
    }
};
exports.seedOwner = seedOwner;
//# sourceMappingURL=seedOwnder.js.map