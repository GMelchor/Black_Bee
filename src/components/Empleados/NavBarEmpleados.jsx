import React from "react";
import "./navBarEmpleados.scss"
import Button from "@mui/material/Button";

const NavBarEmpleados = () => {
  return (
    <div className="NavBarEmpleados">
      <div className="content-NavBarEmpleados">
        <h2>Empleados</h2>
        <Button variant="text">Reportes</Button>
        <Button variant="text">Departamentos</Button>
        <p>G&M Solutions</p>
      </div>
    </div>
  );
};

export default NavBarEmpleados;
