import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage'; // eslint-disable-line import/no-named-as-default
import AppContainer from './components/organisms/AppContainer'; // eslint-disable-line import/no-named-as-default

export default class App extends React.PureComponent {
  routing = () => (
    <Switch>
      <Route path="/login" component={ LoginPage } />
      <Route path="/" component={ AppContainer } />
    </Switch>
  );
  render() {
    return (
      <div>
        <Helmet>
          <title>React, Redux, Epics with Neutrino Starter Kit</title>
          <meta name="description" content="React Neutrino Kit" />
        </Helmet>
        { this.routing() }
      </div>
    );
  }
}
