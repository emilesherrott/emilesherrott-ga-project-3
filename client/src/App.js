import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import Ideas from './components/Ideas'
import Map from './components/common/Map'
import Maptwo from './components/common/Maptwo'
import Events from './components/common/EventSection/Events'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

import WorkspacesNew from './components/common/Workspaces/WorkspacesNew'
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/workspaces/new' component={WorkspacesNew} />
        <Route path="/ideas" component={Ideas} />
        <Route exact path='/events' component={Events} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route excact path='/map' component={Map}/>
        <Route excact path='/maptwo' component={Maptwo}/>
      </Switch>
      <Footer/>
    </Router>
  )
}
export default App

