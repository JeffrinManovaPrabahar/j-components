import React from 'react';

const Icon = ({ icon, size = "base" }) => {
  if (size === 'lg') size = 'w-8 h-8'
  if (size === 'base') size = 'w-6 h-6'
  return (
    <img className={`${size} mr-2`} src={icon} alt=""></img>
  )
}

export default Icon;
