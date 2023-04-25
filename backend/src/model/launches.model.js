const launches = [];

const launch = {
  flightnumber: 100,
  mission: "kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27", 2030),
  destination: "kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.push(launch);
function launchPusher(launch) {
  launches.push(launch);
}

module.exports = {
  launches,
  launchPusher,
};
