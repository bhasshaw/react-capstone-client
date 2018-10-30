import React from 'react';
import {GOOGLE_API_KEY} from '../config';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
      return (
        <Map google={this.props.google} zoom={14}>
   
          {/* <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Hello</h1>
              </div>
          </InfoWindow> */}
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
  })(MapContainer)