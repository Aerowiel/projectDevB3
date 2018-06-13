import React from "react";
import PropTypes from "prop-types";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";
import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import SocketIo from 'socket.io-client';

const socket = SocketIo('http://localhost:3000')

socket.on('test',function(){
    console.log("super genia")
});
class App extends React.Component {
  checkUser(){
    // 
    console.log("trigger")
    socket.emit('test2', "ping")
  }
  state = {};

  getRoute() {
    return this.props.location.pathname !== "/maps";
  }

  render() {
    const { classNamees, ...rest } = this.props;
    return (
            <div className="hero is-fullheight form-wrapper">
                <div className="hero-body">
                    <div className="container is-fullheight is-narrow column">
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <Input type="email" placeholder="Email"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <Input type="password" placeholder="Password"/>
                            </p>
                        </div>
                        <div className="field">
                                <p className="control">
                                    <Button className="button is-success" onClick={this.checkUser.bind(this)}>
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
