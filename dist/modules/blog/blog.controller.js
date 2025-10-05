"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const blog_services_1 = require("./blog.services");
const seedResponse_1 = require("../../utils/seedResponse");
const catchAsync_1 = require("../../utils/catchAsync");
const createBlog = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const decodedToken = req.user;
    const payload = {
        ...req.body,
        authorId: decodedToken.userId,
        thumbnail: req.file?.path
    };
    const result = await blog_services_1.BlogServices.createBlog(payload, decodedToken);
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Blog created successfully",
        data: result
    });
});
const getAllBlogs = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const result = await blog_services_1.BlogServices.getAllBlogs();
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blogs retrieved successfully!",
        data: result
    });
});
const getSingleBlog = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { blogId } = req.params;
    const result = await blog_services_1.BlogServices.getSingleBlog(Number(blogId));
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blog retrieved successfully!",
        data: result
    });
});
const updateBlog = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { blogId } = req.params;
    let body = {};
    if (req.file?.path) {
        body = {
            ...req.body,
            thumbnail: req.file?.path
        };
    }
    else {
        body = req.body;
    }
    const result = await blog_services_1.BlogServices.updateBlog(Number(blogId), body);
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blog updated successfully!",
        data: result
    });
});
const deleteBlog = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { blogId } = req.params;
    const result = await blog_services_1.BlogServices.deleteBlog(Number(blogId));
    (0, seedResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted successfully!",
        data: result
    });
});
exports.BlogController = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
};
//# sourceMappingURL=blog.controller.js.map