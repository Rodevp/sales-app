import express from 'express'
import { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import sequelize from './database'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import { errorHandleMiddleware } from './middlewares/handle-error'
import { authenticationMiddleware } from './middlewares/auth-middleware'
import rateLimiter from 'express-rate-limit'

//routes import
import authRouter from './routes/auth'
import productRouter from './routes/product'
import salesRouter from './routes/sales'
import adminRouter from './routes/admin'

//models synchronization
import './api/auth/model'
import './api/product/model'
import './api/sales/model'

//app
const PORT = process.env.ENV || 3001
const app = express()

app.use( cors() )
app.use( helmet() )
app.use( express.json() )
app.use( fileUpload() )
app.use(morgan('dev'))

const limiter = rateLimiter({
    windowMs: 30 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: true
})


app.get('/api', (_req: Request, res: Response) => {
    res.send('<h1>Api on fire</>')
})


//routers
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/product', [authenticationMiddleware, limiter], productRouter)
app.use('/api/v1/sales', authenticationMiddleware, salesRouter)
app.use('/api/v1/admin', authenticationMiddleware, adminRouter)

app.use(errorHandleMiddleware)


app.listen(PORT, async () => {
    await sequelize.sync({ force: false })
    console.log('server on port', PORT, 'and db run')
})