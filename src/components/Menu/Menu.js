import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-menu p-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><h2>Next Career Tech</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <span className="d-flex">
              <NavLink className="nav-link active signin text-white" aria-current="page" to="/">Sign In</NavLink>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;