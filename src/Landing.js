import React from 'react'
import GMaps from './GMaps'
import FontAwesome from 'react-fontawesome'
import Sizzler from './Sizzler'
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 0,
      quoteMax: window.data.content.testimonial.customer[this.props.lang].length,
      selection: '',
    };

    this.handleLocation = this.handleLocation.bind(this);
    this.handleQuote = this.handleQuote.bind(this);
  }

  handleQuote(e) {
    let value = e.currentTarget.attributes['data-dir'].value;
    if (value === 'left') {
      this.setState((prevState) => {
        if (prevState.quote - 1 < 0) {
          prevState.quote = prevState.quoteMax-1;
        }
        else {
          prevState.quote--;
        }
        return prevState;
      });
    }
    if (value === 'right') {
      this.setState((prevState) => {
        if (prevState.quote + 1 === prevState.quoteMax) {
          prevState.quote = 0;
        }
        else {
          prevState.quote++;
        }
      });
    }
  }

  handleLocation(e) {
    let area = e.currentTarget.attributes['data-area'].value;
    let loc = e.currentTarget.attributes['data-loc'].value;

    this.setState({selection: window.data.stores[area][loc]});
  }

  render() {
    return (
      <div>
        <Sizzler />
        <header>
          <div>
            <div className='sizzler'>
              <h1>Estamos Juntos</h1>
              <h3>Bridging Latino consumers and the wireless world.</h3>
              <br />
              <a href='#find' className='button button-outline'>Find a Store</a>
            </div>
          </div>
        </header>
        <div className='section intro'>
          <div className='content'>

            <div className='pitch'>
              <h2>At HITmobile, it's all about the customer experience.</h2>
              <p>The customer is the heart of every transaction and we treat each customer like family. <br />We will provide the Latino community a one stop shop for all their wireless needs.</p>
              <hr />
            </div>
            {/*<p>{data.content.intro[this.state.lang].about}</p>*/}

            <div className='support support-left'>
              <div className='support-img'></div>
              <div className='support-text'>
                <h3>Bilingual Support</h3>
                <p>In the store, on the phone and online, 100% bilingual sales and customer service hired directly from within the community, and 100% bilingual merchandising and marketing materials.</p>
              </div>
            </div>
            
          <div className='support support-right'>
              <div className='support-text'>
                <h3>A Complete Experience</h3>
                <p>Products that meet your needs like competitive international rates, flex pay products, and family plans.</p>
              </div>
              <div className='support-img'></div>
            </div>

            <div className='support support-left'>
              <div className='support-img'></div>
              <div className='support-text'>
                <h3>Full Setup</h3>
                <p>100% customer satisfaction by helping personalize your wireless solution with the right phone, the right plan, and the right way to pay. 100% set up including feature demonstrations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='section testimonial'>
          <div className='content'>
            <div className='pitch'>
            <h2>But don't take it from us.</h2>
            <p>Here's some feedback we got from our customers.</p>
            </div>
            <br /><br />
            <div className='quote-arrow-left'>
              <FontAwesome name='angle-left' className='quote-icon-arrow' data-dir='left' size='2x' onClick={this.handleQuote} />
            </div>
            <div className='quote'>
              <FontAwesome name='quote-left' className='quote-icon-left' size='2x' />
              <p>{window.data.content.testimonial.customer[this.props.lang][this.state.quote].text}</p>
              <FontAwesome name='quote-right' className='quote-icon-right' size='2x' />
            </div>
            <div className='quote-arrow-right'>
              <FontAwesome name='angle-right' className='quote-icon-arrow' data-dir='right' size='2x' onClick={this.handleQuote} />
            </div>
          </div>
        </div>
        <div className='section stores' id='find'>
          <div className='content'>
            <div className='find'>
              <h2>Find a store near you!</h2>
              <h3>La North</h3>
              {window.data.stores.lanorth.map((e, index) => (
                <div key={index} className={'locItem ' + (this.state.selection.location===e.location ? 'locItemActive':'')} data-area='lanorth' data-loc={index} onClick={this.handleLocation}>{e.location}</div>
              ))}
              <h3>La South</h3>
              {window.data.stores.lasouth.map((e, index) => (
                <div key={index} className={'locItem ' + (this.state.selection.location===e.location ? 'locItemActive':'')} data-area='lasouth' data-loc={index} onClick={this.handleLocation}>{e.location}</div>
              ))}
              <h3>San Diego</h3>
              {window.data.stores.sandiego.map((e, index) => (
                <div key={index} className={'locItem ' + (this.state.selection.location===e.location ? 'locItemActive':'')} data-area='sandiego' data-loc={index} onClick={this.handleLocation}>{e.location}</div>
              ))}
            </div>
            <div className='gmaps-container'>
              <GMaps item={this.state.selection} />
            </div>
          </div>
        </div>
        <div className='section contact'>
          <div className='content'>
            <div className='questionCTA'>
              <h2>Still have a question?</h2>
              <p>Call us at (877) 448 - 7711</p>
              <p>or</p>
              <p>Email us at <a href='emailto:customerfeedback@myhitmobile.com'>customerfeedback@myhitmobile.com</a></p>
            </div>
          </div>
        </div>
        <div className='section finalCTA'>
            <a href='/careers'>
              <div className='finalCTAbuttons jobButton'>
                <h3>Looking for a job?</h3>
                <p>Find opportunities <FontAwesome name='arrow-circle-right' className='CTAArrow' /></p>
              </div>
            </a>
            <a href='/business'>
              <div className='finalCTAbuttons busButton'>
                <h3>Are you a business?</h3>
                <p>Talk to us <FontAwesome name='arrow-circle-right' className='CTAArrow' /></p>
              </div>
            </a>
        </div>

      </div>
    );
  }
}

export default Landing;


