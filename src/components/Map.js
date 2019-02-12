import React from 'react'
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {

  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: 34.0522,
      longitude: -118.2437,
      zoom: 9
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={ process.env.REACT_APP_MAPBOX_ACCESS_TOKEN }
      />
    );
  }
}

export default Map;