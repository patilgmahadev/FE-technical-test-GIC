import employeeReducer from "./employee";
import { SAVE_EMPLOYEES, ADD_EMPLOYEE } from "../actions/employee";

describe("Reducer Test", () => {
  test("should return the initial state", () => {
    expect(employeeReducer(undefined, { type: "" })).toEqual({});
  });

  test("should return the employee list", () => {
    expect(
      employeeReducer({}, { type: SAVE_EMPLOYEES, employeeList: [{}] })
    ).toEqual({ employeeList: [{}] });
  });

  test("should add the employee", () => {
    expect(
      employeeReducer(
        { employeeList: [] },
        { type: ADD_EMPLOYEE, employee: {} }
      )
    ).toEqual({ employeeList: [{}] });
  });
});
