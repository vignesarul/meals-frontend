import React, { Component } from 'react';
import Routes from 'routes';
import 'App.css';
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import rootReducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'redux-sagas';

const sagaMiddleware = createSagaMiddleware();
// Store
const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
