import React from "react";
import "./menuOptions.scss";
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
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

import Button from "@mui/material/Button";

const MenuOptions = () => {
  return (
    <div className="menuOptions">
      <lu className="grid-btns">
        <Button>
          <CalendarMonthIcon classname="icon"fontSize="large" />
        </Button>
        <Button>
          <EventAvailableOutlinedIcon classname="icon" fontSize="large"/>
          
        </Button>
        <Button>
          <Inventory2OutlinedIcon classname="icon" fontSize="large"/>
        </Button>
        <Button>
          <MonetizationOnOutlinedIcon classname="icon" fontSize="large"/>
        </Button>
        <Button>
          <StorefrontOutlinedIcon classname="icon" fontSize="large"/>
        </Button>
        <Button>
          <ShoppingCartOutlinedIcon classname="icon" fontSize="large" />
        </Button>
        <Button>
          <CalculateOutlinedIcon classname="icon" fontSize="large" />
        </Button>
        <Button>
          <WebOutlinedIcon classname="icon" fontSize="large" />
        </Button>
        <Button>
          <GroupsOutlinedIcon classname="icon" fontSize="large" />
        </Button>
        <Button>
          <FactCheckOutlinedIcon classname="icon" fontSize="large"/>
        </Button>
      </lu>
    </div>
  );
};

export default MenuOptions;
