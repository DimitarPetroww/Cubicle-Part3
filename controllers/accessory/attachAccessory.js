const promise = require("../../util/promise")

module.exports = {
    GET: async (req, res) => {
        const [cube, error1] = await promise(req.cubeStorage.getOne(req.params.id))
        const [accessories, error2] = await promise(req.accessoryStorage.getAll())
        if (error1 !== null || error2 !== null) {
            return res.redirect("/404")
        }
        res.render("attachAccessory", { cube, accessories })
    },
    POST: async (req, res) => {
        const accessoryID = req.body.accessory
        const cubeID = req.params.id

        const [_, error] = await promise(req.accessoryStorage.attach(cubeID, accessoryID))
        if (error !== null) {
            return res.render("attachAccessory", { error: error.message })
        }

        res.redirect("/cubes/details/" + cubeID)
    }
}