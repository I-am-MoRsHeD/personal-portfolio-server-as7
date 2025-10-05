"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogZodSchema = exports.createBlogZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createBlogZodSchema = zod_1.default.object({
    title: zod_1.default
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }),
    content: zod_1.default.string(),
    thumbnail: zod_1.default.string().optional(),
});
exports.updateBlogZodSchema = zod_1.default.object({
    title: zod_1.default
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }).optional(),
    content: zod_1.default.string().optional(),
    thumbnail: zod_1.default.string().optional(),
});
//# sourceMappingURL=blog.validation.js.map