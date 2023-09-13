import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, state, updateToFavPhotoIds, setPhotoSelected}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} state={state}/>
      <PhotoList 
        photos={photos}
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
