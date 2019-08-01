import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PetPage from './pages/PetPage/PetPage';
import PetsPage from './pages/PetsPage/PetsPage';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/pets/:id" component={PetPage} />
          <Route path="/pets" component={PetsPage} />

          <Redirect push to="/pets" />
        </Switch>
      </div>
    );
  }
}
