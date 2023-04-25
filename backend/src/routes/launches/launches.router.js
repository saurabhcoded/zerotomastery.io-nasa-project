const express = require("express");
const { getAllLaunches, launchPusher } = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/launches", getAllLaunches);
launchesRouter.post("/launches", launchPusher);
module.exports = launchesRouter;
