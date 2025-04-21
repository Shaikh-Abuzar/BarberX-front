import React from "react";
import "../styles/Navbar.css"; // Yeh CSS file tum /src/styles folder mein banao

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Salon X Logo" />
        <span>BarberX</span>
      </div>
      <ul className="navbar__links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Salons</a></li>
        <li><a href="#">Services</a></li>
      </ul>
      <div className="navbar__search">
        <input type="text" placeholder="Search For Salons" />
      </div>
      <div className="navbar__profile">
        <img src="/profile.jpg" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

