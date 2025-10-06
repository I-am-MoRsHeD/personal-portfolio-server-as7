import { NextFunction, Request, Response } from "express";
import { AuthServices } from "./auth.services";
import { sendResponse } from "../../utils/seedResponse";
import { setCookies } from "../../utils/setCookies";
import { catchAsync } from "../../utils/catchAsync";
import { JwtPayload } from "jsonwebtoken";
import { cookieOptions } from "../../utils/cookieOptions";



const userLogin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await AuthServices.userLogin(req.body);
    setCookies(res, result);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully",
        data: result
    })
});

const getMe = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as JwtPayload;
    const result = await AuthServices.getMe(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User retrieved successfully",
        data: result
    })
});

const logout = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('accessToken', cookieOptions);
    res.clearCookie('refreshToken', cookieOptions);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User logged out successfully",
        data: null
    })
});

export const AuthController = {
    userLogin,
    logout,
    getMe
}