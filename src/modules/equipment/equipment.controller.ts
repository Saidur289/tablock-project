import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createEquipment : RequestHandler = async(req, res) => {
    const payload = req.body
    const equipment = await prisma.equipment.create({data: payload,})
    res.send({msg: "create equipment successfully", data: equipment})
}
export const equipmentController = {
    createEquipment
}