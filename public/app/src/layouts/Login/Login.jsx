import React from "react";
import PropTypes from "prop-types";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";
import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


class App extends React.Component {
  state = {};

  getRoute() {
    return this.props.location.pathname !== "/maps";
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
        <div className="hero is-fullheight form-wrapper">
            <div className="hero-body">
                <div className="container is-fullheight is-narrow column">
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <Input class="" type="email" placeholder="Email"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
            <div class="field">
            <p class="control has-icons-left">
                <Input class="" type="password" placeholder="Password"/>
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </p>
            </div>
                <div class="field">
                    <p class="control">
                        <Button class="button is-success">
                            Login
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default withStyles(appStyle)(App);
