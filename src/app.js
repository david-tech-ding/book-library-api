const express = require("express")
const { Reader } = require("./models")
const readerRouter = require("./routers/reader")
const readerController = require("./controllers/reader")
const bookRouter = require("./routers/book")
const bookController = require("./controllers/book")
const authorRouter = require("./routers/author")

const app = express()

app.use(express.json())
app.use("/readers", readerRouter)
app.use("/books", bookRouter)
app.use("/authors", authorRouter)

module.exports = app
