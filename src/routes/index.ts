import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import equipmentRoutes from "../modules/equipment/equipment.routes";

const routes = Router()
routes.use('/user', userRoutes)
routes.use('/equipment', equipmentRoutes)
export default routes