import React, { Component } from 'react';
import { selectSong } from '../Store/actions';
import { connect } from 'react-redux';
import {
  Dispatch,
  StateFromProps,
  DispatchFromProps,
  MySongs,
  MyProps,
  State
} from '../../Types';

class SongList extends Component<MyProps> {
  render() {
    const songs = this.props.songs;

    if (songs) {
      let songList = songs.map(song => (
        <li key={song.title}>
          title: {song.title} duration: {song.duration}
        </li>
      ));

      return (
        <div>
          <ul>{songList}</ul>
        </div>
      );
    }
  }
}

const mapStateToProps: StateFromProps = (
  state: State
): { songs: MySongs[] } => {
  return {
    songs: state.songs
  };
};

const mapDispatchToProps: DispatchFromProps = (dispatch: Dispatch) => {
  return {
    setSelectedSong: () => dispatch(selectSong('Nothing else'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
