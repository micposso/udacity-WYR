import React, { Component } from 'react';
import LogIn from './LogInComponent'
import '../App.css'
import { Grid } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <LogIn />
      </Grid>
    );
  }
}

export default App;
