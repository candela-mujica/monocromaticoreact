import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
    <div className="container">
      <nav className="nav">
        <NavLink to='/'> 
            <img src="https://i.ibb.co/3fNqBgz/Logo.png" alt="logo de monocromático handmade" className="logo"/>
        </NavLink>
        <ul className="nav_list">
          <li>
            <NavLink className="nav_link" to='/categoria/bijouterie'>Bijouterie</NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to='/categoria/ropa'>Ropa</NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to='/cart'>
              <CartWidget/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    );
}

export default NavBar;