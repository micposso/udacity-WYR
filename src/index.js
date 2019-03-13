import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'

function reducer (state='', action) {
  if (action.type === 'changeState') {
    return action.payload.newState
  }
  return 'State from Reducer is working'
}

const store = createStore(reducer)

console.log(store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState: 'State from action is working'
  }
}

store.dispatch(action)

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

