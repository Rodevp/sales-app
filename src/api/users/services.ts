import { UserRepository } from './repository'
import { User } from './types'
import { generateHash } from '../../helpers/encrypt'


export const saveUserService = async (user: User) => {

    const repository = new UserRepository()
    const userParser = {
        ...user,
        password: await generateHash(user.password)
    }

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

export const editUserService = async (id: string, User: User) => {

    const repository = new UserRepository()
    const response = await repository.edit(id, User)

    return response

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


