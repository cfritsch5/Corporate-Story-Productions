import React from 'react';

export class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };

    // this.content = this.content.bind(this);
    this.thumb = this.thumb.bind(this);
  }

  // content(){
  //   if(this.props.content){
  //     return  this.props.content;
  //   }
  // }

  thumb(){
    if(this.props.imgthumb){
      return   <img src={this.props.imgthumb}/>;
      } else {
        return (
          <div className="lightbox-thumb">
            {this.props.content}
          </div>
        );
      }
  }

  openPopupbox() {
    const content = (
      <div className="lightbox">
        <a className="lightbox-exit" onClick={()=>this.setState({open: false})}>
          <img src="assets/close.png"/>
        </a>
        {this.props.content}
      </div>
    );
    if(this.state.open){
      return content;
    }
  }


  render() {
    return (
      <div className="each-project">
        <a className="open-lightbox" onClick={()=>this.setState({open: true})}>
        {this.thumb()}
      </a>
        {this.openPopupbox()}
      </div>
    );
  }
}

export default Project;
