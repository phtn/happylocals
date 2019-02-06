import React from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
// import Blue from '../assets/marker.svg'
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
        zoom={12}
        initialCenter={{ lat: 29.8196766, lng: "-81.2861916" }}
      >

        <Marker 
          title={'Salt Life'}
          position={{lat: 29.8578205, lng: -81.2696972}}
        />

        <Marker 
          title={'Tides Oyster Co.'}
          position={{lat: 29.8471356, lng: -81.269786}}
        />

        <Marker
          name={'Harvest & Reel'}
          position={{lat: 29.8496766, lng: '-81.2761916'}} 
        >
          <InfoWindow
            visible={true}
            name={'Center'}
            // draggable={true}
          >
            <p>Center</p>
          </InfoWindow>
        </Marker>

          

        {/* <Marker
          name={'Your position'}
          position={{lat: 29.839496642, lng: -81.26999892}}
          icon={{
            url: Blue,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)
          }}>

            <InfoWindow
              visible={true}
              title={'Center'}
              draggable={true}
            >
              <p>Center</p>
            </InfoWindow>
          </Marker> */}

      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmP8DMo4zq8HXROwfyxmEVjvmdKY3rWsE"
})(MapContainer);
