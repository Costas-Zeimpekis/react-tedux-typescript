import { SONG_SELECTED } from './actions';
import { action, createAction } from 'typesafe-actions';

//Action Creator
// export const selectSong = (song: string) => {
//   return {
//     type: SONG_SELECTED,
//     payload: song
//   };
// };

export const selectSong = createAction(SONG_SELECTED, action => {
  // Note: "action" callback does not need "type" parameter
  return (song: string) => action({ payload: song });
});

// export const pageRequest = createAction(
//   'TRANSACTION_PAGE_REQUEST',
//   resolve => (page: number) => ({
//     type: 'TRANSACTION_PAGE_REQUEST',
//     payload: { page }
//   })
// );
