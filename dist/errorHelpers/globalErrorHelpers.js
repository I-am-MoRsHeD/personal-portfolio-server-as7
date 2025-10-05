"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodValidationError = exports.handleCastError = exports.handleDuplicateError = void 0;
const handleDuplicateError = (err) => {
    const matchedArray = err.message.match(/"([^"]*)"/);
    return {
        statusCode: 400,
        message: `${matchedArray[1]} alreacy exists.`
    };
};
exports.handleDuplicateError = handleDuplicateError;
const handleCastError = () => {
    return {
        statusCode: 400,
        message: 'Invalid Mongoose ObjectId. Please provide a valid ObjectId'
    };
};
exports.handleCastError = handleCastError;
const handleZodValidationError = (err) => {
    const errorSources = [];
    err?.issues.forEach((issue) => {
        errorSources.push({
            path: issue.path[issue.path.length - 1],
            message: issue.message.toLowerCase() === 'required' ? `${issue.path[issue.path.length - 1]} is required` : issue.message
        });
    });
    return {
        statusCode: 400,
        message: "Zod validation error",
        errorSources
    };
};
exports.handleZodValidationError = handleZodValidationError;
//# sourceMappingURL=globalErrorHelpers.js.map