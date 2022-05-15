import express from 'express'
const router = express.Router()

import productController from '../controllers/product'

router.post('/', productController.addProduct)


export default router