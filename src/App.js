import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Router, Route, Link, Switch } from 'react-router-dom'

import STORE from './core/store'
import Header from './header'
import Home from './home'
import Detail from './detail'
import Menu from './menu'
import Shopcart from './shopcart'
import Category from './category'

const history = createHistory()

class App extends Component {
  render() {
    return (
      <Provider store={STORE}>
        <Router history={history}>
          <div>
            <Header />
            <Menu />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/detail/:id' component={Detail} />
              <Route exact path='/category/:id' component={Category} />
              <Route exact path='/shopcart' component={Category} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
