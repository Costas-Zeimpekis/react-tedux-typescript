import { SONG_SELECTED } from '../actions/actions';
import { combineReducers } from 'redux';
import {
  typeInitialStateSongs,
  State,
  ActionSelecteSong,
  MySongs,
  ReducerSongReducer,
  ActionsState
} from '../../../Types';

const initialStateSongs: typeInitialStateSongs = [
  { title: 'No Scrubs', duration: '4:00' },
  { title: 'Macarena', duration: '5:00' },
  { title: 'Nothing else', duration: '6:00' }
];

const songsReducer = (
  stateSongs: typeInitialStateSongs = initialStateSongs,
  action: ActionSelecteSong
): MySongs[] => {
  return [...stateSongs];
};

const selectedSongReducer = (
  selectedSong: string = '',
  action: ActionSelecteSong
): string => {
  if (action.type === SONG_SELECTED) {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  stateSongs: songsReducer,
  selectedSong: selectedSongReducer
});

// export default songsReducer;
