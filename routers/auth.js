const express = require("express")
const login = require("../controllers/auth/login")
const register = require("../controllers/auth/register")
const logout = require("../controllers/auth/logout")

const { isGuest, isAuth } = require("../middlewares/guards")

const router = express.Router()

router.get("/login", isGuest(), login.GET)
router.post("/login", isGuest(), login.POST)

router.get("/register", isGuest(), register.GET)
router.post("/register", isGuest(), register.POST)

router.get("/logout", isAuth(), logout.GET)

module.exports = router