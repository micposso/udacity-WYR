import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Container } from "semantic-ui-react";
import { handleInitialData } from "../actions/shared";
import "../css/app.css";
import Navigation from "./NavigationComponent";
import LogIn from "./LogInComponent";
import DashBoard from "./DashBoardComponent";
import Questions from './QuestionsComponent'
import PollResults from './PollResultsComponent'
import LeaderBoard from './LeaderBoardComponent'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Container textAlign="center" verticalAlign="middle">
        <Navigation />
        <Grid>
          <Grid columns={4}>
            <LeaderBoard />
            <PollResults />
            <Questions />
            <DashBoard />
            <LogIn />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect()(App);
