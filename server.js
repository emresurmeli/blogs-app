// Import modules
import express from 'express'
import blogsRouter from './routers/blogsRouter.js'

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/blogs', blogsRouter)

app.listen(3000, () => {
  console.log('Express server is running...')
})