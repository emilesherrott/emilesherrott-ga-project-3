import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import Nav from './components/common/Nav.js'
import Footer from './components/common/Footer.js'

import Ideas from './components/Ideas.js'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/ideas" component={Ideas} />
      </Switch>
      <Footer />
    </Router>
  )
}
export default App
