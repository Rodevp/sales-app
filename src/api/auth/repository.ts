import { User } from './types'
import { UserDTO } from '../../DTO/user'
import {Users as UserModel} from './model'

export class ReposotoryUser {

    constructor () { }


    async save(user: User) {
        const userDB: any = await UserModel.create( { ...user } )
        const userDTO = new UserDTO(userDB.id, userDB.name, userDB.role) 
        return userDTO
    }

}