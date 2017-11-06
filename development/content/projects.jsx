import React from 'react';
import Project from './project';

class ProjectsContent extends React.Component {

  render(){
    return (
      <div className="projectscontent">
        <div className="inner-content">
          <h1>A small sample of what we can do for you </h1>
            <div className="projects-row">
            <div className="project">
              <Project content={<img src="assets/Cloud Craze photo.jpg"/>} imgthumb="assets/CloudCrazethumb.jpg"/>
                <h3>Headshots</h3>
            </div>
            <div className="project">
              <Project content={<img src="assets/event_photography.jpg"/>} imgthumb="assets/event_photography_thumb.jpg"/>
                <h3>Event Photography</h3>
            </div>
            <div className="project">
              <Project content={<img src="assets/Adidas.jpg"/>} imgthumb="assets/Adidasthumb.jpg"/>
                <h3>Headshots</h3>
            </div>
          </div>
            <div className="projects-row">
            <div className="project">
              <Project
                content={
                    <iframe src="https://player.vimeo.com/video/241444653"
                      width="640px"
                      height="360px"
                      frameBorder="0"
                      webkitAllowFullScreen
                      mozAllowFullScreen
                      allowFullScreen
                      >
                    </iframe>
                    }/>
              <h3>Customer Testimonial</h3>
            </div>
            <div className="project">
              <Project
                content={
              <iframe src="https://player.vimeo.com/video/241450117"
                width="640px"
                height="360px"
                frameBorder="0"
                webkitAllowFullScreen
                mozAllowFullScreen
                allowFullScreen
                >
              </iframe>
              }/>
               <h3>Event Videography</h3>
            </div>
            <div className="project">
              <Project
                content={
                    <iframe src="https://player.vimeo.com/video/241445884"
                      width="640px"
                      height="360px"
                      frameBorder="0"
                      webkitAllowFullScreen
                      mozAllowFullScreen
                      allowFullScreen
                      >
                    </iframe>
                    }/>
                <h3>Customer Testimonial</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsContent;
