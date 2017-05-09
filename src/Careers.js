import React from 'react'
import FontAwesome from 'react-fontawesome'


function Careers(props) {
  return (
    <div>
      <header className='careers'>
        <h1 className='header'>HITMobile</h1>
      </header>
      <div className='section intro'>
        <div className='content'>
          <h2 className='center'>Our Mission</h2>
          <p className='center-text'>HIT Mobile was created in recognition of the vast opportunity to cater to the underserved Latino cell phone market. Understanding that with special focus on meeting unique customer needs, we will provide an excellent mobile experience and a long lasting relationship with the community. While our competitors simply service all of their customers the same, we are a part of the community and understand how to meet the needs of the fastest growing customer base in the United States. HIT Mobile will be the bridge between the Latino consumers and the wireless world. We’ve found a great partner in T-Mobile to help us achieve this.</p><br />
          <p className='center-text'>It’s not just a phone, it’s a connection. A connection to everything you care about, your family, your friends, your job, your entertainment, your information, your community. Connecting our communities is the foundation of our business.</p>
          <br /><br />
          <h2 className='center'>Meet the Team</h2>
          <div className='grid'>
            {window.data.content.team[props.lang].map((e, index) =>
              <div className='block card-team' key={index}>
                <img src={e.icon} alt='icon' />
                <h4>{e.name}</h4>
                <p>{e.role}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='section job'>
        <div className='content'>

          <h2 className='center'>Come Join Us</h2>
          <p className='center-text'>We’ll support our community members by offering jobs with competitive pay and benefits, flexible schedules to accommodate education, and promoting from within the company.</p>
          <br />
          <div className='grid'>
            {window.data.content.benefits[props.lang].map((e, index) =>
              <div className='block card-benefit' key={index}>
                <FontAwesome name={e.icon} size='3x' />
                <p>{e.text}</p>
              </div>
            )}
          </div>
          <br />
          {/*employee testimonial*/}
          <br /><br />
          {window.data.content.jobs[props.lang].map((e, index) =>
            <div className='card-jobs' key={index}>
              <div className='card-jobs-text'>
                <h3>{e.text}</h3>
              </div>
              <div className='card-jobs-action'>
                <a href='' className='button'>More info</a>
              </div>
            </div>
          )}
          <br />
          <div className='apply'>Apply to <a href='emailto:careers@myhitmobile.com'>careers@myhitmobile.com</a></div>
        </div>
      </div>
      
    </div>
  );
}

export default Careers;