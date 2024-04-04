// Import modules
import { Router } from 'express'
import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog, getAuthorBlogs } from '../controllers/blogsController.js'

const router = Router()

// GET routes
router.get('/', getBlogs)
router.get('/:id', getBlog)
router.get('/authorBlogs/:authorId', getAuthorBlogs)

// POST routes
router.post('/', createBlog)

// PUT routes
router.put('/:id', updateBlog)

// DELETE route
router.delete('/:id', deleteBlog)

export default router