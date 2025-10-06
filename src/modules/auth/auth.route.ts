import { Router } from "express";
import { AuthController } from "./auth.controller";
import { checkAuth } from "../../utils/checkAuth";

const router = Router();

router.get('/me', checkAuth(), AuthController.getMe);
router.post('/login', AuthController.userLogin);
router.post('/logout', AuthController.logout);

export const authRouter = router;