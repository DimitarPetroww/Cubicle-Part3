const promise = require("../../util/promise")

module.exports = {
    GET: (req, res) => {
        res.render("create", { title: "Create Cube"})
    },
    POST: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL,
            difficulty: Number(req.body.difficulty),
            owner: req.user._id
        }
        const [_, error] = await promise(req.cubeStorage.create(cube))
        if(error !== null) {
            return res.render("create", {error: error.message, data: req.body})
        }
        res.redirect("/cubes/browse")
    }
}