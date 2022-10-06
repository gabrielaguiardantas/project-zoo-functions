const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const NE = [{
  [species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'lions').residents.map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'giraffes').residents
  .map((animal) => animal.name) }]; console.log(NE);

const NEMale = [{
  [species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'lions').residents
    .filter((lion) => lion.sex === 'male').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'giraffes').residents
  .filter((giraffe) => giraffe.sex === 'male').map((animal) => animal.name),
}];

const NEFemale = [{
  [species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'lions').residents
    .filter((lion) => lion.sex === 'female').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'giraffes').residents
  .filter((giraffe) => giraffe.sex === 'female').map((animal) => animal.name),
}];

const NESorted = [{
  [species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'lions').residents.map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'giraffes').residents.map((animal) => animal.name).sort(),
}];

const NESortedMale = [{
  [species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'lions').residents
    .filter((lion) => lion.sex === 'male').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'giraffes').residents
  .filter((giraffe) => giraffe.sex === 'male').map((animal) => animal.name).sort(),
}];

const NESortedFemale = [{
  [species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'lions').residents
    .filter((lion) => lion.sex === 'female').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'giraffes').residents
  .filter((giraffe) => giraffe.sex === 'female').map((animal) => animal.name).sort(),
}];

const NW = [{
  [species.filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'tigers').residents.map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'bears').residents.map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[2]]: species
  .find((specie) => specie.name === 'elephants').residents.map((animal) => animal.name),
}];

const NWMale = [{
  [species.filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'tigers').residents
    .filter((tiger) => tiger.sex === 'male').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'bears').residents
  .filter((bear) => bear.sex === 'male').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[2]]: species
  .find((specie) => specie.name === 'elephants').residents
  .filter((elephant) => elephant.sex === 'male').map((animal) => animal.name),
}];

const NWFemale = [{
  [species.filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'tigers').residents
    .filter((tiger) => tiger.sex === 'female').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'bears').residents
  .filter((bear) => bear.sex === 'female').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[2]]: species
  .find((specie) => specie.name === 'elephants').residents
  .filter((elephant) => elephant.sex === 'female').map((animal) => animal.name),
}];

const NWSorted = [{
  [species.filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'tigers').residents.map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'bears').residents.map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[2]]: species
  .find((specie) => specie.name === 'elephants').residents.map((animal) => animal.name).sort(),
}];

const NWSortedMale = [{
  [species.filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'tigers').residents
    .filter((tiger) => tiger.sex === 'male').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'bears').residents
  .filter((bear) => bear.sex === 'male').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[2]]: species
  .find((specie) => specie.name === 'elephants').residents
  .filter((elephant) => elephant.sex === 'male').map((animal) => animal.name).sort(),
}];

const NWSortedFemale = [{
  [species.filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'tigers').residents
    .filter((tiger) => tiger.sex === 'female').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'bears').residents
  .filter((bear) => bear.sex === 'female').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'NW')
  .map((specie) => specie.name)[2]]: species
  .find((specie) => specie.name === 'elephants').residents
  .filter((elephant) => elephant.sex === 'female').map((animal) => animal.name).sort(),
}];

const SE = [{
  [species.filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'penguins').residents.map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'SE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'otters').residents.map((animal) => animal.name),
}];

const SEMale = [{
  [species.filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'penguins').residents
    .filter((penguin) => penguin.sex === 'male').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'SE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'otters').residents
  .filter((otter) => otter.sex === 'male').map((animal) => animal.name),
}];

const SEFemale = [{
  [species.filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'penguins').residents
    .filter((penguin) => penguin.sex === 'female').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'SE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'otters').residents
  .filter((otter) => otter.sex === 'female').map((animal) => animal.name),
}];

const SESorted = [{
  [species.filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'penguins').residents.map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'SE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'otters').residents.map((animal) => animal.name).sort(),
}];

