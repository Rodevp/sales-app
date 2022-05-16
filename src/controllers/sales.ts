import { Request, Response } from 'express'
import { 
    saveSalesService,
    getAllSalesService,
    getOneSaleservice
 } from '../api/sales/services'

const addSales = async (req: Request, res: Response) => {
    const response = await saveSalesService(req.body)
    res.status(201).json(response)
}

const getAllSales = async (req: Request, res: Response) => {
    
    const idSeller = req.params.id
    const response = await getAllSalesService(idSeller)
    
    return res.status(200).json(response)   
}


const getSale = async (req: Request, res: Response) => {
    
    const id = Number(req.params.id)

    const response = await getOneSaleservice(id)

    return res.status(200).json(response)

}


export default {
    addSales,
    getSale,
    getAllSales
}