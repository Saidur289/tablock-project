import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
declare global{
    namespace Express{
        interface Request{
            user?: JwtPayload
        }
    }
}
const auth = (roles?: string[])=> {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.split(' ')[1]
            if(!token) res.send({msg: 'Unauthorized'})
                const decoded = jwt.verify(token as string , "very secret") as JwtPayload
             if(!decoded) res.send({msg: 'Unauthorized'})
            console.log(decoded);
            req.user = decoded 
            if(roles?.length && !roles.includes(req.user.role)){
            res.status(401).json({message: "Unauthorized"})
            }
            next()
        } catch (error: any) {
        res.status(500).json({
        success: false,
        message: error.message
     })
   }
    }

}
export default auth;