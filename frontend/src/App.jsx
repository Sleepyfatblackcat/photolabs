import React, { useState } from 'react';

import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';

// const addPhotosToList = (photos) => {
//   const list = new Array(3);
//   for (let x = 0; x < photos; x++) {
//     list.push (
//       <PhotoListItem key={sampleDataForPhotoListItem.id}
//                      image={sampleDataForPhotoListItem.imageSource}
//                      profile={sampleDataForPhotoListItem.profile}
//                      username={sampleDataForPhotoListItem.username}
//                      city={sampleDataForPhotoListItem.location.city}
//                      country={sampleDataForPhotoListItem.location.country}
//       />
//     );
//   }
//   return list;
// }

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favorite, setFavorite] = useState([]);
  const [modal, setModal] = useState({visible: false, photo: {}});
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favorite={favorite} setFavorite={setFavorite} setModal={setModal}/>
      {modal.visible && <PhotoDetailsModal modal={modal} setModal={setModal} favorite={favorite} setFavorite={setFavorite}/>}
    </div>
  );
};

export default App;
