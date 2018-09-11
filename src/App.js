import React, { Component } from 'react';

import Map from './Map';
import api from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      points: []
    };
  }

  componentDidMount() {
    api.map.points.get().then(points => {
      this.setState({ points })
    });
  }

  render() {
    return (
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyByWkAe9UopNpFK6TPEEJ4ak4fMtS7IZD8&amp;v=3.exp&amp;libraries=geometry,drawing,places,visualization"
          loadingElement={<div style={{ height: `100vh` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100vh` }} />}
          isMarkerShown
          polygon={this.state.points}
        // heatmap={this.state.points}
        />
      </div>
    );
  }
}

export default App;
