const promise = require("../util/promise")

function preloadCube() {
    return async (req, res, next) => {
        const [data, error] = await promise(req.cubeStorage.getOne(req.params.id))
        if (error !== null) {
            res.redirect("/404")
        }
        req.cube = data
        next()
    }
}
module.exports = {
    preloadCube
}