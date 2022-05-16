import express from 'express'
import { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import sequelize from './database'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import { errorHandleMiddleware } from './middlewares/handle-error'
import { authenticationMiddleware } from './middlewares/auth-middleware'

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
app.use( morgan('dev') )

app.get('/', (_req: Request, res: Response) => {
    res.send('<h1>Api on fire</>')
})


//routers
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/product', authenticationMiddleware, productRouter)
app.use('/api/v1/sales', authenticationMiddleware, salesRouter)
app.use('/api/v1/admin', authenticationMiddleware, adminRouter)


//error handler
app.use(errorHandleMiddleware)


const start = async () => {

    try {

        await sequelize.sync( { force: false } )

        app.listen(PORT, () => {
            console.log('server on port', PORT, 'and db run')

        })

    } catch (error) {
        console.error('error DB', error)
    }
}

start()