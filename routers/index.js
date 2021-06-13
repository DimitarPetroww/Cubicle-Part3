const express = require("express")
const about = require("../controllers/base/about")

const router = express.Router()

router.get("/", (req, res) => res.redirect("/cubes/browse"))
router.get("/about", about.GET)

module.exports = router