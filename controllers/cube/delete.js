const promise = require("../../util/promise")

module.exports = {
    GET: async (req, res) => {
        req.cube[`select${req.cube.difficulty}`] = true
        res.render("delete", { title: "Delete Cube", cube: req.cube})
    },
    POST: async (req, res) => {
        const [_, error] = await promise(req.cubeStorage.del(req.params.id))
        if(error !== null) {
            return res.render("edit", {error: error.message, data: req.body})
        }
        res.redirect("/cubes/browse")
    }
}