// Import modules
import { Router } from 'express'
import { getBlogs, getBlog, createBlog, updateBlog } from '../controllers/blogsController.js'

const router = Router()

// GET routes
router.get('/', getBlogs)
router.get('/:id', getBlog)

// POST routes
router.post('/', createBlog)

// PUT routes
router.put('/:id', updateBlog)

export default router