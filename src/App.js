import React, { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import { ProtectedRoute } from './guard/protected.route';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

const App = () => {



  return (
    <Fragment>
      <Router>
        {/* menu */}
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute
            exact
            path="/"
            component={Home}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
