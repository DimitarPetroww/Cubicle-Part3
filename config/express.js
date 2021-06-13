const express = require('express');
const hbs = require('express-handlebars');
const storage = require('../middlewares/storage');

module.exports = (app) => {

    app.engine("hbs", hbs({ extname: "hbs" }))
    app.set("view engine", "hbs")

    app.use(express.urlencoded({extended: true}))
    app.use(storage())

    app.use("/static", express.static("static"))
};