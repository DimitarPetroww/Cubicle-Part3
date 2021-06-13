const express = require("express")
const attachAccessory = require("../controllers/accessory/attachAccessory")
const createAccessory = require("../controllers/accessory/createAccessory")

const router = express.Router()

const { isAuth } = require("../middlewares/guards")

router.get("/create", isAuth(), createAccessory.GET)
router.post("/create", isAuth(), createAccessory.POST)
router.get("/attach/:id", isAuth(), attachAccessory.GET)
router.post("/attach/:id", isAuth(), attachAccessory.POST)

module.exports = router