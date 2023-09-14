import { useEffect, useReducer } from "react";
import axios from "axios";

const ACTIONS = {
  FAV_PHOTO: 'FAV_PHOTO',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const useApplicationData = () => {
  const requests = [axios.get('/api/photos'), axios.get('/api/topics')];

  useEffect(() => {
    Promise.all(requests)
    .then(res => {
      const photos = res[0].data;
      const topics = res[1].data;
      dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: photos});
      dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: topics});
    })
  }, []);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return { ...state, photoData: action.payload };

      case ACTIONS.FAV_PHOTO:
        if (state.favorite.includes(action.payload)) {
          return {
            ...state,
            favorite: state.favorite.filter(x => x != action.payload)
          };
        } else {
          return{
            ...state,
            favorite: [...state.favorite, action.payload]
          };
        };
      
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          modal: {visible: true, photo: action.payload}
        };

      case ACTIONS.CLOSE_MODAL:
        return {
          ...state,
          modal: {visible: false, photo: null}
        };

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
      }
  }

  const defaultState = {
    favorite: [],
    modal: {visible: false, photo: {}},
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const updateToFavPhotoIds = (item) => {
    dispatch({type: ACTIONS.FAV_PHOTO, payload: item.id});
  };

  const setPhotoSelected = (item) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: item});
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  const getPhotosByTopic = (topic) => {
    axios.get(`/api/topics/photos/${topic}`)
    .then(res => {
      const photos = res.data;
      dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: photos});
    })
  };

  return {
    state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, getPhotosByTopic
  };
};

export default useApplicationData;