import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> <a href='/'>ShowFlixx </a></div>
      <ul className="nav-links">
        <li ><a href="/">Home</a></li>
        <li>Movies</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
