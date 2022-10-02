const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const x = ids;
  if (!x) return [];
  const getSpecieById = species
    .filter((specie) => x.some((id) => id === specie.id));
  return getSpecieById;
}

module.exports = getSpeciesByIds;
