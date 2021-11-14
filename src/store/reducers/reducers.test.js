import employeeReducer from "./employee";
import {
  SAVE_EMPLOYEES,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../actions/employee";

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

  test("should update the employee", () => {
    expect(
      employeeReducer(
        { employeeList: [{ id: 1 }] },
        { type: EDIT_EMPLOYEE, employee: { id: 1 } }
      )
    ).toEqual({ employeeList: [{ id: 1 }] });
  });

  test("should delete the employee", () => {
    expect(
      employeeReducer(
        { employeeList: [{ id: 1 }, { id: 2 }] },
        { type: DELETE_EMPLOYEE, employeeId: 1 }
      )
    ).toEqual({ employeeList: [{ id: 2 }] });
  });
});
