import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET_KEY

const verifyAuth = (req, res, next) => {
  const tokenHeader = req.headers.authorization
  const token = tokenHeader.substring(7)
  const validToken = jwt.verify(token, SECRET)

  if(!validToken || token.exp > new Date()) {
    res.status(498).json({
      tokenError: `Invalid token or expired, re authenticate`
    })
  }

  next()
}

export default verifyAuth