import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, state, updateToFavPhotoIds, setPhotoSelected, getPhotosByTopic}) => {
  return (
    <div className="home-route">
      <TopNavigationBar state={state} getPhotosByTopic={getPhotosByTopic}/>
      <PhotoList
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
