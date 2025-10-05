"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectZodSchema = exports.createProjectZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createProjectZodSchema = zod_1.default.object({
    title: zod_1.default
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }),
    description: zod_1.default.string().min(1, "Description is required."),
    projectLink: zod_1.default.url("Must be a valid project URL."),
    liveLink: zod_1.default.url("Must be a valid live site URL."),
    features: zod_1.default.array(zod_1.default.string().min(1, "Feature cannot be empty")),
    thumbnail: zod_1.default.string().optional()
});
exports.updateProjectZodSchema = zod_1.default.object({
    title: zod_1.default
        .string()
        .min(1, { message: "Title must be at least 1 characters long." }).optional(),
    description: zod_1.default.string().min(1, "Description is required.").optional(),
    projectLink: zod_1.default.url("Must be a valid project URL.").optional(),
    liveLink: zod_1.default.url("Must be a valid live site URL.").optional(),
    features: zod_1.default.array(zod_1.default.string().min(1, "Feature cannot be empty")).optional(),
    thumbnail: zod_1.default.string().optional()
});
//# sourceMappingURL=project.validation.js.map