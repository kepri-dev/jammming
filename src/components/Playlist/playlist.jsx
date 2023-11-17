import React from 'react';
import TrackList from '../TrackList/trackList';

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <trackList/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;

