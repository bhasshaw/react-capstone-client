import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export class MapContainer extends React.Component {
    render() {
      return (
        <Map google={this.props.google} zoom={14}>
   
          {/* <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
          
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer)