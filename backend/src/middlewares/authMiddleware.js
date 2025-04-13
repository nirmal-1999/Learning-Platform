import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

const AuthUser = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken
    if (!accessToken) {
      return res.status(401).send({ error: 'No Token Found' })
    }

    const decodedAccessToken = jwt.decode(accessToken)

    if (!decodedAccessToken) {
      return res.status(401).send({ error: 'Invalid Token' })
    }

    const currentTime = Math.floor(Date.now() / 1000) // in seconds
    if (decodedAccessToken.exp && decodedAccessToken.exp < currentTime) {
      return res.status(401).send({ error: 'Access Token Expired' })
    }

    const username = decodedAccessToken.username
    if (!username) {
      return res.status(401).send({ error: 'Invalid Token Payload' })
    }

    const user = await User.findOne({ username })
    if (!user) {
      return res.status(401).send({ error: 'User not found' })
    }

    req.user = user
    next()
  } catch (error) {
    console.log(`Error in AuthUser middleware: ${error}`)
    return res.status(401).send({ error: 'Authentication Failed' })
  }
}

export { AuthUser }
