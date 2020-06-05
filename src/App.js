import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './Signup';
import Auth from './auth';
import Dashboard from './Dashboard';
import Waitlist from './Waitlist';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Signup" component={Signup} />
        <Route path="/Waitlist" component={Waitlist} />
        <Route path='/Dashboard' component={Auth(Dashboard)} />
      </Switch>
    </Router>
  )
}

export default App;