const { Book } = require("../models")

const createBook = async (req, res) => {
  const newBook = await Book.create(req.body)
  res.status(201).json(newBook)
}

const getAllBooks = async (_, res) => {
  const books = await Book.findAll()
  res.status(200).json(books)
}

const getBookById = async (req, res) => {
  const { id } = req.params
  const book = await Book.findByPk(id)

  if (!book) {
    res.status(404).json({ error: "The book does not exist." })
  }
  res.status(200).json(book)
}
module.exports = { createBook, getAllBooks, getBookById }
