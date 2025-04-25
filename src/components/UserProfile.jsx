import React from 'react';

function UserProfile(props) {
  const {profile} = props
  const hobbies = ['Reading', 'Gaming','Cooking'];


  return (
    <div>
      <h1>User Profile</h1>
      {/* <p>Name: {props.activitie.firstName}</p> */}
      
      <p>Age: {profile.age}</p>
      {profile.isMember || <p>Member since: {profile.memberSince}</p>}
      <ul>
        {hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
      </ul>
    </div>
  );
}

export default UserProfile;
