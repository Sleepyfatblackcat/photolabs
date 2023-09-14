import React from 'react';

import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, getPhotosByTopic} = useApplicationData();
  return (
    <div className="App">
      <HomeRoute 
        state={state}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setPhotoSelected={setPhotoSelected}
        getPhotosByTopic={getPhotosByTopic}
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
