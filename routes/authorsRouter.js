import { Router } from 'express'
import { createAuthor, getAuthor } from '../controllers/authorsController.js'
import verifyAuth from '../middleware/verifyAuth.js'

const router = Router()

// GET routes
router.get('/:id', verifyAuth, getAuthor)

// POST routes
router.post('/', verifyAuth, createAuthor)

export default router