import React, {useContext} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import {AppContext} from '../App';

const HomeRoute = () => {
  const {state} = useContext(AppContext);
  return (
    <div className="home-route">
      <TopNavigationBar state={state}/>
      <PhotoList state={state}/>
    </div>
  );
};

export default HomeRoute;
