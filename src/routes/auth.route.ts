import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const authRouter: Router = Router();
const controller = new AuthController();

authRouter.post('/register', controller.register);
authRouter.post('/login', controller.login);

export default authRouter;