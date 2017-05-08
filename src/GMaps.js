import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      ready: false,
      center: {},
      currentLocation: {},
      map: {}
    }
    
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.recenterMap = this.recenterMap.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.item) {
      this.state.map.panTo({lat: parseFloat(this.props.item.lat), lng: parseFloat(this.props.item.lng)})
      if (prevState.selectedPlace !== this.state.selectedPlace) {
        this.recenterMap();
      }
    }
  }

  recenterMap() {

  }

  fetchPlaces(mapProps, map) {
    this.setState({map: map});
  }

  onMarkerClick(props, marker, e) {
    props.map.panTo(marker.getPosition())
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    });
  }
  
  onMapClicked(props) {
    console.log(props);
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map google={this.props.google} 
        onClick={this.onMapClicked} 
        onReady={this.fetchPlaces}
        centerAroundCurrentLocation={true}
        initialCenter={{
            lat: 34.4,
            lng: -118
          }}
        className={'gmaps'}>
        <Marker onClick={this.onMarkerClick} name={this.props.item.location} 
          position={{lat: this.props.item.lat, lng: this.props.item.lng }} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}>
          <div>
            <p><strong>{this.props.item.address}</strong></p>
            <p>Between {this.props.item.cross}</p>
            <p>Phone: {this.props.item.phone} - Fax: {this.props.item.fax}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCpM7BH1jg0xcJm_6kW_e7HhZwUrrak_9A',
  version: '3'
})(Container)