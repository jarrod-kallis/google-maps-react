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
    api.map.points.get().then(points => this.setState({ points }));
  }

  render() {
    return (
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100vh` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100vh` }} />}
          polygon={this.state.points}
        />
      </div>
    );
  }
}

export default App;
