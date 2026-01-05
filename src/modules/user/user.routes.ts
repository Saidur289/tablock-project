import { Router } from "express";
import { userController } from "./user.controller";

const userRoutes = Router()
userRoutes.post('/register', userController.register)
userRoutes.post('/login', userController.login)
export default userRoutes;