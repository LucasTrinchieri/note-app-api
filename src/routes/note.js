import { Router } from 'express'
import NoteController from '../controllers/noteControllers.js'

const notesRouter = Router()

notesRouter.get('/', NoteController.getAll)
notesRouter.post('/', NoteController.create)

notesRouter.get('/:id', NoteController.getById)
notesRouter.patch('/:id', NoteController.update)
notesRouter.delete('/:id', NoteController.delete)

export default notesRouter
