import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">News Aggregator</div>
      <div className="search-bar">
        <input type="text" placeholder="Search news..." />
        <button>Search</button>
      </div>
      <div className="user-profile">
        <img src="profile-pic-url" alt="User Profile" />
      </div>
    </div>
  );
};

export default Header;