import  jwt  from 'jsonwebtoken';
import { RequestHandler } from "express"
import { prisma } from "../../lib/prisma"
import bcrypt from "bcryptjs";
const register:RequestHandler = async(req, res) => {
    const payload = req.body
    const hashedPassword = await bcrypt.hash(payload.password, 10)
    const  user = await prisma.user.create({data:{...payload,password: hashedPassword}})
    res.send({mes: "Registered Successfully", data: user})
}
const login: RequestHandler = async(req, res) => {
    const {email, password} = req.body;
    const user = await prisma.user.findUnique({where: {email}})
    if(!user) res.status(401).send({msg: 'user not found'})
        const isMatch = await bcrypt.compare(password, user?.password as string);
    if(!isMatch) res.status(401).send({msg: 'Unauthorized'})
    const token = jwt.sign({id: user?.id, role: user?.role}, 'very secret', {expiresIn: "7d"})
    res.send({msg: 'logged in successfully', token})
         
}
export const userController = {
    register,
    login
}