import { NextFunction, Request, Response } from "express";
import { AuthServices } from "./auth.services";
import { sendResponse } from "../../utils/seedResponse";
import { setCookies } from "../../utils/setCookies";
import { catchAsync } from "../../utils/catchAsync";



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

export const AuthController = {
    userLogin
}