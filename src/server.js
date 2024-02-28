import express from 'express'
import notesRouter from './routes/note.js'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT ?? 63546

app.use(express.json())
app.use(cors())
app.use('/notes', notesRouter)

const server = app.listen(PORT)
console.log('http://localhost:' + server.address().port)
