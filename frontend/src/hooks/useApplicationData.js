import {useReducer} from "react";

const ACTIONS = {
  FAV_PHOTO: 'FAV_PHOTO',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

const useApplicationData = () => {
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO:
        if (state.favorite.includes(action.id)) {
          return {
            ...state,
            favorite: state.favorite.filter(x => x != action.id)
          }
        } else {
          return{
            ...state,
            favorite: [...state.favorite, action.id]
          }
        }
      
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          modal: {visible: true, photo: action.item}
        }

      case ACTIONS.CLOSE_MODAL:
        return {
          ...state,
          modal: {visible: false, photo: null}
        }

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
      }
  }

  const defaultState = {
    favorite: [],
    modal: {visible: false, photo: {}}
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const updateToFavPhotoIds = (item) => {
    dispatch({type: ACTIONS.FAV_PHOTO, id: item.id});
  }

  const setPhotoSelected = (item) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, item: item});
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  return {
    state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal
  }
}

export default useApplicationData;