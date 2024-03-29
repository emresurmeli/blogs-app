import fs from 'fs'

// GET
const getBlogs = async (req, res) => {
  try {
    // TODO: make this a util function to not repeat in each controller method
    const blogs = await fs.promises.readFile(
      process.cwd() + '/data/blogs.json',
      { encoding: 'utf8' }
    )

    if(!blogs) {
      res.status(404).json({
        error: 'Could not find that resource'
      })
    }
    
    res.json(JSON.parse(blogs))
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

const getBlog = async (req, res) => {
  try {
    const blogs = await fs.promises.readFile(
      process.cwd() + '/data/blogs.json',
      { encoding: 'utf8' }
    )
    const blogsArray = JSON.parse(blogs)
    const id = req.params.id
    const blogPost = blogsArray.find((el) => {
      return el.id.toString() === id
    })

    if(!blogPost) {
      res.status(404).json({
        error: `Could not find blog post with the id of ${id}`
      })
    }

    res.json(blogPost)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

// POST
const createBlog = async (req, res) => {
  try {
    const newBlog = req.body
    const blogs = await fs.promises.readFile(
      process.cwd() + '/data/blogs.json',
      { encoding: 'utf8' }
    )
    const blogsArray = JSON.parse(blogs)
    const newBlogId = blogsArray[blogsArray.length - 1].id + 1

    newBlog.id = newBlogId
    blogsArray.push(newBlog)

    await fs.promises.writeFile(
      process.cwd() + '/data/blogs.json',
      JSON.stringify(blogsArray, null, 2),
      { encoding: 'utf8' }
    )

    const updateBlogData = await fs.promises.readFile(
      process.cwd() + '/data/blogs.json',
      { encoding: 'utf8' }
    ) 

    res.json(JSON.parse(updateBlogData))
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export {
  getBlogs,
  getBlog,
  createBlog
}