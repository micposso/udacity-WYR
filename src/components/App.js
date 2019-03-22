import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import '../css/app.css'
import LogIn from './LogInComponent'
import DashBoard from './DashBoardComponent'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <LogIn />
          <DashBoard />
      </Grid>
    );
  }
}

export default connect()(App)
