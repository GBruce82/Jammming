import React from 'react';
import Track from './Component/Track/Track.js';

//  Again, does it matter that Track is imported before TrackList.css?
import './TrackList.css';

//  Instructions in Assessment 2 say to hard code three tracks
//  but without any info to do so?

class TrackList extends React.Component {
  render() {
    Return (
      <div className="TrackList">
// Instructions: In the TrackList component, use the .map() method to render each
// track in the tracks property.  Set the key attribute to track.id.
          {
            this.props.tracks.map(track => <Track track={track} />)
// HINT: Inside the TrackList component's render method, use .map() on
// this.props.tracks to render each track in the list.  This will require you
// to pass the current track as an attribute called track to the Track component.
          }
      </div>
    );
  }
}

export default TrackList;
