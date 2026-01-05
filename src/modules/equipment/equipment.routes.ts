import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const equipmentRoutes = Router()
equipmentRoutes.post('/', equipmentController.createEquipment)
equipmentRoutes.get('/', equipmentController.getEquipment)
export default equipmentRoutes