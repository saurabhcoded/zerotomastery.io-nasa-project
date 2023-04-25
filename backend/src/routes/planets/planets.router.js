const express = require("express");
const { getAllPLanets } = require("./planets.controller");
const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPLanets);

module.exports = planetsRouter;
