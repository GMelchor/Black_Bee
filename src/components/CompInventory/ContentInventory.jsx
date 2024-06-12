import React from "react";
import "./contentInventory.scss";
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
  { id: "id", label: "ID", minWidth: 20, align: "left" },
  { id: "codigo_prod", label: "Codigo", minWidth: 40, align: "left" },
  { id: "descripcion", label: "Descripcion", minWidth: 40, align: "left" },
  {
    id: "costo",
    label: "Costo",
    minWidth: 40,
    align: "left",
  },
  {
    id: "unidad",
    label: "Unidad",
    minWidth: 50,
    align: "left",
  },
  {
    id: "cantidad",
    label: "Cantidad",
    minWidth: 60,
    align: "left",
  },
  {
    id: "ventaA",
    label: "Venta A",
    minWidth: 60,
    align: "left",
  },
  {
    id: "ventaB",
    label: "Venta B",
    minWidth: 60,
    align: "left",
  },
  {
    id: "ventastotales",
    label: "Ventas Totales",
    maxWidth: 15,
    align: "left",
  },
];

//función para formatear los valores monetarios
function formatCurrency(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}


function createData(
  id,
  codigo_prod,
  descripcion,
  costo,
  unidad,
  ventaA,
  ventaB,
  cantidad,
  ventastotales
) {
  return {
    id,
    codigo_prod,
    descripcion,
    costo: formatCurrency(costo),
    unidad,
    ventaA: formatCurrency(ventaA),
    ventaB: formatCurrency(ventaB),
    cantidad,
    ventastotales: formatCurrency(ventastotales),
  };
}

const rows = [
  createData(1, "A001", "Zapatos Deportivos", 100, "piezas", 120, 130, 50, 6000),
  createData(2, "A002", "Camisetas", 200, "piezas", 220, 230, 60, 12000),
  createData(3, "A003", "Pantalones", 300, "piezas", 320, 330, 70, 21000),
  createData(4, "A004", "Sombreros", 400, "cajas", 420, 430, 80, 32000),
  createData(5, "A005", "Calcetines", 500, "cajas", 520, 530, 90, 45000),
  createData(6, "A006", "Mochilas", 600, "piezas", 620, 630, 100, 60000),
  createData(7, "A007", "Lentes de Sol", 700, "cajas", 720, 730, 110, 77000),
  createData(8, "A008", "Relojes", 800, "piezas", 820, 830, 120, 96000),
  createData(9, "A009", "Cinturones", 900, "cajas", 920, 930, 130, 117000),
  createData(10, "A010", "Chaquetas", 1000, "piezas", 1020, 1030, 140, 140000),
];

const ContentInventory = () => {
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
    <div className="ContentInventory">
      <div className="header">
        <Button variant="contained">Nuevo</Button>
        <p>Inventario</p>
        <RequestQuoteOutlinedIcon />
        <Select
          className="inputSelect"
          type="text"
          placeholder="Buscar....."
        ></Select>
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

export default ContentInventory;
