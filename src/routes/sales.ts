import express from 'express'
const router = express.Router()

import salesController from '../controllers/sales'

router.get('/', salesController.getAllSales)
router.get('/:id', salesController.getSale)
router.post('/', salesController.addSales)


export default router