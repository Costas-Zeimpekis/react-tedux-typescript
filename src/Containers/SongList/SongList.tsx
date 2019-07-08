import React, { Component } from 'react';
import { selectSong, getSongs } from '../Store/actions';
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
    this.props.getPosts();
    const songs = this.props.songs;
    let songList: any = <li>Hahahah</li>;

    if (songs) {
      songList = songs.map(song => (
        <li key={song.title}>
          title: {song.title} duration: {song.duration}
        </li>
      ));
    }

    return (
      <div>
        <ul>{songList}</ul>
      </div>
    );
  }
}

const mapStateToProps: StateFromProps = (
  state: State
): { songs: MySongs[] } => {
  return {
    songs: state.songs
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSelectedSong: () => dispatch(selectSong('Nothing else')),
    getPosts: () => dispatch(getSongs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
