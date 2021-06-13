const cubeStorage = require("../services/cube")
const accessoryStorage = require("../services/accessory")

module.exports = () => (req, res, next) => {
    req.cubeStorage = cubeStorage
    req.accessoryStorage = accessoryStorage
    next()
}