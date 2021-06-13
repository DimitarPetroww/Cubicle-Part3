function isAuth() {
    return (req, res, next) => {
        if(req.user !== undefined) {
            next()
        }else {
            res.redirect("/auth/login")
        }
    }
}
function isGuest() {
    return (req, res, next) => {
        if(req.user === undefined) {
            next()
        }else {
            res.redirect("/cubes/browse")
        }
    }
}
function isOwner() {
    return (req, res, next) => {
        if(req.user && req.user._id == req.cube.owner._id) {
            next()
        }else {
            res.redirect("/cubes/browse")
        }
    }
}
module.exports = {
    isAuth,
    isGuest,
    isOwner
}