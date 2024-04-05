// Import envs
import 'dotenv/config';

// Import modules
import express from 'express';
import blogsRouter from './routes/blogsRouter';
import authorsRouter from './routes/authorsRouter';
import authRouter from './routes/authRouter';

// Database
import './config/dbConnection';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/blogs', blogsRouter);
app.use('/authors', authorsRouter);

app.listen(3000, () => {
  console.log('Express server is running...');
});
