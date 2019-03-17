import React, { Component } from 'react';
import LogIn from './LogInComponent'
import '../App.css'
import { Container } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <Container>
        <header className="App-header">
          <LogIn />
        </header>
      </Container>
    );
  }
}

export default App;
