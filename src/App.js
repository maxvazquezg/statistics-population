import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Container from './components/Container'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Container></Container>
      </div>
    </Router>
  );
}

export default App;
