import { Request, Response } from 'express'
import { saveProductService } from '../api/product/services'

const addProduct = async (req: Request, res: Response) => {
    const response = await saveProductService(req.body)
    res.status(201).json(response)
}


export default {
    addProduct
}