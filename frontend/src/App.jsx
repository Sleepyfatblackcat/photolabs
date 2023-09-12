import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from "./components/TopicList";

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
  return (
    <div className="App">
      <TopicList/>
      <PhotoList/>
    </div>
  );
};

export default App;
