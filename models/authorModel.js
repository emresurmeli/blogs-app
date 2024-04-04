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
  blogs: [{type: mongoose.Types.ObjectId, ref: 'Blog'}]
})

authorSchema.pre('save', async (next) => {
  // make sure all blogs are up to date
  this.blogs = await Blog.find({ id: this._id })
})

const Author = mongoose.model('Author', authorSchema)

export default Author
