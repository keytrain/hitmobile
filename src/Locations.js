import React from 'react';
import GMaps from './GMaps'

class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: '',
        }

        this.handleLocation = this.handleLocation.bind(this);
    }

    handleLocation(e) {
        let area = e.currentTarget.attributes['data-area'].value;
        let loc = e.currentTarget.attributes['data-loc'].value;

        this.setState({selection: window.data.stores[area][loc]});
    }

    render() {
      let data = window.data;
      return (
        <div>
          <div className='section locations'>
            <div className='cover'></div>
            <div className='content'>
              <h1>LOCATIONS</h1>
            </div>
          </div>
          <div className='section stores' id='find'>
            <div className='content'>
              <div className='find'>
                <h2>LOS ANGELES</h2>
                {data.stores.la.map((e, index) => (
                  <div key={index} className={'locItem ' + (this.state.selection.location===e.location ? 'locItemActive':'')} data-area='la' data-loc={index} onClick={this.handleLocation}>{e.location}</div>
                ))}
                <h2>SAN DIEGO</h2>
                {data.stores.sd.map((e, index) => (
                  <div key={index} className={'locItem ' + (this.state.selection.location===e.location ? 'locItemActive':'')} data-area='sd' data-loc={index} onClick={this.handleLocation}>{e.location}</div>
                ))}
              </div>
              <div className='gmaps-container'>
                <GMaps item={this.state.selection} />
              </div>
            </div>
          </div>
        </div>
      );
    }

}

export default Locations;