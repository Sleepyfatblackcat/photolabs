import React, {useContext} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import {AppContext} from '../App';

const PhotoListItem = ({item}) => {
  const {state, updateToFavPhotoIds, setPhotoSelected} = useContext(AppContext);
  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={state.favorite.includes(item.id)} onClick={() => updateToFavPhotoIds(item)}/>
      <img src={item.urls.regular} alt="photo" className="photo-list__image" onClick={()=>setPhotoSelected(item)}/>
      <div className="photo-list__user-details">
        <img src={item.user.profile} alt="profile picture" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <span>{item.user.username}</span>
          <br></br>
          <span className="photo-list__user-location">{item.location.city}, {item.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
