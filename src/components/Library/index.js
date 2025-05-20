import React from "react";
import Song from "../Song";

const Library = ({ songs }) =>  {
    return(
        <article className="library">
            <h2>Libreria</h2>
                {songs.length === 0
                    ? <i>nada por aqui</i>
                    : songs.map(song => (
                        <Song
                        key={song.id}
                        {...song}
                        />
                    ))
                }
        </article>
    )
}
export default Library;