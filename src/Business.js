import React from 'react'

function Business(props) {
  window.scrollTo(0,0);
  return (
    <div>
      <header className='top'>
        <h1 className='header'>Business Solutions</h1>
        <h3>Everything you need to help your business succeed.</h3>
      </header>
      <div className='section business'>
          <div className='left'>
            <h2>Get Started</h2>
            <p>Call a business representative at (562) 397-1477</p>
            <p>or</p>
            <p>Email us at <a href='emailto:business.sales@myhitmobile.com'>business.sales@myhitmobile.com</a></p>
          </div>
          <div className='or'><h2>OR</h2></div>
          <div className='right'>
            <h2 className='center'>Fill a Form</h2>
            <form>
              <div className='input'><label>First Name: </label><input type='text' /></div>
              <div className='input'><label>Last Name: </label><input type='text' /></div><br />
              <div className='input'><label>Address: </label><input type='text' /></div><br />
              <div className='input'><label>Zip: </label><input type='text' /></div>
              <div className='input'><label>City: </label><input type='text' /></div>
              <div className='input'><label>State: </label><input type='text' /></div><br />
              <div className='input'><label>Phone: </label><input type='text' /></div>
              <div className='input'><label>E-mail: </label><input type='text' /></div><br />
              <div className='comment'><label>Comments:</label> <textarea /></div><br />
              <button>Connect</button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default Business;