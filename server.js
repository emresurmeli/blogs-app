// Import envs
import 'dotenv/config'

// Import modules
import express from 'express'
import blogsRouter from './routes/blogsRouter.js'
import authorsRouter from './routes/authorsRouter.js'
import authRouter from './routes/authRouter.js'
import imagesRouter from './routes/imagesRouter.js'

// Database
import './config/dbConnection.js'

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/auth', authRouter)
app.use('/images', imagesRouter)
app.use('/blogs', blogsRouter)
app.use('/authors', authorsRouter)

app.listen(3000, () => {
  console.log('Express server is running...')
})
