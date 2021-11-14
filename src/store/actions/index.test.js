import { EmployeeActions } from "./";
import { SAVE_EMPLOYEES, ADD_EMPLOYEE } from "./employee";

describe("Actions Test", () => {
  test("should call the employee list action", () => {
    expect(EmployeeActions.saveEmployees()).toEqual({
      type: SAVE_EMPLOYEES,
      employeeList: [],
    });
  });

  test("should call the add employee action", () => {
    expect(EmployeeActions.addEmployee()).toEqual({
      type: ADD_EMPLOYEE,
      employee: {},
    });
  });
});
