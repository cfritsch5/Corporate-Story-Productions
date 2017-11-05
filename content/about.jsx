import React from 'react';

class AboutContent extends React.Component {

  render(){
    return (
      <div className="aboutcontent">
        <div className="inner-content">
          <h1>What we do</h1>
          <div className="center-content">
            <p>We are a San Francisco based video production company ready
              to manage your corporate video needs. We have been helping
              corporations tell their stories for over 10 years. We use top
              of the line equipment and offer you 4k video output upon request.
            </p>
            <ul>
              <li>Event videography</li>
              <li>Seminar capture</li>
              <li>Customer testimonials</li>
              <li>Booth video</li>
              <li>Editing</li>
            </ul>
            <p>Not only do we capture the moment but we edit the footage into
              impactful segments for your staff, clients, or archives. Don’t
              let the moment pass you by, make sure you hire professionals to
              capture it so you can make the most of it in the future.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
