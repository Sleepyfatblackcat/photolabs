import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, favorite, setModal, handleFavorite}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorite={favorite}/>
      <PhotoList 
        photos={photos}
        setModal={setModal}
        handleFavorite={handleFavorite}
      />
    </div>
  );
};

export default HomeRoute;
