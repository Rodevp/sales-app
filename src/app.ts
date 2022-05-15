import express from 'express'
import { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import sequelize from './database'
import morgan from 'morgan'
import { errorHandleMiddleware } from './middlewares/handle-error'

//routes import
import authRouter from './routes/auth'
import productRouter from './routes/product'
import salesRouter from './routes/sales'


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
app.use( morgan('dev') )

app.get('/', (_req: Request, res: Response) => {
    res.send('<h1>Api on fire</>')
})


//routers
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/sales', salesRouter)


//error handler
app.use((err: any, req: any, res: any, next: any) => {
    console.log(err)
    return res.status(500).send('error')
})


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