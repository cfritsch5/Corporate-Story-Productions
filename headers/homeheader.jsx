import React from 'react';

const HomeHeader = ()=>(
      <div className="header">
         <video id="home-video" loop="true" autoPlay="true">
            <source src="assets/Landing Page half mp4 copy.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <h1 className="tagline">We Capture the Moment</h1>
        </div>
);

export default HomeHeader;
