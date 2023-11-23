import express from 'express'
import usersRouter from './routers/users.routes'
import databaseService from './services/database.services'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('hello world')
})

//Handle Json => {} when user post data
app.use(express.json())
app.use('/users', usersRouter)

//Run MongoDB - error=>console.dir(error)
databaseService.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
