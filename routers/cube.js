const express = require("express")
const create = require("../controllers/cube/create")
const details = require("../controllers/cube/details")
const browse = require("../controllers/cube/browse")

const { isGuest, isAuth } = require("../middlewares/guards")

const router = express.Router()

router.get("/browse", browse.GET)
router.get("/create", isAuth(), create.GET)
router.get("/details/:id", details.GET)

router.post("/create", isAuth(), create.POST)


module.exports = router