import { Request, Response } from 'express'
import { 
    saveProductService,
    getAllProductService,
    deleteProductService,
    editProductService,
    getOneProductService,
    saveProductFromCSVfileService
} from '../api/product/services'


const addProduct = async (req: Request, res: Response) => {
    
    const response = await saveProductService(req.body)
    
    return res.status(201).json(response)
}

const getAllProducts = async (req: Request, res: Response) => {
    
    const idSeller = req.params.id
    const response = await getAllProductService(idSeller)
    
    return res.status(200).json(response)   
}

const deleteProduct = async (req: Request, res: Response) => {
    
    const idSeller: Number = Number(req.params.id)
    const response = await deleteProductService(idSeller)
    
    return res.status(200).json(response)   

}

const editProduct = async (req: Request, res: Response) => {
    
    const product = req.body
    const id = Number(req.params.id)
    
    const response = await editProductService( id, product)
    
    return res.status(200).json(response)   
}

const getProduct = async (req: Request, res: Response) => {
    
    const id = Number(req.params.id)

    const response = await getOneProductService(id)

    return res.status(200).json(response)

}

const saveProductFromCSV = async (req: Request, res: Response) => {
    const file: any = req.files
    saveProductFromCSVfileService(file)
    return res.send('holi')
}

export default {
    addProduct,
    getAllProducts,
    deleteProduct,
    editProduct,
    getProduct,
    saveProductFromCSV
}