import React from 'react';

function About(props) {
  let data = window.data;

  return (
    <div>
      <div className='section intro-about'>
        <div className='content'>
          <div className='about-heading'><h1>ABOUT US</h1></div>
            <div className='about-support'>
              <div className='about-support-text'>
                <h3>{data.content.about.one.title}</h3>
                <p>{data.content.about.one.text}</p>
              </div>
            </div>
            
          <div className='about-support'>
              <div className='about-support-text'>
                <h3>{data.content.about.two.title}</h3>
                <p>{data.content.about.two.text}</p>
              </div>
            </div>

            <div className='about-support last'>
              <div className='about-support-text'>
                <h3>{data.content.about.three.title}</h3>
                <ul>
                  <p>
                  {data.content.about.three.text.map((e, index) => 
                    <li key={index}>{e}</li>
                  )}
                  </p>
                </ul>
              </div>
            </div>         
        </div>
      </div>
      <div className='section meet'>
        <div className='content'>
          <div className='about-heading'><h1>MEET THE TEAM</h1></div>
          <div className='grid'>
            {data.content.team.founders.map((e, index) =>
              <div className='card-team' key={index}>
                <img src={e.icon} alt='icon' />
                {/*<img src={e.icon2} alt='icon' />*/}
                <h3>{e.name}</h3>
                <p>{e.role}</p>
              </div>
            )}
          </div>
          <div className='grid'>
           {data.content.team.key.map((e, index) =>
              <div className='card-team-key' key={index}>
                <img src={e.icon} alt='icon' />
                {/*<img src={e.icon2} alt='icon' />*/}
                <h3>{e.name}</h3>
                <p>{e.role}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;