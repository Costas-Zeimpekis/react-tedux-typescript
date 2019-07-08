export type Dispatch = (action: Action) => void;
export type ActionA = {
  type: 'SONG_SELECTED';
};
export type Action = ActionA;

export interface StateFromProps {
  (value: State): {
    songs: MySongs[];
  };
}

export interface DispatchFromProps {
  (dispatch: Dispatch): { setSelectedSong: () => void };
}

export interface MySongs {
  title: string;
  duration: number;
}

export interface MyProps {
  songs: MySongs[];
  setSelectedSong: () => void;
}

export interface State {
  songs: MySongs[];
  selectedSong: string;
}
