const baseRouter = require("../routers/index");
const cubeRouter = require("../routers/cube");
const accessoryRouter = require("../routers/accessory");
const authRouter = require("../routers/auth");
const notFound = require("../controllers/notFound");

module.exports = (app) => {
    app.use("/", baseRouter)
    app.use("/cubes", cubeRouter)
    app.use("/accessories", accessoryRouter)
    app.use("/auth", authRouter)

    app.all("*", notFound.GET)
};