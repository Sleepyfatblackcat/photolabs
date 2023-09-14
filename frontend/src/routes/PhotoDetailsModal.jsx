import React, {useContext} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import {AppContext} from '../App';

const PhotoDetailsModal = () => {
  const {state, updateToFavPhotoIds, onClosePhotoDetailsModal} = useContext(AppContext);

  const photos = {};
  photos.photoData = Object.keys(state.modal.photo.similar_photos).map((key) => state.modal.photo.similar_photos[key]);
  photos.favorite = state.favorite;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => onClosePhotoDetailsModal()}/>
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton selected={state.favorite.includes(state.modal.photo.id)} onClick={() => updateToFavPhotoIds(state.modal.photo)}/>
        <img src={state.modal.photo.urls.full} alt="photo" className="photo-details-modal__image"/>
        <div className="photo-list__user-details">
          <img src={state.modal.photo.user.profile} alt="profile picture" className="photo-list__user-profile"/>
          <div className="photo-list__user-info">
            <span>{state.modal.photo.user.username}</span>
            <br></br>
            <span className="photo-list__user-location">{state.modal.photo.location.city}, {state.modal.photo.location.country}</span>
          </div>
        </div>
        {photos.length !== 0 && <div className="photo-details-modal__header">
          <span>Similar Photos</span>
        </div>}
        <div className="photo-details-photo__list">
          <PhotoList state={photos}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;