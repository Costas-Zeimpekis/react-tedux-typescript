//Types and Interfaces
import { ActionType, action } from 'typesafe-actions';
export type ActionsState = ActionType<typeof action>;

export interface MySongs {
  title: string;
  duration: string;
}

export type typeInitialStateSongs = MySongs[];

export interface State {
  songs: MySongs[];
  selectedSong: ReducerSongReducer;
}

export type ActionSelecteSong = { type: string; payload: string };
export type ReducerSongReducer = (
  value: string,
  value2: ActionSelecteSong
) => string;

export type Dispatch = (action: Action) => void;
// export type ActionA;

export type Action = {
  type: string;
  payload: string;
};

export interface StateFromProps {
  (value: State): {
    songs: MySongs[];
  };
}

export interface DispatchFromProps {
  (dispatch: Dispatch): { setSelectedSong: () => void };
  (dispatch: Dispatch): { getSongs: () => void };
}

export interface MyProps {
  songs: MySongs[];
  setSelectedSong: () => void;
  getPosts: () => void;
}
