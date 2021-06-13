const promise = require("../util/promise")

module.exports = {
    GET: (req, res) => {
        res.render("createAccessory")
    },
    POST: async (req, res) => {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageURL: req.body.imageURL,
        }
        const [_, error] = await promise(req.accessoryStorage.create(accessory))
        if(error !== null) {
            return res.render("createAccessory", {error: error.message})
        }
        res.redirect("/")
    }
}