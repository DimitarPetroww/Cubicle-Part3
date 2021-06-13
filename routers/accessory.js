const express = require("express")
const attachAccessory = require("../controllers/accessory/attachAccessory")
const createAccessory = require("../controllers/accessory/createAccessory")

const router = express.Router()

const { isAuth, isOwner } = require("../middlewares/guards")
const { preloadCube } = require("../middlewares/preload")

router.get("/create", isAuth(), createAccessory.GET)
router.post("/create", isAuth(), createAccessory.POST)
router.get("/attach/:id", isAuth(), preloadCube(), isOwner(), attachAccessory.GET)
router.post("/attach/:id", isAuth(), preloadCube(), isOwner(), attachAccessory.POST)

module.exports = router