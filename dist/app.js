"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const routes_1 = require("./routes");
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const notFound_1 = __importDefault(require("./middleware/notFound"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.set("trust proxy", 1);
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: env_1.envVars.FRONTEND_URL,
    credentials: true
}));
app.use('/api', routes_1.router);
app.get('/', (req, res) => {
    res.send('Welcome to My Personal Portfolio!!');
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFound_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map