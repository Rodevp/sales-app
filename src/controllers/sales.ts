import { NextFunction, Request, Response } from 'express'
import {
    saveSalesService,
    getAllSalesService,
    getOneSaleservice
} from '../api/sales/services'

import {  SUCCESS_RESPONSES } from '../helpers/http'

const addSales = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await saveSalesService(req.body)
        res.status(SUCCESS_RESPONSES.CREATED).json(response)
    } catch (error) {
        next(error)
    }
}

const getAllSales = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const response = await getAllSalesService()

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }
}


const getSale = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = Number(req.params.id)

        const response = await getOneSaleservice(id)

        return res.status(SUCCESS_RESPONSES.OK).json(response)
    } catch (error) {
        next(error)
    }

}


export default {
    addSales,
    getSale,
    getAllSales
}