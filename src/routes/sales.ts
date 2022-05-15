import express from 'express'
const router = express.Router()

import productController from '../controllers/sales'

router.post('/', productController.addSales)


export default router