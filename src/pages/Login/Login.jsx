import React from "react";
import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>BlackBee</h1>
        <h1>Bienvenido</h1>
        <form onSubmit="">
          <TextField
            id="email"
            label="Correo electronico"
            variant="outlined"
            required
            type="email"
            className="txt"
            size="small"
          />

          <TextField
            id="password"
            label="Contraseña"
            variant="outlined"
            required
            type="password"
            className="txt"
            size="small"
          />

          <Button
            size="medium"
            className="btn"
            variant="contained"
            type="submit"
          >
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
