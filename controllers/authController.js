import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const SECRET = process.env.SECRET_KEY

const signin = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    const passwordIsValid = await bcrypt.compare(password, user.password)

    if(!passwordIsValid) {
      res.status(401).json({
        passwordError: `The password was incorrect`
      })
    }

    const token = jwt.sign(
      { username: username },
      SECRET,
      { expiresIn: '1d' }
    )

    res.json({
      token: token
    })
  } catch (error) {
    console.error(error)
  }
}

const signup = async (req, res) => {
  try {
    const userData = req.body
    userData.password = await bcrypt.hash(userData.password, 8)
    const user = await User.create(userData)

    res.json({
      successMessage: `The user ${user.username} has been created successfully`
    })
  } catch (error) {
    console.error(error)
  }
}

export {
  signin,
  signup
}