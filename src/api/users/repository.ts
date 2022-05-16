import { BadRequestsError } from '../../errors/bad-requests'
import { Users as UserModel } from '../auth/model'
import { User } from './types'

export class UserRepository {
    
    constructor() {}

    async save(user: User) {
        const response: any = await UserModel.create( { ...user } )
        return response
    }

    async edit(id: Number, user: User) {
        const response = await UserModel.findOne( { where: { id } } )
        
        if(!response) throw new BadRequestsError('Vendedor no econtrado')

        response?.set(user)
        response?.save()
        
        return response
    }


    async delete(userId: Number) {
       try {
            await UserModel.destroy({
                where: {
                    id: userId
                }
            })
       } catch(error) {
           throw new BadRequestsError('No se ha encontrado el vendedor')
       }
        return {}
    }


    async all(idUser: string) {
        
        const response: any = await UserModel.findAll({
            where: {
                id_seller: idUser
            }
        })

        if (!response) return [] 

        const listUsers = response.map( ( user: any ) => {
            return {
                id: user.id,
                nameProduct: user.name,
                email: user.email,
                role: user.role
            }
        })

        return listUsers

    }

    async getOneById(id: Number) {
        const response = await UserModel.findOne( { where: { id } } )
        
        if(!response) throw new BadRequestsError('Vendedor no econtrado')
        
        return response
    }


}