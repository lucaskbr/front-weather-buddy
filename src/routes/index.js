import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WeatherSearchPage from '../pages/WeatherSearchPage';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={WeatherSearchPage} />
      </Switch>
    </Router>
  );
}

export default Routes;