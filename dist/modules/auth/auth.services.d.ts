export declare const AuthServices: {
    userLogin: (payload: any) => Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            name: string;
            id: number;
            email: string;
            role: string;
            createdAt: Date;
            updateAt: Date;
        };
    }>;
};
//# sourceMappingURL=auth.services.d.ts.map