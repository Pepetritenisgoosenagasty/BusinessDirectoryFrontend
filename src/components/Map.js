import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapStyle from '../modules/Directories/components/mapStyle';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 5.55702,
  lng: -0.2064662
};

const defaultOptions = {
  scrollwheel: true,
  fullscreenControl: false,
  mapTypeControl: false,
  panControl: false,
  streetViewControl: false,
  zoomControl: "true",
  gestureHandling: "greedy",
  styles: MapStyle
};

const  MapComponent = ({children, apiKey, centerPin, zoom}) => {
  return (
    <LoadScript
    googleMapsApiKey={`${apiKey}`}
    >
      <GoogleMap
         mapContainerStyle={containerStyle}
         center={centerPin ?? center}
         zoom={zoom}
         options={defaultOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
         {children}
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;