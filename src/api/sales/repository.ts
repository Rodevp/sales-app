import { Sales as SalesModel } from './model'
import { Sale } from './types'
import { BadRequestsError } from '../../errors/bad-requests'


export class SalesRepository {
    
    constructor() {}

    async save(sale: Sale) {
        const response: any = await SalesModel.create( { ...sale }  )
        return response
    }

    async all() {
        
        const response: any = await SalesModel.findAll()

        if (!response) return [] 

        const listSales = response.map( (sales: any ) => {
            return {
                id: sales.id,
                name: sales.name,
                idSeller: sales.id_seller,
                valueSale: sales.value_sale 
            }
        })

        return listSales

    }

    async getOneById(id: Number) {
        const response = await SalesModel.findOne( { where: { id } } )
        
        if(!response) throw new BadRequestsError('Venta no econtrada')
        
        return response
    }


}