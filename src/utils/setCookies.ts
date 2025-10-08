import { Response } from "express";
import { cookieOptions } from "./cookieOptions";

interface AuthTokens {
    accessToken?: string;
    refreshToken?: string;
}

export const setCookies = (res: Response, tokenInfo: AuthTokens) => {
    if (tokenInfo.accessToken) {
        res.cookie('accessToken', tokenInfo.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/'
        });
    };
    if (tokenInfo.refreshToken) {
        res.cookie('refreshToken', tokenInfo.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/'
        });
    }
}