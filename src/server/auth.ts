import type { UserInfo } from 'remult'
import { json, Router } from 'express'

export const auth = Router()
auth.use(json())
auth.post('/api/login', (req, res) => {
  // const user = validUsers.find((user) => user.username === req.body.username)
  // if (user) {
  //   req.session!['user'] = user
  //   res.json(user)
  // } else {
  //   res.status(404).json('Invalid user')
  // }
})
