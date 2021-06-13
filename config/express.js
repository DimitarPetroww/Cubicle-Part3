const express = require('express');
const hbs = require('express-handlebars');
const cp = require("cookie-parser")
const storage = require('../middlewares/storage');
const auth = require('../middlewares/auth');

module.exports = (app) => {

    app.engine("hbs", hbs({ extname: "hbs" }))
    app.set("view engine", "hbs")

    app.use(express.urlencoded({extended: true}))
    app.use(cp())
    app.use(storage())
    app.use(auth())

    app.use("/static", express.static("static"))
};