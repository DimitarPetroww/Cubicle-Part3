const express = require("express")
const create = require("../controllers/cube/create")
const details = require("../controllers/cube/details")
const browse = require("../controllers/cube/browse")

const router = express.Router()

router.get("/create", create.GET)
router.get("/details/:id", details.GET)
router.get("/browse", browse.GET)

router.post("/create", create.POST)


module.exports = router