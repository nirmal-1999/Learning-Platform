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
    required: true,
    unique: true,
    index: true,
  },
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  dp: {
    type: String,
  },
})

const User = mongoose.model('User', userSchema)
export { User }
