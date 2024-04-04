import Author from '../models/authorModel.js'

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
  createAuthor
}