import { Server } from "http";
import app from "./app";
import { envVars } from "./config/env";
import { prisma } from "./config/db";
import { seedOwner } from "./utils/seedOwnder";


let server: Server | null = null;

async function connectToDB() {
    try {
        await prisma.$connect();
        console.log("DB connected successfully!!!");
    } catch (error) {
        console.log("DB connection failed!!");
        process.exit(1);
    }
}

const startServer = async () => {
    try {
        await connectToDB();
        server = app.listen(envVars.PORT, () => {
            console.log(`Server is running on port : ${envVars.PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
};

(async () => {
    await startServer();
    await seedOwner();
})()

process.on('unhandledRejection', (err) => {
    console.log("Unhandled rejection is detected...Server is shutting down...!", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    };
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.log("Uncaught expection is detected...Server is shutting down...!", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    };
    process.exit(1);
});

process.on('SIGTERM', () => {
    console.log("SIGTERN signal is received...Server is shutting down...!");
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    };
    process.exit(1);
});