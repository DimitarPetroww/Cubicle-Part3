const promise = require("../../util/promise")

module.exports = {
    GET: async (req, res) => {
        const [cube, error] = await promise(req.cubeStorage.getOne(req.params.id))
        if(error) {
            res.redirect("/404")
        }
        cube[`select${cube.difficulty}`] = true
        res.render("delete", { title: "Delete Cube", cube})
    },
    POST: async (req, res) => {
        const [_, error] = await promise(req.cubeStorage.del(req.params.id))
        if(error !== null) {
            return res.render("edit", {error: error.message, data: req.body})
        }
        res.redirect("/cubes/browse")
    }
}