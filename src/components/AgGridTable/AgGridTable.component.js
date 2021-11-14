import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";

import { Grid, Button } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import {
  AG_GRID_DEFAULT_COLUMN_DEF, AG_GRID_DEFAULT_COLUMNS,
} from "../../utility/config";
import { ROUTES, API_URL } from "../../utility/constant";

import "./AgGridTable.css";

function AgGridTableComponent({
  employees,
  actions: { saveEmployees, deleteEmployee },
}) {

  let history = useHistory();
  // AG GRID Column config
  const AG_GRID_COLUMNS = [
    ...AG_GRID_DEFAULT_COLUMNS,
    {
      headerName: "Actions",
      field: "id",
      sortable: false,
      filter: false,
      cellRendererFramework: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleEdit(params.value)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.value)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    history.push({
      pathname: ROUTES.editEmployee,
      state: { employeeData: employees.filter((item) => item.id === id)[0] },
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the employee?")) {
      deleteEmployee(id);
    }
  };

  const fetchEmployee = () => {
    const requestOptions1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(
      API_URL,
      requestOptions1
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.sort((a,b) => (Number(a.id) > Number(b.id)) ? 1 : ((Number(b.id) > Number(a.id)) ? -1 : 0)));
        saveEmployees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (employees.length === 0){
      fetchEmployee();
    };
  });

  const handlerAdd = () => {
    history.push(ROUTES.addEmployee);
  };

  return (
    <Grid>
      <Grid item className="item align-right">
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handlerAdd}
          data-testid="AgGridTable-cancelButton"
        >
          Add
        </Button>
      </Grid>
      <Grid item className="ag-theme-alpine item" style={{ height: 700 }}>
        <AgGridReact
          rowData={employees}
          columnDefs={AG_GRID_COLUMNS}
          defaultColDef={AG_GRID_DEFAULT_COLUMN_DEF}
        ></AgGridReact>
      </Grid>
    </Grid>
  );
}

AgGridTableComponent.propTypes = {
  employees: PropTypes.array,
  actions: PropTypes.objectOf({
    saveEmployees: PropTypes.func.isRequired,
  }).isRequired,
};

AgGridTableComponent.defaultProps = {
  employees: [],
};

export default AgGridTableComponent;
