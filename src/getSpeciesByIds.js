const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const x = ids;
  if (!x) return [];
  const getSpecieById = species
    .filter((specie) => x.some((id) => id === specie.id));
  return getSpecieById;
}

// function getSpeciesByIds(...ids) {
//   const arrayIds = [];
//   for (let i = 1; i < species.length; i += 1) {
//     const saveIds = species[i].id;
//     arrayIds.push(saveIds);
//   }
//   if (arrayIds.includes(...ids) return Object.) 
// } getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d', '89be95b3-47e4-4c5b-b687-1fabf2afa274');

module.exports = getSpeciesByIds;
