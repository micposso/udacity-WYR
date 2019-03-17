import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import reducer from './reducers'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer)

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));

