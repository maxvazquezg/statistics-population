import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Población por estado</Link>
          </li>
          <li className="nav-item">
            <Link to="/Gender" className="nav-link">Población por genero</Link>
          </li>
          <li className="nav-item">
            <Link to="/Grow" className="nav-link">Población últimos 10 años</Link>
          </li>
          <li className="nav-item">
            <Link to="/ChartEstadistic" className="nav-link">Población próximos 10 años</Link>
          </li>
          <li className="nav-item">
            <Link to="/Map" className="nav-link">Mapa de Densidad de Población</Link>
          </li>
          <li className="nav-item">
            <Link to="/Meow" className="nav-link">?</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;