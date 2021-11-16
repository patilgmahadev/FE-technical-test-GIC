import * as Yup from "yup";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

export default Yup.object({
  first_name: Yup.string()
    .min(6, "Must be minimum 6 characters or more")
    .max(10, "Must be maximum 10 characters or less")
    .required("This field is required"),
  last_name: Yup.string()
    .min(6, "Must be minimum 6 characters or more")
    .max(10, "Must be maximum 10 characters or less")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  number: Yup.string()
    .required("This field is require")
    .matches(phoneRegex, "Invalid phone"),
  gender: Yup.string().required("This field is required"),
});
