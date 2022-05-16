import { Seller as SellerModel } from './model'
import { BadRequestsError } from '../../errors/bad-requests'
import { Seller } from './types'

export class ProductRepository {
    
    constructor() {}

    async save(seller: Seller) {
        const response: any = await SellerModel.create( { ...seller } )
        return response
    }

    async edit(id: Number, seller: Seller) {
        const response = await SellerModel.findOne( { where: { id } } )
        
        if(!response) throw new BadRequestsError('Vendedor no econtrado')

        response?.set(seller)
        response?.save()
        
        return response
    }


    async delete(sellerId: Number) {
       try {
            await SellerModel.destroy({
                where: {
                    id: sellerId
                }
            })
       } catch(error) {
           throw new BadRequestsError('No se ha encontrado el vendedor')
       }
        return {}
    }


    async all(idSeller: string) {
        
        const response: any = await SellerModel.findAll({
            where: {
                id_seller: idSeller
            }
        })

        if (!response) return [] 

        const listProducts = response.map( ( product: any ) => {
            return {
                id: product.id,
                nameProduct: product.name,
                idSeller: product.id_seller,
                idSales: product.id_sale 
            }
        })

        return listProducts

    }

    async getOneById(id: Number) {
        const response = await SellerModel.findOne( { where: { id } } )
        
        if(!response) throw new BadRequestsError('Vendedor no econtrado')
        
        return response
    }


}