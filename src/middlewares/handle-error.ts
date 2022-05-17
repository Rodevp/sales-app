import { Request, Response, NextFunction} from 'express' 
import {  SERVER_RESPONSES  } from '../helpers/http'
//TODO: buscar el tipo de error:


export const errorHandleMiddleware = (err: any, req: Request,res: Response, next: NextFunction) => {

    const customError = err.statusCode
        ? { statusCode: err.statusCode, message: err.message }
        : { message: err.message } 

    const status = customError.statusCode ? customError.statusCode : SERVER_RESPONSES.INTERNAL_ERROR

    return res.status(status).json({ message: customError.message })

}