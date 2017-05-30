import React from 'react';
import FontAwesome from 'react-fontawesome';


function Jobs(props) {
  window.scrollTo(0,0);
  return (
    <div>
      <div className='section jobs'>
        <div className='content'>
          <header>
            <div className='jobs-rally'><h1 className='jb-left'>BE</h1><div className='jb-right'><strong>BOLD<br /> YOU<br /> <span>MAGENTA</span></strong></div></div>
          </header>
        </div>
      </div>
      
      <div className='section banner'>
        <div className='content'>
          <h1>Join HIT Mobile</h1>
        </div>
      </div>

      <div className='section jobs'>
        <div className='content'>
      
          <div className='grid'>
            {window.data.content.benefits.map((e, index) =>
              <div className='block card-benefit' key={index}>
                <FontAwesome name={e.icon} size='3x' />
                <p>{e.text}</p>
              </div>
            )}
          </div>
      
        </div>
      </div>

      <div className='section apps'>
        <div className='content'>
          <div className='apply'><h2>apply @ <a href='emailto:careers@myhitmobile.com'>careers@myhitmobile.com</a></h2></div>
          <div className='positions'>
            {window.data.content.jobs.map((e, index) =>
              <div className='card-jobs' key={index}>
                <div className='card-jobs-text'>
                  <h2>{e.text}</h2>
                </div>
                <div className='card-jobs-action'>
                  <a href={e.link} className='button'>More info</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Jobs;