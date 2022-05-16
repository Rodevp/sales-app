import { ProductRepository } from './repository'
import { Product } from './types'
import csv from 'csv-parser'
import fs from 'fs'

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

export const saveProductFromCSVfileService = (file: any) => {

    let uploadPath = __dirname + '\\uploads\\' + file.products.name
    console.log(uploadPath)

    file.products.mv(uploadPath, (err: any) => {
        if (err) console.error('error')
    })

    let resultCSV: Array<any> = [];

    fs.createReadStream(uploadPath)
        .pipe( csv( ) )
        .on('data', data => {
            resultCSV.push(data)

        })
        .on('end', () => {

            resultCSV.forEach(value => {

                const seller = {
                    ...value,
                    id_seller: value['seller ']
                }
                
                saveProductService(seller)

            })

        })

}