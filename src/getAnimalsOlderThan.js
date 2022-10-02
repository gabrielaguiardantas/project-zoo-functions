const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código   aqui
  const findSpecie = species.find((zooAnimal) => zooAnimal.name === animal).residents;
  const allAnimalsOlderOrNot = findSpecie.every((specie) => specie.age >= age);
  return allAnimalsOlderOrNot;
}

module.exports = getAnimalsOlderThan;
