import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "parameter",
    headerName: "Parameter Name",
    width: 180,
    editable: true,
  },
  {
    field: "last_value",
    headerName: "Last Value",
    width: 180,
    editable: true,
  },
  {
    field: "today_min",
    headerName: "Min Value",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
  {
    field: "today_max",
    headerName: "Max Value",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
];

const SiteStatusDataTable = ({ parametersData }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={parametersData}
        columns={columns}
        rowsPerPageOptions={[100]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default SiteStatusDataTable;
