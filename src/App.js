import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Login = lazy (()=> import ('./components/Login/Login'));
const Home = lazy (()=> import ('./components/Home/Home'))

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default App;
