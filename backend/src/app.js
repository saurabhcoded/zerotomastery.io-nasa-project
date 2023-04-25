const express = require("express");
const path = require("path");
const planetsRouter = require("./routes/planets/planets.router");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const launchesRouter = require("./routes/launches/launches.router");
//cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//morgan for request
app.use(morgan("short"));
app.use(express.json());
//static folder
app.use(express.static(path.join(__dirname, "../public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.use(planetsRouter);
app.use(launchesRouter);
module.exports = app;
