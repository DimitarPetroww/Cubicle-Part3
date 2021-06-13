const express = require("express")
const create = require("../controllers/create")
const details = require("../controllers/details")


const router = express.Router()

router.get("/create", create.GET)
router.get("/details/:id", details.GET)

router.post("/create", create.POST)


module.exports = router