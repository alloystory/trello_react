import express from 'express'
import mongoose from 'mongoose'
import boardRouter from './modules/board'

const mongoUser = 'root'
const mongoPass = 'example'
const mongoHost = 'localhost:27017'
const mongoDb = 'test'
const dbUri = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}/${mongoDb}?authSource=admin`
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((e) => console.log(e))

const port = 5000
const app = express()

app.get('/ping', (_, res) => res.status(200).send('pong'))
app.use('/board', boardRouter)

app.all('*', (_, res) => res.status(403).end())

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
