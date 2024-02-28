import prisma from '../db/db.js'

export class NoteModel {
  static async getAll ({ archived }) {
    try {
      if (archived) {
        return await prisma.notes.findMany({
          where: {
            state: archived
          }
        })
      }
      return await prisma.notes.findMany()
    } catch (e) {
      // TODO:improve errors
      console.log({ message: 'An error in -- getAll -- ocurred', error: e })
    }
  }

  static async getById ({ id }) {
    try {
      return await prisma.notes.findMany({
        where: {
          id
        }
      })
    } catch (e) {
      // TODO:improve errors
      console.log({ message: 'An error in -- getById -- ocurred', error: e })
    }
  }

  static async create ({ data }) {
    try {
      return await prisma.notes.create({
        data
      })
    } catch (e) {
      // TODO:improve errors
      console.log({ message: 'An error in -- create -- ocurred', error: e })
    }
  }

  static async update ({ id, data }) {
    try {
      return await prisma.notes.update({
        where: {
          id
        },
        data
      })
    } catch (e) {
      // TODO:improve errors
      console.log({ message: 'An error in -- update -- ocurred', error: e })
    }
  }

  static async delete ({ id }) {
    try {
      return prisma.notes.delete({
        where: {
          id
        }
      })
    } catch (e) {
      // TODO:improve errors
      console.log({ message: 'An error in -- delete -- ocurred', error: e })
    }
  }
}
