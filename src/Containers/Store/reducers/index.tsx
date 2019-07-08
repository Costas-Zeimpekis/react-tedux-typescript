import { SONG_SELECTED } from '../actions/actions';
import { combineReducers } from 'redux';

const initialState = [];

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:00' },
    { title: 'Macarena', duration: '50' },
    { title: 'Nothing else', duration: 60 }
  ];
};

const selectedSongReducer = (
  selectedSong = null,
  action: { type: string; payload: any }
) => {
  if (action.type === SONG_SELECTED) {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
