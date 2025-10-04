import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";
import { Blog, Prisma } from "../../../generated/prisma";


const createBlog = async (payload: Prisma.BlogCreateInput, decodedUser : JwtPayload) => {
    const isUserExist = await prisma.user.findUnique({
        where :{
            email : decodedUser?.email
        }
    });

    if(!isUserExist){
        throw new AppError(400, "User not found!")
    };


};

export const BlogServices = {
    createBlog
};