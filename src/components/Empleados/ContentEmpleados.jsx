import React from "react";
import "./contentEmpleados.scss";
import Button from "@mui/material/Button";
import Select from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import EmailIcon from '@mui/icons-material/Email';
import Profile from "../../assets/profile.png";

const data = [
  {
    name: "Melissa Flores Quevedo",
    title: "Zona Sur - Responsable de cuentas",
    email: "melissa.flores@bizneo.com",
    avatar: Profile
  },
  {
    name: "Martín Abasto",
    title: "Marketing",
    email: "martin.abasto@bizneo.com",
    avatar: "https://example.com/avatar3.jpg"
  },
  {
    name: "Olivia Arribas",
    title: "Zona Norte - Técnico RRHH",
    email: "olivia.arribas@gmail.com",
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    name: "Carlos Gómez",
    title: "Desarrollo de Producto",
    email: "carlos.gomez@bizneo.com",
    avatar: "https://example.com/avatar4.jpg",
  },
  {
    name: "Laura Martínez",
    title: "Ventas - Zona Este",
    email: "laura.martinez@bizneo.com",
    avatar: "https://example.com/avatar5.jpg",
  },
  {
    name: "Pedro Sánchez",
    title: "Soporte Técnico",
    email: "pedro.sanchez@bizneo.com",
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    name: "Ana López",
    title: "Recursos Humanos",
    email: "ana.lopez@bizneo.com",
    avatar: "https://example.com/avatar7.jpg",
  },
  {
    name: "Jorge Pérez",
    title: "Finanzas",
    email: "jorge.perez@bizneo.com",
    avatar: "https://example.com/avatar8.jpg",
  },
  {
    name: "Elena Rodríguez",
    title: "Logística",
    email: "elena.rodriguez@bizneo.com",
    avatar: "https://example.com/avatar9.jpg",
  },
  {
    name: "Ricardo Díaz",
    title: "Investigación y Desarrollo",
    email: "ricardo.diaz@bizneo.com",
    avatar: "https://example.com/avatar10.jpg",
  },
  {
    name: "Sofía Fernández",
    title: "Comunicación",
    email: "sofia.fernandez@bizneo.com",
    avatar: "https://example.com/avatar11.jpg",
  },
  {
    name: "Andrés Torres",
    title: "Proyectos Especiales",
    email: "andres.torres@bizneo.com",
    avatar: "https://example.com/avatar12.jpg",
  },
];

const ContentEmpleados = () => {
  return (
    <div className="ContentEmpleados">
      <div className="header">
        <Button variant="contained">Nuevo</Button>
        <p>Empleado</p>
        <RequestQuoteOutlinedIcon />
        <Select className="inputSelect" type="text" placeholder="Buscar.....">
          <SearchIcon className="icon" />
        </Select>
      </div>
      {data.map((contact, index) => (
        <div key={index} className="contact-card">
          <img src={contact.avatar} alt={contact.name} className="avatar" />
          <div className="info">
            <h3 className="name">{contact.name}</h3>
            <p className="title">{contact.title}</p>
            <a className="email">
            <EmailIcon/>{contact.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContentEmpleados;
