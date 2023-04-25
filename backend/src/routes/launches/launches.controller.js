const { launches } = require("../../model/launches.model");
function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

function launchPusher(req, res) {
  console.log(req.body);
  launches.push(req.body);
  res.status(201).json(req.body);
}
module.exports = {
  getAllLaunches,
  launchPusher,
};
