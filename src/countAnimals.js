const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals({ specie: animal, sex: genre } = {}) {
  // seu código aqui
  if (!animal) {
    const speciesName = species.map((specie) => specie.name);
    const speciesLength = species.map((specie) => specie.residents.length);
    const speciesAndLength = (speciesByName, speciesByLength) => speciesByName
      .map((specie, index) => ({ [specie]: speciesByLength[index] }));
    const allSpeciesAndLength = Object.assign({}, ...speciesAndLength(speciesName, speciesLength));

    return allSpeciesAndLength;
  }
  if (!genre) {
    const speciesLength1 = species.find((specie) => animal === specie.name).residents.length;
    return speciesLength1;
  }
  const speciesLength2 = species.find((specie) => animal === specie.name).residents
    .filter((specie) => specie.sex === genre).length;
  return speciesLength2;
}

module.exports = countAnimals;
