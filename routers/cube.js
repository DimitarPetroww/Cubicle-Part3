const express = require("express")
const create = require("../controllers/cube/create")
const details = require("../controllers/cube/details")
const browse = require("../controllers/cube/browse")
const edit = require("../controllers/cube/edit")
const del = require("../controllers/cube/delete")

const { isGuest, isAuth, isOwner } = require("../middlewares/guards")
const { preloadCube } = require("../middlewares/preload")

const router = express.Router()

router.get("/browse", browse.GET)

router.get("/create", isAuth(), create.GET)
router.post("/create", isAuth(), create.POST)

router.get("/details/:id", details.GET)
router.get("/edit/:id", preloadCube(), isOwner(), edit.GET)
router.post("/edit/:id", preloadCube(), isOwner(), edit.POST)

router.get("/delete/:id", preloadCube(), isOwner(), del.GET)
router.post("/delete/:id", preloadCube(), isOwner(), del.POST)


module.exports = router