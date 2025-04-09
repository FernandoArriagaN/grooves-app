import React, { Component } from 'react';


class Song extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, artist, duration } = this.props;
    return (
      <section className="song-card">
        <img src='' alt='img del album'></img>
        <h2>{title}</h2>
        <p><strong>{artist}</strong></p>
        <p>{duration} </p>
      </section>
    );
  }
}

export default Song;



















