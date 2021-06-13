const express = require("express")
const login = require("../controllers/auth/login")
const register = require("../controllers/auth/register")

const router = express.Router()

router.get("/login", login.GET)
router.get("/register", register.GET)

module.exports = router