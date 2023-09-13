import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, favorite, setFavorite, setModal}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorite={favorite}/>
      <PhotoList 
        photos={photos}
        favorite={favorite}
        setFavorite={setFavorite}
        setModal={setModal} 
      />
    </div>
  );
};

export default HomeRoute;
