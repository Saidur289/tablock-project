import { Router } from "express";
import userRoutes from "../modules/user/user.routes.js";
import equipmentRoutes from "../modules/equipment/equipment.routes.js";
import logsRoutes from "../modules/usage_log/log.routes.js";

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/equipment', equipmentRoutes);
routes.use('/logs', logsRoutes);

export default routes;
