import React, { useState } from 'react';

import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';

import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal} = useApplicationData();
  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
      />
      {state.modal.visible && <PhotoDetailsModal 
                          state={state}
                          updateToFavPhotoIds={updateToFavPhotoIds}
                          setPhotoSelected={setPhotoSelected}
                          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
                        />
      }
    </div>
  );
};

export default App;
