import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Footer;