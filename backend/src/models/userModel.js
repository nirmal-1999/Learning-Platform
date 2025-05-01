import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
  }
})

const User = mongoose.model('User', userSchema)
export { User }
