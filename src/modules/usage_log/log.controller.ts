import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createLogs : RequestHandler = async(req, res) => {
    try{
       const payload = req.body;
       const data = await prisma.usageLog.create({data: payload});
       res.send({mes: 'logs created', data: data})
    }catch (error) {
    res.send({msg: 'error', error})
   }
}
const getLogs : RequestHandler = async(req, res) => {
    try{
       const data = await prisma.usageLog.findMany({include: {user: true, equipment: true}});
       res.send({mes: 'logs created',  data})
    }catch (error) {
    res.send({msg: 'error', error})
   }
}
export  const logsController = {
   createLogs,
   getLogs
}