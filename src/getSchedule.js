const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// função relacionada ao parâmetro da função getSchedule ser um dia da semana
const dayParameter = (scheduleTarget) => {
  const
    x = `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`;
  const y = species.filter((specie) => specie.availability.includes(scheduleTarget))
    .map((specie) => specie.name);
  const genericObject = (scheduleTargettt) => ({
    [scheduleTargettt]:
    { officeHour: x, exhibition: y } });
  return genericObject(scheduleTarget);
};

const mondayDay = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  } return dayParameter(scheduleTarget);
};

function getSchedule(scheduleTarget) {
  // relacionada ao parâmetro ser algum animal
  const allAnimals = species.map((specie) => specie.name);
  if (allAnimals.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  // relacionado ao parâmetro ser algum dia da semana e ser monday
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (daysOfWeek.includes(scheduleTarget)) return mondayDay(scheduleTarget);

  // relacionado ao parâmetro não condizer com dia ou animal
  if (!daysOfWeek.includes(scheduleTarget)
  && !allAnimals.includes(scheduleTarget)) return daysOfWeek.map((day) => dayParameter(day));
} console.log(getSchedule('qualquercoisa'));

module.exports = getSchedule;
