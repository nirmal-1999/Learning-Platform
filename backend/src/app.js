import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { AuthUser } from './middlewares/authMiddleware.js'
import {saveUserDetails} from './service/userService.js'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routes
app.get('/status', (req, res) => {
  res.status(200).send({ message: 'Server is running!' })
})

app.post('/userInfo/save', saveUserDetails);

// Authorized Routes
app.get('/api', AuthUser, (req, res) => {
  res.status(200).send({ message: 'You are Authorized to Acccess' })
})

export default app
