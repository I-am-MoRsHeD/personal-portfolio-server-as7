"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const checkAuth_1 = require("../../utils/checkAuth");
const router = (0, express_1.Router)();
router.get('/me', (0, checkAuth_1.checkAuth)(), auth_controller_1.AuthController.getMe);
router.post('/login', auth_controller_1.AuthController.userLogin);
router.post('/logout', auth_controller_1.AuthController.logout);
exports.authRouter = router;
//# sourceMappingURL=auth.route.js.map