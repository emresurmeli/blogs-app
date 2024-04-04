import Author from '../models/authorModel.js'

// GET
const getAuthor = async (req, res) => {
  try {
    const { id } = req.params
    const author = await Author.find({_id: id}).populate('blogs', 'title')

    res.json(author)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

// POST
const createAuthor = async (req, res) => {
  try {
    const authorData = req.body
    const newAuthor = await Author.create(authorData)

    res.json(newAuthor)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

export {
  getAuthor,
  createAuthor
}