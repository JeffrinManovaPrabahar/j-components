import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile'
import BannerImg from './components/BannerImg'
import ProfileImg from './components/ProfileImg'
import ProfileBanner from './components/ProfileBanner'
import H1 from './components/H1'
import P from './components/P'
import WithIconP from './components/WithIconP'
import Icon from './components/Icon'

import bannerImg from './images/laptop.jpg'
import profileImg from './images/profile.jpeg'
import emailIcon from './images/email.svg'
import phoneIcon from './images/phone.svg'
import fbIcon from './images/facebook.svg'
import instaIcon from './images/instagram.svg'
import youtubeIcon from './images/youtube.svg'
import linkedinIcon from './images/linkedin.svg'
import twitterIcon from './images/twitter.svg'

import profileData from './profile.json'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={`/banner-img`} render={() => <BannerImg img={bannerImg} />} />
        <Route exact path={`/profile-img`} render={() => <ProfileImg img={profileImg} />} />
        <Route exact path={`/h1`} render={() => <H1 text={profileData.name} />} />
        <Route exact path={`/p`} render={() => <P text={profileData.designation} />} />
        <Route exact path={`/with-icon-p`} render={() => <WithIconP icon={emailIcon} text={profileData.email} />} />
        <Route exact path={`/icon`} render={() => <Icon icon={emailIcon} />} />
        <Route exact path={`/profile-banner`} render={() => <ProfileBanner {...{ bannerImg, profileImg }} />} />
        <Route exact path={`/profile`} render={() => <Profile {...{
          bannerImg, profileImg, emailIcon, phoneIcon,
          fbIcon, instaIcon, youtubeIcon, linkedinIcon, twitterIcon,
          ...profileData
        }} />} />
      </Switch>
    </Router>
  )
}

export default App;
