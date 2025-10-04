/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from "../interface/errorTypes";


export const handleDuplicateError = (err: any): TGenericErrorResponse => {
    const matchedArray = err.message.match(/"([^"]*)"/);
    return {
        statusCode: 400,
        message: `${matchedArray[1]} alreacy exists.`
    }
};

export const handleCastError = (): TGenericErrorResponse => {
    return {
        statusCode: 400,
        message: 'Invalid Mongoose ObjectId. Please provide a valid ObjectId'
    }
};

export const handleZodValidationError = (err: any): TGenericErrorResponse => {
    const errorSources: TErrorSources[] = [];
    err?.issues.forEach((issue: any) => {
        errorSources.push({
            path: issue.path[issue.path.length - 1],
            message: issue.message.toLowerCase() === 'required' ? `${issue.path[issue.path.length - 1]} is required` : issue.message
        });
    });

    return {
        statusCode: 400,
        message: "Zod validation error",
        errorSources
    }
}