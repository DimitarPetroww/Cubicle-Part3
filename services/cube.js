const Cube = require("../models/Cube")

async function create(cube) {
    const existing = new Cube(cube)

    return existing.save()
}
async function getAll(options = {}) {
    return Cube.find(options).lean()
}
async function getOne(id) {
    return Cube.findById(id).populate("accessories").lean()
}


module.exports = {
    create,
    getAll,
    getOne,
}