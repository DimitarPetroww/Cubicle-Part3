const baseRouter = require("../routers/index");
const cubeRouter = require("../routers/cube");
const accessoryRouter = require("../routers/accessory");
const notFound = require("../controllers/notFound");

module.exports = (app) => {
    app.use("/", baseRouter)
    app.use("/cube", cubeRouter)
    app.use("/accessory", accessoryRouter)

    app.get("*", notFound.GET)
};