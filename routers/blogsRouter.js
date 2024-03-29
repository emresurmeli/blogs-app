// Import modules
import { Router } from 'express'
import { getBlogs, getBlog } from '../controllers/blogsController.js'

const router = Router()

// GET routes
router.get('/', getBlogs)
router.get('/:id', getBlog)

export default router