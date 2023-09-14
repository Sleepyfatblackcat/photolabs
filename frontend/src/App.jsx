import React, {createContext} from 'react';

import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

export const AppContext = createContext();

const App = () => {
  let context = useApplicationData();
  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <HomeRoute/>
        {!!context.state.modal.visible && <PhotoDetailsModal/>}
      </div>
    </AppContext.Provider>
  );
};

export default App;

