const express = require("express")

const browse = require("../controllers/browse")
const about = require("../controllers/about")

const router = express.Router()

router.get("/", browse.GET)
router.get("/about", about.GET)

module.exports = router