import jwt from 'jsonwebtoken'
import { Response, Request, NextFunction } from 'express'
import { UnauthenticatedError } from '../errors/auth-error'
import token_config from '../config/auth'

export const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const authHeader = req.headers.authorization
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Token no proveido')
    }

    const token = authHeader.split(' ')[1]
    const shhh = token_config.JWT_SECRET

    try {
        const decoded: any = jwt.verify(token, 'a')
        const { id, username } = decoded
        req.body = { id, username, ...req.body }
        next()
    } catch (error) {
        throw new UnauthenticatedError('No estás autorizado')
    }

}