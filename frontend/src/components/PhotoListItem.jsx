import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({item, setModal, favorite, handleFavorite}) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={favorite.includes(item.id)} onClick={() => handleFavorite(item)}/>
      <img src={item.urls.regular} alt="photo" className="photo-list__image" onClick={()=>setModal({visible: true, photo: item})}/>
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
