import React, { Component } from 'react';
import Routes from 'routes';
import 'App.css';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import rootReducer from 'reducers';

// Store
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
