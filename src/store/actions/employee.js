export const SAVE_EMPLOYEES = "SAVE_EMPLOYEES";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

export const saveEmployees = (employeeList = []) => {
  return {
    type: SAVE_EMPLOYEES,
    employeeList,
  };
};

export const addEmployee = (employee = {}) => {
  return {
    type: ADD_EMPLOYEE,
    employee,
  };
};

export const editEmployee = (employee = {}) => {
  return {
    type: EDIT_EMPLOYEE,
    employee,
  };
};

export const deleteEmployee = (employeeId) => {
  return {
    type: DELETE_EMPLOYEE,
    employeeId,
  };
};
