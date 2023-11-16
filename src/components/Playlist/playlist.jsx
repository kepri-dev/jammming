import React from 'react';
import trackList from '../TrackList/trackList';

function playlist() {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <trackList/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default playlist;

