import { Router } from 'express'
import { createAuthor } from '../controllers/authorsController.js'

const router = Router()

//POST routes
router.post('/', createAuthor)

export default router