import React from "react";
import "./navBarInventory.scss";
import Button from "@mui/material/Button";

const NavBarInventory = () => {
  return (
    <div className="NavBarSales">
      <div className="content-NavBarSales">
        <h2>Ventas</h2>
        <Button variant="text">Operaciones</Button>
        <Button variant="text">Productos</Button>
        <Button variant="text">Reportes</Button>
        <p>G&M Solutions</p>
      </div>
    </div>
  );
};

export default NavBarInventory;
