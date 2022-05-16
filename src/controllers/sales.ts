import { NextFunction, Request, Response } from 'express'
import {
    saveSalesService,
    getAllSalesService,
    getOneSaleservice
} from '../api/sales/services'

const addSales = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await saveSalesService(req.body)
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
}

const getAllSales = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const idSeller = req.params.id
        const response = await getAllSalesService(idSeller)

        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}


const getSale = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = Number(req.params.id)

        const response = await getOneSaleservice(id)

        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }

}


export default {
    addSales,
    getSale,
    getAllSales
}