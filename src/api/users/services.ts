import { UserRepository } from './repository'
import { User } from './types'
import { generateHash } from '../../helpers/encrypt'
import { UuidError } from '../../errors/uuid-error' 
import { test as validateUUID } from 'uuid-random'
import { isTypeUser } from '../../helpers/valid-user-type'

export const saveUserService = async (user: User) => {

    const repository = new UserRepository()
    
    isTypeUser(user)

    const userParser = {
        ...user,
        password: await generateHash(user.password)
    }

    if ( !validateUUID(userParser.id) ) throw new UuidError('id no valido')


    const response = await repository.save(userParser)

    const userDTO = {
        id: response.id,
        email: response.email,
        name: response.name,
        role: response.role,
        updatedAt: response.updatedAt,
        createdAt: response.createdAt
    }

    return userDTO

}

export const deleteUserService = async (id: string) => {

    const repository = new UserRepository()
    const response = await repository.delete(id)

    return response

}

export const editUserService = async (id: string, user: User) => {

    const repository = new UserRepository()
    const response: any = await repository.edit(id, user)

    const userDTO = {
        id: response.id,
        email: response.email,
        name: response.name,
        role: response.role,
        updatedAt: response.updatedAt,
        createdAt: response.createdAt
    }

    return userDTO

}

export const getAllUserService = async () => {

    const repository = new UserRepository()
    const response = await repository.all()

    return response

}

export const getOneUserService = async (id: string) => {

    const repository = new UserRepository()
    const response = await repository.getOneById(id)

    return response

}


