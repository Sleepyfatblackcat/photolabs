import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({state, updateToFavPhotoIds, setPhotoSelected}) => {
  return (
    <ul className="photo-list">
      {state.photoData.map((item) => (
        <div key={item.id}>
          <PhotoListItem
            item={item}
            state={state}
            updateToFavPhotoIds={updateToFavPhotoIds}
            setPhotoSelected={setPhotoSelected}
          />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
