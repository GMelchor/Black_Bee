import React from "react";
import "./navBarSales.scss";
import Button from "@mui/material/Button";

const NavBarSales = () => {
  return (
    <div className="NavBarSales">
      <div className="content-NavBarSales">
        <h2>Ventas</h2>
        <Button variant="text">Ordenes</Button>
        <Button variant="text">Facturar</Button>
        <Button variant="text">Productos</Button>
        <Button variant="text">Reportes</Button>
        <p>G&M Solutions</p>
      </div>
    </div>
  );
};

export default NavBarSales;
