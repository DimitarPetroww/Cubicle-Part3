const promise = require("../util/promise")

module.exports = {
    GET: (req, res) => {
        res.render("create")
    },
    POST: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL,
            difficulty: Number(req.body.difficulty)
        }
        const [_, error] = await promise(req.cubeStorage.create(cube))
        if(error !== null) {
            return res.render("create", {error: error.message})
        }
        res.redirect("/")
    }
}