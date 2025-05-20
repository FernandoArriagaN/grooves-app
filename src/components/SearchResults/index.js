
import React from 'react';
import Song from '../Song';


const SearchResults = ({ songs, onAddToLibrary }) => {
  return (
    <section className='searchResults'>
      <h2>Resultados de busqueda</h2>
      {songs.map(song => (
        <Song
        key={song.id}
        {...song}
        onAdd={onAddToLibrary }
        />
      ))}
                    
    </section>
  );
};

export default SearchResults;