import React from 'react';
import ProfileBanner from '../ProfileBanner'
import H1 from '../H1'
import P from '../P'
import WithIconP from '../WithIconP'
import Icon from '../Icon'

const Profile = ({
  bannerImg, profileImg, emailIcon, phoneIcon,
  name, designation, email, phone, intro,
  fbIcon, instaIcon, youtubeIcon, linkedinIcon, twitterIcon
}) => {
  return (
    <>
      <ProfileBanner {...{ bannerImg, profileImg }} />
      <div className="flex-wrap ml-10 mr-10 mt-5">
        <div className="flex-wrap">
          <H1 text={name} />
          <div className="mt-1">
            <P text={designation} />
          </div>
        </div>
        <div className="flex-wrap mt-5">
          <WithIconP icon={emailIcon} text={email} />
          <div className="mt-2">
            <WithIconP icon={phoneIcon} text={phone} />
          </div>
        </div>
        <div className="flex-wrap mt-5">
          <P text={intro} />
        </div>
        <div className="flex mt-5">
          <div className="mr-3">
            <Icon icon={fbIcon} size="lg" />
          </div>
          <div className="mr-3">
            <Icon icon={instaIcon} size="lg" />
          </div>
          <div className="mr-3">
            <Icon icon={youtubeIcon} size="lg" />
          </div>
          <div className="mr-3">
            <Icon icon={linkedinIcon} size="lg" />
          </div>
          <Icon icon={twitterIcon} size="lg" />
        </div>
      </div>
    </>
  )
}

export default Profile;
