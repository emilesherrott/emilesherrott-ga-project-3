import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './components/common/Home'
// import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Map from './components/common/Map'
import Maptwo from './components/common/Maptwo'


const App = () => {
  return (
    <Router>
      {/* <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch> */}

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

