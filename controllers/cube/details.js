const promise = require("../../util/promise")

module.exports = {
    GET: async (req, res) => {
        const [cube , error] = await promise(req.cubeStorage.getOne(req.params.id))
        if(error !== null) {
            return res.redirect("/404")
        }
        res.render("details", { cube, title: cube.name })
    },

}