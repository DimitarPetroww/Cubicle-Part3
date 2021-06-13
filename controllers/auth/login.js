const promise = require("../../util/promise")

module.exports = {
    GET: (req, res) => {
        res.render("login", {title: "Login"})
    },
    POST: async (req, res) => {
        const [data, error] = await promise(req.userService.login(req.body))
        if(error !== null) {
            return res.render("login", { title: "Login", error: error.message, data: req.body})
        }
        res.redirect("/")
    }
}