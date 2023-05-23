import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{listStyleType: "none",display:"flex",paddingLeft:"10px"}}>
        <li style={{display:"inline-block",marginRight:"10px"}}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{display:"inline-block",marginRight:"10px"}}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
