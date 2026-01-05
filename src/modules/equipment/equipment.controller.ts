import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createEquipment : RequestHandler = async(req, res) => {
   try {
     const payload = req.body
    const equipment = await prisma.equipment.create({data: payload,})
    res.send({msg: "create equipment successfully", data: equipment})
   } catch (error) {
    res.send({msg: 'error', error})
   }
}
const getEquipment: RequestHandler = async(req, res) => {
   try{
     const data = await prisma.equipment.findMany()
    res.send({msg: 'all equipments', data})
   }catch (error) {
    res.send({msg: 'error', error})
   }
}
export const equipmentController = {
    createEquipment,
    getEquipment
}