import { Response } from "express";
interface AuthTokens {
    accessToken?: string;
    refreshToken?: string;
}
export declare const setCookies: (res: Response, tokenInfo: AuthTokens) => void;
export {};
//# sourceMappingURL=setCookies.d.ts.map