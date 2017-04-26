import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Container extends Component {
  render() {
    console.log(this.props.item);
    return (
      <Map google={this.props.google} className={'gmaps'}>
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCpM7BH1jg0xcJm_6kW_e7HhZwUrrak_9A',
  version: '3'
})(Container)