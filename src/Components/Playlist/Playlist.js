import React from 'react';
import TrackList from '../TrackList/TrackList.js';
//Does it matter if TrackList is first or Playlist?
import './Playlist.css';

//need to export this class?  Not in the instructions (yet?)
class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue = {'New Playlist'}/>
        //<TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
