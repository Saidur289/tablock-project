import { Router } from "express";
import { logsController } from "./log.controller";
import auth from "../../middleware/auth";
import { Role } from "../../generated/prisma/enums";

const logsRoutes = Router()
logsRoutes.post('/', auth([Role.Student]),  logsController.createLogs)
logsRoutes.get('/', logsController.getLogs)
logsRoutes.patch("/:id", auth(), logsController.updateUsageLog);
export default logsRoutes