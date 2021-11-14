import AgGridTableComponent from "./AgGridTable.component";
import { connect } from "react-redux";
import { EmployeeActions } from "../../store/actions";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => ({
  employees: state.employees.employeeList,
});

const mapStateToDispatch = (dispatch) => ({
  actions: bindActionCreators({ saveEmployees: EmployeeActions.saveEmployees, deleteEmployee: EmployeeActions.deleteEmployee }, dispatch),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AgGridTableComponent);
