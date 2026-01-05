import { Router } from "express";
import { logsController } from "./log.controller";

const logsRoutes = Router()
logsRoutes.post('/', logsController.createLogs)
logsRoutes.get('/', logsController.getLogs)
export default logsRoutes