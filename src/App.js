import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('app cargada y lista');
  }

  render() {
    const songs = [
      { title: 'Only', artist: 'Nin Inch Nails', duration: '3:45' },
      { title: 'I´ll Be Around', artist: 'The Growlers', duration: '4:10' },
      { title: 'Mahal', artist: 'Glass Beam', duration: '2:58' }
    ];

    return (
      <div className="App">
        <Header />
        <div className="song-list">
          {songs.map((song, index) => (
            <Song
              key={index}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
























