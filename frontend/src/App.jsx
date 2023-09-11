import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const addPhotosToList = (photos) => {
  const list = new Array(3);
  for (let x = 0; x < photos; x++) {
    list.push (
      <PhotoListItem key={sampleDataForPhotoListItem.id}
                     image={sampleDataForPhotoListItem.imageSource}
                     profile={sampleDataForPhotoListItem.profile}
                     username={sampleDataForPhotoListItem.username}
                     city={sampleDataForPhotoListItem.location.city}
                     country={sampleDataForPhotoListItem.location.country}
      />
    );
  }
  return list;
}

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {addPhotosToList(3)}
    </div>
  );
};

export default App;
