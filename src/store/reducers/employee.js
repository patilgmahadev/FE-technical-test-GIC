import {
  SAVE_EMPLOYEES,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../actions/employee";

const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case `${SAVE_EMPLOYEES}`:
      return {
        employeeList: [...action.employeeList],
      };
    case `${ADD_EMPLOYEE}`:
      return {
        employeeList: [...state.employeeList, action.employee],
      };
    case `${EDIT_EMPLOYEE}`:
      return {
        employeeList: state.employeeList.map((item) => {
          if (item.id === action.employee.id) {
            return action.employee;
          }
          return item;
        }),
      };

    case `${DELETE_EMPLOYEE}`:
      return {
        employeeList: state.employeeList.filter(
          item => item.id !== action.employeeId
        ),
      };
    default:
      return state;
  }
};

export default employeeReducer;
