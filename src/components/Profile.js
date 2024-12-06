import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <div className="logo">My profile</div>
      <div className="saved">
        <input type="text" placeholder="Search news..." />
        <button>Search</button>
      </div>
      <div className="personal-info">
        <p>name, place of work, position, email</p>
      </div>
    </div>
  );
};

export default Profile;