import { Sales as SalesModel } from './model'


interface Sale {
    id: string
    name: string
    price: Number
    idSale: string
}

class SaleDTO {
    private name: string
    private price: Number

    constructor(name: string, price: Number) {
        this.name = name
        this.price = price
    }

}

export class SaleRepository {
    
    constructor() {}

    async save(product: Sale) {
        const response: any = await SalesModel.create( { ...product } )
        const productDTO = new SaleDTO(response.name, response.price)
        return productDTO
    }

    async edit(product: Sale) {
        const response: any = await SalesModel.update( { ...product }, {
            where: { id: product.id }
        })
        const productDTO = new SaleDTO(response.name, response.price)
        return productDTO
    }


    async delete(saleId: string) {
        await SalesModel.destroy({
            where: {
                id: saleId
            }
        })
        return {}
    }


    async all(idSeller: string) {
        const response = await SalesModel.findAll({
            where: {
                id_seller: idSeller
            }
        })

        console.log(response)

    }


}