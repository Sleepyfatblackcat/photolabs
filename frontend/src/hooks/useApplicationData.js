import {useState} from "react";

const useApplicationData = () => {
  const [state, setState] = useState({
    favorite: [],
    modal: {visible: false, photo: {}}
  });
  
  const updateToFavPhotoIds = (item) => {
    if (state.favorite.includes(item.id)) {
      setState(prev => ({
        ...prev,
        favorite: prev.favorite.filter(x => x != item.id)
      }));
    } else {
      setState(prev => ({
        ...prev,
        favorite: [...prev.favorite, item.id]
      }));
    }
  }

  const setPhotoSelected = (item) => {
    setState(prev => ({
      ...prev,
      modal: {visible: true, photo: item}
    }));
  }

  const onClosePhotoDetailsModal = () => {
    setState(prev => ({
      ...prev,
      modal: {visible: false, photo: null}
    }));
  }

  return {
    state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal
  }
}

export default useApplicationData;