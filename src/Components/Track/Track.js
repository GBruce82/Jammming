import React from 'react';
import './track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
      if(this.props.isRemoval)
        return (<a className="Track-action" onClick={this.removeTrack}>-</a>);
      else
        return (<a className="Track-action" onClick={this.addTrack}>+</a>);
    }

//this method may need an event (e) added as a property;
  addTrack(e) {
    this.props.onAdd(this.props.track);
  }

//this method may need an event (e) added as a property;
  removeTrack(e) {
    console.log(`Removing ${this.props.track.name} from Playlist.`);
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>this.props.track.name</h3>
          <p>this.props.track.artist | this.props.track.album</p>
        </div>
          {this.renderAction()}
      </div>
    );
  }
}

export default Track;
