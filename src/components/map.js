import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const styles = {
  container: {
    height: 400
  }
};
function MapContainer(props) {
  const { google } = props;
  return (
    <div id="map" style={styles.container}>
      {/*  29.839496642 -81.26999892 */}
      <Map
        google={google}
        zoom={13}
        initialCenter={{ lat: 29.839496642, lng: "-81.26999892" }}
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmP8DMo4zq8HXROwfyxmEVjvmdKY3rWsE"
})(MapContainer);
