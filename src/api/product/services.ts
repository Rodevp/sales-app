import { ProductRepository } from './repository'


export const saveProductService = (product: any) => {
    const repository = new ProductRepository()
    const response = repository.save(product)
    return response
}

export const deleteProductService = (id: any) => {
    const repository = new ProductRepository()
    const response = repository.delete(id)
    return response
}

export const editProductService = (product: any) => {
    const repository = new ProductRepository()
    const response = repository.save(product)
    return response
}

export const getAllProductService = (idseller: any) => {
    const repository = new ProductRepository()
    const response = repository.all(idseller)
    return {}
}

