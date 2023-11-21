import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
/* const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
}; */
function GoogleMapsComp({ center }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <div id="map-wrapper">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default GoogleMapsComp;
