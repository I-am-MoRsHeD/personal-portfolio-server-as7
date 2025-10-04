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

const getAllBlogs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await BlogServices.getAllBlogs();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blogs retrieved successfully!",
        data: result
    });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { blogId } = req.params;
    const result = await BlogServices.getSingleBlog(Number(blogId));

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog retrieved successfully!",
        data: result
    });
});

const updateBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { blogId } = req.params;
    let body = {};

    if (req.file?.path) {
        body = {
            ...req.body,
            thumbnail: req.file?.path
        };
    } else {
        body = req.body
    }
    const result = await BlogServices.updateBlog(Number(blogId), body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog updated successfully!",
        data: result
    });
});

const deleteBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { blogId } = req.params;
    const result = await BlogServices.deleteBlog(Number(blogId));

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted successfully!",
        data: result
    });
});


export const BlogController = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
};