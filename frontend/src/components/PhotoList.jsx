import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, favorite, setFavorite, setModal}) => {
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <div key={item.id}>
          <PhotoListItem
            image={item.urls.regular}
            profile={item.user.profile}
            username={item.user.username}
            city={item.location.city}
            country={item.location.country}
            setFavorite={() => setFavorite(prev => [...favorite, item.id])}
            setModal={setModal}
          />
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
