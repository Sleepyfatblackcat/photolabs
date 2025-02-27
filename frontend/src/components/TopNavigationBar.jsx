import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({state}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={state.topicData}/>
      <FavBadge isFavPhotoExist={state.favorite.length > 0}/>
    </div>
  )
}

export default TopNavigation;