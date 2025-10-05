"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const db_1 = require("../../config/db");
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const createBlog = async (payload, decodedUser) => {
    const isUserExist = await db_1.prisma.user.findUnique({
        where: {
            email: decodedUser.email
        }
    });
    if (!isUserExist) {
        throw new AppError_1.default(404, "User not found!");
    }
    ;
    const createBlog = await db_1.prisma.blog.create({
        data: payload,
        include: {
            author: {}
        }
    });
    return createBlog;
};
const getAllBlogs = async () => {
    const allBlogs = await db_1.prisma.blog.findMany({
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return allBlogs;
};
const getSingleBlog = async (id) => {
    const isBlogExist = await db_1.prisma.blog.findUnique({
        where: {
            id
        }
    });
    if (!isBlogExist) {
        throw new AppError_1.default(404, "Blog not found!!");
    }
    return await db_1.prisma.$transaction(async (tx) => {
        await tx.blog.update({
            where: {
                id
            },
            data: {
                views: {
                    increment: 1
                }
            }
        });
        return await tx.blog.findUnique({
            where: {
                id
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    }
                }
            }
        });
    });
};
const updateBlog = async (id, payload) => {
    const existingBlog = await db_1.prisma.blog.findUnique({
        where: {
            id
        }
    });
    if (!existingBlog) {
        throw new AppError_1.default(404, 'Blog not found!!!');
    }
    ;
    const updatedBlog = await db_1.prisma.blog.update({
        where: {
            id
        },
        data: { ...payload }
    });
    return updatedBlog;
};
const deleteBlog = async (id) => {
    const isBlogExist = await db_1.prisma.blog.findUnique({
        where: {
            id
        }
    });
    if (!isBlogExist) {
        throw new AppError_1.default(404, "Blog not found!!");
    }
    const deleteBlog = await db_1.prisma.blog.delete({
        where: {
            id
        }
    });
    return deleteBlog;
};
exports.BlogServices = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
};
//# sourceMappingURL=blog.services.js.map