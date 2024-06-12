import React, { useState } from "react";
import "./sideBar.scss";
import Icon from "../../assets/black_bee_logo.png";
import Profile from "../../assets/profile.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(true);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      <div
        className={
          closeMenu === false ? "logoContainer" : "logoContainer active"
        }
      >
        <img src={Icon} alt="icon" className="logo" />
        <h2 className="tittle">BlackBee.</h2>
      </div>
      <div
        className={
          closeMenu === false ? "burgerContainer" : "burgerContainer active"
        }
      >
        <div
          className="burgerTrigger"
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
        <div className="burgerMenu"></div>
      </div>
      <div
        className={
          closeMenu === false ? "profileContainer" : "profileContainer active"
        }
      >
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Hola, Gerardo</p>
          <p>gerardito_mf3005@gmail.com</p>
        </div>
      </div>
      <div
        className={
          closeMenu === false ? "contentsContainer" : "contentsContainer active"
        }
      >
        <ul>
          <li className="active">
            <CalendarMonthIcon className="icon-ui" />
            <a href="/">Calendario</a>
          </li>
          <li className="active">
            <StorefrontOutlinedIcon className="icon-ui" />
            <a href="/puntodeventa">Punto</a>
          </li>
          <li className="active">
            <ShoppingCartIcon className="icon-ui" />
            <a href="/Sales">Ventas</a>
          </li>
          <li className="active">
            <MonetizationOnOutlinedIcon  className="icon-ui" />
            <a href="/compras">Compras</a>
          </li>
          <li className="active">
            <Inventory2OutlinedIcon className="icon-ui" />
            <a href="/Inventory">Inventario</a>
          </li>
          <li className="active">
            <AccessibilityIcon  className="icon-ui" />
            <a href="/clientes">Clientes</a>
          </li>
          <li className="active">
            <GroupsOutlinedIcon className="icon-ui" />
            <a href="/Empleados">Empleados</a>
          </li>
          <li className="active">
            <FactCheckOutlinedIcon className="icon-ui" />
            <a href="/facturacion">Facturacion</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
