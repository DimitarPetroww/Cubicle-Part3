const promise = require("../../util/promise")

module.exports = {
    GET: async (req, res) => {
        const [accessories, error] = await promise(req.accessoryStorage.getAll())
        if (error !== null) {
            return res.redirect("/404")
        }
        res.render("attachAccessory", { cube: req.cube, accessories, title: "Attach Accessory" })
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