import React from 'react';
import { get, isEmpty } from "lodash";
import { Formik, ErrorMessage } from "formik";
import {
  Button,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";

import "./Form.css";

import validationSchema from "../../utility/validationSchema";
import { useHistory } from "react-router-dom";
import { ROUTES, RENDER_FIELDS, GENDER_DATA } from "../../utility/constant";

function FormComponent({ location, noOfEmployees, actions: { addEmployee, editEmployee } }) {
  const history = useHistory();
  const employeeData = get(location, 'state.employeeData', {});
  const initialValues = !isEmpty(employeeData) ? employeeData : {
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    gender: "",
  };

  const handleCancel = () => {
    if(window.confirm('Form has been modified. You will lose your unsaved changes. Are you sure you want to close this form?')) {
      history.push(ROUTES.employeeList);
    }
  };

  const renderTextField = (formik, field, label) => {
    return (
        <Grid className="item">
          <TextField
            name={field}
            id={field}
            label={label}
            fullWidth
            error={formik.touched[field] && formik.errors[field]}
            helperText={formik.errors[field]}
            variant="filled"
            value={formik.values[field]}
            {...formik.getFieldProps(field)}
          />
        </Grid>
    );
  };

  return (
    <Grid>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if(!isEmpty(employeeData)) {
            editEmployee({ ...values, id: get(employeeData, 'id', '')});
          } else {
            addEmployee({ ...values, id: noOfEmployees + 1 });
          }
          setSubmitting(false);
          history.push(ROUTES.employeeList);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {RENDER_FIELDS.map((item) =>
              renderTextField(
                formik,
                get(item, "field", ""),
                get(item, "label", "")
              )
            )}
            <Grid className="item">
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formik.values["gender"]}
                  onChange={formik.handleChange}
                >
                  {GENDER_DATA.map(element => (
                                <FormControlLabel
                                value={element}
                                control={<Radio />}
                                label={element}
                                checked={formik.values["gender"] === element}
                              />
                    ))}
                </RadioGroup>
                <Grid className="error">
                  <ErrorMessage name="gender" />
                </Grid>
              </FormControl>
            </Grid>
            <Grid container className="item btn-alignment">
              <Button type="submit" variant="contained" color="primary">
                <Typography variant="h6" gutterBottom component="div">
                  Submit
                </Typography>
              </Button>
              <Button
                variant="outlined"
                className="cancel-button"
                onClick={handleCancel}
              >
                <Typography variant="h6" gutterBottom component="div">
                  Cancel
                </Typography>
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Grid>
  );
}

export default FormComponent;
