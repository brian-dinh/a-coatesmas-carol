import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from '@styles/globalStyles';

import store from '@store';
import ScrollToTop from '@components/ScrollToTop';

import Header from '@components/Header';
import Story from '@components/Story';
import Start from '@components/Start';
import Player from '@components/Player';

import Footer from '@components/Footer';
import NotFound from '@components/NotFound';

class App extends Component {
  constructor() {
    super();
    this.crystalBall = String.fromCodePoint(0x1f52e);
  }
  render() {
    console.log(`Game by Elby.\nThanks for Playing! ${this.crystalBall}`);

    return (
      <>
        <GlobalStyles />
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Redirect to="/story" />
              </Route>
              <Route
                exact
                path="/story"
                component={(props) => <Story {...props} />}
              />
              <Route
                exact
                path="/start"
                component={(props) => <Start {...props} />}
              />
              <Route exact path="/player/:player" component={Player} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
