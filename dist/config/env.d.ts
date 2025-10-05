interface Envvars {
    PORT: string;
    NODE_ENV: string;
    DATABASE_URL: string;
    FRONTEND_URL: string;
    OWNER_EMAIL: string;
    OWNER_PASS: string;
    BCRYPT_SALT_ROUNDS: string;
    JWT_ACCESS_SECRET: string;
    JWT_ACCESS_EXPIRES: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES: string;
    CLOUDINARY: {
        CLOUDINARY_CLOUD_NAME: string;
        CLOUDINARY_API_KEY: string;
        CLOUDINARY_API_SECRET: string;
    };
}
export declare const envVars: Envvars;
export {};
//# sourceMappingURL=env.d.ts.map