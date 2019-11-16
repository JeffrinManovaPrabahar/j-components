import React from 'react';
import BannerImg from '../BannerImg'
import ProfileImg from '../ProfileImg'

const ProfileBanner = ({ bannerImg, profileImg }) => {
  return (
    <>
      <BannerImg img={bannerImg} />
      <div className="ml-10 -mt-16">
        <ProfileImg img={profileImg} />
      </div>
    </>
  )
}

export default ProfileBanner;
