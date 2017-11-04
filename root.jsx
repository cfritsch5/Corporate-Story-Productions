import React from 'react';
import NavContainer from './navcontainer';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const Root = () => (
  <BrowserRouter>
    <NavContainer/>
  </BrowserRouter>
);

export default Root;
