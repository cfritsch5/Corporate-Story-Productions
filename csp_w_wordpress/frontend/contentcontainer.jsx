import React from 'react';
import HomeContent from './content/home';
import AboutContent from './content/about';
import ContactContent from './content/contact';
import ProjectsContent from './content/projects';

class ContentContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home'
    };

    this.displayContent = this.displayContent.bind(this);
   }

  componentWillReceiveProps(nextprops){
    this.setState({page: nextprops.page});
  }

  displayContent(){
    switch(this.state.page){
      case 'home':
      return <HomeContent/>;
      case 'about':
      return <AboutContent/>;
      case 'contact':
      return <ContactContent/>;
      case 'projects':
      return <ProjectsContent/>;
      default:
      return <HomeContent/>;
    }
  }

  render(){
    let content = this.displayContent();
    // console.log(content);
    return(
      <div className="content">
        {content}
      </div>
    );
  }
}

export default ContentContainer;
