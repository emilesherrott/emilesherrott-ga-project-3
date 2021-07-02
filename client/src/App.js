import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD

import Home from './components/common/Home.js'
import Nav from './components/common/Nav.js'
import Footer from './components/common/Footer.js'

import Ideas from './components/Ideas.js'
=======
import Home from './components/common/Home'
// import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Map from './components/common/Map'
import Maptwo from './components/common/Maptwo'


>>>>>>> e5242ff385268e6923d220f9de5a5f4769f4e628

const App = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/ideas" component={Ideas} />
      </Switch>

      
      <Switch>
        <Route excact path='/map' component={Map}/>
      </Switch>
      <Switch>
        <Route excact path='/maptwo' component={Maptwo}/>
      </Switch>
      
      {/* <Switch>
        <Route excact path='/' component={Footer}/>
      </Switch> */}

      <Footer/>
      
    </Router>
  )
}
export default App

