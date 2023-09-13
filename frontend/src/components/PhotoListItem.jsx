import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({image, profile, username, city, country, setFavorite}) => {
  const [select, setSelect] = useState(false);

  const handleFavorite = () => {
    setFavorite();
    setSelect(select => !select);
  }
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={select} onClick={()=>handleFavorite()}/>
      <img src={image} alt="photo" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={profile} alt="profile picture" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <br></br>
          <span className="photo-list__user-location">{city}, {country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
