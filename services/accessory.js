const Accessory = require("../models/Accessory")
const Cube = require("../models/Cube")

async function create(accessory) {
    const existing = new Accessory(accessory)

    return existing.save()
}
async function getAll() {
    return Accessory.find().lean()
}
async function getOne(id) {
    return Accessory.findById(id)
}
async function attach(cubeID, accessoryID) {
    const accessory = await getOne(accessoryID)
    const cube = await Cube.findById(cubeID)

    cube.accessories.push(accessory)
    return cube.save()
}


module.exports = {
    create,
    getAll,
    getOne,
    attach
}