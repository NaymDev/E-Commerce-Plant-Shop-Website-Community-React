import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import FinalDesign from './views/final-design'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={FinalDesign} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
