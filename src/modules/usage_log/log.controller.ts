import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createLogs : RequestHandler = async(req, res) => {
    try{
       const payload = req.body;
       const data = await prisma.usageLog.create({data: payload});
       res.send({mes: 'logs created', data: data})
    }catch (error) {
    res.send({msg: 'error err', error})
   }
}
const getLogs : RequestHandler = async(req, res) => {
    try{
       const data = await prisma.usageLog.findMany({include: {user: true, equipment: true}});
       res.send({mes: 'created logs',  data})
    }catch (error) {
    res.send({msg: 'error hello', error:error})
   }
}
const updateUsageLog: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.send("Please provide id");

  try {
    const log = await prisma.usageLog.update({
      where: { id },
      data: {
        endTime: new Date(),
      },
    });

    res.send({ message: "log", data: log });
  } catch (error) {
    res.send({ message: "log getting error", error });
  }
};
export  const logsController = {
   createLogs,
   getLogs,
   updateUsageLog
}