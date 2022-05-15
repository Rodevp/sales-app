import { Request, Response } from 'express'
import { saveUserService, validateDataService } from '../api/auth/services'

const register = async (req: Request, res: Response) => {
    
    let user = req.body

    validateDataService(user)
    const response = await saveUserService(user)

    return res.status(201).json(response)

}


export default {
    register
}