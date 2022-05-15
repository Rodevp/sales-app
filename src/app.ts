import express from 'express'
import { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import sequelize from './database'
import morgan from 'morgan'
import { errorHandleMiddleware } from './middlewares/handle-error'

//routes import
import authRouter from './routes/auth'


//models synchronization
import './api/auth/model'
import './api/product/model'
import './api/sales/model'
import './api/seller/model'


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

app.use('/api/v1/auth', authRouter)




//error handler
app.use(errorHandleMiddleware)

const start = async () => {

    try {

        await sequelize.sync()

        app.listen(PORT, () => {
            console.log('server on port', PORT, 'and db run')

        })

    } catch (error) {
        console.error('error DB', error)
    }
}

start()