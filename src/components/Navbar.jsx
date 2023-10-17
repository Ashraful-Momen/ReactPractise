import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'
function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/" className={'nav-link'}>Home</NavLink>
        <NavLink to="/blogs" className={'nav-link'}>Blogs</NavLink>
        <NavLink to="/contact" className={'nav-link'}>Contact</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
