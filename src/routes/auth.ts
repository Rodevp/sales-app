import express from 'express'
const router = express.Router()

import authController from '../controllers/auth'

router.post('/register', authController.register)


export default router