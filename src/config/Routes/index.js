import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Register,Login, Home } from '../../pages'

const Routes = () => {
  return (
    <Router>
      <Switch>

        <Route path="/masuk">
          <Login/>
        </Route>

        <Route path="/daftar">
          <Register/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </Router>
  )
}

export default Routes