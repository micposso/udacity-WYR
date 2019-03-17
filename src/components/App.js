import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import LogIn from './LogInComponent'


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
