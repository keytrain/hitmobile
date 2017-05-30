import React, { Component } from 'react';
import { HashRouter as Router, Switch, NavLink, Link, Route } from 'react-router-dom';
import Jobs from './Jobs';
import About from './About';
import Locations from './Locations';
import Landing from './Landing';
import FontAwesome from 'react-fontawesome';
import logo from './logo.png';
import tlogo from './tlogo.png';
// import Scrollchor from 'react-scrollchor';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
            <nav>
              <div className='nav-wrap'>
              <div className='nav-logo'>
                <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
                <Link to='/'><img className='logo' src={tlogo} alt='tlogo' /></Link>
              </div>
              <div className='nav-links'>
                <NavLink exact to='/' activeClassName='nav-link-active'>HOME</NavLink>/
                <NavLink to='/about' activeClassName='nav-link-active'>ABOUT US</NavLink>/
                <NavLink to='/jobs' activeClassName='nav-link-active'>JOBS</NavLink>/
                <NavLink to='/locations' activeClassName='nav-link-active'>LOCATIONS</NavLink>
                <div className='nav-social'>
                  <a href='http://www.facebook.com/pages/HIT-Mobile/131572693545505' ><FontAwesome className='socialmediaicon' name='facebook' /></a>
                  <a href='https://twitter.com/myhitmobile' ><FontAwesome className='socialmediaicon' name='twitter' /></a>
                  <a href='https://www.instagram.com/HIT_MOBILE/' ><FontAwesome className='socialmediaicon' name='instagram' /></a>
                  <a href='https://www.linkedin.com/company-beta/1726566/?pathWildcard=1726566' ><FontAwesome className='socialmediaicon' name='linkedin' /></a>
                </div>
              </div>
              </div>
            </nav>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/about' component={About} />
              <Route path='/jobs' component={Jobs} />
              <Route path='/locations' component={Locations} />
            </Switch>

            <div className='section'>
              <footer className='content'>
                <div className='footer-left'>
                  <img className='footer-logo' src={logo} alt='logo' />
                  <div className='address'>
                    3200 Park Center Drive<br />
                    Suite 200<br />
                    Costa Mesa, CA 92626
                  </div>
                </div>
                <div className='footer-right'>
                  <div className='social'>
                    <a href='http://www.facebook.com/pages/HIT-Mobile/131572693545505' ><FontAwesome className='socialmediaicon' name='facebook' /></a>
                    <a href='https://twitter.com/myhitmobile' ><FontAwesome className='socialmediaicon' name='twitter' /></a>
                    <a href='https://www.instagram.com/HIT_MOBILE/' ><FontAwesome className='socialmediaicon' name='instagram' /></a>
                    <a href='https://www.linkedin.com/company-beta/1726566/?pathWildcard=1726566' ><FontAwesome className='socialmediaicon' name='linkedin' /></a>
                  </div>
                  <div className='footer-contact'>
                    <h3>Contact</h3>
                    <FontAwesome fixedWidth name='phone' /> 877.448.7711<br />
                    <FontAwesome fixedWidth name='fax' /> 714.448.7711<br />
                    <FontAwesome fixedWidth name='envelope-o' /> customerfeedback@myhitmobile.com
                  </div>
                </div>
                <div className='footer-foot'>
                  <small>&#9400; 2017 HITmobile Inc. All rights reserved.</small>
                </div>
              </footer>
            </div>

        </div>
      </Router>
    )
  }
  
}

export default App;


