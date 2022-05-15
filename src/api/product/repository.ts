import { Products as ProductModel } from './model'


interface Product {
    id: string
    name: string
    price: Number
    idSale: string
}

class ProductDTO {
    private name: string
    private price: Number

    constructor(name: string, price: Number) {
        this.name = name
        this.price = price
    }

}

export class ProductRepository {
    
    constructor() {}

    async save(product: Product) {
        const response: any = await ProductModel.create( { ...product } )
        const productDTO = new ProductDTO(response.name, response.price)
        return productDTO
    }

    async edit(product: Product) {
        const response: any = await ProductModel.update( { ...product }, {
            where: { id: product.id }
        })
        const productDTO = new ProductDTO(response.name, response.price)
        return productDTO
    }


    async delete(productId: string) {
        await ProductModel.destroy({
            where: {
                id: productId
            }
        })
        return {}
    }


    async all(idSeller: string) {
        const response = await ProductModel.findAll({
            where: {
                id_seller: idSeller
            }
        })

        console.log(response)

    }


}