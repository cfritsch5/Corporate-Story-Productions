import React from 'react';
import HeaderContainer from './headercontainer';
import ContentContainer from './ContentContainer';

class NavContainer extends React.Component {
  constructor(props){
    super(props);

    const defaultpages = [{title:{rendered: "home"}, id:1}];

    this.state = {
      pages: defaultpages,
      activate: defaultpages[0]
    };

    this.fetchpages();
    this.pagesli = this.pagesli.bind(this);
  }

  fetchpages(){
  // http://localhost:8888/wp-json/wp/v2/pages
  return fetch('http://localhost:8888/wp-json/wp/v2/pages', {
  method:'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify()
}).then((r)=> {
  // console.log("r",r);
  // let response = r.json();
  // console.log("response",response.resolve);
  // this.setState({pages: response});
  // return response;
  return r.json();
}).then((response)=>{
  this.setState({pages: response, activate: response[0]});
});
  }

  updatePage(page){
    this.setState({activate: page});
  }

  pagesli(){
    let links = [];
    this.state.pages.forEach(page=>{
      let title = page.title.rendered;
      let id = page.id;

      links.push(
        <li key={id}>
          <button onClick={()=>this.updatePage(title)}>{title}</button>
        </li>
      );
    });
    return links;
  }


  render(){
    return (
      <div className="navcontainer">
        <HeaderContainer page={this.state.page}/>
          <ul className="nav">
            {this.pagesli()}
          </ul>
        <ContentContainer page={this.state.page}/>
      </div>
    );
  }
}

export default NavContainer;
