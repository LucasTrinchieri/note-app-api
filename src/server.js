import express from 'express'
import notesRouter from './routes/note.js'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/notes', notesRouter)

app.listen(PORT)
