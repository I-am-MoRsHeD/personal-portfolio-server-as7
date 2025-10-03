import dotenv from 'dotenv';

dotenv.config();

interface Envvars {
    PORT: string;
    NODE_ENV: string;
    DATABASE_URL: string;
    FRONTEND_URL : string;
};


const requiredEnvVariables: string[] = ["PORT", "NODE_ENV", "DATABASE_URL", "FRONTEND_URL"];

const loadEnvVariables = (): Envvars => {
    requiredEnvVariables.forEach((envVar) => {
        if (!process.env[envVar]) {
            throw new Error(`Missing environment variable: ${envVar}`);
        };
    });

    return {
        PORT: process.env.PORT as string,
        NODE_ENV: process.env.NODE_ENV as string,
        DATABASE_URL: process.env.DATABASE_URL as string,
        FRONTEND_URL: process.env.FRONTEND_URL as string,
    }
};

export const envVars = loadEnvVariables();