const SESortedMale = [{
  [species.filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'penguins').residents
    .filter((penguin) => penguin.sex === 'male').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'SE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'otters').residents
  .filter((otter) => otter.sex === 'male').map((animal) => animal.name).sort(),
}];

const SESortedFemale = [{
  [species.filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'penguins').residents
    .filter((penguin) => penguin.sex === 'female').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'SE')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'otters').residents
  .filter((otter) => otter.sex === 'female').map((animal) => animal.name).sort(),
}];

const SW = [{
  [species.filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'frogs').residents.map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'SW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'snakes').residents.map((animal) => animal.name),
}];

const SWMale = [{
  [species.filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'frogs').residents
    .filter((frog) => frog.sex === 'male').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'SW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'snakes').residents
  .filter((snake) => snake.sex === 'male').map((animal) => animal.name),
}];

const SWFemale = [{
  [species.filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'frogs').residents
    .filter((frog) => frog.sex === 'female').map((animal) => animal.name) },
{ [species.filter((specie) => specie.location === 'SW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'snakes').residents
  .filter((snake) => snake.sex === 'female').map((animal) => animal.name),
}];

const SWSorted = [{
  [species.filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'frogs').residents.map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'SW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'snakes').residents.map((animal) => animal.name).sort(),
}];

const SWSortedMale = [{
  [species.filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'frogs').residents
    .filter((frog) => frog.sex === 'male').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'SW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'snakes').residents
  .filter((snake) => snake.sex === 'male').map((animal) => animal.name).sort(),
}];

const SWSortedFemale = [{
  [species.filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name)[0]]: species
    .find((specie) => specie.name === 'frogs').residents
    .filter((frog) => frog.sex === 'female').map((animal) => animal.name).sort() },
{ [species.filter((specie) => specie.location === 'SW')
  .map((specie) => specie.name)[1]]: species
  .find((specie) => specie.name === 'snakes').residents
  .filter((snake) => snake.sex === 'female').map((animal) => animal.name).sort(),
}];

const genericObject = ({
  NE,
  NW,
  SE,
  SW,
});

const genericObjectMale = ({
  NE: NEMale,
  NW: NWMale,
  SE: SEMale,
  SW: SWMale,
});

const genericObjectFemale = ({
  NE: NEFemale,
  NW: NWFemale,
  SE: SEFemale,
  SW: SWFemale,
});

const genericObjectSorted = ({
  NE: NESorted,
  NW: NWSorted,
  SE: SESorted,
  SW: SWSorted,
});

const genericObjectSortedMale = ({
  NE: NESortedMale,
  NW: NWSortedMale,
  SE: SESortedMale,
  SW: SWSortedMale,
});

const genericObjectSortedFemale = ({
  NE: NESortedFemale,
  NW: NWSortedFemale,
  SE: SESortedFemale,
  SW: SWSortedFemale,
});

function animalSexGenre({ sex: y }) {
  if (y === 'male') return genericObjectMale;
  if (y === 'female') return genericObjectFemale;
  return genericObject;
}

function genericReturn({ includeNames: x, sex: y, sorted: z }) {
  if (z === true) {
    if (y === 'male') return genericObjectSortedMale;
    if (y === 'female') return genericObjectSortedFemale;
    return genericObjectSorted;
  }
  return animalSexGenre({ sex: y });
}

function getAnimalMap({ includeNames: x, sex: y, sorted: z } = {}) {
  // seu código aqui
  if (x === true) return genericReturn({ includeNames: x, sex: y, sorted: z });
  return {
    NE: species.filter((specie) => specie.location === 'NE')
      .map((specie) => specie.name),
    NW: species.filter((specie) => specie.location === 'NW')
      .map((specie) => specie.name),
    SE: species.filter((specie) => specie.location === 'SE')
      .map((specie) => specie.name),
    SW: species.filter((specie) => specie.location === 'SW')
      .map((specie) => specie.name),
  };
} console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
