import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import "../App.js";
import './Profile.js';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/*<Router>
        <Routes>
          <Route path="/" element={< App.js/>}/>
          <Route path="/" element={< Profile.js/>}/>
          <Route/>
        </Routes>
      </Router>*/}
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Sidebar;