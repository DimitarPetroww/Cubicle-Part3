const User = require("../models/User")

async function createUser(user) {
    const isTaken = !!await findUserByUsername(user.username)
    if(isTaken) {
        throw new Error("Name is already taken!")
    }

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