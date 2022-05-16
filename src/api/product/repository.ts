import { Products as ProductModel } from './model'
import { ProductDTO } from '../../DTO/product'
import { Product } from './types'
import { BadRequestsError } from '../../errors/bad-requests'

export class ProductRepository {
    
    constructor() {}

    async save(product: Product) {
        const response: any = await ProductModel.create( { ...product } )
        const productDTO = new ProductDTO(response.name, response.price)
        return productDTO
    }

    async edit(id: Number, product: Product) {
        const response = await ProductModel.findOne( { where: { id } } )
        
        if(!response) throw new BadRequestsError('Producto no econtrado')

        response?.set(product)
        response?.save()
        
        return response
    }


    async delete(productId: Number) {
       try {
            await ProductModel.destroy({
                where: {
                    id: productId
                }
            })
       } catch(error) {
           throw new BadRequestsError('no se ha encontrado el producto')
       }
        return {}
    }


    async all(idSeller: string) {
        
        const response: any = await ProductModel.findAll({
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
        const response = await ProductModel.findOne( { where: { id } } )
        
        if(!response) throw new BadRequestsError('Producto no econtrado')
        
        return response
    }


}