import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'pages/home/index';
import About from 'pages/about/index';

export default function MainRouter(props) {

  return (
      <div>             
          <Switch>
            <Route exact path="/" component={Home} />                        
            <Route exact path="/about" component={About} />                        
            <Route exact path="/home" component={Home} />                        
          </Switch>               
      </div>
  );
}