"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const validateSchema = (zodSchema) => async (req, res, next) => {
    try {
        if (req.body.data) {
            req.body = JSON.parse(req.body.data);
        }
        req.body = await zodSchema.parseAsync(req.body);
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.validateSchema = validateSchema;
//# sourceMappingURL=validateSchema.js.map