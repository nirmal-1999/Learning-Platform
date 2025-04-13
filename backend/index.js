import dotenv from 'dotenv'
import app from './src/app.js'
import { connectMongo } from './src/db/mongo.js'
dotenv.config()

const PORT = process.env.SERVER_PORT || 5000

const startServer = async () => {
  try {
    await connectMongo()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.log('Error starting server: ', error)
  }
}

startServer()
