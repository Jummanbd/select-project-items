import React from 'react';
const Member = ({team}) => {
  const {id,name, avatar} = team;
  
  
  return (
    <div key={id}>
        <div className="checkbox-container mt-2" >
          <img src={avatar} className="team-avater" alt='avatar img' />
          <p className="label">{name}</p>
        </div>
    </div>
  )
}

export default Member;
