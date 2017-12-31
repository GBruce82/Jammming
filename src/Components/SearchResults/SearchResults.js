import React from 'react';
import TrackList from './Components/TrackList/TrackList.js';
//does it matter that TrackList is before SearchResults?
import './SearchResults.css';

class SearchResults extends React.component {
    render() {
      return (
        <div className="SearchResults">
          <h2>Results</h2>
          <TrackList tracks={this.props.searchResults} />
        </div>
      );
    }
  }
}

export default SearchResults;
