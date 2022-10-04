const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

// Caso o parâmetro name seja firstName ou lastName
const getEmployeesByName = ({ name: x, id: y }) => {
  const zooEmployee = employees
    .find((employee) => employee.firstName === x || employee.lastName === x);
  if (employees.some((employee) => employee.firstName === x || employee.lastName === x)) {
    const genericEmployeeObject = {
      id: zooEmployee.id,
      fullName: `${zooEmployee.firstName} ${zooEmployee.lastName}`,
      species: zooEmployee.responsibleFor.map((id) => getSpeciesByIds(id)[0].name),
      locations: zooEmployee.responsibleFor.map((id) => getSpeciesByIds(id)[0].location),
    };
    return genericEmployeeObject;
  } throw new Error('Informações inválidas');
};
// caso o parâmetro seja id
const getEmployeesById = ({ name: x, id: y }) => {
  const zooEmployee = employees.find((employee) => employee.id === y);
  if (employees.some((employee) => employee.id === y)) {
    const genericEmployeeObject = {
      id: zooEmployee.id,
      fullName: `${zooEmployee.firstName} ${zooEmployee.lastName}`,
      species: zooEmployee.responsibleFor.map((id) => getSpeciesByIds(id)[0].name),
      locations: zooEmployee.responsibleFor.map((id) => getSpeciesByIds(id)[0].location),
    };
    return genericEmployeeObject;
  } throw new Error('Informações inválidas');
};
// caso não tenha parâmetros
const getAllEmployees = () => {
  const allZooEmployees = employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((id) => getSpeciesByIds(id)[0].name),
    locations: employee.responsibleFor.map((id) => getSpeciesByIds(id)[0].location),
  }));
  return allZooEmployees;
};

function getEmployeesCoverage({ name: x, id: y } = {}) {
  // relacionada ao parâmetro name ser um firstName ou lastName
  if (x) {
    return getEmployeesByName({ name: x, id: y });
  }
  // relacionada ao parâmetro id ser um id
  if (y) {
    return getEmployeesById({ name: x, id: y });
  }
  return getAllEmployees();
}

module.exports = getEmployeesCoverage;
