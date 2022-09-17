import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoHeader from './LogoHeader';

const Navbar = () => (
  <nav className="navbar">
    <LogoHeader />
    <ul>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive && 'active')}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className={({ isActive }) => (isActive && 'active')}>Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/quote" className={({ isActive }) => (isActive && 'active')}>Quote</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
