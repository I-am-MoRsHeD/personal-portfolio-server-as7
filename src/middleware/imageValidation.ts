import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";

export const imageValidation = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.file) {
            throw new AppError(404, "Thumbnail is required!")
        };
        next();
    }
}