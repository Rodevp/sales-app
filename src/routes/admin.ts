import express from 'express'
const router = express.Router()

import userController from '../controllers/users'
import salesController from '../controllers/sales'

router.get('/', userController.getAllUsers)
router.get('/user/:id', userController.getUser)
router.get('/sales', salesController.getAllSales)
router.delete('/:id', userController.deleteUser)
router.put('/:id', userController.editUser)
router.post('/', userController.addUser)


export default router
