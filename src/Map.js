import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from 'react-google-maps';

class Map extends React.Component {
  state = {};

  componentDidMount() {
    const bounds = new window.google.maps.LatLngBounds();
    this.props.polygon.map(p =>
      bounds.extend(new window.google.maps.LatLng(p.lat, p.lng))
    );
    this.refs.map.fitBounds(bounds);
  }

  render() {
    return (
      <GoogleMap
        ref="map"
        // defaultZoom={8}
        // defaultCenter={{ lat: 25.774, lng: -80.19 }}
      >
        {this.props.isMarkerShown && (
          <Marker position={{ lat: 25.774, lng: -80.19 }} />
        )}
        {this.props.polygon && <Polygon paths={this.props.polygon} />}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));
