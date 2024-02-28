import z from 'zod'

const noteSchema = z.object({
  title: z.string({
    invalid_type_error: 'Note title must be a string',
    required_error: 'Note title is required.'
  }),
  text: z.string({
    invalid_type_error: 'Note text must be a string',
    required_error: 'Note text is required.'
  }),
  categories: z.string({
    invalid_type_error: 'Note categories must be a string'
  }),
  state: z.string()
})

export function validateNote (input) {
  return noteSchema.safeParse(input)
}

export function validatePartialNote (input) {
  return noteSchema.partial().safeParse(input)
}
