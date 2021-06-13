const express = require("express")
const attachAccessory = require("../controllers/attachAccessory")
const createAccessory = require("../controllers/createAccessory")

const router = express.Router()

router.get("/create", createAccessory.GET)
router.post("/create", createAccessory.POST)
router.get("/attach/:id", attachAccessory.GET)
router.post("/attach/:id", attachAccessory.POST)

module.exports = router