import 'dotenv/config.js'
import './dbConnection.js'
import Blog from '../models/blogsModel.js'

import blogData from '../data/blogs.json' assert {type: 'json'}

Blog.insertMany(blogData)
.then(res => console.log(`Seeded db, ${res}`))