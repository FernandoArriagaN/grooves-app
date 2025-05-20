import React from "react";

const Song = ({image, title, artist, duration, id, onAdd}) => {

     
    return (
        <section className="songList">  
            <article className="infoSong">
                <img alt="img album"  src={image} />
                <h2>{title} </h2>
                <p>{artist} </p>
                <p>{duration} </p>
                <p>{id}</p>
                {onAdd && ( 
                    <button onClick={() => 
                            onAdd({image, title, artist, duration, id, })}>
                                Add to Library
                    </button>
                )}
            </article> 
            
        </section>
    )
}

export default Song;

