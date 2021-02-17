import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WeatherSearchPage from 'pages/WeatherSearchPage';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WeatherSearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;