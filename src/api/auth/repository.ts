import { User } from './types'
import { UserDTO } from '../../DTO/user'
import {Users as UserModel} from './model'
import { RepositoryError } from '../../errors/repository-error'

export class RepositoryUser {

    constructor () { }


    async save(user: User) {
        const userDB: any = await UserModel.create( { ...user } )
        const userDTO = new UserDTO(userDB.id, userDB.name, userDB.role, userDB.email) 
        return userDTO
    }


    async getByEmail(email: string) {
        const userDB: any = await UserModel.findOne( { where: { email: email } } )
        
        if (!userDB) {
            throw new RepositoryError('No se ha encontrado usuario')
        }
        
        const userLoginDTO = {
            email: userDB['dataValues'].email,
            id: userDB['dataValues'].id,
            role: userDB['dataValues'].role,
            password: userDB['dataValues'].password,
        }

        return userLoginDTO

        
    }

}