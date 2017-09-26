import React from 'react';

class HeaderContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home'
    };
  }

  componentWillReceiveProps(nextprops){
    this.setState({page: nextprops.page});
  }


  render(){
    return(
      <div className="header">
        <h1>Corporate Story Productions</h1>
        <h4>display {this.state.page} header</h4>
      </div>
    );
  }
}

export default HeaderContainer;
