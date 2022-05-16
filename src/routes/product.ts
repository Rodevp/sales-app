import express from 'express'
const router = express.Router()

import productController from '../controllers/product'

router.get('/:id', productController.getProduct)
router.get('/seller-sales/:id', productController.getAllProducts)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.editProduct)
router.post('/', productController.addProduct)


export default router