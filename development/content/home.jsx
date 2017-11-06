import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class HomeContent extends React.Component {

  render(){
    return (
      <div className="homecontent">
        <div className="inner-content">
          <h1>Corporate Story Productions wants to tell your story</h1>
          <div className="center-content">
            <p>
              Wether it is customer testimonials, headshots, or training videos it’s
              important to have a professional crafting your
              media. We know that conferences and conventions are an important
              time in your business CSP will be there to make sure you make
              the most of it. We specialize in the capturing the amazing
              moments at your booth, convention, workshop, breakout sessions,
              and celebrations.</p>
            </div>
          <div className="homelinks">
            <Link className="homelinks-wrap" to="/about">
              <div className="homelink-inner wrap-tagline">
                <img src="assets/Robinthumb.jpeg"/>
                <h3 className="tagline">About</h3>
              </div>
            </Link>
            <Link className="homelinks-wrap"  to="/projects">
              <div className="homelink-inner wrap-tagline">
                <img src="assets/amphitheater_thumb.jpg"/>
                <h3 className="tagline">Projects</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
