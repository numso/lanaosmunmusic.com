/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'

import Main from './main'
import About from './pages/about'
import Contact from './pages/contact'
import Faq from './pages/faq'
import Home from './pages/home'
import List from './pages/list'
import News from './pages/news'
import Song from './pages/song'

import './index.styl'

const el = document.getElementById('app')
ReactDOM.render((
  <Router history={createHashHistory()}>
    <Route component={Main}>
      <Route path="/" component={Home}/>
      <Route path="/about-me" component={About}/>
      <Route path="/contact-me" component={Contact}/>
      <Route path="/faq" component={Faq}/>
      <Route path="/songs" component={List}/>
      <Route path="/whats-new" component={News}/>
      <Route path="/song/:id" component={Song}/>
    </Route>
  </Router>
), el)
