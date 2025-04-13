import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { AuthUser } from './middlewares/authMiddleware.js'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routes
app.get('/status', (req, res) => {
  res.status(200).send({ message: 'Server is running!' })
})

// Authorized Routes
app.get('/auth', AuthUser, (req, res) => {
  res.status(200).send({ message: 'You are Authorized to Acccess' })
})

export default app
