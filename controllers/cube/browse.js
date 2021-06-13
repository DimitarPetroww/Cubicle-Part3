const promise = require("../../util/promise")

module.exports = {
    GET: async (req, res) => {
        let options = {}
        if (req.query.search) {
            options = { name: new RegExp(req.query.search, "i") }
        } if (req.query.from) {
            options.difficulty = { $gte: Number(req.query.from) }
        } if (req.query.to) {
            options.difficulty = options.age || {}
            options.difficulty.$lte = Number(req.query.to)
        }
        const [cubes, error] = await promise(req.cubeStorage.getAll(options))
        if (error !== null) {
            return res.render("index", { err: e.message })
        }
        res.render("index", { cubes, search: req.query })
    }
}