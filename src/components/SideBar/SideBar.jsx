import React from "react";
import "./sideBar.scss";
import Icon from "../../assets/black_bee_logo.png";
import Profile from "../../assets/profile.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

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
      <div className="burgerContainer ">
        <div className="burgerTrigger"></div>
        <div className="burgerMenu"></div>
      </div>
      <div className="profileContainer">
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Hola, Luis</p>
          <p>Luis_glz1408@gmail.com</p>
        </div>
      </div>
      <div className="contentsContainer">
        <ul>
          <li className="active">
            <CalendarMonthIcon className="icon-ui" />
            <a href="/">Calendario</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
