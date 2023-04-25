const http = require("http");
require("dotenv").config();
const app = require("./app");
const { loadPlanetsData } = require("./model/planets.model");
const PORT = process.env.PORT || 5000;

//server setup
const server = http.createServer(app);
async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log("Server is running over port " + PORT);
  });
}
startServer();
