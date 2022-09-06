import React  from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import "./Map.css"

export default class MapContainer extends React.Component {
    render() {
      return (
        // <Map google={this.props.google} zoom={14}>
  
        //   <Marker onClick={this.onMarkerClick}
        //           name={'Current location'} />
  
        //   <InfoWindow onClose={this.onInfoWindowClose}>
        //       <div>
        //         <h1>{this.state.selectedPlace.name}</h1>
        //       </div>
        //   </InfoWindow>
        // </Map>
        <p>Google Maps</p>
      );
    }
  }
  
//   export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//   })(MapContainer)