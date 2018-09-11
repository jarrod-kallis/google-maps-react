import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from 'react-google-maps';
// import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

class Map extends React.Component {
  state = {};

  componentDidMount() {
    const bounds = new window.google.maps.LatLngBounds();

    if (this.props.polygon) {
      this.props.polygon.map(p1 =>
        p1.map(p => bounds.extend(new window.google.maps.LatLng(p.lat, p.lng)))
      );
    }

    this.refs.map.fitBounds(bounds);
  }

  render() {
    // const heatmap = this.props.heatmap ? this.props.heatmap.map(point => new window.google.maps.LatLng(point.lat, point.lng)) : [];
    const polygons = this.props.polygon ? this.props.polygon.map(p =>
      <Polygon key={Math.random()}
        paths={p}
        options={{ fillColor: "#FF0000", fillOpacity: 0.2, strokeColor: "blue", strokeWeight: 0.1 }}
        onClick={() => console.log('hi')}
      />) : [];

    return (
      <GoogleMap
        ref="map"
      // defaultZoom={8}
      // defaultCenter={{ lat: 25.774, lng: -80.19 }}
      >
        {this.props.isMarkerShown && (
          <Marker position={{ lng: 25.37236506583633, lat: -26.46498263403906 }} />
        )}
        {polygons}
        {/* {this.props.polygon && <Polygon paths={this.props.polygon} />} */}
        {/* {heatmap && <HeatmapLayer data={heatmap} />} */}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));
