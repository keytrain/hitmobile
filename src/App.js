import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, NavLink, Link, Route } from 'react-router-dom';
import Careers from './Careers';
import Business from './Business';
import Landing from './Landing';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    };

    this.handleLang = this.handleLang.bind(this);
  }

  handleLang() {
    this.setState((prevState) => {
      prevState.lang = (prevState.lang === 'en' ? 'es' : 'en');
      return prevState;
    });
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <div className='wrapper'>
            <nav>
              <Link to='/' className='logo'><img src='http://myhitmobile.com/images/img_logo.jpg' alt='logo' /></Link>
              <div className='nav-links'>
                <a href='/#find'>Stores</a>
                <NavLink to='/careers' activeClassName='nav-link-active'>Careers</NavLink>
                <NavLink to='/business' activeClassName='nav-link-active'>Business</NavLink>
                <span className='vertical-separator'></span>
                <a href='#' onClick={this.handleLang}>
                  {this.state.lang === 'en' ? 'Español': 'English'}
                </a>
              </div>
            </nav>
            <Switch>
              <Route exact path='/' component={() => (<Landing lang={this.state.lang} />)} />
              <Route path='/careers' component={() => (<Careers lang={this.state.lang} />)} />
              <Route path='/business' component={() => (<Business lang={this.state.lang} />)} />
            </Switch>

            <div className='section'>
              <footer className='content'>
                <div className='footer-col footer-about'>
                  <img className='footer-logo' src='http://myhitmobile.com/images/img_logo.jpg' alt='logo' />
                  <p>HITmobile is a company that is about bridging Latino consumers and the wireless world with amazing customer service.</p>
                </div>
                <div className='footer-col footer-contact'>
                  <h4>Contact</h4>
                  <FontAwesome className='' fixedWidth name='phone' /> (877) 448 - 7711<br />
                  <FontAwesome className='' fixedWidth name='fax' /> (877) 448 - 7711<br />
                  <FontAwesome className='' fixedWidth name='envelope-o' /> <a href='emailto:customerfeedback@myhitmobile.com'>customerfeedback@myhitmobile.com</a>
                  <div className='address'>
                    <div className='add'>
                    <strong>HIT Mobile, Inc</strong><br />
                    3200 Park Center Drive<br />
                    Suite 200<br />
                    Costa Mesa, CA 92626
                    </div>
                    <div className='phone'>
                      <a href='http://www.facebook.com/pages/HIT-Mobile/131572693545505' ><FontAwesome className='socialmediaicon' name='facebook' /></a>
                      <a href='https://twitter.com/myhitmobile' ><FontAwesome className='socialmediaicon' name='twitter' /></a>
                      <a href='https://www.instagram.com/HIT_MOBILE/' ><FontAwesome className='socialmediaicon' name='instagram' /></a>
                      <a href='https://www.linkedin.com/company-beta/1726566/?pathWildcard=1726566' ><FontAwesome className='socialmediaicon' name='linkedin' /></a>
                    </div>
                  </div>
                </div>
                <hr className='footer' />
                <div className='footer-foot'>
                  <small>&#9400; 2017 HITmobile Inc. All rights reserved.</small>
                  <small className='footer-links'><a href='/#find'>Stores</a> - <a href='/careers'>Careers</a> - <a href='/business'>Business</a></small>
                </div>
              </footer>
            </div>

          </div>
        </div>
      </Router>
    )
  }
  
}

export default App;


