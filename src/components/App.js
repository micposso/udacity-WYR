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
      <div className="ui middle aligned center aligned grid">
        <div className="column">
            <LogIn />
        </div>
      </div>
    );
  }
}

export default connect()(App);
