import React from 'react';
import ProfileBanner from '../ProfileBanner'
import H1 from '../H1'
import P from '../P'
import WithIconP from '../WithIconP'
import IconsRow from '../IconsRow'
import Fieldset from '../../components/Fieldset'

import reactjsImg from '../../images/reactjs.png'
import graphqlImg from '../../images/graphql.png'
import gitImg from '../../images/git.png'
import figmaImg from '../../images/figma.png'
import vscodeImg from '../../images/vscode.png'
import githubImg from '../../images/github.png'
import nodejsImg from '../../images/nodejs.png'
import mongodbImg from '../../images/mongodb.png'
import highchartsImg from '../../images/highcharts.png'

const Profile = ({
  bannerImg, profileImg, emailIcon, phoneIcon,
  name, designation, email, phone, intro, strengths,
  fbIcon, instaIcon, youtubeIcon, linkedinIcon, twitterIcon
}) => {
  return (
    <>
      <ProfileBanner {...{ bannerImg, profileImg }} />
      <div className="flex-wrap ml-10 mr-10 mt-5">
        <div className="flex-wrap">
          <H1 text={name} />
          <br />
          <P text={designation} />
        </div>
        <div className="flex-wrap mt-3">
          <WithIconP icon={emailIcon} text={email} />
          <WithIconP icon={phoneIcon} text={phone} />
        </div>
        <div className="flex-wrap mt-3">
          <P text={intro} />
        </div>
        <IconsRow icons={[fbIcon, instaIcon, youtubeIcon, linkedinIcon, twitterIcon]} size="lg" />
        <div className="flex mt-6 -ml-10 -mr-10 px-10 py-3" style={{ backgroundColor: '#FFF8E1' }}>
          <Fieldset {...{
            ...strengths,
            icons: [
              reactjsImg, graphqlImg, gitImg, figmaImg, vscodeImg,
              githubImg, nodejsImg, mongodbImg, highchartsImg
            ]
          }} />
        </div>
      </div>
    </>
  )
}

export default Profile;
