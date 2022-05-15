import { SaleRepository } from './repository'


export const saveSalesService = (product: any) => {
    const repository = new SaleRepository()
    const response = repository.save(product)
    return response
}

export const deleteProductService = (id: any) => {
    const repository = new SaleRepository()
    const response = repository.delete(id)
    return response
}

export const editProductService = (product: any) => {
    const repository = new SaleRepository()
    const response = repository.save(product)
    return response
}

export const getAllProductService = (idseller: any) => {
    const repository = new SaleRepository()
    const response = repository.all(idseller)
    return {}
}

