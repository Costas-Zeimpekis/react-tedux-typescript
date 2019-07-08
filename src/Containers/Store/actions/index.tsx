import { SONG_SELECTED } from './actions';
import { action, createAction } from 'typesafe-actions';
import axios from 'axios';

//Action Creator
export const selectSong = (song: string) => {
  return {
    type: SONG_SELECTED,
    payload: song
  };
};

// export const selectSong = createAction(SONG_SELECTED, action => {
//   // Note: "action" callback does not need "type" parameter
//   return (song: string) => action({ payload: song });
// });

export const setSongs = (posts: any) => {
  console.log(posts);
  return { type: 'HTTP', payload: posts };
};

export const getSongs = () => {
  return (dispatch: any) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => setSongs(res.data));
  };
};

// export const pageRequest = createAction(
//   'TRANSACTION_PAGE_REQUEST',
//   resolve => (page: number) => ({
//     type: 'TRANSACTION_PAGE_REQUEST',
//     payload: { page }
//   })
// );
