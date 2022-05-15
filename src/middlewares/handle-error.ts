import { Request, Response, NextFunction } from 'express' 

//TODO: buscar el tipo de error:

export const errorHandleMiddleware = (
    err: any,
    _req: Request,
    res: Response,
    next: NextFunction
    ) => {
        const customError = err.statusCode
        ? { statusCode: err.statusCode, message: err.message }
        : { message: err.message } 

    const status = customError.statusCode ? customError.statusCode : 500

    return res.status(status).json({
        message: customError.message
    })
}