import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './root';
import NavContainer from './navcontainer';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  ReactDOM.render(<NavContainer/>, root);

});
