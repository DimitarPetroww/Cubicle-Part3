const mongoose = require('mongoose');

module.exports = async (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost/cubicle', { useNewUrlParser: true, useUnifiedTopology: true });

        const db = mongoose.connection
        db.on("error", (err) => {
            reject(err.message)
        })
        db.on("open", () => {
            resolve("connected!")
        })
    })
}