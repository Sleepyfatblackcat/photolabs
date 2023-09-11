import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const [select, setSelect] = useState(false);
  return (
    <div key={props.key} className="photo-list__item">
      <PhotoFavButton selected={select} displayAlert={select} onClick={()=>setSelect(select => !select)}/>
      <img src={props.image} alt="photo" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.profile} alt="profile picture" className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <span>{props.username}</span>
          <br></br>
          <span className="photo-list__user-location">{props.city}, {props.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
