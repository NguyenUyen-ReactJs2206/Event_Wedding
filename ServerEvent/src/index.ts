import express from 'express'
import usersRouter from './routers/users.routes'
const app = express()
const router = express.Router()
const port = 4000

app.get('/', (req, res) => {
  res.send('hello world')
})

//Handle Json => {} when user post data
app.use(express.json())
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
