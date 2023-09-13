import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({modal, setModal, favorite, setFavorite}) => {
  const photos = Object.keys(modal.photo.similar_photos).map((key) => modal.photo.similar_photos[key]);
  console.log(photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => setModal({visible: false})}/>
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton/>
        <img src={modal.photo.urls.full} alt="photo" className="photo-details-modal__image"/>
        <div className="photo-list__user-details">
          <img src={modal.photo.user.profile} alt="profile picture" className="photo-list__user-profile"/>
          <div className="photo-list__user-info">
            <span>{modal.photo.user.username}</span>
            <br></br>
            <span className="photo-list__user-location">{modal.photo.location.city}, {modal.photo.location.country}</span>
          </div>
        </div>
        <div className="photo-details-modal__header">
          <span>Similar Photos</span>
        </div>
        <PhotoList
          photos={photos}
          favorite={favorite}
          setFavorite={setFavorite}
          setModal={setModal} 
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
