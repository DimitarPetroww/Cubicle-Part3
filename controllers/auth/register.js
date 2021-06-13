const promise = require("../../util/promise")

module.exports = {
    GET: (req, res) => {
        res.render("register", {title: "Register"})
    },
    POST: async (req, res) => {
        const [data, error] = await promise(req.userService.register(req.body))
        if(error !== null) {
            console.log(error);
            return res.render("register", { title: "Register", error: error.message, data: req.body})
        }
        res.redirect("/")
    }
}