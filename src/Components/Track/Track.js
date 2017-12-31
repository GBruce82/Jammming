import React from 'react';
import './track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

renderAction() {
    if(this.props.isRemoval)
      return (<a className="Track-action" onClick={this.addTrack} > <+</a>);
  }

//this method may need an event (e) added as a property;
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>this.props.track.name</h3>
          <p>this.props.track.artist | this.props.track.album</p>
        </div>

      </div>
    );
  }
}

export default Track;
