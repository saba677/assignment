import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileStats from './components/ProfileStats';

function ProfileContainer() {
  const userData = {
    name: 'saba mansha',
    image: '/images/logo.svg', 
    description: 'am fond of making website and passionate about my working',
    <button>click me</button>
    
  };

  return (
    <div className="profile-container">
      <ProfileHeader name={userData.name} image={userData.image} />
    </div>
  );
}

export default ProfileContainer;
