const promise = require("../../util/promise")

module.exports = {
    GET: async (req, res) => {
        const [cube, error] = await promise(req.cubeStorage.getOne(req.params.id))
        if(error) {
            res.redirect("/404")
        }
        cube[`select${cube.difficulty}`] = true
        res.render("edit", { title: "Edit Cube", cube})
    },
    POST: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL,
            difficulty: Number(req.body.difficulty),
            ownerId: req.user._id
        }
        const [_, error] = await promise(req.cubeStorage.update(req.params.id, cube))
        if(error !== null) {
            return res.render("edit", {error: error.message, data: req.body})
        }
        res.redirect("/cubes/details/" + req.params.id)
    }
}