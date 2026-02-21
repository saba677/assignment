
import React from 'react';

function ProfileHeader(props) {
  return (
    <div className="profile-header">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
    </div>
  );
}

export default ProfileHeader;