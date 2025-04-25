import React from 'react';

function UserActivity(props) {
  const {activitie} = props
  return (
    <div>
      <h3>Recent Activities</h3>
      <ul>
        {activitie.map((activity,i) => (
          <li key={i}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserActivity;
