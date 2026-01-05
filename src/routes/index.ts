import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import equipmentRoutes from "../modules/equipment/equipment.routes";
import logsRoutes from "../modules/usage_log/log.routes";

const routes = Router()
routes.use('/user', userRoutes)
routes.use('/equipment', equipmentRoutes)
routes.use('/logs', logsRoutes)
export default routes