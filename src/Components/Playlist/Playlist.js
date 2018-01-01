import React from 'react';
import TrackList from '../TrackList/TrackList.js';
//Does it matter if TrackList is first or Playlist?
import './Playlist.css';

//need to export this class?  Not in the instructions (yet?)
export class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}/>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
