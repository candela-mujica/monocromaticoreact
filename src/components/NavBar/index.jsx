import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
    <div className="container">
      <nav className="nav">
        <a href="index.jsx">
            <img src="./Imagenes/Logo.webp" alt="logo de monocromático handmade" className="logo"/>
        </a>
        <ul className="nav_list">
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
          <li>
            <a className="nav_link" href="a">
              <CartWidget/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    );
}

export default NavBar;