import express from 'express'
import { Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'

//app
const PORT = process.env.ENV || 3001
const app = express()

app.use( cors() )
app.use( helmet() )
app.use( express.json() )

app.get('/', (_req: Request, res: Response) => {
    res.send('<h1>Api on fire</>')
})



app.listen(PORT, () => {
    console.log('server on port', PORT)
})
