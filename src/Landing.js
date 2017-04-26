import React from 'react'
import GMaps from './GMaps'
import data from './data'
import FontAwesome from 'react-fontawesome'

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 0,
      quoteMax: data.content.testimonial.customer[this.props.lang].length
    };

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

  render() {
    return (
      <div>
        <header>
          <div>
            <div className='sizzler'>
              <h1>Estamos Juntos</h1>
              <p>Bridging Latino consumers and the wireless world.</p>
              <br />
              <a href='#find' className='button button-outline'>Find a Store</a>
            </div>
          </div>
        </header>
        <div className='section intro'>
          <div className='content'>

            <div className='pitch'>
              <h2>At HITmobile, it's all about the customer experience.</h2>
              <p>The customer is the heart of every transaction and we treat each customer like family. We will provide the Latino community a one stop shop for all their wireless needs.</p>
              <hr />
            </div>
            {/*<p>{data.content.intro[this.state.lang].about}</p>*/}

            <div className='support support-left'>
              <div className='support-img'><img src='' alt='' /></div>
              <div className='support-text'>
                <h2>Bilingual language support</h2>
                <p>In the store, on the phone and online, 100% bilingual sales and customer service hired directly from within the community, and 100% bilingual merchandising and marketing materials.</p>
              </div>
            </div>
            
          <div className='support support-right'>
              <div className='support-text'>
                <h2>Complete experience</h2>
                <p>Products that meet your needs like competitive international rates, flex pay products, and family plans.</p>
              </div>
              <div className='support-img'><img src='' alt='' /></div>
            </div>

            <div className='support support-left'>
              <div className='support-img'><img src='' alt='' /></div>
              <div className='support-text'>
                <h2>Full setup</h2>
                <p>100% customer satisfaction by helping personalize your wireless solution with the right phone, the right plan, and the right way to pay. 100% set up including feature demonstrations.</p>
              </div>
            </div>

          </div>
        </div>
        <div className='section testimonial'>
          <div className='content'>
            <h2>But don't take it from us.</h2>
            <div className='quote-arrow-left'>
              <FontAwesome name='angle-left' className='quote-icon-arrow' data-dir='left' size='2x' onClick={this.handleQuote} />
            </div>
            <div className='quote'>
              <FontAwesome name='quote-left' className='quote-icon-left' size='2x' />
              <p>{data.content.testimonial.customer[this.props.lang][this.state.quote].text}</p>
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
              {data.stores.lanorth.map((e) => (
                <div>{e.location}</div>
              ))}
              <h3>La South</h3>
              {data.stores.lasouth.map((e) => (
                <div>{e.location}</div>
              ))}
              <h3>San Diego</h3>
              {data.stores.sandiego.map((e) => (
                <div>{e.location}</div>
              ))}
            </div>
            <div className='gmaps-container'>
              <GMaps item='glass' />
            </div>
          </div>
        </div>
        <div className='section contact'>
          <div className='content'>
            <h2>Still have a question?</h2>
            <div>Call us at (877) 448 - 7711</div>
            or
            <div>Email us at customerfeedback@myhitmobile.com</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;


