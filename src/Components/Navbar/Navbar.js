import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";



const Navbar = () => {
    return (
        <nav>
             <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/reviews'
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/deshBoard'
        >
          DeshBoard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/blogs'
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/about'
        >
          About
        </NavLink>
      </div>
        </nav>
    );
};

export default Navbar;