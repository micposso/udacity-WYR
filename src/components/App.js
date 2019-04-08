import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container } from "semantic-ui-react";
import { handleInitialData } from "../actions/shared";
import "../css/app.css";
import LogIn from "./LogInComponent";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Container textAlign="center" verticalalign="middle">
        <Grid>
          <Grid columns={4}>
            <LogIn />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect()(App);
