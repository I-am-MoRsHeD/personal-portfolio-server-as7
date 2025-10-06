import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";
import bcrypt from 'bcryptjs'
import { createTokens } from "../../utils/userTokens";
import { JwtPayload } from "jsonwebtoken";


const userLogin = async (payload: any) => {
    const { email, password } = payload;
    const isUserExist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (!isUserExist) {
        throw new AppError(400, 'Email does not exist');
    };

    const bcryptedPassword = await bcrypt.compare(password as string, isUserExist.password as string);

    if (!bcryptedPassword) {
        throw new AppError(400, "Password is incorrect");
    };


    const userTokens = createTokens(isUserExist);

    const { password: pass, ...rest } = isUserExist;

    return {
        accessToken: userTokens.accessToken,
        refreshToken: userTokens.refreshToken,
        user: rest
    };
};

const getMe = async (decodedUser: JwtPayload) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: decodedUser?.email
        }
    });

    if (!isUserExist) {
        throw new AppError(400, 'User does not exist');
    };

    return isUserExist;
}

export const AuthServices = {
    userLogin,
    getMe
}