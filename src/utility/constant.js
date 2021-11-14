export const API_URL = 'https://6149991107549f001755a471.mockapi.io/employees/employees';

export const ROUTES = {
  employeeList: '/emplolyee/list',
  addEmployee: '/emplolyee/add',
  editEmployee: '/emplolyee/edit',
  home: '/',
  pageNotFound: '*',
};

export const RENDER_FIELDS = [
  { field: "first_name", label: "First Name" },
  { field: "last_name", label: "Last Name" },
  { field: "email", label: "Email" },
  { field: "number", label: "Phone No." },
];

export const GENDER_DATA = [
  "Trans*Man",
  "Gender Fluid",
  "Cis",
  "Cisgender Woman",
  "Trans Female",
  "Transexual Man",
  "Neutrois",
  "Man",
  "Gender Nonconforming",
  "Intersex"
]
