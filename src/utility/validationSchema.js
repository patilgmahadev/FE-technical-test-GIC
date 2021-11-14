import * as Yup from "yup";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

export default Yup.object({
  first_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
  last_name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  number: Yup.string()
    .required("This field is require")
    .matches(phoneRegex, "Invalid phone"),
  gender: Yup.string().required("This field is required"),
});
