import { Router } from 'express'
import { createAuthor, getAuthor } from '../controllers/authorsController.js'

const router = Router()

// GET routes
router.get('/:id', getAuthor)

// POST routes
router.post('/', createAuthor)

export default router