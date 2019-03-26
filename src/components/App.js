import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import "../css/app.css";
import LogIn from "./LogInComponent";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="container" textAlign="center" verticalAlign="middle">
        <div class="ui grid">
          <div class="four wide column">
            <LogIn />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
