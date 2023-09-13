import React, { useState } from 'react';

import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

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
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <HomeRoute setModal={setModal}/>
      {modal && <PhotoDetailsModal setModal={setModal}/>}
    </div>
  );
};

export default App;
