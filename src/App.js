import React, { Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

const App = () => {



  return (
    <Fragment>
      <Router>
        {/* menu */}
        <Route path="/login" exact component={Login} />
        <Route exact path="/home" component={Home} />
      </Router>
    </Fragment>
  )
}

export default App;
