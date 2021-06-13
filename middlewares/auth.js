const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userService = require("../services/user")
const config = require("../config/config")[process.env.NODE_ENV || 'development']
const promise = require("../util/promise")

module.exports = () =>  (req, res, next) => {
    req.userService = {
        register,
        login,
        logout
    }

    const token = req.cookies[config.COOKIE_NAME];
    try {
        const user = jwt.verify(token, config.TOKEN_SECRET);
        req.user = user;
        res.locals.isLogged = true
    } catch (error) {
        res.clearCookie(config.COOKIE_NAME);
    }

    next()

    async function login(user) {
        const existing = await userService.findUserByUsername(user.username)
        if (!existing) {
            throw new Error("Wrong username or password!")
        }
        const isMatch = await bcrypt.compare(user.password, existing.hashedPassword)
        if (!isMatch) {
            throw new Error("Wrong username or password!")
        }

        const token = jwt.sign({ username: user.username, _id: user._id }, config.TOKEN_SECRET);
        res.cookie(config.COOKIE_NAME, token)
    }
    async function register(user) {
        if (user.password !== user.repeatPassword) {
            throw new Error("Passwords must match!")
        }
        if (user.password === "" || user.username === "") {
            throw new Error("All fields are required!")
        }
        const hashedPassword = await bcrypt.hash(user.password, config.SALT_ROUNDS)
        const [data, error] = await promise(userService.createUser({ username: user.username, hashedPassword }))
        if(error !== null) {
            throw new Error(error.message)
        }
        const token = jwt.sign({ username: user.username, _id: user._id }, config.TOKEN_SECRET);
        res.cookie(config.COOKIE_NAME, token)
        return data
    }
    function logout() {
        res.clearCookie(config.COOKIE_NAME)
        res.redirect("/")
    }
}
