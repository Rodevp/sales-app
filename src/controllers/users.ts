import { Request, Response } from 'express'
import { 
    saveUserService,
    getAllUserService,
    deleteUserService,
    editUserService,
    getOneUserService
} from '../api/users/services'

const addUser = async (req: Request, res: Response) => {
    
    const response = await saveUserService(req.body)
    
    return res.status(201).json(response)
}

const getAllUsers = async (_req: Request, res: Response) => {
    
    const response = await getAllUserService()
    
    return res.status(200).json(response)   
}

const deleteUser = async (req: Request, res: Response) => {
    
    const idSeller: string = req.params.id
    const response = await deleteUserService(idSeller)
    
    return res.status(200).json(response)   

}

const editUser = async (req: Request, res: Response) => {
    
    //TODO: editar con el metodo patch para que no sea afectado la password

    const User = req.body
    const id = req.params.id
    
    const response = await editUserService(id, User)
    
    return res.status(200).json(response)   
}

const getUser = async (req: Request, res: Response) => {
    
    const id = req.params.id

    const response = await getOneUserService(id)

    return res.status(200).json(response)

}

export default {
    addUser,
    getAllUsers,
    deleteUser,
    editUser,
    getUser
}