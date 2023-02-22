const express = require("express")

const route = express.Router()

const json = require("../Data/books.json")

const data = json.books

const userData = json.userData



route.get("/", (req, res) => {
    res.render("Admin", { userData })
})

route.get("/books", (req, res) => {
    res.render("Books", { data })
})



module.exports = route