import React from 'react';
// import HeaderContainer from './headercontainer';
// import ContentContainer from './ContentContainer';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomeHeader from './headers/homeheader';
import AboutHeader from './headers/aboutheader';
import ProjectsHeader from './headers/projectsheader';
import ContactHeader from './headers/contactheader';
import HomeContent from './content/home';
import AboutContent from './content/about';
import ProjectsContent from './content/projects';
import ContactContent from './content/contact';

// class NavContainer extends React.Component {
const NavContainer = withRouter(({ location }) => (

  // render(){

    // return (
      <div className="navcontainer">
          <nav>
            <Link to="home">
              <img className="logo" src="assets/Corporate_Story_Productions.png"/>
            </Link>
            {/*<div className="hide-me">
              <a className="open-me">HIDE</a>*/}
            <div className="hide-me">
              <a className="open-me"><img src="assets/Hamburger_icon.png"/></a>
            <ul className="nav">
              <li><Link to="home">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </div>
          </nav>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames='fade'
              timeout={500}
              >
          <div className="nav-sticky-background"></div>
        </CSSTransition>
      </TransitionGroup>
            <TransitionGroup>
              <CSSTransition
                  key={location.key}
                  classNames='fade'
                  timeout={500}
                >
                 <Switch location={location}>
                  <Route exact path="/" location={{ pathname: '/' }} component={HomeHeader}/>
                  <Route exact path="/home" location={{ pathname: '/home' }} component={HomeHeader}/>
                  <Route exact path="/about"  location={{ pathname: '/about' }} component={AboutHeader}/>
                  <Route exact path="/projects" location={{ pathname: '/projects' }} component={ProjectsHeader}/>
                  <Route exact path="/contact" location={{ pathname: '/contact' }} component={ContactHeader}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          <Switch>
            <Route exact path="/" location={{ pathname: '/' }} component={HomeContent}/>
            <Route exact path="/home" location={{ pathname: '/home' }} component={HomeContent}/>
            <Route exact path="/about" location={{ pathname: '/about' }} component={AboutContent}/>
            <Route exact path="/projects" location={{ pathname: '/projects' }} component={ProjectsContent}/>
            <Route exact path="/contact" location={{ pathname: '/contact' }} component={ContactContent}/>
          </Switch>
          <div className="footer">
            <a href="mailto:corporatestoryproductions@gmail.com">
              <h4 className="footer-email">
                  Email CorporateStoryProductions@gmail.com
              </h4>
            </a>
              <h5> &copy; Corporate Story Productions</h5>
          </div>
      </div>
    ));
    // );
  // }
// }

export default NavContainer;
