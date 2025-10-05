import { JwtPayload } from "jsonwebtoken";
import { Blog, Prisma } from "../../../generated/prisma";
export declare const BlogServices: {
    createBlog: (payload: Prisma.BlogCreateInput, decodedUser: JwtPayload) => Promise<Blog>;
    getAllBlogs: () => Promise<({
        author: {
            name: string;
            id: number;
            email: string;
            role: string;
        };
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        thumbnail: string | null;
        views: number;
        authorId: number;
        updatedAt: Date;
    })[]>;
    getSingleBlog: (id: number) => Promise<({
        author: {
            name: string;
            id: number;
            email: string;
            role: string;
        };
    } & {
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        thumbnail: string | null;
        views: number;
        authorId: number;
        updatedAt: Date;
    }) | null>;
    updateBlog: (id: number, payload: Prisma.BlogUpdateInput) => Promise<{
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        thumbnail: string | null;
        views: number;
        authorId: number;
        updatedAt: Date;
    }>;
    deleteBlog: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        title: string;
        content: string;
        thumbnail: string | null;
        views: number;
        authorId: number;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=blog.services.d.ts.map