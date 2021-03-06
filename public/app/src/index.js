import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/css/material-dashboard-react.css?v=1.2.0";

import indexRoutes from "routes/index.jsx";
import 'bulma/css/bulma.css';
import Dashboard from "./layouts/Dashboard/Dashboard";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
      <Route component={Dashboard}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
