import jwt from 'jsonwebtoken'
import { Response, Request, NextFunction } from 'express'
import { UnauthenticatedError } from '../errors/auth-error'
import dotenv from 'dotenv'

dotenv.config()

export const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const authHeader = req.headers.authorization
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Token no proveido')
    }

    const token = authHeader.split(' ')[1]
    const shhh = process.env.JWT_SECRET

    try {
        const decoded = jwt.verify(token, shhh)
        const { id, username } = decoded
        req.body = { id, username, ...req.body }
        next()
    } catch (error) {
        throw new UnauthenticatedError('No estás autorizado')
    }

}