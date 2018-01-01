import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: `Song Sung Blue`,
          artist: `Neil Diamond`,
          album: `Moods`
        }
      ],
      playlistName: ``,
      playlistTracks: [
        {
          name: ``,
          artist: ``,
          album: ``
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if(!this.state.playlistTracks.find(tr => tr.name === track.name))
    {
      let tempList = this.state.playlistTracks.slice();
      tempList.push(track);
      this.setState({playlistTracks: tempList});
    }
  }

  removeTrack(track) {
    let index = this.state.playlistTracks.indexOf(track);

    if(index >= 0) {
      let tempList = this.state.playlistTracks.slice();
      tempList.splice(index,1);
      this.setState({playlistTracks: tempList});
    }
    else
      console.log(`Track ${track.name} not found in Playlist. Add track or try another track.`);
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const savedList = this.state.playlistTracks.map(track => track.uri);
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar
            onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              isRemoval={false}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              isRemoval={true}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;