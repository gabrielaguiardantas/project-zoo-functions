const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const Manager = employees.some((employee) => employee.managers.includes(id));
  return Manager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const employeesManager = employees.filter((employee) => employee.managers.includes(managerId));
    const employeesManagerName = employeesManager.map(
      (employee) =>
        `${employee.firstName} ${employee.lastName}`,
    );
    return employeesManagerName;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
