import React from 'react';
import Router from './Router'
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);