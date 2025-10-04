import { NextFunction, Request, Response } from "express";
import { Blog, Prisma } from "../../../generated/prisma";
import { BlogServices } from "./blog.services";
import { sendResponse } from "../../utils/seedResponse";
import { JwtPayload } from "jsonwebtoken";
import { catchAsync } from "../../utils/catchAsync";


const createBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const decodedToken = req.user as JwtPayload;
    const payload: Prisma.BlogCreateInput = {
        ...req.body,
        authorId: decodedToken.userId,
        thumbnail: req.file?.path
    };

    const result = await BlogServices.createBlog(payload, decodedToken);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Blog created successfully",
        data: result
    });
});


export const BlogController = {
    createBlog
};