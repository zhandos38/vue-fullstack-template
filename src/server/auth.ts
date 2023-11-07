import type { UserInfo } from 'remult'
import { json, Router } from 'express'

const validUsers: UserInfo[] = [
  { id: '1', name: 'Jane' },
  { id: '2', name: 'Steve' }
]

export const auth = Router()
auth.use(json())
auth.post('/api/login', (req, res) => {
  const user = validUsers.find((user) => user.name === req.body.username)
  if (user) {
    req.session!['user'] = user
    res.json(user)
  } else {
    res.status(404).json('Invalid user')
  }
})
