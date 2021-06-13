const bcrypt = require("bcrypt")
const User = require("../models/User")

async function createUser(user) {
    const existing = new User({
        username: user.username,
        hashedPassword: user.hashedPassword
    })

    return existing.save()
}
async function findUserByUsername(username) {
    return User.findOne({username: username})
}

module.exports = {
    createUser,
    findUserByUsername
}