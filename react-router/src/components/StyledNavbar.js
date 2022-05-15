import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StyledNavbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' };
        }}
      >
        {' '}
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' };
        }}
      >
        {' '}
        about
      </NavLink>
      <NavLink
        to="/product"
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' };
        }}
      >
        {' '}
        Products
      </NavLink>
    </nav>
  );
}
