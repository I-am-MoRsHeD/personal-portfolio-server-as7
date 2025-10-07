import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";
import { Blog, Prisma } from "../../../generated/prisma";


const createBlog = async (payload: Prisma.BlogCreateInput, decodedUser: JwtPayload): Promise<Blog> => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: decodedUser.email
        }
    });

    if (!isUserExist) {
        throw new AppError(404, "User not found!")
    };

    const createBlog = await prisma.blog.create({
        data: payload,
        include: {
            author: {}
        }
    });

    return createBlog;
};

const getAllBlogs = async () => {
    const allBlogs = await prisma.blog.findMany({
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

const getSingleBlog = async (id: number) => {
    const isBlogExist = await prisma.blog.findUnique({
        where: {
            id
        },
        include: {
            author: {}
        }
    });
    if (!isBlogExist) {
        throw new AppError(404, "Blog not found!!")
    }
    return await prisma.$transaction(async (tx) => {
        await tx.blog.update({
            where: {
                id
            },
            data: {
                views: {
                    increment: 1
                }
            }
        })
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
    })
};

const updateBlog = async (id: number, payload: Prisma.BlogUpdateInput) => {
    const existingBlog = await prisma.blog.findUnique({
        where: {
            id
        }
    });
    if (!existingBlog) {
        throw new AppError(404, 'Blog not found!!!')
    };

    const updatedBlog = await prisma.blog.update({
        where: {
            id
        },
        data: { ...payload }
    });

    return updatedBlog
};

const deleteBlog = async (id: number) => {
    const isBlogExist = await prisma.blog.findUnique({
        where: {
            id
        }
    });
    if (!isBlogExist) {
        throw new AppError(404, "Blog not found!!")
    }

    const deleteBlog = await prisma.blog.delete({
        where: {
            id
        }
    });

    return deleteBlog;
}

export const BlogServices = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
};