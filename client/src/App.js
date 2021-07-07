import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home.js'
import Nav from './components/common/Nav.js'
import Footer from './components/common/Footer.js'

import Ideas from './components/Ideas.js'

import Map from './components/common/Map.js'
import Maptwo from './components/common/Maptwo.js'
import Events from './components/common/EventSection/Events.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register'
import Filter from './components/common/Filter.js'


const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/ideas" component={Ideas} />
        <Route exact path='/events' component={Events} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      
      <Switch>
        <Route excact path='/map' component={Map}/>
      </Switch>
      <Switch>
        <Route excact path='/maptwo' component={Maptwo}/>
      </Switch>

      <Switch>
        <Route excact path='/filter' component={Filter}/>
      </Switch>
      
      {/* <Switch>
        <Route excact path='/' component={Footer}/>
      </Switch> */}

      <Footer/>
      
    </Router>
  )
}
export default App

