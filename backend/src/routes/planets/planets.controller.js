const { habitablePlanets } = require("../../model/planets.model");

function getAllPLanets(req, res) {
  return res.status(200).json({
    data: habitablePlanets.map((planet) => {
      return planet["kepler_name"];
    }),
    message: `${habitablePlanets.length} kepler habitable planets found`,
  });
}
module.exports = { getAllPLanets };
