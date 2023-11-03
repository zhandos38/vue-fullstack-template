import express from 'express'
import { api } from '@/server/api'
import session from 'cookie-session'
import { auth } from '@/server/auth'
import * as process from 'process'

const app = express()
app.use('/api', express.static(process.cwd() + '/public/uploads'))
app.use(express.static(process.cwd() + '/dist'))
app.use(api)
app.use(auth)
app.use(session({ secret: 'secret' }))
app.get('/api/hello', (req, res) => res.send('Hello!'))
app.listen(3002, () => {
  console.log('listening localhost:3002 :)')
})
