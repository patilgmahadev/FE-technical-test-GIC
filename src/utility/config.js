export const AG_GRID_DEFAULT_COLUMNS = [
  { headerName: "ID", field: "id", sort: "asc", comparator: (a, b) => ((Number(a) > Number(b)) ? 1 : ((Number(b) > Number(a)) ? -1 : 0))},
  { headerName: "First Name", field: "first_name" },
  { headerName: "Last Name", field: "last_name" },
  { headerName: "Email", field: "email" },
  { headerName: "Phone", field: "number" },
  { headerName: "Gender", field: "gender" },
];

export const AG_GRID_DEFAULT_COLUMN_DEF = {
  sortable: true,
  flex: 1,
  filter: true,
  floatingFilter: true,
};