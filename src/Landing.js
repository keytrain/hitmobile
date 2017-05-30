import React from 'react';
import FontAwesome from 'react-fontawesome';
import Sizzler from './Sizzler';

// import { Link } from 'react-router-dom';
// import Scrollchor from 'react-scrollchor';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 0,
      quoteMax: window.data.content.testimonial.customer.length,
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
    const img1 = {
      background: 'no-repeat center url("./img/pitch/1.JPG")',
      backgroundPosition: '40% 28%'
    }
    const img2 = {
      background: 'no-repeat center url("./img/pitch/2.JPG")',
      backgroundPosition: '40% 24%'
    }
    const img3 = {
      background: 'no-repeat center url("./img/pitch/3.JPG")',
      backgroundPosition: '50% 24%'
    }
    let data = window.data;

    return (
      <div>
        <Sizzler />
        <header>
          <div>
            <div className='sizzler'>
              <div className='wh'><h1 className='wh-work'>WORK</h1><h1 className='wh-hard'>HARD</h1></div>
              <div className='ph'><h1 className='ph-play'>PLAY</h1><h1 className='ph-hard'>HARD</h1></div>
            </div>
          </div>
        </header>
        <div className='section intro'>
          <div className='content'>
            <div className='support'>
              <div className='support-img' style={img3}></div>
              <div className='support-text'>
                <h3>{data.content.landing.one.title}</h3>
                <p>{data.content.landing.one.text}</p>
              </div>
            </div>
            
          <div className='support'>
              <div className='support-img' style={img1}></div>
              <div className='support-text'>
                <h3>{data.content.landing.two.title}</h3>
                <p>{data.content.landing.two.text}</p>
              </div>
            </div>

            <div className='support last'>
              <div className='support-img' style={img2}></div>
              <div className='support-text'>
                <h3>{data.content.landing.three.title}</h3>
                <p>{data.content.landing.three.text}</p>
              </div>
            </div>

            <div><h2 className='hashtagwws'>#wewontstop</h2></div>
          </div>
        </div>
        <div className='section landing-job'>
          <div className='content'>
            <div className='pitch'>
              <h1 className='jobtagline'>BE BOLD, BE YOU,<br />BE <span>MAGENTA</span></h1>
              <h2><em>{data.content.landing.job.title}</em></h2>
              <p>{data.content.landing.job.text}</p>
            </div>
            {data.content.benefits.map((e, index) =>
              <div className='landing-icons' key={index}>
                <FontAwesome name={e.icon} size='2x' />
              </div>
            )}
            <div className='landing-job-button'><a className='button' href='./#/jobs'>FIND OPPORTUNITIES</a></div>
          </div>
        </div>
        <div className='section testimonial'>
          <div className='content'>
            <div className='pitch'>
              <h2>LET'S HEAR IT FROM THE CUSTOMERS</h2>
            </div>
            <div className='quote'>
              <p>&ldquo;{data.content.testimonial.customer[this.state.quote].text}&rdquo;</p>
              <div className='quote-arrow'>
                <FontAwesome name='angle-left' className='quote-icon-arrow' data-dir='left' size='2x' onClick={this.handleQuote} />
                <FontAwesome name='angle-right' className='quote-icon-arrow' data-dir='right' size='2x' onClick={this.handleQuote} />
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Landing;


