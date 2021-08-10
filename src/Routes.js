import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Home from "components/pages/Home";
import Login from "components/pages/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
