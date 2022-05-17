import { NextFunction, Request, Response } from 'express'
import { saveUserService, validateDataService, loginService } from '../api/auth/services'
import {  SUCCESS_RESPONSES  } from '../helpers/http'


const register = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        let user = req.body

        validateDataService(user)
        const response = await saveUserService(user)

        return res.status(SUCCESS_RESPONSES.CREATED).json(response)
    } catch (error) {
        next(error)
    }

}


const login = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
    
        let user = req.body
        const response = await loginService(user)
        return res.status(SUCCESS_RESPONSES.OK).json(response)
    
    } catch (error) {
        console.error(error)
        next(error)
    }

}


export default {
    register,
    login
}