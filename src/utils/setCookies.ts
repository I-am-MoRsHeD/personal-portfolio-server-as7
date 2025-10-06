import { Response } from "express";
import { cookieOptions } from "./cookieOptions";

interface AuthTokens {
    accessToken?: string;
    refreshToken?: string;
}

export const setCookies = (res: Response, tokenInfo: AuthTokens) => {
    if (tokenInfo.accessToken) {
        res.cookie('accessToken', tokenInfo.accessToken, cookieOptions);
    };
    if (tokenInfo.refreshToken) {
        res.cookie('refreshToken', tokenInfo.refreshToken, cookieOptions);
    }
}