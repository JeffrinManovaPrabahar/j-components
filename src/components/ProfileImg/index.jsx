import React from 'react';

const ProfileImg = ({ img }) => {
  return (
    <div className="flex shadow-xl rounded overflow-hidden w-32 h-32">
      <img className="w-full h-32 object-cover object-left" src={img} alt=""></img>
    </div>
  )
}

export default ProfileImg;
