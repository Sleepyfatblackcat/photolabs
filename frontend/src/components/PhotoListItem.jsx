import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div key={props.key}>
      <img src={props.image} alt="photo"/>
      <img src={props.profile} alt="profile picture"/>
      <p>{props.username}</p>
      <p>{props.city}, {props.country}</p>
    </div>
  )
};

export default PhotoListItem;
