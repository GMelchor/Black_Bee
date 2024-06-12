import React from "react";
import "./navBarInventory.scss"
import Button from "@mui/material/Button";

const NavBarInventory = () => {
  return (
    <div className="NavBarInventory">
      <div className="content-NavBarInventory">
        <h2>Inventario</h2>
        <Button variant="text">Operaciones</Button>
        <Button variant="text">Informacion General</Button>
        <Button variant="text">Reportes</Button>
        <p>G&M Solutions</p>
      </div>
    </div>
  );
};

export default NavBarInventory;
