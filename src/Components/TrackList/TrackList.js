import React from 'react';
import Track from '../Track/Track.js';

//  Again, does it matter that Track is imported before TrackList.css?
import './TrackList.css';

//  Instructions in Assessment 2 say to hard code three tracks
//  but without any info to do so?

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {
            this.props.tracks.map(track => <Track track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>)
          }
      </div>
    );
  }
}

export default TrackList;

// Instructions for this.props.tracks.map: In the TrackList component, use the
// .map() method to render each track in the tracks property.
//  Set the key attribute to track.id.

// HINT: Inside the TrackList component's render method, use .map() on
// this.props.tracks to render each track in the list.  This will require you
// to pass the current track as an attribute called track to the Track component.
