const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = employees.find((zooEmployee) => zooEmployee.id === id).responsibleFor[0];
  const specieById = species.find((specie) => specie.id === firstSpecie).residents;
  const oldestAnimal = specieById.reduce((acc, animal) => {
    if (acc.age > animal.age) {
      return acc;
    } return animal;
  });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
