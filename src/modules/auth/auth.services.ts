import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";
import bcrypt from 'bcryptjs'
import { createTokens } from "../../utils/userTokens";


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


export const AuthServices = {
    userLogin
}