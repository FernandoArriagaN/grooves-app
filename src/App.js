import React, { Component, useEffect, useState } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import SearchResults from './components/SearchResults';
import './components/Header/styles.css'
import './components/SearchResults/styles.css';
import './components/Song/styles.css';
import './components/Library/styles.css'
import Library from './components/Library';
import Only from './assets/onlyCoverAlbum.jpg';
import Growlers from './assets/theGrowlersCoverAlbum.jpg';
import GlassBeams from './assets/glassBeamCoverAlbum.jpg';


function App ()  {
  
    const [searchResults, setSearchResults] = useState ([
      { title: 'Only', artist: 'Nin Inch Nails', duration: '3:45', id:'1', image: Only },
      { title: 'I´ll Be Around', artist: 'The Growlers', duration: '4:10', id:'2', image: Growlers },
      { title: 'Mahal', artist: 'Glass Beam', duration: '2:58', id:'3', image: GlassBeams}
    ]); 

    const [library, setLibrary] = useState ([]);
      
    useEffect(() => {
      console.log('La biblioteca se actualizado:');
    }, [library]);


    const handleAddToLibrary = song => {
      setLibrary(prev => [...prev, song]);
    }

    
    
    return (
      <main className="App">
        <Header />
        
        <SearchResults songs={searchResults}
        onAddToLibrary={handleAddToLibrary} />
        <Library songs={library} />
      </main>
    );
  
}

export default App;


