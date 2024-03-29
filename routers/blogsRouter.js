// Import modules
import { Router } from 'express'
import { getBlogs, getBlog, createBlog } from '../controllers/blogsController.js'

const router = Router()

// GET routes
router.get('/', getBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)

export default router