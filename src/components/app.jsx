import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';
import Marker from './marker.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList selectedFlat={this.state.selectedFlat} flats={this.state.flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact center={ this.center() } defaultZoom={14}>
            <div className="marker">
              <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
            </div>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
