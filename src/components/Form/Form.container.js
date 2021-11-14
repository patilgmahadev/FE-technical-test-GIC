import { connect } from "react-redux";
import FormComponent from "./Form.component";
import { bindActionCreators } from "redux";
import { EmployeeActions } from "../../store/actions";
import { get } from "lodash";

const mapStateToProps = (state) => ({
  noOfEmployees: get(state, "employees.employeeList", []).length,
});

const mapStateToDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(
      { addEmployee: EmployeeActions.addEmployee,
        editEmployee: EmployeeActions.editEmployee },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(FormComponent);
