import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile'
import BannerImg from './components/BannerImg'
import ProfileImg from './components/ProfileImg'
import ProfileBanner from './components/ProfileBanner'
import Fieldset from './components/Fieldset'
import Timeline from './components/Timeline'
import TimelineItem from './components/TimelineItem'
import H1 from './components/H1'
import H2 from './components/H2'
import P from './components/P'
import Label from './components/Label'
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

import reactjsImg from './images/reactjs.png'
import graphqlImg from './images/graphql.png'
import gitImg from './images/git.png'
import figmaImg from './images/figma.png'
import vscodeImg from './images/vscode.png'
import githubImg from './images/github.png'
import nodejsImg from './images/nodejs.png'
import mongodbImg from './images/mongodb.png'
import highchartsImg from './images/highcharts.png'

import profileData from './profile.json'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={`/banner-img`} render={() => <BannerImg img={bannerImg} />} />
        <Route exact path={`/profile-img`} render={() => <ProfileImg img={profileImg} />} />
        <Route exact path={`/h1`} render={() => <H1 text={profileData.name} />} />
        <Route exact path={`/h2`} render={() => <H2 text={profileData.strengths.title} />} />
        <Route exact path={`/p`} render={() => <P text={profileData.designation} />} />
        <Route exact path={`/label`} render={() => <Label text={"More"} bgColor="#1FAA00" color="#FFF" />} />
        <Route exact path={`/with-icon-p`} render={() => <WithIconP icon={emailIcon} text={profileData.email} />} />
        <Route exact path={`/icon`} render={() => <Icon icon={emailIcon} />} />
        <Route exact path={`/profile-banner`} render={() => <ProfileBanner {...{ bannerImg, profileImg }} />} />
        <Route exact path={`/fieldset`} render={() => <Fieldset {...{
          ...profileData.strengths,
          icons: [
            reactjsImg, graphqlImg, gitImg, figmaImg, vscodeImg,
            githubImg, nodejsImg, mongodbImg, highchartsImg
          ]
        }} />} />
        <Route exact path={`/timeline`} render={() => <Timeline {...{ data: profileData.workExperience }} />} />
        <Route exact path={`/timeline-item`} render={() => <TimelineItem />} />
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
