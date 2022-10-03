const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const sumOfAllTickets = countEntrants(entrants).child
   * 20.99 + countEntrants(entrants).adult * 49.99 + countEntrants(entrants).senior * 24.99;
  return sumOfAllTickets;
}

module.exports = { calculateEntry, countEntrants };
