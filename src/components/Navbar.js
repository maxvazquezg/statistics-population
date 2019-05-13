import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <a class="navbar-brand" href="#">Estadísticas</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mr-auto">
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
        </div>
      </nav>
    );
  }
}

export default Navbar;