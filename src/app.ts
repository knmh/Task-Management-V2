import express, { Application, Request, Response } from "express"



const app: Application = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Health check
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' })
})

// app.use(express.json())     old
// app.use(express.urlencoded({ extended: true }))     old





export default app