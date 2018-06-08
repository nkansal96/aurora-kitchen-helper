/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => (
  <div className="container">
    <Helmet
      titleTemplate="%s - Kitchen Helper App"
      defaultTitle="Kitchen Helper App"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
