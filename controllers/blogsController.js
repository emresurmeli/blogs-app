import Blog from "../models/blogsModel.js"

// GET
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})

    if(!blogs || blogs.error) {
      res.status(404).json({
        error: blogs.error
      })
    } 

    res.json(blogs)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

const getBlog = async (req, res) => {
  try {
    const id = req.params.id
    const blog = await Blog.findById(id)

    if(!blog) {
      res.status(404).json({
        error: `Could not find blog post with the id of ${id}`
      })
    }

    res.json(blog)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

// POST
const createBlog = async (req, res) => {
  try {
    const blogData = req.body
    const newBlog = await Blog.create(blogData)

    // TODO Figure out 400s cases
    if(!newBlog || newBlog.error) {
      res.status(404).json({
        error: newBlog.error
      })
    }

    res.json(newBlog)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

// PUT
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id
    const updateData = req.body
    const updatedBlog = await Blog.updateOne(
      {_id: id}, 
      updateData
    )
    
    if (!updatedBlog) {
      res.status(404).json({
        error: `Could not find blog post with the id of ${id}`
      })
    }

    res.json({ updatedBlog, updateData })
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id
    const deletedBlog = await Blog.deleteOne({_id: id})

    res.json(deletedBlog)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
}