import { Request, Response } from 'express'
import { saveSalesService } from '../api/sales/services'

const addSales = async (req: Request, res: Response) => {
    const response = await saveSalesService(req.body)
    res.status(201).json(response)
}


export default {
    addSales
}