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

const updateFromLocalStorage = (defaultState) => {
  const localState = localStorage.getItem('state');
  return localState ? JSON.parse(localState) : defaultState;
};

//Intial storedata
const initialStore = updateFromLocalStorage({
  error: '',
  info: '',
  isLoading: false,
});

// Store
const store = createStore(rootReducer, initialStore, applyMiddleware(sagaMiddleware));
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
