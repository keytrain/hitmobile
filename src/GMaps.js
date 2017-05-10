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
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.item !== this.props.item) {
      this.state.map.panTo({lat: parseFloat(this.props.item.lat), lng: parseFloat(this.props.item.lng)})
      this.state.map.setZoom(17);
    }
  }

  fetchPlaces(mapProps, map) {
    this.setState({map: map});
  }

  onMarkerClick(props, marker, e) {
    let area = props['data-area'];
    let loc = props['data-loc'];
    
    props.map.panTo(marker.getPosition())
    this.setState({
      selectedPlace: window.data.stores[area][loc],
      activeMarker: marker,
      showInfoWindow: true
    });
  }
  
  onMapClicked(props) {
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
        zoom={9}
        initialCenter={{
            lat: 33.4,
            lng: -117.8
          }}
        className={'gmaps'}>
          {/*<Marker onClick={this.onMarkerClick} name={this.props.item.location} position={{lat: this.props.item.lat, lng: this.props.item.lng }} />*/}

        {window.data.stores.lanorth.map((e, index) => (
          <Marker key={index} onClick={this.onMarkerClick} data-loc={index} data-area='lanorth' name={e.location} position={{lat: e.lat, lng: e.lng }} />
        ))}
        {window.data.stores.lasouth.map((e, index) => (
          <Marker key={index} onClick={this.onMarkerClick} data-loc={index} data-area='lasouth' name={e.location} position={{lat: e.lat, lng: e.lng }} />
        ))}
        {window.data.stores.sandiego.map((e, index) => (
          <Marker  key={index} onClick={this.onMarkerClick} data-loc={index} data-area='sandiego' name={e.location} position={{lat: e.lat, lng: e.lng }} />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}>
          <div>
            <pre><strong>{this.state.selectedPlace.address}</strong></pre>
            <p>{'Between ' + this.state.selectedPlace.cross}</p>
            <p><strong>Phone:</strong> {this.state.selectedPlace.phone}<br />
            <strong>Fax:</strong> {this.state.selectedPlace.fax}</p>
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