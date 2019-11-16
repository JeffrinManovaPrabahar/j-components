import React from 'react';

const BannerImg = ({ img }) => {
  return (
    <div className="flex">
      <img className="w-full h-32 object-cover" src={img} alt=""></img>
    </div>
  )
}

export default BannerImg;
