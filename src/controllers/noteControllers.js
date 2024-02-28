import { NoteModel } from '../models/noteModel.js'
import { validateNote, validatePartialNote } from '../schemaValidation/note.js'

export class NoteController {
  static async getAll (req, res) {
    // TODO: make the request lowercase
    const { archived } = req.query
    const notes = await NoteModel.getAll({ archived })

    res.json(notes)
  }

  static async getById (req, res) {
    const { id } = req.params
    const note = await NoteModel.getById({ id })

    if (note.length > 0) return res.json(note)

    return res.status(404).json({ message: 'Note not found' })
  }

  static async create (req, res) {
    const result = validateNote(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const createdNote = await NoteModel.create({ data: result.data })

    res.json(createdNote)
  }

  static async update (req, res) {
    const result = validatePartialNote(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedNote = await NoteModel.update({ id, data: result.data })

    res.json(updatedNote)
  }

  static async delete (req, res) {
    const { id } = req.params
    const eliminatedNote = await NoteModel.delete({ id })

    res.json({ message: 'Note eliminated', object: eliminatedNote })
  }
}

export default NoteController
