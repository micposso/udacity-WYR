import React, { Component } from 'react';
import LogIn from './LogInComponent'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LogIn />
        </header>
      </div>
    );
  }
}

export default App;
