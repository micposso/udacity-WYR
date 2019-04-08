import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container } from "semantic-ui-react";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "../css/app.css";
import LogIn from "./LogInComponent";
import LeaderBoard from "./LeaderBoardComponent";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Container textAlign="center" verticalalign="middle">
        <Grid>
          <Grid columns={4}>
          <Router>
          <Switch>
            <Route path='/' exact component={LogIn} />
            <Route path='/leaderBoard' exact component={LeaderBoard} />
          </Switch>
          </Router>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect()(App);
