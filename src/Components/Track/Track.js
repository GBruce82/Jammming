import React from 'react';
import './track.css';

//  will need to convert this to a constructor at some time!
function renderAction(props) {
  if(props.isRemoval)
    return `-`;
  else
    return `+`;
}

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>this.props.track.name</h3>
          <p>this.props.track.artist | this.props.track.album</p>
        </div>
        <a className="Track-action"><!-- + or - will go here --></a>
      </div>
    );
  }
}

export default Track;
