import { Router } from 'express'
import { signin, singup } from '../controllers/authController'

const router = Router()

router.post('/signin', signin)
router.post('/signup', singup)

export default router