import React from 'react';
import Styles from './App.module.css';
import SongList from '../Containers/SongList/SongList';

const App: React.FC = () => {
  return (
    <div className={Styles.App}>
      <SongList />
    </div>
  );
};

export default App;
