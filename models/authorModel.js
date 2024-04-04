import mongoose from 'mongoose'

const Schema = mongoose.Schema

const authorSchema = new Schema({
  firstName: { 
    type: String, 
    required: true,
    minlength: 2,
    maxlength: 25
  },
  lastName: { 
    type: String, 
    required: true,
    minlength: 2,
    maxlength: 25
  },
  url: String,
  blogs: Array
})

const Author = mongoose.model('Author', authorSchema)

export default Author