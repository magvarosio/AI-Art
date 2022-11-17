import User from '../models/user.js'

export const registerUser = async (req, res) => {
  console.log('**** REGISTER ENDPOINT HIT ***')
  try {
    const newUser = await User.create(req.body)
    return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json({ message: err.message })
  }
}