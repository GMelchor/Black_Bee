import React from "react";
import "./contentSales.scss";
import Button from "@mui/material/Button";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "numero", label: "Numero", minWidth: 20 },
  { id: "fecha", label: "Fecha de creación", minWidth: 40 },
  {
    id: "cliente",
    label: "Cliente",
    minWidth: 40,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "vendedor",
    label: "Vendedor",
    minWidth: 50,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "empresa",
    label: "Empresa",
    minWidth: 60,
  },
  {
    id: "total",
    label: "Total",
    minWidth: 60,
  },
  {
    id: "estado",
    label: "Estado",
    minWidth: 60,
  },
];

function createData(numero, fecha, cliente, vendedor, empresa, total, estado) {
  return { numero, fecha, cliente, vendedor, empresa, total, estado };
}

const rows = [
  createData(1, "01/01/2023", "Cliente A", "Vendedor 1", "Empresa X", "$100", "Pendiente"),
  createData(2, "02/01/2023", "Cliente B", "Vendedor 2", "Empresa Y", "$200", "Completado"),
  createData(3, "03/01/2023", "Cliente C", "Vendedor 3", "Empresa Z", "$300", "En proceso"),
];

const ContentSales = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="ContentSales">
      <div className="header">
        <Button variant="contained">Nuevo</Button>
        <p>Cotizaciones</p>
        <RequestQuoteOutlinedIcon />
        <Select className="inputSelect" type="text" placeholder="Buscar.....">
          <SearchIcon className="icon" />
        </Select>
      </div>
      <div className="table-sales">
        <Paper sx={{ width: "98%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 580 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default ContentSales;
