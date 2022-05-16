import { UserRepository } from './repository'
import { User } from './types'


export const saveUserService = async (User: User) => {

    const repository = new UserRepository()
    const response = await repository.save(User)

    return response

}

export const deleteUserService = async (id: Number) => {

    const repository = new UserRepository()
    const response = await repository.delete(id)

    return response

}

export const editUserService = async ( id: Number,User: User) => {

    const repository = new UserRepository()
    const response = await repository.edit(id, User)

    return response

}

export const getAllUserService = async (idseller: string) => {

    const repository = new UserRepository()
    const response = await repository.all(idseller)
    
    return response

}

export const getOneUserService = async (id: Number) => {
    
    const repository = new UserRepository()
    const response = await repository.getOneById(id)
    
    return response

}

