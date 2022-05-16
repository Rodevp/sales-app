import { ProductRepository } from './repository'
import { Product } from './types'


export const saveProductService = async (product: Product) => {

    const repository = new ProductRepository()
    const response = await repository.save(product)

    return response

}

export const deleteProductService = async (id: Number) => {

    const repository = new ProductRepository()
    const response = await repository.delete(id)

    return response

}

export const editProductService = async ( id: Number,product: Product) => {

    const repository = new ProductRepository()
    const response = await repository.edit(id, product)

    return response

}

export const getAllProductService = async (idseller: string) => {

    const repository = new ProductRepository()
    const response = await repository.all(idseller)
    
    return response

}

export const getOneProductService = async (id: Number) => {
    
    const repository = new ProductRepository()
    const response = await repository.getOneById(id)
    
    return response

}
