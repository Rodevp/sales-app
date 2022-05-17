import { Request, Response, NextFunction } from 'express'
import {
    saveProductService,
    getAllProductService,
    deleteProductService,
    editProductService,
    getOneProductService,
    saveProductFromCSVfileService
} from '../api/product/services'

import {  FAILED_RESPONSES, SUCCESS_RESPONSES  } from '../helpers/http'


const addProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const response = await saveProductService(req.body)

        return res.status(SUCCESS_RESPONSES.CREATED).json(response)
    } catch (error) {

    }
}

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const idSeller = req.params.id
        const response = await getAllProductService(idSeller)

        return res.status(SUCCESS_RESPONSES.OK).json(response)

    } catch (error) {
        next(error)
    }

}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const idSeller: Number = Number(req.params.id)
        const response = await deleteProductService(idSeller)

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }

}

const editProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const product = req.body
        const id = Number(req.params.id)

        const response = await editProductService(id, product)

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }
}

const getProduct = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const id = Number(req.params.id)

        const response = await getOneProductService(id)

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }

}

const saveProductFromCSV = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const file: any = req.files
        saveProductFromCSVfileService(file)
        return res.status(SUCCESS_RESPONSES.OK).json({ message: 'datos guardados' })
    } catch (error) {
        next(error)
    }
}

export default {
    addProduct,
    getAllProducts,
    deleteProduct,
    editProduct,
    getProduct,
    saveProductFromCSV
}