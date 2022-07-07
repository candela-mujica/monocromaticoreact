import React from 'react';
import './navBar.css'

export const NavBar = () => {
    return (
    <body>
    <div className="container">
      <nav className="nav">
        <a href="index.jsx">
            <img src="./Imagenes/Logo.webp" alt="logo de monocromático handmade"/>
        </a>
        <ul className="nav_list">
          <li>
            <a className="nav_link" href="a">Barbijos</a>
          </li>
          <li>
            <a className="nav_link" href="a">Bijouterie</a>
          </li>
          <li>
            <a className="nav_link" href="a">Buzos</a>
          </li>
          <li>
            <a className="nav_link" href="a">Remeras</a>
          </li>
          <li>
            <a className="nav_link" href="a">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
    </body>
    );
}

export default NavBar;