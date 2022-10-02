const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const employee = employees.find((employe) => employe.firstName === employeeName
  || employe.lastName === employeeName);
  return employee;
}

module.exports = getEmployeeByName;
