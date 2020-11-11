import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
function SimpleMap({ longitude, latitude }) {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '20vh', width: '50%', margin: '20px auto 0 auto' }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={latitude}
          lng={longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
 
export default SimpleMap;