"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageValidation = void 0;
const AppError_1 = __importDefault(require("../errorHelpers/AppError"));
const imageValidation = () => {
    return (req, res, next) => {
        if (!req.file) {
            throw new AppError_1.default(404, "Thumbnail is required!");
        }
        ;
        next();
    };
};
exports.imageValidation = imageValidation;
//# sourceMappingURL=imageValidation.js.map