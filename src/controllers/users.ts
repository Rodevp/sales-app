import { NextFunction, Request, Response } from 'express'
import {
    saveUserService,
    getAllUserService,
    deleteUserService,
    editUserService,
    getOneUserService
} from '../api/users/services'

import {  SUCCESS_RESPONSES  } from '../helpers/http'

const addUser = async (req: Request, res: Response, next: NextFunction) => {

    const user = {
        name: req.body.name,
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    }

    try {
        const response = await saveUserService(user)

        return res.status(SUCCESS_RESPONSES.CREATED).json(response)
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {

    try {
        const response = await getAllUserService()

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const idSeller: string = req.params.id
        const response = await deleteUserService(idSeller)

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }

}

const editUser = async (req: Request, res: Response, next: NextFunction) => {

    //TODO: editar con el metodo patch para que no sea afectado la password
    try {

        const User = req.body
        const id = req.params.id

        const response = await editUserService(id, User)

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = req.params.id

        const response = await getOneUserService(id)

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }

}

export default {
    addUser,
    getAllUsers,
    deleteUser,
    editUser,
    getUser
}