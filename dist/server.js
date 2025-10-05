"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const db_1 = require("./config/db");
const seedOwnder_1 = require("./utils/seedOwnder");
let server = null;
async function connectToDB() {
    try {
        await db_1.prisma.$connect();
        console.log("DB connected successfully!!!");
    }
    catch (error) {
        console.log("DB connection failed!!");
        process.exit(1);
    }
}
const startServer = async () => {
    try {
        await connectToDB();
        server = app_1.default.listen(env_1.envVars.PORT, () => {
            console.log(`Server is running on port : ${env_1.envVars.PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
(async () => {
    await startServer();
    await (0, seedOwnder_1.seedOwner)();
})();
process.on('unhandledRejection', (err) => {
    console.log("Unhandled rejection is detected...Server is shutting down...!", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    ;
    process.exit(1);
});
process.on('uncaughtException', (err) => {
    console.log("Uncaught expection is detected...Server is shutting down...!", err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    ;
    process.exit(1);
});
process.on('SIGTERM', () => {
    console.log("SIGTERN signal is received...Server is shutting down...!");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    ;
    process.exit(1);
});
//# sourceMappingURL=server.js.map