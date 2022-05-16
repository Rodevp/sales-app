import express from 'express'
const router = express.Router()

import salesController from '../controllers/sales'

router.post('/', salesController.addSales)
router.get('/:id', salesController.getSale)
router.get('/seller/:id', salesController.getAllSales)


export default router