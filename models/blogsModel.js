import mongoose from "mongoose"

const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  published: { type: Boolean, required: true, default: false }
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog