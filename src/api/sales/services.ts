import { SalesRepository } from './repository'
import { Sale } from './types'


export const saveSalesService = (sale: Sale) => {
    const repository = new SalesRepository()
    const response = repository.save(sale)
    return response
}


export const getAllSalesService = async (idseller: string) => {
    const repository = new SalesRepository()
    const response = await repository.all(idseller)
    return response
}


export const getOneSaleservice = async (id: Number) => {
    
    const repository = new SalesRepository()
    const response = await repository.getOneById(id)
    
    return response

}

