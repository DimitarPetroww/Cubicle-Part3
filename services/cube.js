const Cube = require("../models/Cube")

async function create(cube) {
    const existing = new Cube(cube)

    return existing.save()
}
async function getAll(options = {}) {
    return Cube.find(options).lean()
}
async function getOne(id) {
    return Cube.findById(id).populate("accessories").populate("owner").lean()
}
async function update(id, data) {
    const cube = await Cube.findById(id)
    cube.name = data.name
    cube.description = data.description
    cube.imageURL = data.imageURL
    cube.difficulty = data.difficulty

    return cube.save()
}
async function del(id) {
    return Cube.deleteOne({_id: id})
    
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    del
}