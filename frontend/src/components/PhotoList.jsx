import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, favorite, setFavorite, setModal}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <div key={item.id}>
          <PhotoListItem
            item={item}
            setFavorite={() => setFavorite(prev => [...favorite, item.id])}
            setModal={setModal}
          />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
