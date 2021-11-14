import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AgGridTable from "./";
import mockStore from "../../__tests__/mockStore";
import { ROUTES } from "../../utility/constant";

const mockHistoryPush = jest.fn();

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
      [{"first_name":"Henri","last_name":"Rodriguez","email":"Darrin_Rippin@gmail.com","number":"405-936-8560","gender":"Trans*Man","id":"1"}]
    ),
  })
);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("AgGridTable Test", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      employees: {
        employeeList: [],
      },
    });
  });

  test("renders AgGridTable", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <AgGridTable />
        </Provider>
      </MemoryRouter>
    );

    fireEvent.click(getByTestId("AgGridTable-cancelButton"));
    expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.addEmployee);
  });
});
