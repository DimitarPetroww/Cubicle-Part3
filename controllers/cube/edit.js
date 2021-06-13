const promise = require("../../util/promise")

module.exports = {
    GET: (req, res) => {
        res.render("edit", { title: "Edit Cube"})
    },
    POST: async (req, res) => {
        console.log(req.user);
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL,
            difficulty: Number(req.body.difficulty),
            ownerId: req.user._id
        }
        const [_, error] = await promise(req.cubeStorage.create(cube))
        if(error !== null) {
            return res.render("create", {error: error.message, data: req.body})
        }
        res.redirect("/cubes/browse")
    }
}