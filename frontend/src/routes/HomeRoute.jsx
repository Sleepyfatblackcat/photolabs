import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = ({setModal}) => {
  const [favorite, setFavorite] = useState([]);
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
