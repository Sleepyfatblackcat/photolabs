import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({state}) => {
  return (
    <ul className="photo-list">
      {state.photoData.map((item) => (
        <div key={item.id}>
          <PhotoListItem item={item}/>
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
