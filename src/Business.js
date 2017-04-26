import React from 'react'

function Business(props) {
  return (
    <div>
      <header className='careers'>
        <h1 className='header'>Business Solutions</h1>
        <p>Everything you need to help your business succeed.</p>
      </header>
      <div className='section intro'>
        <div className='content'>
          <div className='left'>
            <h2>Get started now</h2>
            Call a business representative at <div>(562) 397-1477</div>
            or Email us at business.sales@myhitmobile.com
          </div>
            or
          <div className='right'>
            Fill out a form
            <input type='text' />
          </div>
        </div>
      </div>
      <div className='section testimonial'>
        <div className='content'>

        </div>
      </div>
      <div className='section job'>
        <div className='content'>

        </div>
      </div>
    </div>
  );
}

export default Business;