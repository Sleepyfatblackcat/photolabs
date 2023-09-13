import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, setModal, favorite, handleFavorite}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <div key={item.id}>
          <PhotoListItem
            item={item}
            setModal={setModal}
            favorite={favorite}
            handleFavorite={handleFavorite}
          />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
